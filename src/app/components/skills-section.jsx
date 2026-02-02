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
  const progressMap = {
    JavaScript: 90,
    JSX: 85,
    TypeScript: 85,
    Python: 75,
    Java: 70,
    HTML5: 95,
    CSS3: 90,
    SQL: 80,
    React: 88,
    Django: 72,
    'Spring Boot': 70,
    PostgreSQL: 78,
    MySQL: 76,
    SQLite: 74,
    Git: 85,
    Docker: 70,
    AWS: 60
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-center font-extrabold">
            Compétences techniques
          </h2>
          <div className="flex justify-center mb-12" aria-hidden>
            <div className="w-36 h-1.5 rounded-full bg-gradient-to-r from-[#9b6bff] via-[#8b5cf6] to-[#f97316]" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un aperçu des technologies et outils que je maîtrise pour créer
            des applications web performantes et scalables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            let accent = '#9b6bff';
            let accentRgb = '155,107,255';
            if (categoryIndex === 1) { accent = '#8b5cf6'; accentRgb = '139,92,246'; }
            if (categoryIndex === 2) { accent = '#10b981'; accentRgb = '16,185,129'; }
            if (categoryIndex === 3) { accent = '#f59e0b'; accentRgb = '245,158,11'; }
            return (<motion.div key={category.title} initial={{
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
          }} className="bg-card border border-border rounded-2xl p-6 card-highlight" style={{"--card-accent":accent,"--card-accent-rgb":accentRgb}}>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-br from-[#9b6bff] to-[#8b5cf6] text-white">
                  {/* category icon placeholder */}
                  <span className="text-lg">💻</span>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => {
                  const icon = icons[skill];
                  const pct = progressMap[skill] ?? Math.max(50, 80 - i * 5);
                  return <div key={skill} className="flex items-center gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-md bg-card/30 flex items-center justify-center">
                      {icon ? <img src={icon} alt={`${skill} icon`} className="w-6 h-6 object-contain" /> : <span className="text-sm font-semibold">{getAbbrev(skill)}</span>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-sm font-medium">{skill}</div>
                        <div className="text-sm text-muted-foreground">{pct}%</div>
                      </div>
                      <div className="w-full h-3 rounded-full bg-card/60 overflow-hidden">
                        <div className="h-3 rounded-full bg-gradient-to-r from-[#9b6bff] to-[#f97316]" style={{width: `${pct}%`}} />
                      </div>
                    </div>
                  </div>;
                })}
              </div>
            </motion.div>); })}
        </div>
      </div>
    </section>;
}