import express from "express";
import { uploadCV } from "../middleware/uploadCV.js";
import { getCVText } from "../controllers/cvTextController.js";
import { multerErrorHandler } from "../middleware/multerErrorHandler.js";

const router = express.Router();

// Upload CV & extract text
router.post(
    "/extract-text",
    uploadCV.single("cv"),
    multerErrorHandler,
    getCVText
);

export default router;
