// client/src/components/LoginScreen.jsx
import { motion } from 'motion/react';
import { useState } from 'react';
import { Input } from './Input';
import { PrimaryButton } from './PrimaryButton';
import { TextLink } from './TextLink';
import { AIArtwork } from './AIArtwork';
import axios from 'axios';
import toast from 'react-hot-toast';

export function LoginScreen({ onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Email validation
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email.');
      return;
    }

    setLoading(true);

    // try {
    //   // Send login request to backend
    //   const response = await axios.post('http://localhost:5000/api/auth/login', {
    //     email,
    //     password
    //   });

    //   // Save JWT token
    //   localStorage.setItem('token', response.data.token);

    //   toast.success('Login successful!');
    //   console.log('Login successful:', response.data);

    // } catch (err) {
    //   if (err.response && err.response.data) {
    //     toast.error(err.response.data.message);
    //   } else {
    //     toast.error('Network error. Please try again.');
    //   }
    // } 
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      localStorage.setItem('token', response.data.token);
      toast.success('Login successful!');
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.message);
      } else {
        toast.error('Network error. Please try again.');
      }
    }

    finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full h-full grid grid-cols-[40%_60%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {/* Left Column */}
      <motion.div
        className="relative flex items-center justify-center p-8 bg-gradient-to-br from-[#0f2847] to-[#1a3a5c]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="w-full max-w-[400px] space-y-4">

          <motion.div
            className="mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-white mb-2">Welcome Back</h1>
            <p className="text-[#94a3b8]">Start your journey to confident, stress-free interviews.</p>
          </motion.div>

          <form onSubmit={handleLogin} className="space-y-4">

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </motion.div>

            <motion.div
              className="pt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <PrimaryButton type="submit" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </PrimaryButton>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TextLink onClick={onSwitchToSignup} showIcon={false}>
                Don't have an account? Create one
              </TextLink>
            </motion.div>
          </form>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="relative bg-[#0a1628]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <AIArtwork />
      </motion.div>
    </motion.div>
  );
}
