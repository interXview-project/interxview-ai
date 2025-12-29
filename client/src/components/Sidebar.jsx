import React from "react";
import {
  Briefcase,
  Target,
  Lightbulb,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function Card({ title, children, gradient }) {
  return (
    <div
      className={`flex flex-col gap-4 border p-5 rounded-2xl shadow-lg backdrop-blur-sm
      ${
        gradient
          ? "bg-gradient-to-br from-[#0ea5e9]/10 to-[#0284c7]/5 border-[#0ea5e9]/20"
          : "bg-white/5 border-slate-700"
      }`}
    >
      <div className="flex items-center gap-2 mb-2 text-white">{title}</div>
      {children}
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="space-y-4">
      {/* 🔥 Presentation Mode Banner */}
      <div className="border border-[#0ea5e9]/40 bg-[#0ea5e9]/10 rounded-2xl p-4 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0ea5e9]/10 blur-2xl animate-pulse"></div>

        <div className="relative flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-[#0ea5e9]" />
          <div>
            <p className="text-white font-semibold">Presentation Mode</p>
            <p className="text-slate-400 text-xs">
              Optimized for demo experience
            </p>
          </div>
        </div>

        {/* Controlled Badge */}
        <div className="mt-3 flex items-center gap-2 text-xs text-[#0ea5e9] bg-[#0ea5e9]/10 px-3 py-1 rounded-full border border-[#0ea5e9]/30 w-fit">
          <ShieldCheck className="w-4 h-4" />
          Controlled by System
        </div>
      </div>

      {/* Job Role */}
      <Card
        title={
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#0ea5e9]" />
            <span>Job Role</span>
          </div>
        }
      >
        <div className="px-4 py-3 rounded-xl bg-[#0f2847] border border-[#0ea5e9]/50 text-white flex justify-between shadow-lg shadow-[#0ea5e9]/20 animate-pulse">
          <span>Frontend Developer</span>
          <span className="text-[#0ea5e9] text-xs">Locked</span>
        </div>
        <p className="text-slate-400 text-xs mt-1">
          This interview is configured for a Frontend role
        </p>
      </Card>

      {/* Difficulty */}
      <Card
        title={
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[#0ea5e9]" />
            <span>Difficulty Level</span>
          </div>
        }
      >
        <div className="flex gap-2">
          <button
            className="flex-1 py-2 px-3 rounded-lg text-xs bg-[#0ea5e9] text-white shadow-lg shadow-[#0ea5e9]/50 animate-glow"
            disabled
          >
            Beginner
          </button>

          <button
            disabled
            className="flex-1 py-2 px-3 rounded-lg text-xs bg-[#1a3a5c] text-slate-400 cursor-not-allowed"
          >
            Intermediate
          </button>

          <button
            disabled
            className="flex-1 py-2 px-3 rounded-lg text-xs bg-[#1a3a5c] text-slate-400 cursor-not-allowed"
          >
            Advanced
          </button>
        </div>
        <p className="text-slate-400 text-xs mt-1">
          Beginner mode enabled for friendly interview experience
        </p>
      </Card>

      {/* Interview Type */}
      <Card
        title={
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#0ea5e9]" />
            <span>Interview Type</span>
          </div>
        }
      >
        <div className="flex gap-2">
          <button
            className="flex-1 py-2 px-3 rounded-lg text-xs bg-[#0ea5e9] text-white shadow-lg shadow-[#0ea5e9]/50 animate-glow"
            disabled
          >
            Technical
          </button>

          <button
            disabled
            className="flex-1 py-2 px-3 rounded-lg text-xs bg-[#1a3a5c] text-slate-400 cursor-not-allowed"
          >
            Behavioral
          </button>
        </div>

        <p className="text-slate-400 text-xs mt-1">
          Focused on technical questions only
        </p>
      </Card>

      {/* AI Tips */}
      <Card
        title={
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-[#0ea5e9]" />
            <span>AI Tips</span>
          </div>
        }
        gradient
      >
        <ul className="space-y-2 text-xs text-slate-300">
          <li>• Keep your answers short and clear</li>
          <li>• Mention tools & technologies when possible</li>
          <li>• Share small real examples from projects</li>
          <li>• Confidence matters — you’re doing great!</li>
        </ul>
      </Card>
    </div>
  );
}
