import {
  generateFirstQuestion,
  generateNextQuestion,
  evaluateAnswer,
} from "../services/InterviewLogic.js";

function startInterview(req, res) {
  const firstQ = generateFirstQuestion();
  return res.json({
    ...firstQ,
    feedback: null,
    score: null,
  });
}

function answerInterview(req, res) {
  const { questionNumber, userAnswer } = req.body;

  if (!questionNumber || !userAnswer) {
    return res
      .status(400)
      .json({ error: "questionNumber and userAnswer are required" });
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
