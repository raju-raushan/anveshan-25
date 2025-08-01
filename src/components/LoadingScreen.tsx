import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Circuit Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="tech-grid opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"
                style={{ left: `${i * 5}%` }}
              />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{ top: `${i * 5}%` }}
              />
            ))}
          </div>
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center space-y-8">
          {/* Animated Logo/Title */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-tech bg-clip-text text-transparent">
                TECHNOVA
              </h1>
              <div className="absolute inset-0 animate-glow-pulse">
                <h1 className="text-6xl md:text-8xl font-bold text-primary/20">
                  TECHNOVA
                </h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground font-light tracking-wider">
              INITIALIZING FEST EXPERIENCE
            </p>
          </motion.div>

          {/* Rotating Tech Elements */}
          <div className="relative w-32 h-32 mx-auto">
            <motion.div
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 border-2 border-secondary/50 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-8 border-2 border-accent/70 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-primary rounded-full animate-glow-pulse" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 mx-auto space-y-4">
            <div className="relative h-1 bg-surface-elevated rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-primary rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-tech-scan" />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Loading</span>
              <span>{progress}%</span>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
                style={{
                  left: `${20 + i * 8}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;