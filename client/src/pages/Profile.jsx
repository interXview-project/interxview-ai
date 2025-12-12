import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { User, Trophy, Download, Edit, BarChart, X, Save } from "lucide-react";
import { motion } from "framer-motion";

export default function Profile() {
  // ================= STATE =================
  const [user, setUser] = useState({
    name: "Guest User",
    email: "guest@example.com",
    role: "Frontend Developer",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(user);

  // ================= LOAD USER =================
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      try { setUser(JSON.parse(saved)); } 
      catch (err) { console.error("Invalid user data:", err); }
    }
  }, []);

  useEffect(() => setForm(user), [user]);

  // ================= DATA =================
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

  // ================= FUNCTIONS =================
  const handleSave = () => {
    setUser(form);
    localStorage.setItem("user", JSON.stringify(form));
    setIsEditing(false);
  };

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

  // ================= CLASSES =================
  const container = "flex flex-col min-h-screen w-full bg-[#0A0E27] text-white px-6 lg:px-12 py-10 mt-20";
  const buttonPrimary = "bg-[#3A7BFF] hover:bg-[#2E6FE0] px-6 py-3 rounded-xl flex items-center gap-2 shadow-md";
  const inputClass = "w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm outline-none";

  return (
    <main className={container}>
      {/* ================= PROFILE HEADER ================= */}
      <section className="mb-10 flex items-center gap-6">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 rounded-full bg-[#3A7BFF]/20 border border-[#3A7BFF]/40 flex items-center justify-center shadow-md">
          <User size={40} className="text-[#3A7BFF]" />
        </motion.div>

        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-300">{user.email}</p>
          <p className="text-gray-400 text-sm">{user.role}</p>
          {user.email === "guest@example.com" && (
            <span className="text-xs text-gray-400 italic">Showing example profile (not logged in)</span>
          )}
        </div>

        <button onClick={() => setIsEditing(true)}
          className="ml-auto bg-[#1A2440] hover:bg-[#24345B] px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
          <Edit size={16} /> Edit Profile
        </button>
      </section>

      {/* ================= STATS ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <s.icon size={16} className="text-[#3A7BFF]" /> {s.label}
            </div>
            <span className="text-xl font-semibold">{s.value}</span>
          </motion.div>
        ))}
      </section>

      {/* ================= RECENT INTERVIEWS ================= */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4">Recent Interviews</h3>
        <table className="w-full text-sm">
          <thead className="text-gray-400">
            <tr className="text-left">
              <th className="pb-2">Date</th>
              <th className="pb-2">Role</th>
              <th className="pb-2">Type</th>
              <th className="pb-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((r, i) => (
              <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }}
                className="border-t border-white/10 hover:bg-white/5 transition-all cursor-pointer">
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
      <motion.button whileTap={{ scale: 0.95 }} onClick={handleDownload} className={buttonPrimary}>
        <Download size={18} /> Download Last Report
      </motion.button>

      {/* ================= EDIT MODAL ================= */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-[#1A2440] border border-white/10 rounded-2xl p-6 w-[380px] space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Edit Profile</h3>
              <button onClick={() => setIsEditing(false)} className="text-gray-300 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <input className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" />
            <input className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" />
            <input className={inputClass} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="Role" />

            <button onClick={handleSave} className="w-full bg-[#3A7BFF] hover:bg-[#2E6FE0] py-2 rounded-lg flex items-center justify-center gap-2">
              <Save size={16} /> Save Changes
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
