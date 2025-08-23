import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Send, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nabinbaransaha78@gmail.com',
      href: 'mailto:nabinbaransaha78@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8536812927',
      href: 'tel:+918536812927'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Nabin Baran Saha',
      href: 'https://www.linkedin.com/in/nabin-baran-saha-b13425380'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss opportunities, collaborations, or just have a conversation about business and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="font-heading font-bold text-2xl mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, business ideas, or potential collaborations. 
                  Whether you're a recruiter, fellow student, or business professional, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <a 
                        href={info.href}
                        target={info.icon === Linkedin ? '_blank' : undefined}
                        rel={info.icon === Linkedin ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group-hover:text-primary transition-colors duration-200"
                      >
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <info.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold">{info.label}</p>
                          <p className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <Card className="glass-card border-primary/10">
                <CardContent className="p-6">
                  <h4 className="font-heading font-semibold text-lg mb-4">Quick Facts</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-primary">Location</p>
                      <p className="text-muted-foreground">India</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Availability</p>
                      <p className="text-muted-foreground">Open to opportunities</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Response Time</p>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Languages</p>
                      <p className="text-muted-foreground">English, Hindi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="glass-card border-primary/10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity, your company, or what you'd like to discuss..."
                      rows={5}
                      className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden glow-effect hover:glow-effect transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        Send Message
                      </>
                    )}
                    <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">Professional Inquiries Welcome</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Recruiters, business partners, and collaboration opportunities are especially encouraged to reach out.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;