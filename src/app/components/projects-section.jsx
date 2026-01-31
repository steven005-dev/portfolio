import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import respirasenseImg from '../../asset/respirasense_pro.png';
import dameImg from '../../asset/dame.png';
import rlLabImg from '../../asset/Rl_labirinthe.png';
import carrefourImg from '../../asset/carrefour.png';
import supermarcherImg from '../../asset/supermarcher.png';
const projects = [{
  id: 1,
  title: 'respirasensepro',
  description: 'RespiraSensePro est une PWA qui prédit les risques d’exacerbation de la BPCO en combinant données IoT et intelligence artificielle.',
  technologies: ['React', 'Django', 'Tensorflow', 'Postgres'],
  githubUrl: 'https://github.com/eliokean/respirasense_pro',
  demoUrl: '#',
  color: 'from-chart-1 to-chart-2',
  imageUrl: respirasenseImg
}, {
  id: 2,
  title: 'jeu de Dame',
  description: 'Jeu de Dames réalisé en Java (MVC) avec Prolog pour la logique et FXML pour l’interface. Permet de jouer contre l’IA, deux IA ou un autre joueur humain.',
  technologies: ['JAVA', 'JAVAFX', 'Prolog'],
  githubUrl: 'https://github.com/steven005-dev/jeuDame',
  demoUrl: '#',
  color: 'from-chart-2 to-chart-3',
  imageUrl: dameImg
}, {
  id: 3,
  title: 'RL  labyrinthe',
  description: 'Une illustration simple avec un labyrinthe vu du dessus, un robot IA qui explore le chemin, avec les logos HTML, CSS, JS et Django, et des éléments visuels qui montrent l’apprentissage par renforcement.',
  technologies: ['HTML3', 'CSS5', 'Django'],
  githubUrl: 'https://github.com/Melv2412/RL_Labyrinthe',
  demoUrl: '#',
  color: 'from-chart-3 to-chart-4',
  imageUrl: rlLabImg
}, {
  id: 4,
  title: 'application de gestion de Hyper marché',
  description: 'Application de gestion de supermarché avec modules stock, caisse et statistiques ect ..., réalisée en Django et SQLite.',
  technologies: ['HTML3', 'CSS5', 'Django', 'SQLite'],
  githubUrl: 'https://github.com/romualdKO/PROJET_CARREFOUR',
  demoUrl: '#',
  color: 'from-chart-4 to-chart-5',
  imageUrl: carrefourImg
}, {
  id: 5,
  title: 'application de vente en ligne',
  description: 'Application de vente en ligne avec gestion de panier et possibilité de passer des commandes, développée avec HTML, CSS, Spring Boot et PostgreSQL.',
  technologies: ['Vue.js', 'Node.js', 'MySQL', 'Mapbox'],
  githubUrl: '#',
  demoUrl: '#',
  color: 'from-chart-5 to-chart-1',
  imageUrl: supermarcherImg
},];
function ProjectCard({
  project,
  index
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });
  return <motion.div ref={ref} initial={{
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
    delay: index * 0.1
  }} className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-chart-1 transition-all duration-300">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className="relative overflow-hidden aspect-video">
          <ImageWithFallback src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        </div>

        <div className="p-6">
          <h3 className="text-2xl mb-3">{project.title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                {tech}
              </span>)}
          </div>

          <div className="flex gap-4">
            <a href={project.githubUrl} className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>;
}
export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  return <section id="projets" className="py-20 lg:py-32 px-4 lg:px-8 bg-accent/20" ref={ref}>
      <div className="container mx-auto max-w-7xl">
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
            Projets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes projets récents, démontrant mes compétences
            en développement full-stack et design d'interfaces utilisateur.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </section>;
}