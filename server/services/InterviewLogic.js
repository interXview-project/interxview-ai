const questions = [
  "Tell me about yourself.",
  "Why should we hire you?",
  "What are your strengths?",
  "What are your weaknesses?",
  "Where do you see yourself in five years?",
];

function generateFirstQuestion() {
  return {
    questionNumber: 1,
    question: questions[0],
  };
}

function generateNextQuestion(currentNumber) {
  const nextIndex = currentNumber;
  const safeIndex =
    nextIndex >= questions.length ? questions.length - 1 : nextIndex;

  return {
    questionNumber: safeIndex + 1,
    question: questions[safeIndex],
  };
}

function evaluateAnswer(answer) {
  const words = answer.trim().split(" ").length;

  if (words >= 20) {
    return { feedback: "Great detailed answer!", score: 9 };
  } else if (words >= 10) {
    return { feedback: "Good answer, but try to add more details.", score: 7 };
  } else {
    return {
      feedback: "Your answer is too short. Please expand more.",
      score: 4,
    };
  }
}

export { generateFirstQuestion, generateNextQuestion, evaluateAnswer };
