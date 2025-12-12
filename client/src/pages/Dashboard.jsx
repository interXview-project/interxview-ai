import React from "react";
import { BarChart3, Clock, FileText, Award, RefreshCcw } from "lucide-react";

export default function Dashboard() {
  // ================= DATA =================
  const stats = [
    { label: "Total Interviews", value: "12", sub: "This month", icon: BarChart3 },
    { label: "Average Score", value: "7.8 / 10", sub: "Across all interviews", icon: Award },
    { label: "Time Spent", value: "3.2 hrs", sub: "On practice", icon: Clock },
    { label: "Reports Generated", value: "5", sub: "Downloadable", icon: FileText },
  ];

  const recentActivity = [
    { name: "Frontend Interview", score: "8.5" },
    { name: "Behavioral Round", score: "7.2" },
    { name: "Technical Full Stack", score: "6.8" },
  ];

  // ================= CLASSES =================
  const container = "mt-24 px-6 lg:px-12 text-white";
  const cardClass = "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-[#3A7BFF]/30 transition-all";
  const buttonClass = "px-6 py-3 rounded-xl bg-[#3A7BFF] hover:bg-[#2E6FE0] shadow-lg flex items-center gap-2 mx-auto transition-all";

  // ================= JSX =================
  return (
    <main className={container}>
      {/* ================= HEADER ================= */}
      <section className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Dashboard</h1>
        <p className="text-gray-400">Overview of your interview performance and activity.</p>
      </section>

      {/* ================= STATS CARDS ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((s, i) => (
          <div key={i} className={cardClass}>
            <div className="flex items-center justify-between">
              <h2 className="text-gray-300 text-sm">{s.label}</h2>
              <s.icon className="text-[#3A7BFF] w-5 h-5" />
            </div>
            <p className="text-3xl font-bold mt-3">{s.value}</p>
            <p className="text-gray-500 mt-1 text-sm">{s.sub}</p>
          </div>
        ))}
      </section>

      {/* ================= RECENT ACTIVITY ================= */}
      <section className={`${cardClass} p-6 mb-8`}>
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-3 text-gray-300">
          {recentActivity.map((a, i) => (
            <li key={i} className={`flex justify-between ${i !== recentActivity.length - 1 ? "border-b border-white/5 pb-2" : ""}`}>
              <span>{a.name}</span>
              <span className="text-[#3A7BFF]">Score: {a.score}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= REFRESH BUTTON ================= */}
      <div className="text-center">
        <button className={buttonClass}>
          <RefreshCcw size={18} /> Refresh Data
        </button>
      </div>
    </main>
  );
}
