import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
const Portfolio = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <footer className="py-6 sm:py-8 border-t border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground text-sm sm:text-base">© 2025 Nabin Baran Saha. Built with passion for excellence.</p>
        </div>
      </footer>
    </div>;
};
export default Portfolio;