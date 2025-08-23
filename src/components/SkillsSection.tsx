import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageSquare, 
  TrendingUp, 
  Calculator, 
  Users, 
  Target, 
  UserCheck, 
  BarChart3, 
  Clock, 
  Search, 
  Settings 
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: MessageSquare,
      title: 'Business Communication & Presentation',
      description: 'Effective communication strategies and professional presentation skills',
      level: 90
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Market Research',
      description: 'Market analysis, consumer behavior, and strategic marketing planning',
      level: 85
    },
    {
      icon: Calculator,
      title: 'Financial Accounting & Basic Analytics',
      description: 'Financial statements, budgeting, and data-driven decision making',
      level: 80
    },
    {
      icon: Users,
      title: 'Team Leadership & Collaboration',
      description: 'Leading cross-functional teams and fostering collaborative environments',
      level: 88
    },
    {
      icon: Target,
      title: 'Strategic Planning & Problem Solving',
      description: 'Strategic thinking, process optimization, and innovative solutions',
      level: 82
    },
    {
      icon: UserCheck,
      title: 'Human Resource Management',
      description: 'Talent acquisition, employee development, and organizational behavior',
      level: 75
    },
    {
      icon: BarChart3,
      title: 'Data Analysis (Excel, Google Sheets)',
      description: 'Statistical analysis, data visualization, and reporting',
      level: 85
    },
    {
      icon: Clock,
      title: 'Time Management & Multitasking',
      description: 'Priority management, deadline adherence, and productivity optimization',
      level: 92
    },
    {
      icon: Search,
      title: 'Digital Marketing (SEO, Social Media Basics)',
      description: 'Online marketing strategies, content creation, and social media management',
      level: 78
    },
    {
      icon: Settings,
      title: 'Project & Operations Management',
      description: 'Project lifecycle management, process improvement, and quality control',
      level: 80
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Key <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set built through academic excellence and practical experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <skill.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {skill.description}
                      </p>
                      
                      {/* Skill Level */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-primary">Proficiency</span>
                          <span className="text-xs font-medium text-primary">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${index * 0.1 + 0.5}s`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;