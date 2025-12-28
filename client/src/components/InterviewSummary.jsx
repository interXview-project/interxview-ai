import { motion } from "framer-motion";

export default function InterviewSummary({
  totalQuestions = 5,
  avgScore = 7.5,
  suggestions = [
    "Improve details in technical explanations",
    "Provide real examples when answering",
    "Structure your answers more clearly"
  ],
  onRestart
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center p-10 mt-20 bg-gradient-to-br from-[#0a1628] to-[#1b233d] rounded-3xl shadow-2xl w-full max-w-2xl mx-auto"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
        🎉 Interview Completed
      </h1>

      <p className="text-lg sm:text-xl text-gray-300 mb-1">
        Total Questions: <span className="font-semibold text-white">{totalQuestions}</span>
      </p>

      <p className="text-lg sm:text-xl text-gray-300 mb-6">
        Average Score: <span className="font-semibold text-yellow-400">{avgScore} / 10</span>
      </p>

      <div className="text-left w-full">
        <h2 className="text-2xl font-semibold mb-3 text-blue-400 drop-shadow-md">
          💡 Suggestions / Weak Areas
        </h2>
        <ul className="space-y-2 text-gray-200 text-md sm:text-lg">
          {suggestions.map((s, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-yellow-400">•</span> {s}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onRestart}
        className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl text-white font-semibold text-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
      >
        🔄 Restart Interview
      </button>
    </motion.div>
  );
}
