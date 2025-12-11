import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Heart, 
  Calendar, 
  ArrowRight,
  Star,
  Sparkles,
  GraduationCap,
  Palette
} from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";
import classroomImage from "@/assets/classroom.jpg";
import sportsImage from "@/assets/sports.jpg";
import artsImage from "@/assets/arts.jpg";
import principalImage from "@/assets/principal.jpg";

const quickLinks = [
  { icon: GraduationCap, title: "Admissions", description: "Join our family", href: "/admissions", color: "bg-primary" },
  { icon: BookOpen, title: "Academics", description: "Our curriculum", href: "/academics", color: "bg-secondary" },
  { icon: Calendar, title: "Events", description: "What's happening", href: "/news", color: "bg-accent" },
  { icon: Users, title: "Contact", description: "Get in touch", href: "/contact", color: "bg-coral" },
];

const features = [
  { icon: BookOpen, title: "Quality Education", description: "Modern curriculum designed for young learners" },
  { icon: Heart, title: "Caring Environment", description: "Safe and nurturing space for every child" },
  { icon: Trophy, title: "Extra Activities", description: "Sports, arts, music, and more" },
  { icon: Palette, title: "Creative Learning", description: "Hands-on activities that spark curiosity" },
];

const upcomingEvents = [
  { date: "Dec 15", title: "Christmas Concert", description: "Annual holiday celebration" },
  { date: "Jan 8", title: "Term 2 Begins", description: "Welcome back students!" },
  { date: "Jan 20", title: "Sports Day", description: "Inter-house competitions" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Happy children at Achievers Academy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl text-card">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary-foreground">Where Every Child Shines</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-primary">Achievers Academy</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-card/90 leading-relaxed">
              Nurturing young minds with love, creativity, and excellence. 
              We believe every child is a star waiting to shine!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/admissions">
                  Apply Now <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider variant="card" />
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-card relative -mt-1">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 -mt-32 relative z-20">
            {quickLinks.map((link, index) => (
              <Link
                key={link.title}
                to={link.href}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border border-border animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 ${link.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{link.title}</h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-card">
                <img 
                  src={principalImage} 
                  alt="School Principal" 
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-3xl -z-10" />
            </div>
            
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                Welcome Message
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Word From Our Principal
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dear Parents and Guardians,
                </p>
                <p>
                  Welcome to Achievers Academy! For over 18 years, we have been dedicated 
                  to providing quality education that nurtures the whole child - academically, 
                  socially, and emotionally.
                </p>
                <p>
                  Our team of passionate educators creates an environment where children 
                  feel safe to explore, question, and grow. We believe that every child 
                  has unique gifts, and our mission is to help them discover and develop 
                  these talents.
                </p>
                <p className="font-semibold text-foreground">
                  — Mrs. Grace Wanjiku, Principal
                </p>
              </div>
              <Button className="mt-6" asChild>
                <Link to="/about">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader 
            title="Why Choose Achievers Academy?" 
            subtitle="We provide a nurturing environment where children thrive academically and personally"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionHeader 
            title="Life at Achievers Academy" 
            subtitle="Explore the vibrant experiences our students enjoy every day"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={classroomImage} 
                  alt="Students in classroom" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-card">
                  <h3 className="font-bold text-lg">Learning Together</h3>
                  <p className="text-sm opacity-80">Interactive classrooms</p>
                </div>
              </div>
            </div>
            
            <div className="group rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={sportsImage} 
                  alt="Students playing sports" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-card">
                  <h3 className="font-bold text-lg">Sports & Games</h3>
                  <p className="text-sm opacity-80">Building healthy habits</p>
                </div>
              </div>
            </div>
            
            <div className="group rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={artsImage} 
                  alt="Students doing art" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-card">
                  <h3 className="font-bold text-lg">Creative Arts</h3>
                  <p className="text-sm opacity-80">Expressing imagination</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/gallery">View Full Gallery <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Upcoming Events" 
                subtitle="Stay connected with what's happening at Achievers Academy"
                centered={false}
              />
              
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div 
                    key={event.title}
                    className="flex gap-4 bg-card rounded-2xl p-4 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-primary rounded-xl flex flex-col items-center justify-center text-primary-foreground shrink-0">
                      <span className="text-xs font-medium">{event.date.split(" ")[0]}</span>
                      <span className="text-lg font-bold">{event.date.split(" ")[1]}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="mt-6" variant="outline" asChild>
                <Link to="/news">View All Events <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl" />
              <div className="relative p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                  <Star className="w-10 h-10 text-primary-foreground animate-bounce-slow" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Join Our Community
                </h3>
                <p className="text-muted-foreground mb-6">
                  Be part of a family that values education, creativity, and character development.
                </p>
                <Button size="lg" asChild>
                  <Link to="/admissions">Enroll Your Child</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Admissions are now open for the new academic year. Secure your child's spot 
            at Achievers Academy today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
