import React from "react";

export default function ProgressSteps({ currentStep = 0, total = 10 }) {
  const percentage =
    currentStep === 0
      ? 0
      : currentStep >= total
      ? 100
      : Math.round((currentStep / total) * 100);

  return (
    <div className="mt-6 bg-[#0f2847] border border-slate-700 rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <p className="text-slate-300 text-sm">Question Progress</p>

        <p className="text-[#0ea5e9] font-semibold">
          {currentStep >= total
            ? "Final Feedback Loading..."
            : `${currentStep} / ${total}`}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#1a3a5c] rounded-full h-3 overflow-hidden">
        <div
          className="h-3 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Percentage */}
      <p className="text-center text-slate-400 mt-2 text-sm">
        {percentage}% Completed
      </p>
    </div>
  );
}
