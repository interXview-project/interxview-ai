/* eslint-disable no-unused-vars */

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ChatMessage from "./ChatMessage";
import TypingDots from "./TypingDots";

export default function ChatContainer({ messages, loading }) {
  const chatRef = useRef();

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages, loading]);

  return (
    <div
      ref={chatRef}
      className="flex-1 overflow-y-auto overflow-x-hidden pr-2 space-y-4 break-words whitespace-pre-wrap
                 scrollbar-thin scrollbar-thumb-[#0ea5e9]/40 scrollbar-track-[#0a1628]/50"
    >
      {messages.map((msg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChatMessage
            sender={msg.sender}
            message={msg.message}
            timestamp={msg.timestamp}
          />
        </motion.div>
      ))}

      {loading && (
        <div className="self-start bg-slate-800 p-3 rounded-lg max-w-xs flex items-center">
          <TypingDots className="mr-2" />
          <span className="text-slate-300 text-sm animate-pulse">
            AI is typing...
          </span>
        </div>
      )}
    </div>
  );
}
