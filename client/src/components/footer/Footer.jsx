import { useState } from "react";

export default function Footer() {
  const [content, setContent] = useState("");

  const handleClick = (info) => {
    setContent(info);
  };

  return (
    <footer
      className="flex items-center justify-center mt-24"
      style={{ backgroundColor: "#EFECE3", minHeight: "70vh" }}
    >
      <div className="w-full max-w-6xl px-4 py-8 lg:px-16 lg:py-16 text-gray-800">

        {/* Horizontal Line في بداية الفوتر ممتد */}
        <div className="w-full border-t border-gray-300 mb-12"></div>

        {/* Contact + Services & Company side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Section */}
          <div className="text-center lg:text-left">
            <p>
              <span className="text-xs tracking-wide uppercase text-gray-500">Call us</span>
              <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                0781782783
              </a>
            </p>
            <ul className="mt-4 space-y-1 text-sm text-gray-700">
              <li>Sunday to Thursday: 10am - 5pm</li>
              <li>Weekend: Friday</li>
            </ul>
            <ul className="mt-6 flex justify-center lg:justify-start gap-4">
              {["Facebook","Instagram","Twitter","GitHub","Dribbble"].map((name) => (
                <li key={name}>
                  <a href="#" className="text-gray-700 hover:opacity-75">
                    <span className="sr-only">{name}</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Company Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center lg:text-left">
            {/* Services */}
            <div>
              <p className="font-medium text-gray-900 mb-4">Services</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="hover:text-[#1E90FF]" onClick={() => handleClick("Interactive text and voice interviews to practice and improve your skills.")}>
                    Interactive Text Interviews
                  </button>
                </li>
                <li>
                  <button className="hover:text-[#1E90FF]" onClick={() => handleClick("Voice interview practice with AI-generated questions and feedback.")}>
                    Voice Interview Practice
                  </button>
                </li>
                <li>
                  <button className="hover:text-[#1E90FF]" onClick={() => handleClick("AI evaluates your performance and provides scoring.")}>
                    AI Performance Evaluation
                  </button>
                </li>
                <li>
                  <button className="hover:text-[#1E90FF]" onClick={() => handleClick("Receive personalized feedback and improvement tips.")}>
                    Personalized Feedback & Tips
                  </button>
                </li>
                <li>
                  <button className="hover:text-[#1E90FF]" onClick={() => handleClick("Upload your CV for AI analysis and suggestions.")}>
                    CV Upload & Smart Analysis
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="font-medium text-gray-900 mb-4">Company</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="hover:text-[#1E90FF]" onClick={() => handleClick("InterXview is an intelligent virtual interviewing system using AI, helping users train, improve performance, and get accurate assessments.")}>
                    About
                  </button>
                </li>
                <li>
                  <button className="hover:text-[#1E90FF]" onClick={() => handleClick("Team Members:\nBara’a: Backend and Database Development, AI Integration, Team Leader\nDuha: User Interface and User Experience Design\nHammam: Backend and Database Development\nMohammad: User Interface and User Experience Design")}>
                    Meet the Team
                  </button>
                </li>
                <li>
                  <button className="hover:text-[#1E90FF]" onClick={() => handleClick("Our system allows users to create accounts, track progress, review past performance, and receive personalized feedback.")}>
                    Accounts Review
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Display Content When Clicking */}
        {content && (
          <div className="mb-12 p-4 bg-gray-100 rounded text-gray-800" style={{ whiteSpace: "pre-line" }}>
            {content}
          </div>
        )}

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <ul className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <li>
                <button className="hover:opacity-75" onClick={() => handleClick("By using this site, the user agrees to terms and conditions including content usage and legal responsibilities.")}>
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button className="hover:opacity-75" onClick={() => handleClick("We respect your privacy. Data is collected only to improve your experience, and is not shared without permission.")}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:opacity-75" onClick={() => handleClick("The website uses cookies to improve performance, personalize content, and allow easy preference control.")}>
                  Cookies
                </button>
              </li>
            </ul>
            <p className="text-xs text-gray-500">© 2025 InterXview. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
