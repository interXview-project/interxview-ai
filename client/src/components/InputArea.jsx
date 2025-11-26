/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
 
export default function InputArea({ onSend, disabled }) {
    const [text, setText] = useState("");
 
    const handleSend = () => {
        if (!text.trim()) return;
        onSend(text);
        setText("");
    };
 
    return (
        <div className="mt-4 flex items-center gap-3">
            <input
                disabled={disabled}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Write your answer..."
                className="flex-1 bg-white/5 border border-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-2xl outline-none text-sm backdrop-blur-sm"
            />
            <motion.button
                disabled={disabled}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                className={`px-4 py-3 rounded-2xl flex items-center gap-2 text-sm shadow-lg transition-all ${disabled ? "bg-gray-600/40 cursor-not-allowed" : "bg-[#3A7BFF] hover:bg-[#2E6FE0] text-white"}`}
            >
                <Send size={16} />
            </motion.button>
        </div>
    );
}


// import React, { useState } from "react";
// import PrimaryButton from "../components/common/PrimaryButton";

// export default function InputArea({ onSend, disabled }) {
//   const [text, setText] = useState("");

//   const handleSendClick = () => {
//     onSend(text);
//     setText("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") handleSendClick();
//   };

//   return (
//     <div className="flex p-4 border-t border-[#1E2A55] bg-[#0A0E27]">
//       <input
//         type="text"
//         className="flex-1 p-3 rounded-lg bg-[#0D1235] text-white placeholder-gray-400
//           focus:outline-none focus:ring-2 focus:ring-[#3A7BFF] mr-3"
//         placeholder="Type your answer..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyPress={handleKeyPress}
//         disabled={disabled}
//       />
//       <PrimaryButton onClick={handleSendClick} disabled={disabled}>
//         Send
//       </PrimaryButton>
//     </div>
//   );
// }