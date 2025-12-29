import React from "react";

// Footer layout notes:
// - Inner container is `max-w-7xl mx-auto px-6` so the footer width and padding
//   match across all pages (consistent with Home page).
// - `mt-auto` ensures the footer sits at the bottom when wrapped by a flex column.

export default function Footer() {
  return (
    <footer className="w-full bg-[#071A2E] text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto w-full px-6 py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sky-500 text-white font-bold rounded-md w-10 h-10 flex items-center justify-center">
                X
              </div>
              <h2 className="text-white text-lg font-semibold">InterXview-AI</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering job seekers with AI-driven interview preparation and CV
              optimization tools.
            </p>

            <div className="flex gap-3 mt-4">
              <div className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center">
                🐦
              </div>
              <div className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center">
                💼
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-3">Working Hours</h3>
            <p className="text-sm">Sunday to Thursday: 10am – 5pm</p>
            <p className="text-sm mt-2">Weekend: Friday</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Meet the Team</li>
              <li className="hover:text-white cursor-pointer">Accounts Review</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto w-full px-6 py-6 flex flex-col md:flex-row justify-between gap-4">
            <p>© 2025 InterXview-AI. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
