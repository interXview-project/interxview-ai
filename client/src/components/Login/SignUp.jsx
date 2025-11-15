import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/INTERVIEW_FLAG.png";

export default function SignUp() {
  return (
    <div className="grid min-h-screen w-full grid-cols-12 overflow-hidden bg-[#EFECE3]">

      {/* ------------------ Left Section ------------------ */}
      <div className="col-span-7 flex flex-col justify-between p-32 text-black">
        <img src={logo} alt="InterXview Logo" className="h-24 w-24 object-contain" />
        <div>
          <h1 className="text-7xl font-bold leading-tight mb-8">
            Join InterXview & Boost Your Interview Skills
          </h1>
          <p className="text-xl mb-6">Already have an account?</p>

          <div className="flex gap-6">
            <Link
              to="/"
              className="px-6 py-3 rounded-lg text-white font-semibold shadow"
              style={{ backgroundColor: "#4A70A9" }}
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------ Right Section ------------------ */}
      <div
        className="col-span-5 flex items-center justify-center rounded-tl-[44px] rounded-bl-[44px] relative"
        style={{ backgroundColor: "#4A70A9" }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-transparent rounded-tl-[44px] z-0"></div>

        <div className="z-10 w-full max-w-lg p-8 sm:p-10 mx-auto">
          <h2 className="text-4xl font-bold text-black mb-10">Create Your Account</h2>

          {/* Form Inputs */}
          <input
            type="text"
            placeholder="Full Name"
            className="mb-6 w-full border-b border-gray-300 px-4 py-5 text-lg font-medium text-slate-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
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

          {/* Sign Up Button */}
          <button
            className="w-full py-4 mb-6 rounded-full text-white font-bold hover:-translate-y-1 hover:shadow-lg transition-transform"
            style={{ background: "linear-gradient(to right, #4A70A9, #8FABD4)", border: "2px solid #EFECE3" }}
          >
            Sign Up
          </button>

          {/* Back to Login */}
          <p className="text-center text-sm" style={{ color: "#EFECE3" }}>
            Already have an account?{" "}
            <Link to="/" className="hover:underline" style={{ color: "#EFECE3" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
