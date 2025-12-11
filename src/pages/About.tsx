import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { Target, Eye, Heart, Star, Award, Users } from "lucide-react";
import libraryImage from "@/assets/library.jpg";
import playgroundImage from "@/assets/playground.jpg";
import classroomImage from "@/assets/classroom.jpg";
import principalImage from "@/assets/principal.jpg";

const values = [
  { icon: Heart, title: "Love & Care", description: "We nurture every child with genuine love and attention" },
  { icon: Star, title: "Excellence", description: "We strive for the highest standards in everything we do" },
  { icon: Users, title: "Teamwork", description: "We work together as a community of learners" },
  { icon: Award, title: "Integrity", description: "We teach honesty and strong moral values" },
];

const staff = [
  { name: "Mrs. Grace Wanjiku", role: "Principal", image: principalImage },
  { name: "Mr. James Ochieng", role: "Deputy Principal", image: principalImage },
  { name: "Mrs. Sarah Mwangi", role: "Head of Lower Primary", image: principalImage },
  { name: "Mr. David Kamau", role: "Sports Coordinator", image: principalImage },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 hero-gradient">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our School</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Discover our story, mission, and the dedicated team behind Achievers Academy
          </p>
        </div>
        <WaveDivider variant="card" />
      </section>

      {/* History */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Our Story" centered={false} />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2005, Achievers Academy began with a simple vision: to create 
                  a school where every child feels valued, inspired, and prepared for the future.
                </p>
                <p>
                  What started as a small classroom with just 15 students has grown into 
                  a thriving institution serving over 400 families. Our growth is a testament 
                  to the trust parents place in us and our unwavering commitment to quality education.
                </p>
                <p>
                  Today, we continue to innovate and adapt our teaching methods while 
                  maintaining the warm, family-like atmosphere that makes Achievers Academy special.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={libraryImage} alt="School library" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide a nurturing, inclusive, and stimulating learning environment 
                that empowers young learners to develop their full potential academically, 
                socially, and morally, preparing them to be responsible citizens and 
                lifelong learners.
              </p>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a leading junior primary school recognized for excellence in 
                holistic education, innovative teaching practices, and producing 
                confident, creative, and compassionate young individuals who 
                positively impact their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-6 rounded-2xl bg-muted hover:bg-primary/5 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader 
            title="Meet Our Team" 
            subtitle="Dedicated educators who make learning fun and meaningful"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member, index) => (
              <div 
                key={member.name}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionHeader 
            title="Our Facilities" 
            subtitle="Modern, safe, and child-friendly learning spaces"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={classroomImage} alt="Classroom" className="w-full aspect-video object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-foreground">Modern Classrooms</h3>
                <p className="text-sm text-muted-foreground">Well-lit, ventilated, and equipped with learning materials</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={libraryImage} alt="Library" className="w-full aspect-video object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-foreground">Resource Library</h3>
                <p className="text-sm text-muted-foreground">Stocked with age-appropriate books and learning resources</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={playgroundImage} alt="Playground" className="w-full aspect-video object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-foreground">Safe Playground</h3>
                <p className="text-sm text-muted-foreground">Secure outdoor space for play and physical activities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
