// routes/interviewRoutes.js

import express from "express";
import {
  startInterview,
  answerInterview,
} from "../controllers/interviewController.js";

const router = express.Router();

router.post("/start", startInterview); // /api/interview/start
router.post("/answer", answerInterview); // /api/interview/answer

export default router;
