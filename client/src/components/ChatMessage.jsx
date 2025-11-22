// src/components/ChatMessage.jsx
import React from "react";

export default function ChatMessage({ sender, message }) {
    const isUser = sender === "user";
    return (
        <div
            className={`max-w-xs p-2 rounded ${isUser ? "self-end bg-blue-600" : "self-start bg-gray-700"
                }`}
        >
            {message}
        </div>
    );
}
