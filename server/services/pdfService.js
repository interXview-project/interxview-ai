import { PdfReader } from "pdfreader";
import fs from "fs/promises";

/**
 * Extract readable text from PDF with enhanced error handling
 * @param {string} filePath - path to the uploaded PDF file
 * @returns {Promise<Object>} - object containing text and metadata
 */
export const extractTextFromPDF = async (filePath) => {
    // Validate file exists
    try {
        await fs.access(filePath);
    } catch (error) {
        throw new Error("File not found or inaccessible");
    }

    // Check file size
    const stats = await fs.stat(filePath);
    if (stats.size === 0) {
        throw new Error("PDF file is empty (0 bytes)");
    }

    return new Promise((resolve, reject) => {
        let fullText = "";
        let pageTexts = [];
        let currentPage = -1;
        let itemCount = 0;
        const timeout = setTimeout(() => {
            reject(new Error("PDF parsing timeout - file may be corrupted"));
        }, 30000); // 30 second timeout

        new PdfReader().parseFileItems(filePath, (err, item) => {
            if (err) {
                clearTimeout(timeout);
                return reject(new Error(`Failed to parse PDF: ${err.message}`));
            }

            // End of file
            if (!item) {
                clearTimeout(timeout);

                if (itemCount === 0) {
                    return reject(new Error("PDF contains no parseable content"));
                }

                const cleanText = cleanAndNormalizeText(fullText);

                if (!cleanText || cleanText.length === 0) {
                    return reject(new Error("PDF is empty or contains no readable text"));
                }

                // Return enhanced result with metadata
                resolve({
                    text: cleanText,
                    metadata: {
                        totalPages: pageTexts.length,
                        totalCharacters: cleanText.length,
                        totalWords: cleanText.split(/\s+/).filter(w => w.length > 0).length,
                        itemsParsed: itemCount
                    }
                });
                return;
            }

            itemCount++;

            // Track pages for better text organization
            if (item.page !== undefined && item.page !== currentPage) {
                currentPage = item.page;
                pageTexts.push([]);
            }

            // Extract text content
            if (item.text) {
                fullText += item.text + " ";
                if (pageTexts.length > 0) {
                    pageTexts[pageTexts.length - 1].push(item.text);
                }
            }
        });
    });
};

/**
 * Clean and normalize extracted text with advanced processing
 * @param {string} text - raw text from PDF
 * @returns {string} - cleaned text
 */
const cleanAndNormalizeText = (text) => {
    if (!text) return "";

    return text
        // Normalize unicode characters
        .normalize("NFKD")
        // Remove control characters
        .replace(/[\x00-\x1F\x7F-\x9F]/g, "")
        // Remove multiple spaces, tabs, and newlines
        .replace(/\s+/g, " ")
        // Remove special characters but keep important ones
        .replace(/[^\w\s.,;:()\-@#$%&+=\/\\'"]/g, "")
        // Fix common PDF extraction issues
        .replace(/(\w)([A-Z])/g, "$1 $2") // Add space between camelCase
        // Remove multiple punctuation marks
        .replace(/([.,;:])\1+/g, "$1")
        // Remove spaces before punctuation
        .replace(/\s+([.,;:])/g, "$1")
        // Add space after punctuation if missing
        .replace(/([.,;:])(\w)/g, "$1 $2")
        // Remove excessive dashes
        .replace(/-{3,}/g, "-")
        // Trim whitespace
        .trim();
};

/**
 * Validate if PDF contains meaningful extractable text
 * @param {string} text - extracted text
 * @returns {Object} - validation result with details
 */
export const validateExtractedText = (text) => {
    const result = {
        isValid: false,
        length: 0,
        wordCount: 0,
        hasLetters: false,
        hasNumbers: false,
        issues: []
    };

    if (!text) {
        result.issues.push("Text is null or undefined");
        return result;
    }

    result.length = text.length;
    result.wordCount = text.split(/\s+/).filter(w => w.length > 0).length;

    // Minimum length check
    if (text.length < 50) {
        result.issues.push("Text is too short (minimum 50 characters)");
    }

    // Check for letters
    result.hasLetters = /[a-zA-Z]/.test(text);
    if (!result.hasLetters) {
        result.issues.push("Text contains no letters");
    }

    // Check for numbers (optional but good for CVs)
    result.hasNumbers = /[0-9]/.test(text);

    // Check word count
    if (result.wordCount < 10) {
        result.issues.push("Text contains too few words (minimum 10)");
    }

    // Determine if valid
    result.isValid = result.issues.length === 0 &&
        result.hasLetters &&
        result.length >= 50 &&
        result.wordCount >= 10;

    return result;
};

/**
 * Get PDF file information without extracting full text
 * @param {string} filePath - path to the PDF file
 * @returns {Promise<Object>} - basic PDF info
 */
export const getPDFInfo = async (filePath) => {
    try {
        const stats = await fs.stat(filePath);
        return {
            size: stats.size,
            sizeFormatted: `${(stats.size / 1024).toFixed(2)} KB`,
            created: stats.birthtime,
            modified: stats.mtime
        };
    } catch (error) {
        throw new Error(`Failed to read PDF info: ${error.message}`);
    }
};