import multer from "multer";
import fs from "fs";
import path from "path";

// Define the upload directory for CV files
const uploadDir = path.join("uploads", "cv");

// Create the directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage settings
const storage = multer.diskStorage({
    // Set the destination folder for uploaded files
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    // Set a unique filename for each uploaded file
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    },
});

// Allow only PDF files
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        cb(new Error("Only PDF files are allowed"), false);
    }
};

// Create the multer upload instance with storage, size limit, and file filter
export const uploadCV = multer({
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB max file size
    },
    fileFilter,
});
