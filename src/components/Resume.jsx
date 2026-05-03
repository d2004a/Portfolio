// Resume Section — download CTA + key highlights
import { motion } from 'framer-motion';
import { personalInfo, resumeHighlights, certifications, experience, education, projects, skills } from '../data/data';
import SectionWrapper from './ui/SectionWrapper';
import { FiDownload, FiEye, FiAward, FiCheckCircle } from 'react-icons/fi';

const Resume = () => {
  const handleView = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  // Helper to get data for the preview sections
  const getPreviewData = (sec) => {
    switch (sec) {
      case 'Experience':
        return experience.slice(0, 2).map(exp => ({ title: exp.role, subtitle: exp.company }));
      case 'Education':
        return education.slice(0, 1).map(edu => ({ title: edu.degree, subtitle: edu.institution }));
      case 'Projects':
        return projects.slice(0, 2).map(proj => ({ title: proj.title, subtitle: proj.tech.slice(0, 3).join(', ') }));
      case 'Skills':
        return [{ title: 'Frontend', subtitle: skills.frontend.slice(0, 3).map(s => s.name).join(', ') }, { title: 'Backend', subtitle: skills.backend.slice(0, 3).map(s => s.name).join(', ') }];
      default:
        return [];
    }
  };

  return (
    <SectionWrapper id="resume" className="relative z-10">
      <div className="container-custom section-padding">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Professional <span className="gradient-text">Profile</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

          {/* Left — Resume preview card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Resume card */}
            <div className="glass-panel p-8 md:p-10 relative overflow-hidden group">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />

              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-neon">
                  <span className="text-white font-display font-black text-3xl">D</span>
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-2xl">Divyanshu Agarwal</h3>
                  <p className="text-primary-light font-medium mt-1">MERN Stack Developer</p>
                </div>
              </div>

              {/* Sections preview */}
              <div className="relative z-10">
                {['Experience', 'Education', 'Projects', 'Skills'].map((sec) => (
                  <div key={sec} className="mb-6 last:mb-0">
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{sec}</p>
                    <div className="space-y-3">
                      {getPreviewData(sec).map((item, idx) => (
                        <div key={idx} className="group/item">
                          <p className="text-white font-bold text-xs group-hover/item:text-primary-light transition-colors">{item.title}</p>
                          <p className="text-white/40 text-[10px] font-medium truncate">{item.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Overlay CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 relative z-10">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm flex items-center justify-center gap-2 hover:shadow-neon transition-shadow"
                >
                  <FiDownload size={18} />
                  Download PDF
                </a>
                <button
                  onClick={handleView}
                  className="flex-1 px-6 py-4 rounded-xl glass border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  <FiEye size={18} /> View Full
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right — Highlights & Certs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >

            <div className="glass-panel p-8">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
                <FiAward className="text-primary-light" /> Key Highlights
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {resumeHighlights.map(({ label, value, icon }) => (
                  <div key={label} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="text-2xl mb-3 block">{icon}</span>
                    <p className="gradient-text font-display font-black text-3xl">{value}</p>
                    <p className="text-white/60 text-xs mt-1 font-medium">{label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  'Full-stack MERN application architecture',
                  'RESTful API design & optimisation',
                  'Cloud deployment (Render, Vercel)',
                  'Responsive UI with Tailwind CSS',
                ].map((strength, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FiCheckCircle className="text-secondary-light flex-shrink-0" size={16} />
                    <span className="text-white/80 text-sm font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-8">
              <h3 className="text-white font-bold text-lg mb-6">Certifications</h3>
              <div className="space-y-5">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary-light">
                      <FiAward size={18} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-base">{cert.name}</p>
                      <p className="text-white/50 text-sm mt-1">{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Resume;
