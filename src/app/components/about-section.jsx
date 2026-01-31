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
                Étudiant en systèmes informatiques et génie logiciel, je développe des applications modernes et
                performantes orientées résolution de problèmes. Rigoureux, motivé et curieux, je valorise la
                qualité du travail, l’apprentissage continu et les bonnes pratiques du génie logiciel. J’aime
                relever des défis techniques, collaborer en équipe et créer des solutions fiables et évolutives
                à impact réel.
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
                      <span className="text-muted-foreground">3 ans de formation</span>
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