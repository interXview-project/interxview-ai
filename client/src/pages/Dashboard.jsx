import React from "react";
import { BarChart3, Clock, FileText, Award, RefreshCcw } from "lucide-react";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <main className="mt-24 px-6 lg:px-12 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Dashboard</h1>
        <p className="text-gray-400">
          Overview of your interview performance and activity.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {/* Total Interviews */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-[#3A7BFF]/30 transition-all">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-300 text-sm">Total Interviews</h2>
            <BarChart3 className="text-[#3A7BFF] w-5 h-5" />
          </div>
          <p className="text-3xl font-bold mt-3">12</p>
          <p className="text-gray-500 mt-1 text-sm">This month</p>
        </div>

        {/* Avg Score */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-[#3A7BFF]/30 transition-all">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-300 text-sm">Average Score</h2>
            <Award className="text-[#3A7BFF] w-5 h-5" />
          </div>
          <p className="text-3xl font-bold mt-3">7.8 / 10</p>
          <p className="text-gray-500 mt-1 text-sm">Across all interviews</p>
        </div>

        {/* Time Spent */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-[#3A7BFF]/30 transition-all">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-300 text-sm">Time Spent</h2>
            <Clock className="text-[#3A7BFF] w-5 h-5" />
          </div>
          <p className="text-3xl font-bold mt-3">3.2 hrs</p>
          <p className="text-gray-500 mt-1 text-sm">On practice</p>
        </div>

        {/* Reports */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-[#3A7BFF]/30 transition-all">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-300 text-sm">Reports Generated</h2>
            <FileText className="text-[#3A7BFF] w-5 h-5" />
          </div>
          <p className="text-3xl font-bold mt-3">5</p>
          <p className="text-gray-500 mt-1 text-sm">Downloadable</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex justify-between border-b border-white/5 pb-2">
            <span>Frontend Interview</span>
            <span className="text-[#3A7BFF]">Score: 8.5</span>
          </li>
          <li className="flex justify-between border-b border-white/5 pb-2">
            <span>Behavioral Round</span>
            <span className="text-[#3A7BFF]">Score: 7.2</span>
          </li>
          <li className="flex justify-between">
            <span>Technical Full Stack</span>
            <span className="text-[#3A7BFF]">Score: 6.8</span>
          </li>
        </ul>
      </div>

      {/* Refresh Button */}
      <div className="text-center">
        <button className="px-6 py-3 rounded-xl bg-[#3A7BFF] hover:bg-[#2E6FE0] shadow-lg flex items-center gap-2 mx-auto transition-all">
          <RefreshCcw size={18} /> Refresh Data
        </button>
      </div>
      <Footer/>
    </main>
  );
}
