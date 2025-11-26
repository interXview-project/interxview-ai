// import React, { useState } from "react";
// import ChatContainer from "../components/ChatContainer";
// import InputArea from "../components/InputArea";

// export default function Interview() {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSend = async (text) => {
//     if (!text) return;

//     const newUserMsg = { sender: "user", message: text, timestamp: new Date().toISOString() };
//     setMessages((prev) => [...prev, newUserMsg]);

//     setLoading(true);

//     // Simulate AI response (replace with actual API call)
//     setTimeout(() => {
//       const aiResponse = {
//         sender: "AI",
//         message: "This is a simulated AI response.",
//         timestamp: new Date().toISOString(),
//       };
//       setMessages((prev) => [...prev, aiResponse]);
//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="w-full h-screen flex flex-col bg-[#0A0E27] text-white pt-28">
//       <div className="flex-1 overflow-hidden flex">
//         <ChatContainer messages={messages} loading={loading} />
//       </div>
//       <InputArea onSend={handleSend} disabled={loading} />
//     </div>
//   );
// }

import React, { useState } from "react";
import ChatContainer from "../components/ChatContainer";
import InputArea from "../components/InputArea";
import Sidebar from "../components/Sidebar";
import ProgressSteps from "../components/ProgressSteps";
 
export default function Interview() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const [jobRole, setJobRole] = useState("Frontend Developer");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [interviewType, setInterviewType] = useState("Technical");
 
  const handleSend = (text) => {
    if (!text.trim()) return;
 
    const newUserMsg = { sender: "user", message: text, timestamp: new Date() };
    setMessages((prev) => [...prev, newUserMsg]);
    setLoading(true);
 
    setTimeout(() => {
      const aiResponse = {
        sender: "AI",
        message: `AI response (Role: ${jobRole}, Difficulty: ${difficulty}, Type: ${interviewType})`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setLoading(false);
    }, 1500);
  };
 
  return (
    <main className="flex flex-col min-h-screen w-full bg-[#0A0E27] text-white 
        px-4 py-6 lg:px-8 lg:py-8 
        mt-20">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
          AI Interview Simulation
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Practice real interview questions powered by advanced AI.
        </p>
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
        <ProgressSteps currentStep={1} />
      </div>
    </main>
  );
}
 