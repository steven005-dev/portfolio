import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import jsIcon from '../../asset/javascript.png';
import jsxIcon from '../../asset/jsx.png';
import pythonIcon from '../../asset/python.png';
import javaIcon from '../../asset/java.png';
import htmlIcon from '../../asset/html-5.png';
import cssIcon from '../../asset/css-3.png';
import cIcon from '../../asset/c.png';
import cppIcon from '../../asset/c++.png';
import reactIcon from '../../asset/React.png';
import djangoIcon from '../../asset/django.png';
import springIcon from '../../asset/spring.png';
import postgresIcon from '../../asset/postgresql.png';
import mysqlIcon from '../../asset/mysql.png';
import sqliteIcon from '../../asset/SQLite.png';
import gitIcon from '../../asset/git.png';
import dockerIcon from '../../asset/docker.png';
import awsIcon from '../../asset/aws.png';
import starumlIcon from '../../asset/staruml.png';
import vscodeIcon from '../../asset/vscode.png';
import intellijIcon from '../../asset/intellij.png';
import shellIcon from '../../asset/shell.png';
import databaseIcon from '../../asset/database.png';
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
  const getAbbrev = str => {
    const parts = str.replace(/\(|\)/g, '').split(/[\s\/\-]+/).filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0,2).toUpperCase();
    return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
  };

  const icons = {
    JavaScript: jsIcon,
    JSX: jsxIcon,
    Python: pythonIcon,
    Java: javaIcon,
    HTML5: htmlIcon,
    CSS3: cssIcon,
    C: cIcon,
    'C++': cppIcon,
    React: reactIcon,
    Django: djangoIcon,
    'Spring Boot': springIcon,
    PostgreSQL: postgresIcon,
    MySQL: mysqlIcon,
    SQLite: sqliteIcon,
    Git: gitIcon,
    Docker: dockerIcon,
    AWS: awsIcon,
    StarUML: starumlIcon,
    'Visual Studio Code': vscodeIcon,
    'IntelliJ IDEA': intellijIcon,
    'Bash/Shell': shellIcon,
    SQL: databaseIcon
  };
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
                {category.skills.map(skill => {
                  const icon = icons[skill];
                  return <div key={skill} className="flex items-center gap-3 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:shadow-md transition-all duration-300 cursor-default">
                    {icon ? <img src={icon} alt={`${skill} icon`} className="w-8 h-8 object-contain" /> : <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-chart-1 text-primary-foreground flex items-center justify-center text-xs font-semibold">{getAbbrev(skill)}</span>}
                    <span className="text-sm">{skill}</span>
                  </div>})}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}