/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Monitor, Smartphone, Target } from 'lucide-react';
import sonarImg from '../assets/sonar.webp';


const projects = [
  {
    title: "Calorie Calculator",
    description: "A high-performance web application designed to help users track and manage their daily nutritional intake with precision.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://mohdaayyan.github.io/Calorie-Calculator/",
    github: "https://github.com/MohdAayyan/Calorie-Calculator",
    type: "Web App",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "DIY Sonar System",
    description: "An innovative hardware-software integration using Arduino to visualize object detection within a local radar range.",
    tech: ["Arduino", "C++", "Processing"],
    link: "#",
    github: "#",
    type: "Hardware/IoT",
    icon: Smartphone,
    image: sonarImg,
  },
  {
    title: "Premium E-commerce",
    description: "A concept fashion brand store featuring smooth transitions, glassmorphism UI, and optimized performance.",
    tech: ["React", "Framer Motion", "Stripe"],
    link: "#",
    github: "#",
    type: "Design Concept",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4"
          >

          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Selected <span className="text-muted-foreground">Works.</span>
          </motion.h3>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-md text-muted-foreground"
        >
          A curated collection of projects that showcase my passion for clean code, 
          modern design, and innovative solutions.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col h-full glass-card overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.github} className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.link}  className="p-3 bg-primary hover:bg-primary/80 rounded-full text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                {project.type}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-4">
                <project.icon className="text-primary" size={24} />
                <div className="flex gap-2">
                  {project.tech.slice(0, 2).map((t, i) => (
                    <span key={i} className="text-[10px] font-medium text-muted-foreground uppercase border border-white/10 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex items-center text-sm font-semibold text-white group-hover:gap-2 transition-all">
                View Project Details <ExternalLink size={14} className="ml-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}