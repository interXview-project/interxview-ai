// src/components/ChatContainer.jsx
import React from "react";
import QuestionsColumn from "./QuestionsColumn";
import AnswersColumn from "./AnswersColumn";

export default function ChatContainer({ messages, loading }) {
    return (
        <div className="flex w-full h-full">
            <QuestionsColumn />
            <AnswersColumn messages={messages} loading={loading} />
        </div>
    );
}