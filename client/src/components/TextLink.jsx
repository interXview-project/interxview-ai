import { ChevronLeft } from 'lucide-react';

export function TextLink({ onClick, children, showIcon = true }) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center gap-2
        text-[#0ea5e9]
        hover:shadow-[0_0_6px_rgba(14,165,233,0.3)]
        transition-all duration-300
        mt-4
      "
    >
      {showIcon && <ChevronLeft className="w-4 h-4" />}
      {children}
    </button>
  );
}
