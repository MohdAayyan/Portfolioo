import { Github, Linkedin, Twitter, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              MOHD<span className="text-primary">AAYYAN.</span>
            </a>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Designing and developing premium digital experiences for forward-thinking 
              brands and individuals. Let's build something exceptional together.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Links</h4>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Socials</h4>
            <div className="flex gap-4">
              {[
                { icon: Github,   href: 'https://github.com/mohdaayyan', target: "_blank" },
                { icon: Linkedin,   href: 'https://www.linkedin.com/in/mohd-aayyan/', target: "_blank" },
                { icon: Twitter,   href: 'https://x.com/DrSoanpapdi', target: "_blank" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target={social.target}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground flex items-center">
            © {new Date().getFullYear()} Mohammed Aayyan. Built with <Heart size={14} className="mx-1 text-red-500 fill-red-500" /> & React.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
          >
            BACK TO TOP
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
