import React from "react";
import { BarChart3, Clock, FileText, Award, RefreshCcw } from "lucide-react";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a1628]">
      <main className="flex-1 mt-24 px-6 lg:px-12 text-white pb-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2 text-white">Dashboard</h1>
          <p className="text-slate-400">
            Overview of your interview performance and activity.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { title: "Total Interviews", value: "12", icon: BarChart3, subtitle: "This month" },
            { title: "Average Score", value: "7.8 / 10", icon: Award, subtitle: "Across all interviews" },
            { title: "Time Spent", value: "3.2 hrs", icon: Clock, subtitle: "On practice" },
            { title: "Reports Generated", value: "5", icon: FileText, subtitle: "Downloadable" }
          ].map(({ title, value, icon: Icon, subtitle }) => (
            <div
              key={title}
              className="bg-[#0f2847]/50 backdrop-blur-sm border border-slate-700/20 rounded-2xl p-5 shadow-lg hover:shadow-[#0ea5e9]/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-slate-300 text-sm">{title}</h2>
                <Icon className="text-[#0ea5e9] w-5 h-5" />
              </div>
              <p className="text-3xl font-bold mt-3 text-white">{value}</p>
              <p className="text-slate-400 mt-1 text-sm">{subtitle}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-[#1a3a5c]/50 backdrop-blur-sm border border-slate-700/20 rounded-2xl p-6 shadow-lg mb-8">
          <h3 className="text-lg font-semibold mb-4 text-white">Recent Activity</h3>
          <ul className="space-y-3 text-slate-300">
            {[
              { task: "Frontend Interview", score: "8.5" },
              { task: "Behavioral Round", score: "7.2" },
              { task: "Technical Full Stack", score: "6.8" },
            ].map(({ task, score }) => (
              <li key={task} className="flex justify-between border-b border-slate-700/10 pb-2">
                <span>{task}</span>
                <span className="text-[#0ea5e9]">Score: {score}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Refresh Button */}
        <div className="text-center">
          <button className="px-6 py-3 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] shadow-lg flex items-center gap-2 mx-auto transition-all text-white">
            <RefreshCcw size={18} /> Refresh Data
          </button>
        </div>
      </main>

      <Footer bgColor="#0f2847" textColor="white" />
    </div>
  );
}
