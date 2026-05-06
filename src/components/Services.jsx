/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Globe, Search, Zap } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Building fast, secure, and scalable web applications using the latest technologies.",
    icon: Globe,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences.",
    icon: Layout,
  },
  {
    title: "Responsive Design",
    description: "Ensuring your website looks great and functions perfectly on all devices and screen sizes.",
    icon: Smartphone,
  },
  {
    title: "Performance Optimization",
    description: "Optimizing your web applications for maximum speed and efficiency.",
    icon: Zap,
  },
  {
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines to drive more traffic.",
    icon: Search,
  },
  {
    title: "Clean Code",
    description: "Writing maintainable, well-documented, and efficient code for long-term success.",
    icon: Code,
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4"
        >
          Offerings
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          My <span className="text-muted-foreground">Services.</span>
        </motion.h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-10 group hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <service.icon size={28} />
            </div>
            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
