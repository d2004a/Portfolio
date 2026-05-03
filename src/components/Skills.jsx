// Skills Section — spring-animated progress bars inside glass panels
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/data';
import SectionWrapper from './ui/SectionWrapper';

const CATEGORIES = ['Frontend', 'Backend', 'Tools'];

const SkillBar = ({ name, level, icon, index }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-xl text-white/70">{icon}</span>
          <span className="text-white font-medium">{name}</span>
        </div>
        <span className="text-sm font-bold text-white/60">{level}%</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.2, duration: 1.5, delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-primary-light to-secondary-light rounded-full relative"
        >
          {/* Subtle animated highlight on the bar */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent to-white/30 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [active, setActive] = useState('Frontend');
  const currentSkills = skills[active.toLowerCase()];

  return (
    <SectionWrapper id="skills" className="relative z-10">
      <div className="container-custom section-padding">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mt-8">My specializations & tools</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-20"
        >
          <div className="glass rounded-2xl p-2 flex gap-2 border border-white/10 bg-white/[0.03]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  active === cat ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
              >
                {active === cat && (
                  <motion.div
                    layoutId="skillsTab"
                    className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl border border-white/10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills List */}
        <div className="max-w-5xl mx-auto">
           <div className="glass-panel p-8 md:p-16 relative overflow-hidden">
              {/* Decorative Tech BG */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 gap-x-16 gap-y-12 relative z-10"
                >
                  {currentSkills.map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} index={i} />
                  ))}
                </motion.div>
              </AnimatePresence>
           </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Skills;
