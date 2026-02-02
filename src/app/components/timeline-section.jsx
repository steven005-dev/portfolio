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
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-center font-extrabold">
            Soft Skills
          </h2>
          <div className="flex justify-center mb-12" aria-hidden>
            <div className="w-36 h-1.5 rounded-full bg-gradient-to-r from-[#9b6bff] via-[#8b5cf6] to-[#f97316]" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compétences humaines et comportementales qui me permettent de travailler efficacement
            en équipe et d'apporter de la valeur dans des projets variés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {(() => {
            const colorBg = ['from-chart-1 to-chart-2', 'from-[#f59e0b] to-[#f97316]', 'from-chart-2 to-chart-3', 'from-chart-3 to-chart-4'];
            const titleColor = ['text-[#9b6bff]', 'text-[#f59e0b]', 'text-[#8b5cf6]', 'text-[#f97316]'];
            return timelineItems.map((item, index) => {
              const col = index % colorBg.length;
              const accents = [
                {hex: '#6366f1', rgb: '99,102,241'},
                {hex: '#f59e0b', rgb: '245,158,11'},
                {hex: '#8b5cf6', rgb: '139,92,246'},
                {hex: '#06b6d4', rgb: '6,182,212'}
              ];
              const accent = accents[col];
              return <motion.div key={index} initial={{
                opacity: 0,
                y: 12
              }} animate={isInView ? {
                opacity: 1,
                y: 0
              } : {
                opacity: 0,
                y: 12
              }} transition={{
                duration: 0.6,
                delay: index * 0.12
              }} className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all card-highlight" style={{"--card-accent": accent.hex, "--card-accent-rgb": accent.rgb}}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-border/40 bg-gradient-to-br ${colorBg[col]} text-white`}> 
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${titleColor[col]}`}>{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>;
            });
          })()}
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
      }} className="mt-16">
          <div className="relative rounded-2xl p-1 bg-gradient-to-r from-[#9b6bff] via-[#8b5cf6] to-[#f59e0b] shadow-[0_8px_30px_rgba(155,107,255,0.06),0_8px_30px_rgba(249,115,22,0.06)]">
            <div className="bg-card rounded-2xl p-8 md:p-12 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#e6b9cf] mb-4">En constante évolution</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Le développement évolue sans cesse. Je m'engage à explorer de nouvelles technologies et à
                perfectionner mes compétences chaque jour.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}