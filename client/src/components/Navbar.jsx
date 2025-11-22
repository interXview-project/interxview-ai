import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#0a1628] via-[#0f2847] to-[#1a3a5c] text-slate-300 px-10 py-5 flex items-center justify-between shadow-lg">
  <div className="text-2xl font-semibold tracking-wide text-white">
    InterXview AI
  </div>

  <div className="flex space-x-10 text-base">
    {["Home", "Interview", "CV Analyzer", "Login"].map((item) => (
      <Link
        key={item}
        to={item === "Home" ? "/" : "/" + item.toLowerCase().replace(" ", "-")}
        className="group flex flex-col gap-0.5"
      >
        <span className="text-slate-300 group-hover:text-[#0ea5e9] transition-all duration-300">
          {item}
        </span>
        <div className="bg-[#0ea5e9] h-0.5 w-0 group-hover:w-full transition-all duration-300"></div>
      </Link>
    ))}
  </div>
</nav>
  );
}
