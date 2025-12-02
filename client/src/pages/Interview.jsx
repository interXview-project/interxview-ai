// client/src/pages/Interview.jsx
import React, { useState, useEffect } from "react";
import api from "../utils/axiosInstance";
import ChatContainer from "../components/ChatContainer";
import InputArea from "../components/InputArea";
import Sidebar from "../components/Sidebar";
import ProgressSteps from "../components/ProgressSteps";

export default function Interview() {
  // States
  const [messages, setMessages] = useState([]); // all chat messages
  const [loading, setLoading] = useState(false); // AI typing state
  const [currentQuestion, setCurrentQuestion] = useState(null); // current AI question
  const [questionNumber, setQuestionNumber] = useState(0); // current question number

  const [jobRole, setJobRole] = useState("Frontend Developer");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [interviewType, setInterviewType] = useState("Technical");

  // Start Interview
  const startInterview = async () => {
    setLoading(true);
    try {
      const res = await api.post("/interview/start", {
        jobRole,
        difficulty,
        interviewType,
      });

      const firstQuestion = res.data.question;

      const aiMsg = {
        sender: "AI",
        message: firstQuestion,
        timestamp: new Date(),
      };

      setMessages([aiMsg]);
      setCurrentQuestion(firstQuestion);
      setQuestionNumber(1);
    } catch (err) {
      console.error("Error starting interview:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle Sending User Answer
  const handleSend = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = { sender: "user", message: text, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);

    try {
      const res = await api.post("/interview/answer", {
        questionNumber,
        userAnswer: text,
      });
      const nextQuestion = res.data.question;

      // Delay for typing animation
      setTimeout(() => {
        const aiMsg = {
          sender: "AI",
          message: nextQuestion,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMsg]);
        setCurrentQuestion(nextQuestion);
        setQuestionNumber((prev) => prev + 1);
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error("Error sending answer:", err);
      setLoading(false);
    }
  };

  // Optional: Debugging states
  useEffect(() => {
    console.log("Messages:", messages);
    console.log("Current Question:", currentQuestion);
    console.log("Question Number:", questionNumber);
    console.log("Loading:", loading);
  }, [messages, currentQuestion, questionNumber, loading]);

  return (
    <main className="flex flex-col min-h-screen w-full bg-[#0A0E27] text-white px-4 py-6 lg:px-8 lg:py-8 mt-20">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
          AI Interview Simulation
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Practice real interview questions powered by advanced AI.
        </p>
        <button
          onClick={startInterview}
          disabled={loading}
          className="mt-3 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
        >
          Start Interview
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4 lg:gap-6 mb-6">
        {/* Chat + Input */}
        <div className="flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 lg:p-6 h-[500px] sm:h-[600px] shadow-xl">
          <ChatContainer messages={messages} loading={loading} />
          <InputArea onSend={handleSend} disabled={loading} />
        </div>

        {/* Sidebar */}
        <div className="lg:block">
          <Sidebar
            jobRole={jobRole}
            setJobRole={setJobRole}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            interviewType={interviewType}
            setInterviewType={setInterviewType}
          />
        </div>
      </div>

      {/* Progress Steps */}
      <div className="overflow-x-auto">
        <ProgressSteps currentStep={questionNumber} />
      </div>
    </main>
  );
}
