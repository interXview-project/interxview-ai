import React, { useState } from "react";
import api from "../utils/axiosInstance";
import ChatContainer from "../components/ChatContainer";
import InputArea from "../components/InputArea";
import Sidebar from "../components/Sidebar";
import InterviewSummary from "../components/InterviewSummary";
import ProgressSteps from "../components/ProgressSteps";

export default function Interview() {
  // ================= STATES =================
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);

  const [jobRole, setJobRole] = useState("Frontend Developer");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [interviewType, setInterviewType] = useState("Technical");

  // ================= CLASSES =================
  const container =
    "flex flex-col min-h-screen w-full bg-[#0A0E27] text-white px-4 py-6 lg:px-8 lg:py-8 mt-20";
  const chatWrapper =
    "flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 lg:p-6 h-[500px] sm:h-[600px] shadow-xl";
  const headerBtn =
    "mt-3 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700";

  // ================= FUNCTIONS =================

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

      setMessages([
        {
          sender: "AI",
          message: firstQuestion,
          type: "question",
          timestamp: new Date(),
        },
      ]);

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
    setMessages((prev) => [
      ...prev,
      { sender: "user", message: text, timestamp: new Date() },
    ]);

    setLoading(true);
    try {
      const res = await api.post("/interview/answer", {
        questionNumber,
        userAnswer: text,
      });

      const nextQuestion = res.data.question;

      setTimeout(() => {
        // MOCK DATA
        const mockScore = Math.floor(Math.random() * 10) + 1;
        const mockFeedback =
          "Good answer! Try to give more details next time.";

        setMessages((prev) => [
          ...prev,
          {
            sender: "AI",
            message: `Score: ${mockScore}/10`,
            type: "score",
            timestamp: new Date(),
          },
        ]);

        setMessages((prev) => [
          ...prev,
          {
            sender: "AI",
            message: `Feedback: ${mockFeedback}`,
            type: "feedback",
            timestamp: new Date(),
          },
        ]);

        setMessages((prev) => [
          ...prev,
          {
            sender: "AI",
            message: nextQuestion,
            type: "question",
            timestamp: new Date(),
          },
        ]);

        setCurrentQuestion(nextQuestion);
        setQuestionNumber((prev) => prev + 1);
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error("Error sending answer:", err);
      setLoading(false);
    }
  };

  // ================= SUMMARY MODE =================
  if (questionNumber >= 5) {
    return (
      <InterviewSummary
        onRestart={() => {
          setMessages([]);
          setCurrentQuestion(null);
          setQuestionNumber(0);
        }}
      />
    );
  }

  // ================= JSX =================
  return (
    <main className={container}>
      {/* HEADER */}
      <section className="mb-6 text-center">
        <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
          AI Interview Simulation
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Practice real interview questions powered by advanced AI.
        </p>
        <button
          onClick={startInterview}
          disabled={loading}
          className={headerBtn}
        >
          Start Interview
        </button>
      </section>

      {/* MAIN GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4 lg:gap-6 mb-6">
        {/* CHAT */}
        <div className={chatWrapper}>
          <ChatContainer
            messages={messages}
            loading={loading}
            question={currentQuestion}
          />
          <InputArea
            onSend={handleSend}
            disabled={loading || !currentQuestion}
          />
        </div>

        {/* SIDEBAR */}
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
      </section>

      {/* PROGRESS STEPS */}
      <section className="overflow-x-auto">
        <ProgressSteps currentStep={questionNumber} />
      </section>
    </main>
  );
}
