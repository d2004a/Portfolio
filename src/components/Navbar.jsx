// Sticky Navbar with glassmorphism + mobile hamburger menu
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home',       href: '#hero'       },
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Resume',     href: '#resume'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

import Magnetic from './ui/Magnetic';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('Home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + 200;

      sections.forEach((sec, i) => {
        if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
          setActive(navLinks[i].label);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-4 glass border-b-white/10 shadow-glass' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          
          {/* Logo */}
          <Magnetic>
            <a
              href="#hero"
              onClick={(e) => handleClick(e, '#hero')}
              className="font-display font-black text-2xl text-white tracking-tight hover:scale-105 transition-transform"
            >
              Divyanshu<span className="text-primary-light">.</span>
            </a>
          </Magnetic>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
            {navLinks.map(({ label, href }) => (
              <Magnetic key={label}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    active === label ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {active === label && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-primary/40 rounded-full blur-sm"
                    />
                  )}
                  {active === label && (
                    <motion.div
                      layoutId="navPillBg"
                      className="absolute inset-0 bg-primary/20 rounded-full border border-primary/30"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              </Magnetic>
            ))}
          </div>

          {/* Desktop Right (Resume / Contact CTA) */}
          <div className="hidden lg:flex items-center">
            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="px-5 py-2.5 rounded-full bg-white text-dark-900 font-bold text-sm hover:shadow-neon hover:scale-105 transition-all"
              >
                Let's Talk
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-col gap-1.5 z-50 text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-40 bg-dark-900/90 pt-28 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`text-3xl font-display font-black p-2 ${
                    active === label 
                      ? 'gradient-text' 
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
