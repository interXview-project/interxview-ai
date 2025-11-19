import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#4A70A9] text-[#EFECE3] px-10 py-5 flex items-center justify-between">
      
      {/* Logo / Title */}
      <div className="text-2xl font-semibold tracking-wide">
        InterXview AI
      </div>

      {/* Links */}
      <div className="flex space-x-10 text-base">
        <Link
          to="/"
          className="hover:text-[#8FABD4] transition duration-200"
        >
          Home
        </Link>

        <Link
          to="/interview"
          className="hover:text-[#8FABD4] transition duration-200"
        >
          Interview
        </Link>

        <Link
          to="/cv-analyzer"
          className="hover:text-[#8FABD4] transition duration-200"
        >
          CV Analyzer
        </Link>

        <Link
          to="/login"
          className="hover:text-[#8FABD4] transition duration-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
