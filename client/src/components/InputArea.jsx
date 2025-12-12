/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function InputArea({ onSend, disabled }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  // 🔍 Arabic character regex
  const arabicRegex = /[\u0600-\u06FF]/;

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    if (arabicRegex.test(trimmed)) {
      setError("Please answer in English only");
      return;
    }

    setError("");
    onSend(trimmed);
    setText("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    // Live validation for Arabic characters
    if (arabicRegex.test(value)) {
      setError("Please answer in English only");
    } else {
      setError("");
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <input
          disabled={disabled}
          value={text}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Write your answer..."
          className="flex-1 bg-white/5 border border-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-2xl outline-none text-sm backdrop-blur-sm transition-colors focus:border-[#3A7BFF]"
        />

        <motion.button
          disabled={disabled}
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          className={`px-4 py-3 rounded-2xl flex items-center gap-2 text-sm shadow-lg transition-all ${
            disabled
              ? "bg-gray-600/40 cursor-not-allowed"
              : "bg-[#3A7BFF] hover:bg-[#2E6FE0] text-white"
          }`}
        >
          <Send size={16} />
        </motion.button>
      </div>

      {/* Live error message */}
      {error && <p className="text-red-400 text-xs pl-1">{error}</p>}
    </div>
  );
}
