import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BBA 2nd Year at Mangalayatan University'
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Business Strategy & Management'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Team Collaboration & Communication'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Creative Problem Solving'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Driven by passion for business excellence and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Profile Image */}
            <div className="relative animate-scale-in order-2 lg:order-1">
              <div className="glass-card p-4 sm:p-8 rounded-2xl max-w-sm sm:max-w-md mx-auto">
                <div className="aspect-square bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/8478258c-55fe-4492-bd5b-47e4ac461713.png" 
                    alt="Nabin Baran Saha - Professional headshot"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Floating decorative elements - Hidden on mobile */}
              <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full blur-xl animate-float hidden sm:block" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-secondary/20 rounded-full blur-xl animate-float hidden sm:block" style={{ animationDelay: '2s' }} />
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
              <div className="prose prose-lg max-w-none space-y-4 sm:space-y-6">
                <p className="text-foreground leading-relaxed text-base sm:text-lg">
                  Motivated BBA 2nd-year student at <span className="font-semibold text-primary">Mangalayatan University</span> (Distance Education) 
                  with strong skills in marketing, financial accounting, business communication, and strategic planning.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Skilled in data analysis, digital marketing, and project management, with proven abilities in team leadership 
                  and collaboration. Aspiring to build a career in management, entrepreneurship, and business strategy.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-3 sm:p-4">
                      <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 group-hover:scale-110 transition-transform duration-200" />
                      <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-tight">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;