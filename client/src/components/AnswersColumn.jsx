// src/components/AnswersColumn.jsx
import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

export default function AnswersColumn({ messages, loading }) {
    const containerRef = useRef(null);

    // Scroll to bottom whenever messages or loading changes
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages, loading]);

    return (
        <div
            ref={containerRef}
            className="w-1/2 p-4 overflow-auto flex flex-col gap-2"
        >
            {messages.length === 0 && !loading && (
                <p className="text-gray-400 italic">Start your interview</p>
            )}

            {messages.map((msg, idx) => (
                <ChatMessage key={idx} sender={msg.sender} message={msg.message} />
            ))}

            {loading && (
                <div className="self-start bg-gray-700 p-2 rounded max-w-xs flex items-center">
                    <span className="mr-2">AI is typing</span>
                    <span className="animate-pulse">...</span>
                </div>
            )}
        </div>
    );
}
