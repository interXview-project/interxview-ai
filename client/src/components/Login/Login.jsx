import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/INTERVIEW_FLAG.png";

export default function Login() {
  return (
    <div className="grid min-h-screen w-full grid-cols-12 overflow-hidden bg-[#EFECE3]">

      {/* ------------------ Left Section ------------------ */}
      <div className="col-span-7 flex flex-col justify-between p-32 text-black">
        {/* Logo */}
        <img src={logo} alt="InterXview Logo" className="h-24 w-24 object-contain" />

        {/* Heading & Description */}
        <div>
          <h1 className="text-7xl font-bold leading-tight mb-8">
            Start your journey to confident, stress-free interviews.
          </h1>
          <p className="text-xl mb-6">You do not have an account?</p>

          {/* Buttons */}
          <div className="flex gap-6">
           <Link
    to="/signup"   // الرابط لصفحة Sign Up
    className="px-6 py-3 rounded-lg text-white font-semibold shadow"
    style={{ backgroundColor: "#4A70A9" }}
  >
    Create New User
  </Link>
          </div>
        </div>
      </div>

      {/* ------------------ Right Section ------------------ */}
      <div
        className="col-span-5 flex items-center justify-center rounded-tl-[44px] relative"
        style={{ backgroundColor: "#4A70A9" }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-transparent rounded-tl-[44px] z-0"></div>

        <div className="z-10 w-full max-w-lg p-8 sm:p-10 mx-auto">
          <h2 className="text-4xl font-bold text-black mb-10">Hi, Welcome! 👋</h2>

          {/* Email & Password Inputs */}
          <input
            type="email"
            placeholder="Email"
            className="mb-6 w-full border-b border-gray-300 px-4 py-5 text-lg font-medium text-slate-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-6 w-full border-b border-gray-300 px-4 py-5 text-lg font-medium text-slate-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between mb-10">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="form-checkbox text-indigo-600" />
              <span className="font-medium" style={{ color: "#EFECE3" }}>Remember me</span>
            </label>
            <a href="#" className="font-medium hover:underline" style={{ color: "#EFECE3" }}>
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            className="w-full py-4 mb-6 rounded-full text-white font-bold hover:-translate-y-1 hover:shadow-lg transition-transform"
            style={{ background: "linear-gradient(to right, #4A70A9, #8FABD4)", border: "2px solid #EFECE3" }}
          >
            Login
          </button>

          {/* OR Separator */}
          <div className="flex items-center justify-center mb-6">
            <span className="w-1/5 border-b border-[#EFECE3]"></span>
            <span className="mx-2 text-xs" style={{ color: "#EFECE3" }}>OR</span>
            <span className="w-1/5 border-b border-[#EFECE3]"></span>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm" style={{ color: "#EFECE3" }}>
            Don’t have an account?{" "}
            <Link to="/signup" className="hover:underline" style={{ color: "#EFECE3" }}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
