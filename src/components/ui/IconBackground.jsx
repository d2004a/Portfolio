import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiJavascript, 
  SiTailwindcss, SiGit, SiDocker
} from 'react-icons/si';

const icons = [
  { Icon: SiReact,          color: '#61DAFB', top: '10%', left: '10%', size: 40 },
  { Icon: SiNodedotjs,      color: '#339933', top: '30%', left: '85%', size: 50 },
  { Icon: SiMongodb,        color: '#47A248', top: '70%', left: '15%', size: 45 },
  { Icon: SiJavascript,     color: '#F7DF1E', top: '50%', left: '75%', size: 35 },
  { Icon: SiTailwindcss,    color: '#06B6D4', top: '15%', left: '60%', size: 30 },
  { Icon: SiGit,            color: '#F05032', top: '85%', left: '80%', size: 40 },
  { Icon: SiDocker,         color: '#2496ED', top: '40%', left: '25%', size: 55 },
];

const FloatingIcon = ({ Icon, color, top, left, size, speed }) => {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 5000], [0, speed * -200]);

  return (
    <motion.div
      style={{ 
        top, 
        left, 
        y: parallaxY,
        opacity: 0.15 
      }}
      className="absolute pointer-events-none select-none z-0"
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Icon size={size} style={{ color }} />
      </motion.div>
    </motion.div>
  );
};

const IconBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-dark-900">
       {/* Background Glows to maintain theme */}
       <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
       <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

       {/* Floating Parallax Icons */}
       {icons.map((item, i) => (
         <FloatingIcon 
           key={i} 
           {...item} 
           speed={(i % 3) + 1} // Assign different speeds for parallax effect
         />
       ))}
    </div>
  );
};

export default IconBackground;
