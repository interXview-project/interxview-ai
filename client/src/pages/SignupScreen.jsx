import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";
import PrimaryButton from "../components/common/PrimaryButton";
import TextLink from "../components/common/TextLink";
import AIArtwork from "../components/features/AIArtwork";
import Footer from "../components/Footer";

export default function SignupScreen({ onRegisterSuccess }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    if (!name) { setError('Name is required.'); return; }
    if (!email) { setError('Email is required.'); return; }
    if (!password) { setError('Password is required.'); return; }
    if (!confirmPassword) { setError('Confirm Password is required.'); return; }
    if (name.length < 3) { setError("Name must be at least 3 characters."); return; }
    if (!validateEmail(email)) { setError('Please enter a valid email.'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return; }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError('');
      if (onRegisterSuccess) onRegisterSuccess("Account created successfully! Please log in.");
      navigate("/login"); 
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
    <motion.div
      className="w-full flex-1 grid grid-cols-[40%_60%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* ===== Left Column: AI Artwork ===== */}
      <motion.div
        className="relative bg-[#0a1628]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <AIArtwork />
      </motion.div>

      {/* ===== Right Column: Signup Form ===== */}
      <motion.div
        className="relative flex items-center justify-center p-8"
        style={{ background: 'linear-gradient(to bottom right, #0f2847 0%, #1a3a5c 100%)' }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="w-full max-w-[400px] space-y-4">
          {/* Form Header */}
          <motion.div 
            className="mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-white mb-2">Create Account</h1>
            <p className="text-[#94a3b8]">Join InterXview & Boost Your Interview Skills</p>
          </motion.div>

          <form onSubmit={handleSignup} className="space-y-4">
            <Input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <div className="relative">
              <Input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition border border-gray-600 px-2 py-[2px] rounded-full backdrop-blur-sm flex items-center justify-center">
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.964 9.964 0 012.058-5.637M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="relative">
              <Input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition border border-gray-600 px-2 py-[2px] rounded-full backdrop-blur-sm flex items-center justify-center">
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.964 9.964 0 012.058-5.637M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <PrimaryButton type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </PrimaryButton>
          </form>

          {/* Back to Login link outside form */}
          <div className="flex justify-center mt-2">
            <TextLink
              onClick={() => navigate("/login")}
              showIcon={false}
            >
              Back to Login
            </TextLink>
          </div>
        </div>
        
      </motion.div>
      
    </motion.div>
    <Footer/>
    </div>
  );
}
