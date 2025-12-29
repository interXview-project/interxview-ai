import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo-removebg-preview.png";

export default function Footer() {
  const [selected, setSelected] = useState(null);

  const content = {
    About: `InterXview is an AI-powered platform that helps users prepare for job interviews through text or voice practice, real-time evaluation, and personalized feedback.

The system also includes an AI CV Analyzer that reviews resumes, scores each section, suggests improvements, and generates an enhanced version.

Our goal is to support job seekers with smart tools that improve confidence and performance.`,
    "Meet the Team": `Bara'a – Team Leader
Oversees planning, coordination, and project direction.

Duha
Designs UI/UX and ensures a smooth user experience.

Hammam
Builds backend features and AI evaluation modules.

Mohammad
Leads technical development and system integration.`,
    "Accounts Review": `Your account allows you to:

- Practice interviews (text or voice)
- Upload your CV for AI analysis
- Receive detailed scores and feedback
- Track progress on your dashboard
- Download an improved CV version

We keep your data secure and private.`,
    "Terms & Conditions": `By using InterXview you agree to:

- Use the platform for training and improvement purposes only
- Keep your account information private
- Allow us to analyze your data to provide feedback
- Not copy or redistribute platform content
- Understand that results do not guarantee hiring
- We may update these terms when needed.`,
    "Privacy Policy": `We collect basic account data, interview content, and uploaded CV files to generate feedback and improve the service.

Your data is encrypted, protected, and never shared with third parties.

You may request to view, update, or delete your information at any time.`,
    Cookies: `We use cookies to remember preferences, improve navigation, and enhance performance.

You can disable cookies in your browser, but some features may not work properly.`,
  };

  return (
    <footer className="w-full bg-[#071A2E] text-gray-400 mt-auto relative">
      <div className="max-w-7xl mx-auto w-full px-6 py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="InterXview-AI Logo" className="w-10 h-10 object-contain" />
              <h2 className="text-white text-lg font-semibold">InterXview-AI</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering job seekers with AI-driven interview preparation and CV
              optimization tools.
            </p>

            {/* Social Icons with square blurred background */}
            <div className="flex gap-3 mt-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 backdrop-blur-sm text-white text-2xl hover:bg-white/20 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 backdrop-blur-sm text-white text-2xl hover:bg-white/20 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-3">Working Hours</h3>
            <p className="text-sm">Saturday to Thursday: 10am – 5pm</p>
            <p className="text-sm mt-2">Weekend: Friday</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              {Object.keys(content).slice(0, 3).map((key) => (
                <li
                  key={key}
                  className="hover:text-white cursor-pointer"
                  onClick={() => setSelected(key)}
                >
                  {key}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom with clickable legal links */}
        <div className="border-t border-gray-700 mt-6">
          <div className="max-w-7xl mx-auto w-full px-6 py-6 flex flex-col md:flex-row justify-between gap-4">
            <p>© 2025 InterXview-AI. All rights reserved.</p>
            <div className="flex gap-6">
              {["Terms & Conditions", "Privacy Policy", "Cookies"].map((key) => (
                <span
                  key={key}
                  className="hover:text-white cursor-pointer"
                  onClick={() => setSelected(key)}
                >
                  {key}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal overlay */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#071A2E] text-white rounded-lg max-w-3xl w-full p-6 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold"
            >
              ×
            </button>
            <h4 className="text-xl font-semibold mb-4">{selected}</h4>
            <p className="whitespace-pre-line text-sm">{content[selected]}</p>
          </div>
        </div>
      )}
    </footer>
  );
}
