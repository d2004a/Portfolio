import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const Spotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      style={{
        background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(124, 58, 237, 0.05), transparent 80%)`,
      }}
    />
  );
};

export default Spotlight;
