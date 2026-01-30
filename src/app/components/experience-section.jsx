import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 lg:py-32 px-4 lg:px-8 bg-accent/10" ref={ref}>
      <div className="container mx-auto max-w-5xl">
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
                Durant ce stage, j'ai découvert et approfondi plusieurs aspects clés du développement
                informatique. J'ai appris à maîtriser l'architecture de développement <strong>MVC</strong>
                (Modèle-Vue-Contrôleur) avec <strong>Spring Boot</strong>, ce qui m'a permis de comprendre
                comment structurer une application de manière efficace et maintenable.

                J'ai également acquis des notions importantes sur l'administration de bases de données,
                notamment avec <strong>PostgreSQL (PgSQL)</strong>, ce qui m'a sensibilisé à la gestion des
                données et à leur organisation pour un fonctionnement optimal des applications.

                Ce qui m'a le plus marqué durant cette expérience, c'est l'importance du travail réalisé
                en amont du développement, souvent appelé "le cœur du développement informatique" : la
                modélisation. J'ai utilisé des outils comme <strong>MERISE</strong> et <strong>UML</strong>
                pour concevoir et représenter clairement les structures et les processus avant même de
                commencer le codage. Cette étape m'a montré combien une bonne modélisation facilite la
                compréhension du projet, réduit les erreurs, et améliore la qualité globale du logiciel.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
