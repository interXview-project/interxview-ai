export default function AnalysisSection({ analysis }) {
  if (!analysis) return null;

  const getScoreColor = () => {
    if (analysis.score >= 80)
      return "text-green-400 border-green-500 shadow-[0_0_25px_rgba(16,185,129,.4)]";
    if (analysis.score >= 50)
      return "text-yellow-400 border-yellow-400 shadow-[0_0_25px_rgba(234,179,8,.4)]";
    return "text-red-400 border-red-400 shadow-[0_0_25px_rgba(239,68,68,.4)]";
  };

  const getBarColor = (i) => {
    return i % 2 === 0 ? "bg-[#4F7CFF]" : "bg-[#22c55e]";
  };

  const stars = Math.round((analysis.score / 100) * 5);

  return (
    <div className="max-w-4xl mx-auto text-white">
      {/* SCORE CARD */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <div
          className={`w-48 h-48 rounded-full border-4 flex items-center justify-center text-5xl font-bold ${getScoreColor()}`}
        >
          {analysis.score}%
        </div>
        <p className="text-gray-300 text-lg">Overall ATS Evaluation Score</p>

        <div className="flex gap-2 mt-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`text-3xl ${
                i <= stars ? "text-yellow-400" : "text-gray-600"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* STRENGTHS */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-green-400">🔥 Strengths</h2>

        {analysis.strengths.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {analysis.strengths.map((s, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 p-4 rounded-xl"
              >
                <p className="text-gray-200">✔️ {s}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No strengths detected.</p>
        )}
      </div>

      {/* WEAKNESSES */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-red-400">
          ⚠️ Issues Found
        </h2>

        {analysis.weaknesses.length > 0 ? (
          <div className="space-y-2">
            {analysis.weaknesses.map((w, i) => (
              <div
                key={i}
                className="bg-red-500/10 border border-red-400/40 p-3 rounded-xl"
              >
                ❌ {w}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">Looks perfect 🎉</p>
        )}
      </div>

      {/* SUGGESTIONS */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          🧠 Professional Recommendations
        </h2>

        {analysis.suggestions.length > 0 ? (
          <ul className="space-y-2">
            {analysis.suggestions.map((s, i) => (
              <li
                key={i}
                className="bg-white/10 border border-white/20 p-3 rounded-xl"
              >
                💡 {s}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No recommendations! Great CV 👍</p>
        )}
      </div>
    </div>
  );
}
