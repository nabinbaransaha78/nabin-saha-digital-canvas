import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Globe, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Warehouse Executive (Contractual)',
      company: 'Bluedart Express Ltd.',
      period: 'Contract Position',
      location: 'On-site',
      type: 'Professional Experience',
      description: 'Handled warehouse operations including inventory management, shipment tracking, and timely order dispatch. Developed skills in problem-solving, deadline management, and operational efficiency.',
      skills: ['Inventory Management', 'Problem Solving', 'Operations', 'Time Management', 'Quality Control'],
      icon: Building2,
      color: 'bg-primary/10 border-primary/20'
    },
    {
      role: 'Freelance Website Development & Marketing',
      company: 'myballons.in',
      period: 'Freelance Project',
      location: 'Remote',
      type: 'Business Project',
      description: 'Conducted market research, built a responsive website, executed SEO strategies, and managed social media campaigns. Strengthened technical, marketing, and client management skills, delivering measurable growth in online presence.',
      skills: ['Web Development', 'SEO', 'Market Research', 'Social Media Marketing', 'Client Management'],
      icon: Globe,
      color: 'bg-secondary/10 border-secondary/20'
    }
  ];

  const achievements = [
    'Certified in Soft Skills Development (effective communication, adaptability, collaboration)',
    'Leadership Skills with proven ability to guide and motivate teams',
    'Strong ability to work under pressure and deliver quality outcomes'
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              Experience & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Building expertise through diverse professional experiences and continuous learning
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`glass-card border-primary/10 hover:border-primary/30 transition-all duration-300 group animate-fade-in-up ${exp.color}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                    {/* Icon & Timeline */}
                    <div className="flex items-center lg:flex-col lg:items-center gap-3 sm:gap-4 lg:gap-2">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                        <exp.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                      </div>
                      <div className="hidden lg:block w-0.5 h-12 sm:h-16 bg-gradient-primary opacity-30" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col gap-3 sm:gap-4 mb-4">
                        <div>
                          <h3 className="font-heading font-bold text-lg sm:text-xl mb-1 group-hover:text-primary transition-colors duration-200 leading-tight">
                            {exp.role}
                          </h3>
                          <p className="text-base sm:text-lg font-semibold text-secondary mb-2">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs">
                        {exp.type}
                      </Badge>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline" 
                            className="border-primary/30 text-primary hover:bg-primary/10 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <Card className="glass-card border-primary/10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-center">
                Certifications & <span className="text-gradient">Achievements</span>
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/20 transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;