// Projects Section — 3D tilt cards with Framer Motion reveals
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { projects } from '../data/data';
import SectionWrapper from './ui/SectionWrapper';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const defaultTiltOptions = {
  reverse:        false,  
  max:            15,     
  perspective:    1000,   
  scale:          1.02,    
  speed:          1000,   
  transition:     true,   
  axis:           null,   
  reset:          true,   
  easing:         "cubic-bezier(.03,.98,.52,.99)",
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tilt options={defaultTiltOptions} className="h-full">
        <div className="glass-panel h-full flex flex-col overflow-hidden relative group">
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-[10px] font-bold bg-primary/20 text-primary-light border border-primary/30 uppercase tracking-wider backdrop-blur-md">
              Featured
            </div>
          )}

          {/* Project Image */}
          <div className="relative w-full h-56 bg-dark-900 border-b border-white/5 overflow-hidden">
             {project.image ? (
               <img 
                 src={project.image} 
                 alt={project.title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
             ) : (
               <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                 <FiGithub size={40} className="text-white/20" />
               </div>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
          </div>

          <div className="p-6 md:p-8 flex-1 flex flex-col">
            <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-primary-light transition-colors">
              {project.title}
            </h3>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium text-white/80 bg-white/5 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary-light transition-colors"
              >
                <FiGithub size={18} /> Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-secondary-light transition-colors ml-auto"
              >
                Live Demo <FiExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const FILTERS = ['Featured', 'All'];

const Projects = () => {
  const [filter, setFilter] = useState('Featured');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.featured);

  return (
    <SectionWrapper id="projects" className="relative z-10">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mt-8">Solving problems with code</p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-20"
        >
          <div className="glass rounded-2xl p-2 flex gap-2 border border-white/10 flex-wrap justify-center bg-white/[0.03]">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  filter === f ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {filter === f && (
                  <motion.div
                    layoutId="projectTab"
                    className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/10 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default Projects;
