import { CheckCircleIcon, DocumentTextIcon, CpuChipIcon, LanguageIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";

const getBarColor = (score) => {
  if (score >= 85) return "bg-green-500";
  if (score >= 70) return "bg-blue-500";
  return "bg-yellow-500";
};

export default function AnalysisSection({ file, data }) {

  const analysisData = data || [
    {
      title: "Structure & Formatting",
      score: 78,
      icon: DocumentTextIcon,
    },
    {
      title: "Content Quality",
      score: 66,
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "Skills Match",
      score: 84,
      icon: CpuChipIcon,
    },
    {
      title: "ATS Compatibility",
      score: 71,
      icon: CheckCircleIcon,
    },
    {
      title: "Language & Tone",
      score: 90,
      icon: LanguageIcon,
    },
  ];

  const averageScore = Math.round(
    analysisData.reduce((acc, item) => acc + item.score, 0) / analysisData.length
  );

  return (
    <div className="mb-16">
      {/* Title */}
      <h2 className="text-white text-2xl font-bold mb-2 text-center">
        CV Analysis Results
      </h2>

      {/* Uploaded File Name */}
      {file && (
        <p className="text-center text-sm text-white/70 mb-2">
          Uploaded File: <span className="text-[#4F7CFF] font-semibold">{file.name}</span>
        </p>
      )}

      {/* Average Score */}
      <p className="text-center text-sm text-white/70 mb-6">
        Overall CV Score:{" "}
        <span className="text-[#4F7CFF] font-semibold">
          {averageScore}%
        </span>
      </p>

      {/* Main Container */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {analysisData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index}>
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#4F7CFF]" />
                    <span className="text-white text-sm font-medium">
                      {item.title}
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-white">
                    {item.score}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getBarColor(item.score)} transition-all duration-700`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-gray-300 text-lg">Overall ATS Evaluation Score</p>

        <div className="flex gap-2 mt-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`text-3xl ${i <= stars ? "text-yellow-400" : "text-gray-600"
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
// import {CheckCircleIcon, DocumentTextIcon,CpuChipIcon,LanguageIcon, ClipboardDocumentCheckIcon,
// } from "@heroicons/react/24/solid";

// // this data will come from AI API response
// const DATA = [
//   {
//     title: "Structure & Formatting",
//     score: 78,
//     icon: DocumentTextIcon,
//   },
//   {
//     title: "Content Quality",
//     score: 66,
//     icon: ClipboardDocumentCheckIcon,
//   },
//   {
//     title: "Skills Match",
//     score: 84,
//     icon: CpuChipIcon,
//   },
//   {
//     title: "ATS Compatibility",
//     score: 71,
//     icon: CheckCircleIcon,
//   },
//   {
//     title: "Language & Tone",
//     score: 90,
//     icon: LanguageIcon,
//   },
// ];

// // score color logic
// const getBarColor = (score) => {
//   if (score >= 85) return "bg-green-500";
//   if (score >= 70) return "bg-blue-500";
//   return "bg-yellow-500";
// };

// export default function AnalysisSection() {
//   const averageScore = Math.round(
//     DATA.reduce((acc, item) => acc + item.score, 0) / DATA.length
//   );

//   return (
//     <div className="mb-16">
//       {/* Title */}
//       <h2 className="text-white text-2xl font-bold mb-2 text-center">
//         CV Analysis Results
//       </h2>

//       {/* Average Score */}
//       <p className="text-center text-sm text-white/70 mb-6">
//         Overall CV Score:{" "}
//         <span className="text-[#4F7CFF] font-semibold">
//           {averageScore}%
//         </span>
//       </p>

//       {/* Main Container */}
//       <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {DATA.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div key={index}>
//                 {/* Header */}
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center gap-2">
//                     <Icon className="w-4 h-4 text-[#4F7CFF]" />
//                     <span className="text-white text-sm font-medium">
//                       {item.title}
//                     </span>
//                   </div>

//                   <span className="text-sm font-semibold text-white">
//                     {item.score}%
//                   </span>
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="h-2 bg-white/10 rounded-full overflow-hidden">
//                   <div
//                     className={`h-full ${getBarColor(
//                       item.score
//                     )} transition-all duration-700`}
//                     style={{ width: `${item.score}%` }}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
