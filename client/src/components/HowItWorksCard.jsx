export default function HowItWorksCard({ icon, title, description }) {
    return (
        <div
            className="
        bg-white
        rounded-2xl
        p-8
        text-left
        border border-slate-100
        shadow-[0_18px_45px_rgba(5,11,30,0.08)]
        transition-all duration-300
        hover:shadow-[0_0_30px_rgba(79,124,255,0.18)]
      "
        >
            {/* Icon */}
            <div
                className="
          w-14 h-14
          flex items-center justify-center
          rounded-xl
          bg-[#050B1E]
          text-[#4F7CFF]
          mb-6
          shadow-md
        "
            >
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 text-[#050B1E]">
                {title}
            </h3>

            {/* Description */}
            <p className="text-[#A5B4C7] leading-relaxed">
                {description}
            </p>
        </div>
    );
}