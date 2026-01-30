import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import stevenImg from "../../asset/steven.jpeg";
export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });
  return <section id="apropos" className="py-20 lg:py-32 px-4 lg:px-8" ref={ref}>
      <div className="container mx-auto max-w-6xl">
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
      }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
            À propos de moi
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
               Étudiant en systèmes informatiques et génie logiciel, passionné par le développement de solutions innovantes et intelligentes.
                Je me spécialise dans la conception et l’implémentation d’applications modernes, performantes et orientées résolution de problèmes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              Mon approche repose sur la rigueur, la motivation et une forte soif d’apprentissage.
              J’accorde une grande importance à la qualité du travail, 
              tout en cherchant continuellement à développer de nouvelles compétences et à maîtriser les technologies émergentes du domaine.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Curieux et engagé, j’aime relever des défis techniques et travailler sur des projets concrets qui ont un impact réel.
                 J’apprécie particulièrement le travail collaboratif, l’analyse de problèmes complexes et la transformation d’idées en solutions fiables et évolutives,
                  tout en respectant les bonnes pratiques du génie logiciel.
            </p>
            </div>

            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-chart-1 to-chart-2 opacity-20 absolute inset-0" />
              <div className="relative">
                <img src={stevenImg} alt="Developer workspace" className="w-full aspect-square object-cover rounded-2xl border border-border mb-6" />
                <div className="bg-accent rounded-2xl p-8 border border-border">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-chart-1" />
                      <span className="text-muted-foreground">3 ans d'expérience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-chart-2" />
                      <span className="text-muted-foreground">5 projets réalisés</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-chart-3" />
                      <span className="text-muted-foreground">Passion pour le code propre</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-chart-4" />
                      <span className="text-muted-foreground">Apprentissage continu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}