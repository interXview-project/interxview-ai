// this data will come from AI API response
const DATA = [
  { title: "Structure & Formatting", score: 78 },
  { title: "Content Quality", score: 66 },
  { title: "Skills Match", score: 84 },
  { title: "ATS Compatibility", score: 71 },
  { title: "Language & Tone", score: 90 },
];

export default function AnalysisSection() {
  return (
    <div className="mb-14">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">
        CV Analysis Results
      </h2>

      {DATA.map((item, index) => (
        <div
          key={index}
          className="bg-white/5 border border-white/10 rounded-xl p-5 mb-4"
        >
          <div className="flex justify-between mb-2">
            <span className="text-white">{item.title}</span>
            <span className="text-[#4F7CFF]">{item.score}%</span>
          </div>

          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4F7CFF]"
              style={{ width: `${item.score}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
