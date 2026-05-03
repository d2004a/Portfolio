// Hero Section — animated intro with typing effect and floating blobs
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/data';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Magnetic from './ui/Magnetic';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob" />
        <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[20%] left-[40%] w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center mt-10 md:mt-0">
        
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full glass border border-primary/20 text-primary-light text-sm font-medium tracking-wide"
        >
          Welcome to my digital space
        </motion.div>

        {/* Main Title & Typing Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight tracking-tight"
        >
          <span className="gradient-text">Divyanshu Agarwal</span>
          <br />
          <div className="flex flex-wrap justify-center items-baseline gap-x-3 mt-6">
            <span className="text-white/40 text-xl md:text-3xl lg:text-4xl font-medium tracking-tight">I'm a</span>
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Problem Solver',
                2000,
                'Cloud Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-primary-light text-xl md:text-3xl lg:text-4xl font-bold block"
              repeat={Infinity}
            />
          </div>
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 mb-32 lg:mb-40"
        >
          <Magnetic>
            <a
              href="#projects"
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-neon transition-all duration-300"
            >
              View Projects
            </a>
          </Magnetic>

          <div className="flex items-center gap-4 glass px-5 py-3.5 rounded-xl border-white/10">
            {[
              { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
              { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
              { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <Magnetic key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-primary/50 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              </Magnetic>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator — Moved outside inner container for absolute viewport positioning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce-soft pointer-events-none z-20"
      >
        <span className="text-white/20 text-[9px] tracking-[0.4em] uppercase font-black">Explore</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-primary/80 via-secondary/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
