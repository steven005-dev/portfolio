import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, Palette, Activity, Brain } from 'lucide-react';
const timelineItems = [{
  icon: <Users className="w-6 h-6" />,
  title: 'Travail en équipe',
  description: "Je sais collaborer efficacement avec les autres en écoutant leurs idées et en partageant les miennes. Cela permet d’atteindre ensemble des objectifs communs tout en maintenant une bonne ambiance.",
}, {
  icon: <Palette className="w-6 h-6" />,
  title: 'Créativité',
  description: "Je suis capable de générer des idées nouvelles et originales pour résoudre des problèmes ou améliorer des projets. J’aime explorer différentes approches afin d’apporter des solutions innovantes adaptées aux besoins.",
}, {
  icon: <Activity className="w-6 h-6" />,
  title: 'Motivation et autonomie',
  description: "Je suis motivé(e) et prends des initiatives pour avancer sans attendre d’instructions. Je sais gérer mon travail de manière indépendante tout en respectant les objectifs fixés.",
}, {
  icon: <Brain className="w-6 h-6" />,
  title: 'Esprit critique',
  description: "Je sais analyser les informations de manière rigoureuse et objective pour en comprendre les enjeux. Cela me permet de prendre des décisions réfléchies et basées sur des faits concrets.",
}];
export function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  return <section id="soft-skills" className="py-20 lg:py-32 px-4 lg:px-8 bg-accent/20" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Soft skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compétences humaines et comportementales qui me permettent de travailler efficacement
            en équipe et d'apporter de la valeur dans des projets variés.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

          {timelineItems.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: index % 2 === 0 ? -20 : 20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: index % 2 === 0 ? -20 : 20
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}>
              <div className="flex items-start gap-4 md:gap-8">
                {/* Icon - left on mobile, alternating on desktop */}
                <div className={`flex-shrink-0 ${index % 2 === 0 ? 'md:ml-auto md:order-2' : ''}`}>
                  <div className="w-16 h-16 rounded-full bg-chart-1 text-primary-foreground flex items-center justify-center relative z-10">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 bg-card border border-border rounded-2xl p-6 ${index % 2 === 0 ? 'md:order-1' : ''}`}>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="mt-16 text-center bg-gradient-to-r from-chart-1 to-chart-2 text-primary-foreground rounded-2xl p-8">
          <h3 className="text-2xl mb-3">Toujours en apprentissage</h3>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Le développement web évolue constamment. Je consacre du temps chaque semaine
            à apprendre de nouvelles technologies, explorer de nouveaux paradigmes
            et améliorer mes compétences existantes.
          </p>
        </motion.div>
      </div>
    </section>;
}