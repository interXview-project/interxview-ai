import { Link } from "react-router-dom";

export default function Navbar() {
  const links = ["Home", "Interview", "CV Analyzer", "Login"];

  return (
    <nav className="bg-gradient-to-r from-[#0a1628] via-[#0f2847] to-[#1a3a5c] text-slate-300 px-10 py-5 flex items-center justify-between shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-semibold tracking-wide text-white">
        InterXview AI
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-10 text-base">
        {links.map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : "/" + item.toLowerCase().replace(" ", "-")}
            className="group relative flex flex-col items-center gap-0.5 transition-transform duration-300 hover:scale-105"
          >
            {/* Link Text */}
            <span className="text-slate-300 group-hover:text-[#0ea5e9] transition-colors duration-300 uppercase font-semibold tracking-wide">
              {item}
            </span>
            {/* Hover underline */}
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#0ea5e9] group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
