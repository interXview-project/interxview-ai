export function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      className={`
        w-full max-w-[400px] h-[50px]
        bg-[#0ea5e9]
        rounded-2xl
        text-white text-center
        shadow-[0_0_12px_rgba(14,165,233,0.4)]
        hover:bg-[#0284c7] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(14,165,233,0.6)]
        active:scale-[0.98]
        transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
