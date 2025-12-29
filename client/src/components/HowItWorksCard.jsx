export default function HowItWorksCard({ icon, title, description }) {
  return (
    <div
      className="
        bg-[#F5F5F5]       /* Light Gray background */
        rounded-2xl
        p-8
        text-left
        border border-slate-200
        shadow-[0_18px_45px_rgba(5,11,30,0.08)]
        transition-all duration-300
        hover:shadow-[0_0_30px_rgba(30,144,255,0.18)] /* Blue hover shadow */
      "
    >
      {/* Icon */}
      <div
        className="
          w-14 h-14
          flex items-center justify-center
          rounded-xl
          bg-white          /* White background for icon circle */
          text-[#1E90FF]    /* Blue icon color */
          mb-6
          shadow-md
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-[#2F2F2F]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#2F2F2F] leading-relaxed opacity-80">
        {description}
      </p>
    </div>
  );
}
