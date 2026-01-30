import { ThemeProvider } from '@/app/components/theme-context';
import { Navbar } from '@/app/components/navbar';
import { HeroSection } from '@/app/components/hero-section';
import { AboutSection } from '@/app/components/about-section';
import { ExperienceSection } from '@/app/components/experience-section';
import { ProjectsSection } from '@/app/components/projects-section';
import { SkillsSection } from '@/app/components/skills-section';
import { TimelineSection } from '@/app/components/timeline-section';
import { ContactSection } from '@/app/components/contact-section';
import { Footer } from '@/app/components/footer';
export default function App() {
  return <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <TimelineSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>;
}