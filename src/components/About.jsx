/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase, Heart } from 'lucide-react';
import profileImg from '../assets/Profile.png';



export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image/Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 bg-secondary">
             <img src={profileImg} className="w-full h-auto object-cover object-center" alt="Mohammed Aayyan" />
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
          
          {/* Decorative Frames */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary rounded-tl-3xl" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent rounded-br-3xl" />
          

        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            I turn ideas into <br />
            <span className="text-muted-foreground">interactive reality.</span>
          </h3>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a passionate Computer Science student and Frontend Developer with a keen eye for 
              <span className="text-white font-medium"> premium design</span> and smooth user experiences. 
              My journey in tech is driven by a curiosity for how things work and a desire to build 
              tools that make a difference.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest design trends, 
              experimenting with new technologies, or contributing to open-source projects. 
              I believe that <span className="text-white font-medium">minimalism</span> combined 
              with <span className="text-white font-medium">powerful functionality</span> is the key 
              to great software.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
