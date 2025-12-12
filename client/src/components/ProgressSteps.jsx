// ================= ProgressSteps Component =================
// Displays interview progress as steps with animated line and active indicators
import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

export default function ProgressSteps({ currentStep }) {
  // ===== Step Data =====
  const steps = ["Introduction", "Technical", "Behavioral", "Final Feedback"];
  const circleSize = 40;               // Diameter of each step circle
  const lineOffset = circleSize / 2 + 24;

  const stepWidth = 1 / (steps.length - 1);
  const progressRatio = currentStep - 1 + 0.5;
  const progressPercent = Math.min(progressRatio * stepWidth * 100, 100);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-lg">
      <div className="flex items-center justify-between relative">
        {/* ===== Background Line ===== */}
        <div
          className="absolute left-0 right-0 h-[4px] rounded-full bg-white/10"
          style={{ top: `calc(50% - ${lineOffset}px)`, zIndex: 10 }}
        />

        {/* ===== Animated Progress Line ===== */}
        <motion.div
          className="absolute h-[4px] rounded-full overflow-hidden"
          style={{
            top: `calc(50% - ${lineOffset}px)`,
            left: 0,
            zIndex: 15,
          }}
          animate={{ width: `calc(${progressPercent}% + ${circleSize / 2}px)` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div
            className="h-full w-full rounded-full bg-gradient-to-r from-[#3A7BFF]/60 via-[#3A7BFF] to-[#3A7BFF]/60 animate-pulse"
            style={{ boxShadow: `0 0 20px 6px #3A7BFF` }}
          />
        </motion.div>

        {/* ===== Step Circles ===== */}
        {steps.map((step, idx) => {
          const isActive = currentStep === idx + 1;
          const isCompleted = currentStep > idx + 1;

          return (
            <div key={idx} className="relative flex flex-col items-center z-20">
              {/* Circle */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: isActive ? 1.2 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2
                  ${isActive || isCompleted ? "border-[#3A7BFF] shadow-lg shadow-[#3A7BFF]/70" : "border-white/20"}`}
                style={{
                  backgroundColor: isActive || isCompleted ? "#3A7BFF" : "rgba(255, 255, 255, 0.1)",
                  boxShadow: isActive ? "0 0 20px 6px #3A7BFF" : "",
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`text-sm ${isActive || isCompleted ? "text-white" : "text-gray-500"}`}
                >
                  {idx + 1}
                </motion.span>
              </motion.div>

              {/* Step Label */}
              <span
                className={`text-xs text-center max-w-[100px] ${
                  isActive || isCompleted ? "text-white" : "text-gray-400"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
