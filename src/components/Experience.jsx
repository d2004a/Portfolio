// Experience + Education — dual timeline with scroll-triggered animations
import { motion } from 'framer-motion';
import { experience, education } from '../data/data';
import SectionWrapper from './ui/SectionWrapper';
import { FiBriefcase, FiBook, FiMapPin, FiCalendar } from 'react-icons/fi';

const TimelineItem = ({ item, index, type }) => {
  const isExp = type === 'experience';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-12 py-6 group"
    >
      {/* Connector Line */}
      <div className="absolute left-[11px] top-0 bottom-0 w-px bg-white/10 group-hover:bg-primary/50 transition-colors duration-500" />
      
      {/* Timeline Dot */}
      <div className="absolute left-[7px] top-8 w-[9px] h-[9px] rounded-full bg-dark-900 border-2 border-white/30 group-hover:border-primary-light group-hover:bg-primary-light group-hover:shadow-neon transition-all duration-300 z-10" />

      {/* Card */}
      <div className="glass-panel p-6 sm:p-8 relative overflow-hidden">
        
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 relative z-10">
          <div>
            <h4 className="text-white font-display font-bold text-xl md:text-2xl mb-1">
              {isExp ? item.role : item.degree}
            </h4>
            <p className="gradient-text font-medium text-base">
              {isExp ? item.company : item.institution}
            </p>
          </div>
          
          <div className="flex-shrink-0 text-left sm:text-right">
            <div className="flex items-center sm:justify-end gap-2 text-white/60 font-medium text-sm mb-1.5">
              <FiCalendar size={14} className="text-primary-light" /> {item.period}
            </div>
            {item.specialization && (
              <div className="flex items-center sm:justify-end gap-1.5 text-white/40 text-xs font-medium">
                <FiMapPin size={12} /> {item.specialization}
              </div>
            )}
            {item.grade && (
              <span className="inline-block mt-2 px-3 py-1 border border-primary/20 text-primary-light text-xs font-semibold rounded-full bg-primary/10">
                {item.grade}
              </span>
            )}
          </div>
        </div>

        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 relative z-10">
          {item.description}
        </p>

        {/* Tech pills */}
        {item.tech && (
          <div className="flex flex-wrap gap-2 relative z-10">
            {item.tech.map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-medium text-white/80 bg-white/5 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="relative z-10">
      <div className="container-custom section-padding max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mt-8">Experience & Education</p>
        </motion.div>

        <div className="space-y-24">
          {/* Work Experience */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-12 pl-2">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light border border-primary/30 shadow-neon">
                <FiBriefcase size={28} />
              </div>
              <h3 className="text-white font-display font-black text-3xl tracking-tight">Work Experience</h3>
            </div>
            <div className="pl-2 space-y-4">
              {experience.map((item, i) => (
                <TimelineItem key={item.id} item={item} index={i} type="experience" />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-12 pl-2">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary-light border border-secondary/30 shadow-neon">
                <FiBook size={28} />
              </div>
              <h3 className="text-white font-display font-black text-3xl tracking-tight">Education</h3>
            </div>
            <div className="pl-2 space-y-4">
              {education.map((item, i) => (
                <TimelineItem key={item.id} item={item} index={i} type="education" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Experience;
