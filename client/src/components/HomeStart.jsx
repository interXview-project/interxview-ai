import React from "react";

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-b from-[#050B1E] via-[#071A2E] to-[#0B2B4A] text-white py-28 px-6">
            <div className="max-w-5xl mx-auto text-center">

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Ready to update your resume and{" "}
                    <span className="text-[#4F7CFF]">boost your employability?</span>
                </h1>

                {/* Description */}
                <p className="mt-6 text-lg text-[#A5B4C7] max-w-3xl mx-auto leading-relaxed">
                    Join thousands of candidates who have improved their resumes and
                    enhanced their job readiness using InterXview-AI&apos;s advanced
                    resume analyzer.
                </p>

                {/* Button */}
                <div className="mt-10">
                    <button
                        className="
    bg-[#4F7CFF]
    px-9 py-4
    rounded-full
    flex items-center gap-2 mx-auto
    text-white font-semibold
    transition-all duration-300
    shadow-none
    hover:shadow-[0_0_25px_rgba(79,124,255,0.7)]
  "
                    >
                        Start your trial
                        <span className="text-xl">→</span>
                    </button>

                </div>

                {/* Features */}
                <div className="mt-14 flex flex-col md:flex-row justify-center gap-10 text-sm text-[#A5B4C7]">
                    <div className="flex items-center gap-2">
                        <span className="text-sky-400 text-lg">✔</span>
                        Free trial – no fees
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sky-400 text-lg">✔</span>
                        Full access to all features
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sky-400 text-lg">✔</span>
                        Unlimited scans and enhancements
                    </div>
                </div>
            </div>
        </section>
    );
}
