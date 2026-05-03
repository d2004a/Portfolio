// About Section — Bento Grid Refactor
import { motion } from 'framer-motion';
import { personalInfo, skillIcons } from '../data/data';
import SectionWrapper from './ui/SectionWrapper';
import Magnetic from './ui/Magnetic';
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss, SiGit, SiDocker, SiPostman } from 'react-icons/si';
import { Tilt } from 'react-tilt';
import { FiArrowRight, FiCode, FiCpu, FiGlobe } from 'react-icons/fi';

const iconMap = {
  SiReact, SiNodedotjs, SiMongodb, SiExpress: SiNodedotjs, SiJavascript, SiTailwindcss, SiGit, SiDocker, SiPostman
};

const tiltOptions = {
  reverse:        false,  
  max:            10,     
  perspective:    1000,   
  scale:          1.02,    
  speed:          1000,   
  transition:     true,   
  axis:           null,   
  reset:          true,   
  easing:         "cubic-bezier(.03,.98,.52,.99)",
};

const About = () => {
  return (
    <SectionWrapper id="about" className="relative z-10">
      <div className="container-custom section-padding">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          
          {/* 1. Profile Picture Card (Big) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 aspect-square md:aspect-auto md:h-full"
          >
            <Tilt options={tiltOptions} className="h-full">
              <div className="glass-panel p-2 relative overflow-hidden group h-full">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img 
                    src={personalInfo.avatar || "/src/assets/avatar.png"} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-display font-bold text-xl">{personalInfo.name}</p>
                    <p className="text-primary-light text-sm font-medium">MERN Stack Developer</p>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* 2. Bio Card (Long) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-4"
          >
            <Tilt options={tiltOptions} className="h-full">
              <div className="glass-panel p-8 flex flex-col justify-between relative overflow-hidden h-full">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light mb-6">
                    <FiCode size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">The Developer Behind The Code</h3>
                  <p className="text-white/70 leading-relaxed text-lg mb-6">
                    {personalInfo.bio}
                  </p>
                  <p className="text-white/60">
                    I specialize in building scalable web applications using the MERN stack. My focus is on creating seamless user experiences with modern frontend technologies and robust backend architectures.
                  </p>
                </div>
                
                <div className="mt-8 flex gap-4 relative z-10">
                  <Magnetic>
                    <a href="#projects" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
                      View Work <FiArrowRight />
                    </a>
                  </Magnetic>
                </div>

                {/* Decorative background icon */}
                <SiJavascript className="absolute -bottom-10 -right-10 text-white/[0.02] text-[200px]" />
              </div>
            </Tilt>
          </motion.div>

          {/* 3. Tech Stack Grid (Square) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-3"
          >
            <Tilt options={tiltOptions} className="h-full">
              <div className="glass-panel p-8 h-full">
                <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-8">Tech Stack Mastery</h4>
                <div className="grid grid-cols-4 gap-4">
                  {skillIcons.map(({ name, color, icon }) => {
                    const Icon = iconMap[icon];
                    return (
                      <div key={name} className="aspect-square glass rounded-xl flex items-center justify-center group hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30">
                        {Icon && <Icon size={24} style={{ color }} className="opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* 4. Education Card (Vertical) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-3"
          >
            <Tilt options={tiltOptions} className="h-full">
              <div className="glass-panel p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary-light mb-6">
                    <FiGlobe size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">Education Journey</h3>
                  <p className="text-white/70 font-medium">B.Tech in Computer Science</p>
                  <p className="text-white/40 text-sm mt-1">Cloud Computing Specialization</p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-white font-black text-2xl tracking-tighter"> 7 . 5</p>
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Current CGPA</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">2022-2026</p>
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Academic Term</p>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* 5. Quick Stats Row (Full width grid) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { val: '10+', label: 'Projects Built', color: 'text-primary-light' },
              { val: '15+', label: 'Technologies', color: 'text-secondary-light' },
              { val: '200+',label: 'GitHub Commits', color: 'text-purple-400' },
              { val: '4m',   label: 'Internship Exp', color: 'text-emerald-400' },
            ].map(({ val, label, color }) => (
              <div key={label} className="glass-panel p-6 text-center hover:bg-white/5 transition-colors group">
                <p className={`${color} font-display font-black text-3xl mb-1 group-hover:scale-110 transition-transform`}>{val}</p>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
