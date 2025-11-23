import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../components/common/Input";
import PrimaryButton from "../components/common/PrimaryButton";
import TextLink from "../components/common/TextLink";
import AIArtwork from "../components/features/AIArtwork";

export default function LoginScreen({ successMessage }) {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email && !password) {
      setError("Please enter your email and password.");
      return;
    }
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === "user@example.com" && password === "password123") {
        console.log("Login successful");
        setError('');
      } else {
        setError("Incorrect email or password.");
      }
    }, 1500);
  };

  return (
    <motion.div 
      className="w-full h-full grid grid-cols-[40%_60%]"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* ===== Left Column: Login Form ===== */}
      <motion.div
        className="relative flex items-center justify-center p-8 bg-gradient-to-br from-[#0f2847] to-[#1a3a5c]"
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="w-full max-w-[400px] space-y-4">
          <motion.div className="mb-8" 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-white mb-2">Welcome Back</h1>
            <p className="text-[#94a3b8]">Start your journey to confident, stress-free interviews.</p>
          </motion.div>

          {successMessage && (
            <p className="text-green-400 text-sm">{successMessage}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Please enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Please enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           text-gray-400 hover:text-white transition
                           border border-gray-600 px-2 py-[2px] rounded-full
                           backdrop-blur-sm flex items-center justify-center"
              >
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

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <PrimaryButton type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </PrimaryButton>
          </form>

          {/* ===== Signup link ===== */}
          <div className="flex flex-col items-center mt-2">
            <TextLink
              type="button"
              onClick={() => navigate("/signup")} 
              showIcon={false}
            >
              Don't have an account? Create one
            </TextLink>
          </div>
        </div>
      </motion.div>

      {/* ===== Right Column: AI Artwork ===== */}
      <motion.div 
        className="relative bg-[#0a1628]"
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <AIArtwork />
      </motion.div>
    </motion.div>
  );
}
