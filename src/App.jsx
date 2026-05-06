/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { motion } from 'framer-motion';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./index.css"

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden w-full relative">
      {/* Global Background Glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      
      <main>
        
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App