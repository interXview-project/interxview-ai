import React, { useState } from "react";
import { mockStartInterview, mockAnswerQuestion } from "../api/mockInterview";
import { toast } from "react-hot-toast";
import Footer from "../components/Footer";

export default function MockTest() {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleStart = async () => {
    try {
      const data = await mockStartInterview();
      setQuestion(data.question);
      setQuestionNumber(data.questionNumber);
      toast.success("Mock Interview Started!");
    } catch (err) {
      toast.error("Failed to start mock interview");
    }
  };

  const handleAnswer = async () => {
    if (!answer.trim()) {
      toast.error("Please enter an answer!");
      return;
    }

    try {
      const data = await mockAnswerQuestion();
      toast.success("Answer Submitted!");
      setQuestion(data.question);
      setQuestionNumber(data.questionNumber);
      setAnswer("");
    } catch (err) {
      toast.error("Failed to submit answer");
    }
  };

  return (
    <>
    <div style={{ padding: "20px", color: "white", backgroundColor: "#0a1628", minHeight: "100vh" }}>
      <h1>Mock Interview Test</h1>
      {!question && <button onClick={handleStart}>Start Interview</button>}
      {question && (
        <div style={{ marginTop: "10px" }}>
          <h3>Q{questionNumber}: {question}</h3>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            style={{ marginRight: "10px", color: "black" }} 
          />
          <button onClick={handleAnswer}>Submit Answer</button>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}
