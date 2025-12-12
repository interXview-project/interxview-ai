import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ChatMessage from "./ChatMessage";
import TypingDots from "./TypingDots";

export default function ChatContainer({ messages, loading, question }) {
  const chatRef = useRef();

  useEffect(() => {
    
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages, loading, question]);

  return (
    <div
      ref={chatRef}
      className="flex-1 overflow-y-auto overflow-x-hidden pr-2 space-y-4 break-words whitespace-pre-wrap scrollbar-thin scrollbar-thumb-[#3A7BFF]/40 scrollbar-track-[#0A0E27]/50"
    >
      
      {question && messages.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChatMessage sender="ai" message={question} />
        </motion.div>
      )}

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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="self-start bg-[#2A3358] p-3 rounded-2xl max-w-xs flex items-center gap-2">
            <TypingDots />
            <span className="text-gray-200 text-sm">AI is typing...</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
