import React from "react";
import { UserIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function ChatMessage({ sender, message, timestamp }) {
  const isUser = sender === "user";

  // Format timestamp safely
  const timeString = timestamp
    ? new Date(timestamp).toLocaleString([], { hour: '2-digit', minute: '2-digit' })
    : "";

  return (
    <div
      className={`flex items-start gap-3 w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      {/* Icon for bot */}
      {!isUser && (
        <div className="w-8 h-8 bg-[#1F2758] rounded-full flex items-center justify-center shadow">
          <SparklesIcon className="w-5 h-5 text-blue-300" />
        </div>
      )}

      <div className="flex flex-col">
        {/* Message bubble */}
        <div
          className={`max-w-md px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed
            ${isUser ? "bg-[#3A7BFF] text-white" : "bg-[#2A3358] text-gray-200"}`}
        >
          {message}
        </div>

        {/* Timestamp always visible */}
        <div className="mt-1 text-right text-xs text-gray-400">
          {timeString}
        </div>
      </div>

      {/* Icon for user */}
      {isUser && (
        <div className="w-8 h-8 bg-[#3A7BFF] rounded-full flex items-center justify-center shadow">
          <UserIcon className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
}
