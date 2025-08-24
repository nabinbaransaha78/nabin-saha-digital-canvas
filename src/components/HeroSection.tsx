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
      
      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute top-20 left-10 w-12 h-12 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-xl animate-float hidden sm:block" />
      <div className="absolute bottom-32 right-16 w-16 h-16 sm:w-32 sm:h-32 bg-secondary/20 rounded-full blur-xl animate-float hidden sm:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-accent/20 rounded-full blur-lg animate-float hidden sm:block" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Welcome Badge */}
          <div className="mb-6 sm:mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-display font-medium text-xs sm:text-sm tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3 animate-pulse-slow"></span>
              WELCOME TO MY PORTFOLIO
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="mb-6 sm:mb-8 opacity-0 animate-text-reveal" style={{ animationDelay: '0.4s' }}>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-hero leading-tight sm:leading-none tracking-tight mb-3 sm:mb-4">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="text-gradient animate-gradient-shift bg-gradient-to-r from-primary via-secondary to-primary">
                  Nabin Baran Saha
                </span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-primary rounded-full opacity-80"></div>
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-4 sm:mb-6 opacity-0 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
            <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-hero-sub text-muted-foreground leading-relaxed px-4">
              Passionate About{' '}
              <span className="font-bold text-gradient bg-gradient-to-r from-secondary to-primary animate-gradient-shift">
                Management & Innovation
              </span>
            </p>
          </div>
          
          {/* Description */}
          <div className="mb-8 sm:mb-12 opacity-0 animate-slide-in-right" style={{ animationDelay: '1s' }}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              BBA 2nd-year student with <span className="text-primary font-semibold">proven expertise</span> in business strategy, 
              marketing excellence, and dynamic leadership. Ready to deliver{' '}
              <span className="text-secondary font-semibold">exceptional value</span> and fresh perspectives to your organization.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center opacity-0 animate-scale-in px-4" style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto group relative overflow-hidden glow-effect hover:glow-effect transition-all duration-500 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 sm:px-10 sm:py-6 text-base sm:text-lg font-display font-semibold tracking-wide"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce transition-transform duration-300" />
              Download Professional CV
              <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto group border-2 border-primary/40 hover:border-primary hover:bg-primary/10 px-6 py-3 sm:px-10 sm:py-6 text-base sm:text-lg font-display font-semibold backdrop-blur-sm"
              onClick={scrollToContact}
            >
              <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300" />
              Let's Connect
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Professional Stats */}
          <div className="mt-12 sm:mt-16 opacity-0 animate-fade-in-up px-4" style={{ animationDelay: '1.4s' }}>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center max-w-md sm:max-w-none mx-auto">
              <div className="group">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-display">2+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wide">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary font-display">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wide">Key Skills</div>
              </div>
              <div className="group">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-display">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wide">Commitment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Responsive for all devices */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-primary rounded-full mt-1.5 sm:mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;