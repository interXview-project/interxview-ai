import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";
import PrimaryButton from "../components/common/PrimaryButton";
import TextLink from "../components/common/TextLink";
import AIArtwork from "../components/features/AIArtwork";

export default function SignupScreen({ onRegisterSuccess }) {
  // ================= STATES =================
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ================= VALIDATION =================
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // ================= SIGNUP FUNCTION =================
  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    // Input validations
    if (!name) return setError("Name is required.");
    if (!email) return setError("Email is required.");
    if (!password) return setError("Password is required.");
    if (!confirmPassword) return setError("Confirm Password is required.");
    if (name.length < 3) return setError("Name must be at least 3 characters.");
    if (!validateEmail(email)) return setError("Please enter a valid email.");
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    if (password !== confirmPassword) return setError("Passwords do not match.");

    setLoading(true);

    // Mock signup request
    setTimeout(() => {
      setLoading(false);
      setError("");
      if (onRegisterSuccess)
        onRegisterSuccess("Account created successfully! Please log in.");
      navigate("/login");
    }, 1500);
  };

  // ================= JSX =================
  return (
    <motion.div
      className="w-full h-full grid grid-cols-[40%_60%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* ================= LEFT COLUMN - AI ARTWORK ================= */}
      <motion.div
        className="relative bg-[#0a1628]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <AIArtwork />
      </motion.div>

      {/* ================= RIGHT COLUMN - SIGNUP FORM ================= */}
      <motion.div
        className="relative flex items-center justify-center p-8"
        style={{ background: "linear-gradient(to bottom right, #0f2847 0%, #1a3a5c 100%)" }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="w-full max-w-[400px] space-y-4">
          {/* ===== Form Header ===== */}
          <motion.div
            className="mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-white mb-2">Create Account</h1>
            <p className="text-[#94a3b8]">Join InterXview & Boost Your Interview Skills</p>
          </motion.div>

          {/* ===== Signup Form ===== */}
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Name */}
            <Input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />

            {/* Email */}
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            {/* Password */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition border border-gray-600 px-2 py-[2px] rounded-full backdrop-blur-sm flex items-center justify-center"
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition border border-gray-600 px-2 py-[2px] rounded-full backdrop-blur-sm flex items-center justify-center"
              >
                {showConfirmPassword ? "👁️" : "🙈"}
              </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <PrimaryButton type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </PrimaryButton>
          </form>

          {/* ===== Back to Login Link ===== */}
          <div className="flex justify-center mt-2">
            <TextLink onClick={() => navigate("/login")} showIcon={false}>
              Back to Login
            </TextLink>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
