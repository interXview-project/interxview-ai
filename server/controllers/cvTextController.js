import { extractTextFromPDF, validateExtractedText, getPDFInfo } from "../services/pdfService.js";
import fs from "fs/promises";
import path from "path";

/**
 * Handle extracting text from uploaded CV with comprehensive error handling
 */
export const getCVText = async (req, res) => {
    const startTime = Date.now();
    let filePath = null;

    try {
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
                error: "NO_FILE_UPLOADED"
            });
        }

        filePath = req.file.path;

        // Get PDF basic info
        let pdfInfo;
        try {
            pdfInfo = await getPDFInfo(filePath);
        } catch (infoError) {
            await cleanupFile(filePath);
            return res.status(400).json({
                success: false,
                message: "Failed to read PDF file information",
                error: "INVALID_PDF_FILE"
            });
        }

        // Extract text from PDF
        let extractionResult;
        try {
            extractionResult = await extractTextFromPDF(filePath);
        } catch (pdfError) {
            await cleanupFile(filePath);

            // Provide specific error messages based on error type
            let errorMessage = "Failed to extract text from PDF";
            let errorCode = "PDF_EXTRACTION_FAILED";

            if (pdfError.message.includes("timeout")) {
                errorMessage = "PDF processing timeout - file may be too complex or corrupted";
                errorCode = "PDF_TIMEOUT";
            } else if (pdfError.message.includes("empty")) {
                errorMessage = "PDF file is empty or contains no content";
                errorCode = "EMPTY_PDF";
            } else if (pdfError.message.includes("corrupted")) {
                errorMessage = "PDF file appears to be corrupted or invalid";
                errorCode = "CORRUPTED_PDF";
            }

            return res.status(400).json({
                success: false,
                message: errorMessage,
                error: errorCode,
                details: pdfError.message
            });
        }

        const { text: extractedText, metadata } = extractionResult;

        // Validate extracted text with detailed feedback
        const validation = validateExtractedText(extractedText);

        if (!validation.isValid) {
            await cleanupFile(filePath);

            return res.status(400).json({
                success: false,
                message: "PDF does not contain sufficient readable text",
                error: "INSUFFICIENT_TEXT",
                validation: {
                    textLength: validation.length,
                    wordCount: validation.wordCount,
                    issues: validation.issues
                },
                suggestions: [
                    "Ensure the PDF contains text content (not just images)",
                    "Try converting scanned documents to searchable PDFs",
                    "Check if the PDF is password protected or corrupted"
                ]
            });
        }

        const processingTime = Date.now() - startTime;

        // Success response with comprehensive data
        return res.status(200).json({
            success: true,
            message: "CV text extracted successfully",
            data: {
                file: {
                    filename: req.file.filename,
                    originalName: req.file.originalname,
                    size: req.file.size,
                    sizeFormatted: pdfInfo.sizeFormatted,
                    uploadDate: new Date().toISOString(),
                    path: req.file.path
                },
                extraction: {
                    text: extractedText,
                    preview: extractedText.substring(0, 200) + "...", // First 200 chars
                    metadata: {
                        ...metadata,
                        processingTimeMs: processingTime,
                        validation: {
                            isValid: validation.isValid,
                            hasLetters: validation.hasLetters,
                            hasNumbers: validation.hasNumbers
                        }
                    }
                }
            }
        });

    } catch (error) {
        // Clean up file on unexpected error
        if (filePath) {
            await cleanupFile(filePath);
        }

        console.error("Error in getCVText:", error);

        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred while processing the CV",
            error: "INTERNAL_SERVER_ERROR",
            details: process.env.NODE_ENV === "development" ? error.message : undefined
        });
    }
};

/**
 * Helper function to safely clean up uploaded files
 */
const cleanupFile = async (filePath) => {
    try {
        await fs.unlink(filePath);
        console.log(`[CLEANUP] Successfully deleted file: ${path.basename(filePath)}`);
    } catch (unlinkError) {
        console.error(`[CLEANUP] Failed to delete file ${path.basename(filePath)}:`, unlinkError.message);
    }
};

/**
 * Health check for CV text extraction service
 */
export const healthCheck = (req, res) => {
    res.status(200).json({
        success: true,
        service: "CV Text Extraction",
        status: "operational",
        timestamp: new Date().toISOString(),
        capabilities: {
            supportedFormats: ["PDF"],
            maxFileSize: "5MB",
            features: [
                "Text extraction",
                "Text normalization",
                "Text validation",
                "Metadata extraction"
            ]
        }
    });
};