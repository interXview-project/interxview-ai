// ================= QuestionsColumn Component =================
// Displays a scrollable list of interview questions
import React from "react";

export default function QuestionsColumn() {
  // ===== Mock Questions =====
  const questions = [
    "What is your name?",
    "Tell me about yourself.",
    "Why do you want this job?",
  ];

  return (
    <div className="w-1/2 p-4 border-r border-gray-700 overflow-auto">
      {/* Column Header */}
      <h2 className="text-xl mb-4">Questions</h2>

      {/* Questions List */}
      <ul className="space-y-2">
        {questions.map((q, idx) => (
          <li key={idx} className="p-2 bg-gray-800 rounded">
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
}
