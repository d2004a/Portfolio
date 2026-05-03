// Contact Section — form UI + social links with Framer Motion
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/data';
import SectionWrapper from './ui/SectionWrapper';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const InputField = ({ label, type = 'text', placeholder, name, value, onChange }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="space-y-2 relative">
      <label className="text-white/80 text-sm font-semibold ml-1">{label}</label>
      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            rows={5}
            className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-5 py-4 text-base text-white placeholder-white/30 focus:outline-none focus:bg-dark-900/80 transition-all duration-300 resize-none relative z-10"
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-5 py-4 text-base text-white placeholder-white/30 focus:outline-none focus:bg-dark-900/80 transition-all duration-300 relative z-10"
          />
        )}
        {/* Glow effect on focus */}
        <AnimatePresence>
          {focused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/30 to-secondary/30 blur-md z-0"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "1c0fea3a-ddf2-4c2d-a4b3-96038357c31c");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Submission failed. Please try again or check your access key.");
      }
    } catch (error) {
      alert("Error sending message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { icon: FiGithub, label: 'GitHub', href: personalInfo.social.github },
    { icon: FiLinkedin, label: 'LinkedIn', href: personalInfo.social.linkedin },
  ];

  return (
    <SectionWrapper id="contact" className="relative z-10">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">Let's connect</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                {[
                  { icon: FiMail, label: 'Email', value: personalInfo.email },
                  { icon: FiMapPin, label: 'Location', value: personalInfo.location },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4 group">
                    <div className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-primary-light group-hover:bg-primary/20 transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-1">{label}</p>
                      <p className="text-white font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-4">Social Profiles</p>
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-white/70 hover:text-white hover:text-secondary-light transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel p-8 md:p-10 relative">

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="text-green-400 mb-6"
                    >
                      <FiCheckCircle size={80} />
                    </motion.div>
                    <h3 className="font-display font-bold text-3xl text-white mb-4">Message Sent!</h3>
                    <p className="text-white/70 text-lg mb-8">Thanks for reaching out. I'll get back to you shortly.</p>
                    <button
                      onClick={() => setSent(false)}
                      className="px-8 py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <InputField label="Name" name="name" value={form.name} onChange={onChange} placeholder="John Doe" />
                      <InputField label="Email" type="email" name="email" value={form.email} onChange={onChange} placeholder="john@example.com" />
                    </div>
                    <InputField label="Subject" name="subject" value={form.subject} onChange={onChange} placeholder="Project Inquiry" />
                    <InputField label="Message" type="textarea" name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project..." />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg flex items-center justify-center gap-3 hover:shadow-neon hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FiSend />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
