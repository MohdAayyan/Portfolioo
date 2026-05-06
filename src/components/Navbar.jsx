/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? 'glass shadow-2xl py-4' : 'bg-transparent'
          }`}
      >
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-tighter text-white group">
          MOHD<span className="text-primary group-hover:text-accent transition-colors">AAYYAN</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/mohdaayyan" target="_blank" rel="noopener noreferrer">
                  <Github size={24} className="text-white/70 hover:text-white" />
                </a>
          <a href="https://www.linkedin.com/in/mohd-aayyan" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} className="text-white/70 hover:text-white" />
                </a>
          <a href="https://twitter.com/DrSoanpapdi" target="_blank" rel="noopener noreferrer">
                  <Twitter size={24} className="text-white/70 hover:text-white" />
                </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 flex items-center justify-center p-6 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
            <div className="relative w-full max-w-sm glass rounded-3xl p-8 flex flex-col items-center space-y-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-primary"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex space-x-6 pt-6 border-t border-white/10 w-full justify-center">
                <a href="https://github.com/mohdaayyan" target="_blank" rel="noopener noreferrer">
                  <Github size={24} className="text-white/70 hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/mohd-aayyan" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} className="text-white/70 hover:text-white" />
                </a>
                <a href="https://twitter.com/DrSoanpapdi" target="_blank" rel="noopener noreferrer">
                  <Twitter size={24} className="text-white/70 hover:text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
