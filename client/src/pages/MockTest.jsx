import { useState } from "react";
import { mockStartInterview, mockAnswerQuestion } from "../api/mockInterview";

export default function MockTest() {
  const [question, setQuestion] = useState("");
  const [step, setStep] = useState(0);

  const handleStart = async () => {
    const data = await mockStartInterview();
    setQuestion(data.question);
    setStep(data.questionNumber);
  };

  const handleNext = async () => {
    const data = await mockAnswerQuestion();
    setQuestion(data.question);
    setStep(data.questionNumber);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mock Test</h1>

      {step === 0 ? (
        <button onClick={handleStart}>Start Mock</button>
      ) : (
        <>
          <h2>Q{step}: {question}</h2>
          <button onClick={handleNext}>Next Question</button>
        </>
      )}
    </div>
  );
}
