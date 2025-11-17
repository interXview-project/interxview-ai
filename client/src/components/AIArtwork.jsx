import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import aiIcon from '../assets/interxview-logo.png';

export function AIArtwork() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0f2847] rounded-full opacity-60 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1a3a5c] rounded-full opacity-70 blur-[150px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0ea5e9] rounded-full opacity-[0.08] blur-[180px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: 0.1,
            filter: `blur(${Math.random() * 4 + 4}px)`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central AI Icon with orbit effects */}
      <div className="relative flex items-center justify-center w-[150px] h-[150px]">
        
        {/* Orbit rings around the icon - FIXED */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-[#0284c7]"
            style={{
              width: 150 + i * 80,  // Increased spacing between rings
              height: 150 + i * 80,
              opacity: 0.4 - i * 0.1, // Outer rings are more transparent
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { 
                duration: 20 + i * 5, 
                repeat: Infinity, 
                ease: "linear" 
              },
              scale: { 
                duration: 3 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
              },
            }}
          />
        ))}

        {/* Neural lines radiating from the icon - FIXED */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-[#0ea5e9]/70 to-transparent"
              style={{
                width: '80px',
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                transform: `rotate(${angle}deg) translateX(75px)`, // Start from edge of icon
                mixBlendMode: 'overlay',
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleX: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Pulsing glow behind the icon - FIXED */}
        <motion.div 
          className="absolute w-[180px] h-[180px] rounded-full bg-[#0ea5e9] -z-10"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.4, 0.2], 
          }} 
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }} 
        />

        {/* AI Icon in the foreground */}
        <motion.div
          className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_40px_rgba(14,165,233,0.5)] z-20"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 40px rgba(14,165,233,0.5)",
              "0 0 60px rgba(14,165,233,0.7)",
              "0 0 40px rgba(14,165,233,0.5)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={aiIcon}
            alt="AI Icon"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Wave patterns in the background */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,400 Q250,300 500,400 T1000,400"
          stroke="#0ea5e9"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,400 Q250,300 500,400 T1000,400",
              "M0,400 Q250,500 500,400 T1000,400",
              "M0,400 Q250,300 500,400 T1000,400",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,600 Q250,500 500,600 T1000,600"
          stroke="#0284c7"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,600 Q250,500 500,600 T1000,600",
              "M0,600 Q250,700 500,600 T1000,600",
              "M0,600 Q250,500 500,600 T1000,600",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}