import { motion } from 'motion/react';
import { useState } from 'react';
import { Input } from './Input';
import { PrimaryButton } from './PrimaryButton';
import { TextLink } from './TextLink';
import { AIArtwork } from './AIArtwork';

export function SignupScreen({ onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup:', { name, email, password, confirmPassword });
  };

  return (
    <motion.div
      className="w-full h-full grid grid-cols-[60%_40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Left Column - AI Artwork */}
      <motion.div
        className="relative bg-[#0a1628]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <AIArtwork />
      </motion.div>

      {/* Right Column - Form */}
      <motion.div
        className="relative flex items-center justify-center p-8"
        style={{
          background: 'linear-gradient(to bottom right, #0f2847 0%, #1a3a5c 100%)',
        }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="w-full max-w-[400px] space-y-4">
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
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </motion.div>

            <motion.div
              className="pt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <PrimaryButton type="submit">
                Create Account
              </PrimaryButton>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <TextLink onClick={onSwitchToLogin}>
                Back to Login
              </TextLink>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
