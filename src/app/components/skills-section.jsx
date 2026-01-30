import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
const skillCategories = [{
  title: 'Langages',
  skills: ['JavaScript', 'JSX', 'Python', 'Java', 'SQL', 'HTML5','CSS3','C','C++']
}, {
  title: 'Frameworks & Librairies',
  skills: ['React', 'Django', 'Spring Boot']
}, {
  title: 'Bases de données',
  skills: ['PostgreSQL','MySQL','SQLite' ]
}, {
  title: 'Outils & IDE',
  skills: ['Git', 'Docker', 'AWS','StarUML','Visual Studio Code','IntelliJ IDEA','Bash/Shell']
}];
export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });
  return <section id="competences" className="py-20 lg:py-32 px-4 lg:px-8" ref={ref}>
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
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Compétences techniques
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un aperçu des technologies et outils que je maîtrise pour créer
            des applications web performantes et scalables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => <motion.div key={category.title} initial={{
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
          delay: categoryIndex * 0.1
        }} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-xl mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => <span key={skill} className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-chart-1 hover:text-primary-foreground transition-all duration-300 cursor-default">
                    {skill}
                  </span>)}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}