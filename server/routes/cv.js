// server/routes/cv.js
import express from "express";
import { uploadCV } from "../middleware/uploadCV.js";

const router = express.Router();

// Upload CV
router.post("/upload-cv", uploadCV.single("cv"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "No file uploaded",
        });
    }

    res.status(200).json({
        success: true,
        message: "CV uploaded successfully",
        file: {
            filename: req.file.filename,
            size: req.file.size,
        },
    });
});


export default router;
