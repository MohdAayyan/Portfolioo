/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="glow-mesh" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="section-padding relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-medium text-white/80">Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-2 md:mb-4"
        >
          <div className='md:pr-48 flex justify-center'>Mohammed</div>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8"
        >
          <span className="text-gradient flex justify-center md:pl-48">Aayyan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
        >
          Frontend Developer specializing in building exceptional digital products with a focus on 
          <span className="text-white font-medium"> premium design</span>, 
          <span className="text-white font-medium"> performance</span>, and 
          <span className="text-white font-medium"> user experience</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            <span className="flex items-center">
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </a>
          
          <a
            href="#contact"
            className="group px-8 py-4 glass text-white rounded-full font-semibold transition-all hover:bg-white/10"
          >
            <span className="flex items-center">
              Let's Talk
              <Code className="ml-2 text-primary" size={20} />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute hidden lg:block top-1/3 left-10 p-4 glass rounded-2xl rotate-12"
      >
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <Code className="text-primary" size={20} />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute hidden lg:block bottom-1/3 right-10 p-4 glass rounded-2xl -rotate-12"
      >
        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
          <Sparkles className="text-accent" size={20} />
        </div>
      </motion.div>
    </section>
  );
}
