import {CheckCircleIcon, DocumentTextIcon, CpuChipIcon, LanguageIcon, ClipboardDocumentCheckIcon} from "@heroicons/react/24/solid";

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
