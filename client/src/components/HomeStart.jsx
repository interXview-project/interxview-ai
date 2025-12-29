import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-[#1a3a5c] text-white py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to update your resume and{" "}
          <span className="text-[#0ea5e9]">boost your employability?</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Join thousands of candidates who have improved their resumes and
          enhanced their job readiness using InterXview-AI&apos;s advanced
          resume analyzer.
        </p>

        {/* Button */}
        <div className="mt-10">
          <Link
            to="/cv-boost"
            className="
              inline-flex
              bg-[#0ea5e9]
              px-9 py-4
              rounded-full
              items-center gap-2
              text-white font-semibold
              transition-all duration-300
              shadow-none
              hover:bg-[#0284c7]
              hover:shadow-[0_0_25px_rgba(14,165,233,0.6)]
            "
          >
            Start your trial
            <span className="text-xl">→</span>
          </Link>
        </div>

        {/* Features */}
        <div className="mt-14 flex flex-col md:flex-row justify-center gap-10 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-[#0ea5e9] text-lg">✔</span>
            Free trial – no fees
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#0ea5e9] text-lg">✔</span>
            Full access to all features
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#0ea5e9] text-lg">✔</span>
            Unlimited scans and enhancements
          </div>
        </div>
      </div>
    </section>
  );
}
