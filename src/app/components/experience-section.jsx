import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="relative overflow-hidden py-20 lg:py-32 px-4 lg:px-8 bg-accent/10" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/30 dark:from-[#06060a] dark:via-[#09080f] dark:to-[#0b0710] pointer-events-none" aria-hidden />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Expérience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stage de 2 mois chez <span className="font-medium">ORA PLUS PLUS</span>.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 flex gap-4 items-start"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Stage - ORA PLUS PLUS (2 mois)</h3>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Durant ce stage, j’ai renforcé mes compétences en développement informatique, notamment en
                architecture <strong>MVC</strong> avec <strong>Spring Boot</strong>, ce qui m’a permis de mieux
                structurer des applications maintenables. J’ai également acquis des bases solides en
                administration de bases de données avec <strong>PostgreSQL</strong>. Cette expérience m’a
                surtout fait comprendre l’importance de la modélisation en amont du développement, à
                travers l’utilisation de <strong>MERISE</strong> et <strong>UML</strong>, pour améliorer la
                qualité et la fiabilité des applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
