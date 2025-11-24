// src/components/InputArea.jsx
import React, { useState } from "react";
import PrimaryButton from "../components/common/PrimaryButton";

export default function InputArea({ onSend, disabled }) {
  const [text, setText] = useState("");

  const handleSendClick = () => {
    onSend(text);
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendClick();
  };

  return (
    <div className="flex p-4 border-t border-gray-700">
      <input
        type="text"
        className="flex-1 p-2 rounded bg-gray-800 text-white mr-2"
        placeholder="Type your answer..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={disabled}
      />
      <PrimaryButton onClick={handleSendClick} disabled={disabled}>
        Send
      </PrimaryButton>
    </div>
  );
}
