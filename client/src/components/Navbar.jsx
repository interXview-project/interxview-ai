import React, { useState } from "react";
import { Menu, X, LogIn, LogOut, User } from "lucide-react";
import logo from "../assets/logo-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ routes = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  //  REAL AUTH CHECK
  const isLoggedIn = !!localStorage.getItem("token");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0a1628] to-[#0a1628]/98 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0ea5e9]/30 rounded-full blur-2xl scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 relative z-10 drop-shadow-[0_0_8px_rgba(14,165,233,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(14,165,233,0.6)] transition-all duration-300"
              />
            </div>
            <span className="text-white font-semibold text-xl tracking-wide">
              InterXview AI
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-1 bg-[#0f2847]/50 rounded-full px-2 py-2 border border-white/5">
            {routes
              .filter((route) => !route.protected || isLoggedIn)
              .map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-slate-400 hover:text-white hover:bg-[#0ea5e9]/10 transition-all duration-200 px-4 py-3 rounded-xl border border-transparent hover:border-[#0ea5e9]/20 cursor-pointer"
                >
                  {name}
                </Link>
              ))}
          </div>

          {/* AUTH BUTTON (DESKTOP) */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="relative flex items-center gap-3 pl-3 pr-4 py-2.5 bg-gradient-to-r from-[#0f2847] to-[#1a3a5c] hover:from-[#1a3a5c] hover:to-[#0f2847] border border-[#0ea5e9]/30 rounded-full transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/0 via-[#0ea5e9]/10 to-[#0ea5e9]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-2 relative z-10">
                  <div className="bg-[#0ea5e9]/20 p-1.5 rounded-full">
                    <User size={16} className="text-[#0ea5e9]" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    Profile
                  </span>
                </div>
                <div className="w-px h-5 bg-[#0ea5e9]/30 relative z-10"></div>
                <LogOut size={16} className="text-[#0ea5e9] relative z-10" />
              </button>
            ) : (
              <Link
                to="/login"
                className="relative flex items-center gap-2 px-6 py-2.5 border-2 border-[#0ea5e9] text-[#0ea5e9] hover:text-white rounded-lg overflow-hidden group shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] transition-all duration-300 cursor-pointer"
              >
                <span className="absolute inset-0 bg-[#0ea5e9] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
                <LogIn size={18} className="relative z-10" />
                <span className="relative z-10">Login</span>
              </Link>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2.5 rounded-xl bg-[#0f2847]/50 border border-white/5 text-slate-400 hover:text-[#0ea5e9] hover:border-[#0ea5e9]/30 transition-all duration-300 cursor-pointer"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 pt-4 space-y-3 animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="bg-[#0f2847]/30 rounded-2xl p-4 border border-white/5 backdrop-blur-xl space-y-2">
              {routes
                .filter((route) => !route.protected || isLoggedIn)
                .map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-slate-400 hover:text-white hover:bg-[#0ea5e9]/10 transition-all duration-200 px-4 py-3 rounded-xl"
                  >
                    {name}
                  </Link>
                ))}
            </div>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#0f2847] to-[#1a3a5c] border border-[#0ea5e9]/30 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#0ea5e9]/20 p-2 rounded-full">
                    <User size={18} className="text-[#0ea5e9]" />
                  </div>
                  <span className="text-slate-300">Logout</span>
                </div>
                <LogOut size={18} className="text-[#0ea5e9]" />
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white rounded-2xl transition-all duration-300"
              >
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
