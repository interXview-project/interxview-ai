export function Input({ label, className = '', ...props }) {
  return (
    <div className="w-full max-w-[400px]">
      {label && (
        <label className="block mb-2 text-[#cbd5e1]">
          {label}
        </label>
      )}
      <input
        className={`
          w-full h-12 px-4
          bg-[#0f2847] 
          border border-[#334155]
          rounded-2xl
          text-[#cbd5e1] placeholder:text-[#94a3b8]
          focus:outline-none focus:border-[#0ea5e9]
          focus:shadow-[0_0_8px_rgba(14,165,233,0.35)]
          transition-all duration-300
          ${className}
        `}
        {...props}
      />
    </div>
  );
}
