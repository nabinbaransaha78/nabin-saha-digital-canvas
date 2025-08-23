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
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Experience & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building expertise through diverse professional experiences and continuous learning
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`glass-card border-primary/10 hover:border-primary/30 transition-all duration-300 group animate-fade-in-up ${exp.color}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon & Timeline */}
                    <div className="flex items-center lg:flex-col lg:items-center gap-4 lg:gap-2">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <exp.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="hidden lg:block w-0.5 h-16 bg-gradient-primary opacity-30" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                        <div>
                          <h3 className="font-heading font-bold text-xl mb-1 group-hover:text-primary transition-colors duration-200">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-semibold text-secondary mb-1">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end gap-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <Badge variant="secondary" className="mb-4">
                        {exp.type}
                      </Badge>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline" 
                            className="border-primary/30 text-primary hover:bg-primary/10"
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
            <CardContent className="p-8">
              <h3 className="font-heading font-bold text-2xl mb-6 text-center">
                Certifications & <span className="text-gradient">Achievements</span>
              </h3>
              <div className="grid md:grid-cols-1 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/20 transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground leading-relaxed">{achievement}</p>
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