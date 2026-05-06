/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Terminal, 
  Cpu, 
  Globe, 
  Zap,
  Framer,
  Database
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Java (Basics)"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Tools & Workflow",
    icon: Terminal,
    skills: ["Git & GitHub", "VS Code", "Vite", "Antigravity"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    skills: ["OOP", "Data Structures", "Algorithms", "Responsive Design"],
    color: "from-green-500/20 to-emerald-500/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4"
        >
          Expertise
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Tech <span className="text-muted-foreground">Stack.</span>
        </motion.h3>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card p-8 group hover:scale-[1.02] transition-transform"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <category.icon className="text-white" size={28} />
            </div>
            
            <h4 className="text-xl font-bold mb-4">{category.title}</h4>
            
            <ul className="space-y-3">
              {category.skills.map((skill, sIndex) => (
                <li key={sIndex} className="flex items-center text-muted-foreground group-hover:text-white/80 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-around -z-10">
        <Globe size={300} />
        <Zap size={200} />
        <Framer size={250} />
        <Database size={150} />
      </div>
    </section>
  );
}
