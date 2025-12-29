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
    <main className="flex flex-col min-h-screen bg-[#0a1628] text-white">
      <div className="flex-1 px-6 pt-12">
        <h1 className="text-2xl font-semibold mb-4">Mock Interview Test</h1>
        {!question && <button className="px-4 py-2 bg-[#3A7BFF] rounded-md" onClick={handleStart}>Start Interview</button>}
        {question && (
          <div className="mt-4">
            <h3 className="font-medium">Q{questionNumber}: {question}</h3>
            <div className="mt-3 flex items-center gap-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="px-3 py-2 rounded-md text-black flex-1"
              />
              <button className="px-4 py-2 bg-[#3A7BFF] rounded-md" onClick={handleAnswer}>Submit Answer</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
