// src/components/ChatMessage.jsx
import React from "react";

export default function ChatMessage({ sender, message }) {
    const isUser = sender === "user";
    return (
        <div
            className={`max-w-md px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed
        ${isUser
          ? "self-end bg-[#3A7BFF] text-white"      
          : "self-start bg-[#2A3358] text-gray-200"
        }
      `}
        >
            {message}
        </div>
    );
}
