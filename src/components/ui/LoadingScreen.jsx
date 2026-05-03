// Animated loading screen shown on initial page load
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-dark-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      {/* Animated logo / initial */}
      <motion.div
        className="relative flex items-center justify-center mb-8"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.8 }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute w-24 h-24 rounded-full border-2 border-purple-500 opacity-30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-16 h-16 rounded-full border border-blue-400 opacity-40"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        {/* Center initial */}
        <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center">
          <span className="gradient-text font-display font-black text-2xl">D</span>
        </div>
      </motion.div>

      {/* Loading bar */}
      <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #7c3aed, #38bdf8)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          onAnimationComplete={onComplete}
        />
      </div>

      {/* Label */}
      <motion.p
        className="text-white/30 text-xs font-mono tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Initialising portfolio...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
