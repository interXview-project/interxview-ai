// server/controllers/interviewController.js
import {
  generateEasyQuestion,
  generateInterviewFeedback,
} from "../services/OpenAIService.js";

const TOTAL_QUESTIONS = 10;

// ==============================
// START INTERVIEW
// ==============================
async function startInterview(req, res) {
  try {
    const role = req.body?.role || "Software Developer";

    const firstQuestion = await generateEasyQuestion(role, 1, []);

    return res.json({
      success: true,
      questionNumber: 1,
      totalQuestions: TOTAL_QUESTIONS,
      isFinished: false,
      question: firstQuestion,
      role,
      previousQuestions: [firstQuestion],
      answers: [],
    });
  } catch (err) {
    console.error("Error starting interview:", err);
    res.status(500).json({ error: "Failed to start interview" });
  }
}

// ==============================
// ANSWER INTERVIEW
// ==============================
async function answerInterview(req, res) {
  try {
    const { questionNumber, userAnswer, role, answers, previousQuestions } =
      req.body;

    if (!questionNumber || !userAnswer || !role) {
      return res.status(400).json({
        error: "questionNumber, userAnswer, role are required",
      });
    }

    const updatedAnswers = [...(answers || []), userAnswer];

    // FINISH
    if (questionNumber >= TOTAL_QUESTIONS) {
      const feedback = await generateInterviewFeedback(role, updatedAnswers);

      return res.json({
        success: true,
        isFinished: true,
        feedback,
      });
    }

    // NEXT QUESTION
    const nextQuestion = await generateEasyQuestion(
      role,
      questionNumber + 1,
      previousQuestions || []
    );

    return res.json({
      success: true,
      isFinished: false,
      questionNumber: questionNumber + 1,
      totalQuestions: TOTAL_QUESTIONS,
      question: nextQuestion,
      answers: updatedAnswers,
      previousQuestions: [...(previousQuestions || []), nextQuestion],
    });
  } catch (err) {
    console.error("Error answering interview:", err);
    res.status(500).json({
      error: "Failed processing interview answer",
    });
  }
}

export { startInterview, answerInterview };
