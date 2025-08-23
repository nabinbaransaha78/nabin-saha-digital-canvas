import { Button } from '@/components/ui/button';
import { Download, MessageCircle } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // For now, this will show a placeholder alert
    // In a real implementation, this would download the actual PDF
    alert('CV download functionality will be implemented with the actual PDF file.');
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium mb-4">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-gradient">
              Nabin Baran Saha
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate About{' '}
            <span className="font-semibold text-gradient">
              Management & Innovation
            </span>
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto">
            BBA 2nd-year student with strong expertise in business strategy, marketing, and leadership. 
            Ready to bring fresh perspectives to your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group relative overflow-hidden glow-effect hover:glow-effect transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
              <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-4"
              onClick={scrollToContact}
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;