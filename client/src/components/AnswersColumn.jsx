import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import TypingDots from "./TypingDots";

export default function AnswersColumn({ messages, loading }) {
  const containerRef = useRef(null);

  // Smooth auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",        
      });
    }
  }, [messages, loading]);

  return (
    <div
      ref={containerRef}
      className="w-2/3 p-6 overflow-y-auto flex flex-col gap-4 
                 bg-[#0D1235] border-l border-[#1E2A55]"
    >
      {messages.length === 0 && !loading && (
        <p className="text-gray-400 italic">Start your interview</p>
      )}

      {messages.map((msg, idx) => (
        <ChatMessage key={idx} sender={msg.sender} message={msg.message} timestamp={msg.timestamp}/>
      ))}

      {loading && (
        <div className="self-start bg-gray-700 p-3 rounded-lg max-w-xs flex items-center">
            <TypingDots />
          <span className="mr-2">AI is typing</span>
          <span className="animate-pulse">...</span>
        </div>
      )}
    </div>
  );
}
