import multer from "multer";
import fs from "fs";
import path from "path";

const uploadDir = path.join("uploads", "cv");

// Create upload directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Create unique filename with sanitized original name
        const sanitizedName = file.originalname
            .replace(/[^a-zA-Z0-9.-]/g, "_")
            .toLowerCase();
        const uniqueName = `${Date.now()}-${sanitizedName}`;
        cb(null, uniqueName);
    },
});

// Enhanced file filter with detailed validation
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = [
        "application/pdf",
        "application/x-pdf",
        "application/acrobat",
        "applications/vnd.pdf",
        "text/pdf",
        "text/x-pdf"
    ];

    const allowedExtensions = [".pdf"];
    const fileExtension = path.extname(file.originalname).toLowerCase();

    // Check MIME type
    if (!allowedMimeTypes.includes(file.mimetype)) {
        return cb(
            new Error(`Invalid file type. Only PDF files are allowed. Received: ${file.mimetype}`),
            false
        );
    }

    // Check file extension
    if (!allowedExtensions.includes(fileExtension)) {
        return cb(
            new Error(`Invalid file extension. Only .pdf files are allowed. Received: ${fileExtension}`),
            false
        );
    }

    // Additional validation: check if filename is too long
    if (file.originalname.length > 255) {
        return cb(
            new Error("Filename is too long. Maximum 255 characters allowed."),
            false
        );
    }

    cb(null, true);
};

export const uploadCV = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Increased to 5MB for larger CVs
        files: 1, // Only one file at a time
    },
    fileFilter,
});

// Middleware to validate upload and provide detailed feedback
export const validateUpload = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "No file uploaded. Please select a PDF file.",
            error: "NO_FILE_UPLOADED"
        });
    }

    // Additional checks after upload
    const fileSize = req.file.size;
    const maxSize = 5 * 1024 * 1024;

    if (fileSize === 0) {
        return res.status(400).json({
            success: false,
            message: "Uploaded file is empty",
            error: "EMPTY_FILE"
        });
    }

    if (fileSize > maxSize) {
        return res.status(400).json({
            success: false,
            message: `File size exceeds maximum limit of ${maxSize / (1024 * 1024)}MB`,
            error: "FILE_TOO_LARGE"
        });
    }

    next();
};