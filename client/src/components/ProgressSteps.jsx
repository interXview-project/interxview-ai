import React from "react";

export default function ProgressSteps({ currentStep = 0, total = 10 }) {
  const percentage =
    currentStep === 0
      ? 0
      : currentStep >= total
      ? 100
      : Math.round((currentStep / total) * 100);

  return (
    <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <p className="text-gray-300 text-sm">Question Progress</p>

        <p className="text-blue-400 font-semibold">
          {currentStep >= total
            ? "Final Feedback Loading..."
            : `${currentStep} / ${total}`}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Percentage */}
      <p className="text-center text-gray-400 mt-2 text-sm">
        {percentage}% Completed
      </p>
    </div>
  );
}
