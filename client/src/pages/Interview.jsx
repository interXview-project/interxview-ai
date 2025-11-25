// src/pages/Interview.jsx
import React, { useState } from "react";
import ChatContainer from "../components/ChatContainer";
import InputArea from "../components/InputArea";

export default function Interview() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    if (!text) return;

    const newUserMsg = { sender: "user", message: text };
    setMessages((prev) => [...prev, newUserMsg]);

    setLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse = { sender: "AI", message: "This is a simulated AI response." };
      setMessages((prev) => [...prev, aiResponse]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#0A0E27] text-white pt-28">
      <div className="flex-1 overflow-hidden flex">
        <ChatContainer messages={messages} loading={loading} />
      </div>
      <InputArea onSend={handleSend} disabled={loading} />
    </div>
  );
}
