// App.jsx — root component: loading screen, custom cursor, scroll progress, all sections
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// UI utilities
import CustomCursor   from './components/ui/CustomCursor';
import LoadingScreen  from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import Spotlight      from './components/ui/Spotlight';
import Navbar         from './components/Navbar';
import Footer         from './components/Footer';
import IconBackground   from './components/ui/IconBackground';

// Sections
import Hero       from './components/Hero';
import About      from './components/About';
import Skills     from './components/Skills';
import Projects   from './components/Projects';
import Resume     from './components/Resume';
import Experience from './components/Experience';
import Contact    from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark-900 min-h-screen text-slate-200 selection:bg-primary/30 selection:text-primary-light">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="content" className="relative w-full">
            <IconBackground />
            <ScrollProgress />
            <Spotlight />
            <CustomCursor />
            <Navbar />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Resume />
              <Experience />
              <Contact />
            </main>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
