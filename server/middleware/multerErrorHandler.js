import multer from "multer";

// Middleware to handle errors from multer
export const multerErrorHandler = (err, req, res, next) => {
    // Multer-specific errors (file size, file count, etc.)
    if (err instanceof multer.MulterError) {
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }

    // Custom errors (like invalid file type)
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }

    // Pass control to next middleware if no errors
    next();
};
