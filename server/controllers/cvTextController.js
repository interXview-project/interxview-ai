import {
  extractTextFromPDF,
  validateExtractedText,
  getPDFInfo,
} from "../services/pdfService.js";
import fs from "fs/promises";
import path from "path";

export const getCVText = async (req, res) => {
  const startTime = Date.now();
  let filePath = null;

  try {
    console.log("STEP 1: Request received");

    if (!req.file) {
      console.log("❌ NO FILE RECEIVED");
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
        error: "NO_FILE_UPLOADED",
      });
    }

    filePath = req.file.path;
    console.log("STEP 2: File saved:", filePath);

    // Get PDF info
    let pdfInfo;
    try {
      pdfInfo = await getPDFInfo(filePath);
      console.log("STEP 3: PDF info extracted");
    } catch {
      await cleanupFile(filePath);
      return res.status(400).json({
        success: false,
        message: "Failed to read PDF file information",
        error: "INVALID_PDF_FILE",
      });
    }

    // Extract text
    let extractionResult;
    try {
      console.log("STEP 4: Extracting PDF text...");
      extractionResult = await extractTextFromPDF(filePath);
      console.log("STEP 5: PDF text extracted successfully");
    } catch (pdfError) {
      await cleanupFile(filePath);

      return res.status(400).json({
        success: false,
        message: "Failed to extract text from PDF",
        error: "PDF_EXTRACTION_FAILED",
        details: pdfError.message,
      });
    }

    const { text: extractedText, metadata } = extractionResult;

    // Validate text exists
    const validation = validateExtractedText(extractedText);

    if (!validation.isValid) {
      console.log("❌ Text not valid");
      await cleanupFile(filePath);

      return res.status(400).json({
        success: false,
        message: "PDF does not contain sufficient readable text",
        error: "INSUFFICIENT_TEXT",
      });
    }

    // ======================================
    // 🔥 LOCAL CV VALIDATION (بدون AI)
    // ======================================
    console.log("STEP 6: Local CV validation...");

    const lower = extractedText.toLowerCase();

    const keywords = [
      "experience",
      "education",
      "skills",
      "projects",
      "summary",
      "objective",
      "curriculum vitae",
      "resume",
      "work history",
      "certifications",
    ];

    const hasEmail = /\S+@\S+\.\S+/.test(extractedText);
    const hasPhone = /\+?\d{7,15}/.test(extractedText);
    const matches = keywords.filter((k) => lower.includes(k));

    console.log("Matched keywords:", matches);
    console.log("Has Email:", hasEmail);
    console.log("Has Phone:", hasPhone);

    if (matches.length < 2 && !hasEmail && !hasPhone) {
      await cleanupFile(filePath);
      return res.status(400).json({
        success: false,
        message: "This document does not appear to be a CV",
        error: "NOT_A_CV_LOCAL",
      });
    }

    console.log("STEP 7: Document confirmed as CV ✔️");

    // ======================================================
    // 🎯 REAL CV SCORING SYSTEM
    // ======================================================
    console.log("STEP 8: Scoring CV...");

    let score = 0;
    let strengths = [];
    let weaknesses = [];
    let suggestions = [];

    const checks = {
      email: { ok: hasEmail, points: 10, label: "Email / Contact Info" },
      phone: { ok: hasPhone, points: 10, label: "Phone Number" },
      education: {
        ok: lower.includes("education"),
        points: 15,
        label: "Education Section",
      },
      experience: {
        ok: lower.includes("experience") || lower.includes("work history"),
        points: 20,
        label: "Experience Section",
      },
      skills: {
        ok: lower.includes("skills"),
        points: 15,
        label: "Skills Section",
      },
      projects: {
        ok: lower.includes("projects"),
        points: 10,
        label: "Projects Section",
      },
      summary: {
        ok:
          lower.includes("summary") ||
          lower.includes("profile") ||
          lower.includes("objective"),
        points: 10,
        label: "Profile / Summary",
      },
      certifications: {
        ok: lower.includes("certifications") || lower.includes("courses"),
        points: 10,
        label: "Certifications / Achievements",
      },
    };

    Object.values(checks).forEach((c) => {
      if (c.ok) {
        score += c.points;
        strengths.push(c.label);
      } else {
        weaknesses.push(c.label);
      }
    });

    if (score > 100) score = 100;

    if (!checks.summary.ok)
      suggestions.push("Add a professional summary at the beginning.");
    if (!checks.projects.ok)
      suggestions.push("Include relevant projects to strengthen your profile.");
    if (!checks.certifications.ok)
      suggestions.push("Mention certifications or achievements if available.");
    if (!checks.skills.ok)
      suggestions.push("Add a clear Skills section with key strengths.");
    if (!checks.experience.ok)
      suggestions.push(
        "Work Experience section is critical. Try to include it if applicable."
      );

    const processingTime = Date.now() - startTime;

    await cleanupFile(filePath);

    return res.status(200).json({
      success: true,
      message: "CV analyzed successfully",
      analysis: {
        score,
        strengths,
        weaknesses,
        suggestions,
      },
      data: {
        file: {
          filename: req.file.filename,
          originalName: req.file.originalname,
          size: req.file.size,
          sizeFormatted: pdfInfo.sizeFormatted,
          uploadDate: new Date().toISOString(),
        },
        extraction: {
          text: extractedText,
          preview: extractedText.substring(0, 250) + "...",
          metadata: {
            ...metadata,
            processingTimeMs: processingTime,
          },
        },
      },
    });
  } catch (error) {
    if (filePath) await cleanupFile(filePath);
    console.error("❌ UNEXPECTED ERROR", error);

    return res.status(500).json({
      success: false,
      message: "Unexpected server error",
      error: "INTERNAL_SERVER_ERROR",
    });
  }
};

const cleanupFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
    console.log("[CLEANUP] File deleted:", path.basename(filePath));
  } catch {
    console.error("[CLEANUP FAILED]");
  }
};

export const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    service: "CV Text Extraction",
    status: "operational",
    timestamp: new Date().toISOString(),
  });
};
