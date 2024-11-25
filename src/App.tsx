import React, { useEffect, useRef } from 'react';
import { Github, Mail, Linkedin, Moon, Star, Award, BookOpen, Code, Rocket } from 'lucide-react';
import { Introduction } from './components/Introduction';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Competitions } from './components/Competitions';
import { Navigation } from './components/Navigation';

function App() {
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (moonRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scale = 1 - (scrolled / maxScroll) * 0.6;
        moonRef.current.style.transform = `scale(${Math.max(0.4, scale)})`;
        moonRef.current.style.opacity = String(Math.max(0.4, scale));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Animated background with stars */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
        <div className="stars"></div>
      </div>

      {/* Moon */}
      <div 
        ref={moonRef}
        className="fixed top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-[inset_-25px_-25px_40px_rgba(0,0,0,0.2)] transition-transform duration-300"
        style={{ transform: 'scale(1)' }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <Introduction />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Competitions />
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-800/50 backdrop-blur-sm py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="https://github.com/Someshwari16" className="hover:text-purple-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/ravada-someshwari-5533b7293/" className="hover:text-purple-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:ravadar51@gmail.com" className="hover:text-purple-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} R.Someshwari. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;