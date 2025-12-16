// server/controllers/interviewController.js
import { generateInterviewQuestion } from "../services/OpenAIService.js";
import { generateNextQuestion, evaluateAnswer } from "../services/InterviewLogic.js";

async function startInterview(req, res) {
  try {
    const role = req.body?.role || "Software Developer";
    const question = await generateInterviewQuestion(role);

    return res.json({ question });
  } catch (err) {
    console.error("Error generating interview question:", err);

    if (err.status === 404) {
      return res.status(500).json({
        error: "AI model not available. Please contact support."
      });
    } else if (err.status === 403) {
      return res.status(500).json({
        error: "AI service configuration error. Please contact support."
      });
    }

    res.status(500).json({ error: "Failed to generate interview question" });
  }
}

function answerInterview(req, res) {
  const { questionNumber, userAnswer } = req.body;

  if (!questionNumber || !userAnswer) {
    return res.status(400).json({
      error: "questionNumber and userAnswer are required",
    });
  }

  const evaluation = evaluateAnswer(userAnswer);
  const nextQuestion = generateNextQuestion(questionNumber);

  return res.json({
    questionNumber: nextQuestion.questionNumber,
    question: nextQuestion.question,
    feedback: evaluation.feedback,
    score: evaluation.score,
  });
}

export { startInterview, answerInterview };