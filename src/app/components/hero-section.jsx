import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { ParticlesBackground } from './particles-background';

const cvUrl = 'https://drive.google.com/uc?export=download&id=19THqX6ZkeeQhVll-Onlw1eB_PWel3xQ3';

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projets');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/30 dark:from-[#06060a] dark:via-[#09080f] dark:to-[#0b0710] pointer-events-none" aria-hidden />
      <ParticlesBackground />

      <div className="container mx-auto text-center relative z-10 pt-12 md:pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-5xl md:text-7xl lg:text-8xl mb-6 font-extrabold bg-gradient-to-r from-[#9b6bff] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent tracking-tight">
            Amani Steven
          </motion.h1>

          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 font-medium">
            Développeur Full-Stack
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }} className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Créateur d'expériences web modernes et performantes. Transformons vos idées en réalité digitale.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button onClick={scrollToProjects} className="group px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white rounded-xl hover:shadow-lg hover:shadow-[#8b5cf6]/30 transition-all hover:scale-105 font-medium">Voir mes projets</button>
            <button onClick={scrollToContact} className="px-8 py-4 bg-card border-2 border-border text-foreground rounded-xl hover:border-primary transition-all hover:scale-105 font-medium">Me contacter</button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.65 }} className="flex items-center justify-center gap-4 mb-16">
            <a href="https://github.com/steven005-dev" className="p-3 bg-card border border-border rounded-lg hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/8 transition-all hover:scale-110" aria-label="GitHub"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/steven-amani-37a237329/" className="p-3 bg-card border border-border rounded-lg hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/8 transition-all hover:scale-110" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <button onClick={scrollToContact} className="p-3 bg-card border border-border rounded-lg hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/8 transition-all hover:scale-110" aria-label="Email"><Mail className="w-5 h-5" /></button>
            <a href={cvUrl} download className="p-3 bg-card border border-border rounded-lg hover:border-secondary hover:bg-secondary/10 transition-all hover:scale-110" aria-label="CV"><FileText className="w-5 h-5" /></a>
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-slate-400">
            <ChevronDown className="w-6 h-6 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}