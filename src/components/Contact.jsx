/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

// Initialize EmailJS
emailjs.init('orbUQVLfGPBnE86h9');

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    try {
      await emailjs.send(
        'service_aaztebe',
        'template_ltu098a',
        {
          to_email: 'mohdaayyan@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Let's Start a <span className="text-muted-foreground">Project.</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider mb-1">Email Me</p>
                  <a href="mailto:mohdaayyan@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                    mohdaayyan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider mb-1">Call Me</p>
                  <a href="tel:+917702010454" className="text-lg font-medium hover:text-accent transition-colors">
                    +91 7702010454
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">Subject (Optional)</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                  status === 'loading' ? 'bg-primary/50 cursor-wait' : 
                  status === 'success' ? 'bg-green-500' : 'bg-primary hover:bg-primary/80'
                }`}
              >
                {status === 'loading' ? 'Sending...' : 
                 status === 'success' ? <><CheckCircle2 size={20} /> Sent Successfully</> : 
                 status === 'error' ? <><AlertCircle size={20} /> Error Occurred</> :
                 <><Send size={20} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}