import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import stevencv from "../../asset/stevencv.pdf";
export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projets');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToExperience = () => {
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="accueil" className="min-h-screen pt-16 md:pt-0 flex items-center justify-center px-4 lg:px-8 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <div className="inline-block mb-4 px-4 py-2 bg-accent rounded-full">
            <span className="text-sm text-muted-foreground">Bienvenue sur mon portfolio</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            Amani steven
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
            Développeur Full-Stack
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Passionné par la création d'applications web modernes et performantes.
            J'aime transformer des idées en solutions digitales élégantes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button onClick={scrollToExperience} className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-all hover:scale-105">
              Expérience
            </button>
            <button onClick={scrollToProjects} className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all hover:scale-105">
              Voir mes projets
            </button>
            <button onClick={scrollToContact} className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-all hover:scale-105">
              Me contacter
            </button>
            <a href={stevencv} download className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-all hover:scale-105 inline-flex items-center justify-center">
              Télécharger mon CV
            </a>
          </div>

          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="text-muted-foreground">
            <ChevronDown className="w-6 h-6 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
}