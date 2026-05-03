// Footer — minimal, clean with gradient divider
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-900 pt-20 pb-10 overflow-hidden z-10">
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      {/* Background glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display font-black text-2xl text-white tracking-tight mb-2">
              Divyanshu<span className="text-primary-light">.</span>
            </h3>
            <p className="text-white/60 text-sm max-w-sm">
              Building premium, highly interactive digital experiences for the modern web.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub,   href: personalInfo.social.github,   label: 'GitHub' },
              { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
              { icon: FiMail,     href: `mailto:${personalInfo.email}`,label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-neon"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm font-medium">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
          
          <p className="text-white/50 text-sm flex items-center gap-2">
            Built with <FiHeart className="text-red-500 animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
