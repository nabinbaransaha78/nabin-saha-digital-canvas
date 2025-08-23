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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Driven by passion for business excellence and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative animate-scale-in">
              <div className="glass-card p-8 rounded-2xl">
                <div className="aspect-square bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center">
                    <p className="text-muted-foreground text-sm text-center px-4">
                      Profile photo will be displayed here<br />
                      <span className="text-xs">(Please upload your professional headshot)</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            {/* Content */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed text-lg">
                  Motivated BBA 2nd-year student at <span className="font-semibold text-primary">Mangalayatan University</span> (Distance Education) 
                  with strong skills in marketing, financial accounting, business communication, and strategic planning.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Skilled in data analysis, digital marketing, and project management, with proven abilities in team leadership 
                  and collaboration. Aspiring to build a career in management, entrepreneurship, and business strategy.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <item.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform duration-200" />
                      <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
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