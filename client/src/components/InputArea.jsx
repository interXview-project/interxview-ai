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
    <div className="flex p-4 border-t border-[#1E2A55] bg-[#0A0E27]">
      <input
        type="text"
        className="flex-1 p-3 rounded-lg bg-[#0D1235] text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-[#3A7BFF] mr-3"
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
