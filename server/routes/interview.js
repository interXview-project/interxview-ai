import express from "express";
import { startInterview, answerInterview } from "../controllers/interviewController.js";

const router = express.Router();

router.post("/start", startInterview);
router.post("/answer", answerInterview);

export default router;
