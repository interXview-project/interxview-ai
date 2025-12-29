// client/src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { User, Trophy, Download, Edit, BarChart, X, Save } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Guest User",
    email: "guest@example.com",
    role: "Frontend Developer",
  });

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (err) {
        console.error("Invalid user data:", err);
      }
    }
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
  });

  useEffect(() => {
    setForm(user);
  }, [user]);

  const handleSave = () => {
    setUser(form);
    localStorage.setItem("user", JSON.stringify(form));
    setIsEditing(false);
  };

  const stats = [
    { label: "Total Interviews", value: 8, icon: Trophy },
    { label: "Avg Score", value: "78%", icon: BarChart },
    { label: "Best Score", value: "92%", icon: Trophy },
  ];

  const recent = [
    { date: "12 Jan", role: "Frontend", type: "Technical", score: "78%" },
    { date: "03 Jan", role: "Full-Stack", type: "Behavioral", score: "92%" },
    { date: "30 Dec", role: "DevOps", type: "Technical", score: "70%" },
  ];

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Interview Report", 20, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${user.name}`, 20, 40);
    doc.text(`Total Interviews: ${stats[0].value}`, 20, 55);
    doc.text(`Average Score: ${stats[1].value}`, 20, 70);
    doc.text(`Best Score: ${stats[2].value}`, 20, 85);
    doc.save("interview-report.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#0a1628] text-white">
      <main className="flex-1 px-6 lg:px-12 py-10 mt-20 pb-8">
        {/* ================= PROFILE HEADER ================= */}
        <section className="mb-10 flex items-center gap-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 rounded-full bg-[#0ea5e9]/20 border border-[#0ea5e9]/40 flex items-center justify-center shadow-md"
          >
            <User size={40} className="text-[#0ea5e9]" />
          </motion.div>

          <div>
            <h2 className="text-2xl font-semibold text-white">{user.name}</h2>
            <p className="text-slate-300">{user.email}</p>
            <p className="text-slate-400 text-sm">{user.role}</p>
            {user.email === "guest@example.com" && (
              <span className="text-xs text-slate-400 italic">
                Showing example profile (not logged in)
              </span>
            )}
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="ml-auto bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl border border-slate-700 flex items-center gap-2"
          >
            <Edit size={16} />
            Edit Profile
          </button>
        </section>

        {/* ================= STATS ================= */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0f2847]/50 border border-slate-700 rounded-2xl p-5 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <s.icon size={16} className="text-[#0ea5e9]" />
                {s.label}
              </div>
              <span className="text-xl font-semibold text-white">{s.value}</span>
            </motion.div>
          ))}
        </section>

        {/* ================= RECENT INTERVIEWS ================= */}
        <section className="bg-[#0f2847]/50 border border-slate-700 rounded-2xl p-6 mb-10">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Interviews</h3>

          <table className="w-full text-sm text-slate-300">
            <thead className="text-slate-400">
              <tr className="text-left">
                <th className="pb-2">Date</th>
                <th className="pb-2">Role</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Score</th>
              </tr>
            </thead>

            <tbody>
              {recent.map((r, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="border-t border-slate-700 hover:bg-[#1a3a5c] transition-all cursor-pointer"
                >
                  <td className="py-2">{r.date}</td>
                  <td className="py-2">{r.role}</td>
                  <td className="py-2">{r.type}</td>
                  <td className="py-2 font-semibold">{r.score}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ================= DOWNLOAD BUTTON ================= */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="bg-[#0ea5e9] hover:bg-[#0284c7] px-6 py-3 rounded-xl flex items-center gap-2 shadow-md text-white"
        >
          <Download size={18} />
          Download Last Report
        </motion.button>

        {/* ================= EDIT MODAL ================= */}
        {isEditing && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-[380px] space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">Edit Profile</h3>
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-slate-300 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <input
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none text-white"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Name"
              />

              <input
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none text-white"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
              />

              <input
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none text-white"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                placeholder="Role"
              />

              <button
                onClick={handleSave}
                className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] py-2 rounded-lg flex items-center justify-center gap-2 text-white"
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
