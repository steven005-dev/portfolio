import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import stevenImg from "../../asset/steven.jpeg";
import { Code, Rocket, Heart, Zap } from 'lucide-react';
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-center font-extrabold">
            À propos de moi
          </h2>
          <div className="flex justify-center mb-12" aria-hidden>
            <div className="w-36 h-1.5 rounded-full bg-gradient-to-r from-[#9b6bff] via-[#8b5cf6] to-[#f97316]" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
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
              </div>
            </div>
          </div>

          <div className="mt-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center card-highlight transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" style={{"--card-accent":"#9b6bff","--card-accent-rgb":"155,107,255"}}>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#9b6bff] to-[#8b5cf6] text-white">
                    <Code className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-[#9b6bff]">3+</div>
                <div className="text-sm text-muted-foreground mt-2">Ans d'expérience</div>
              </div>

                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center card-highlight transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" style={{"--card-accent":"#8b5cf6","--card-accent-rgb":"139,92,246"}}>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#ec4899] text-white">
                    <Rocket className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-[#8b5cf6]">15+</div>
                <div className="text-sm text-muted-foreground mt-2">Projets réalisés</div>
              </div>

                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center card-highlight transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" style={{"--card-accent":"#f97316","--card-accent-rgb":"249,115,22"}}>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#f97316] to-[#fb923c] text-white">
                    <Heart className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-[#f97316]">100%</div>
                <div className="text-sm text-muted-foreground mt-2">Passion & engagement</div>
              </div>

                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center card-highlight transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" style={{"--card-accent":"#f59e0b","--card-accent-rgb":"245,158,11"}}>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#f97316] text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-[#f59e0b]">24/7</div>
                <div className="text-sm text-muted-foreground mt-2">Apprentissage continu</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}