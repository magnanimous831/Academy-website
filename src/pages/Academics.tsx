import { SectionHeader } from "@/components/shared/SectionHeader";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { BookOpen, Lightbulb, Users, PenTool, Calculator, Globe, Music, Dumbbell } from "lucide-react";
import classroomImage from "@/assets/classroom.jpg";
import artsImage from "@/assets/arts.jpg";

const subjects = [
  { icon: BookOpen, name: "English & Literacy", description: "Reading, writing, phonics, and communication skills" },
  { icon: Calculator, name: "Mathematics", description: "Numbers, patterns, and problem-solving" },
  { icon: Globe, name: "Environmental Studies", description: "Science and social studies exploration" },
  { icon: PenTool, name: "Creative Arts", description: "Drawing, painting, and crafts" },
  { icon: Music, name: "Music & Movement", description: "Singing, dancing, and rhythm" },
  { icon: Dumbbell, name: "Physical Education", description: "Sports, games, and healthy habits" },
];

const approaches = [
  {
    title: "Play-Based Learning",
    description: "We believe children learn best through play. Our curriculum incorporates structured play activities that develop cognitive, social, and motor skills.",
  },
  {
    title: "Thematic Approach",
    description: "Subjects are integrated around themes that make learning meaningful and help children connect concepts across different areas.",
  },
  {
    title: "Individualized Attention",
    description: "With small class sizes, our teachers can identify and nurture each child's unique strengths and learning style.",
  },
  {
    title: "Hands-On Activities",
    description: "Children engage with concrete materials and real-world experiences that make abstract concepts tangible.",
  },
];

const Academics = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 hero-gradient">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Excellence</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Our curriculum is designed to inspire curiosity and build strong foundations
          </p>
        </div>
        <WaveDivider variant="card" />
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Our Curriculum" centered={false} />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Achievers Academy, we follow the Kenya CBC (Competency-Based Curriculum) 
                  for Early Years Education, enhanced with international best practices to 
                  give our learners a competitive edge.
                </p>
                <p>
                  Our program covers Pre-Primary 1 (PP1), Pre-Primary 2 (PP2), and Grades 1-3, 
                  focusing on developing foundational literacy, numeracy, and life skills.
                </p>
                <p>
                  We believe in educating the whole child - head, heart, and hands - ensuring 
                  balanced development across all domains.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={classroomImage} alt="Classroom learning" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader 
            title="Learning Areas" 
            subtitle="A well-rounded curriculum covering essential skills and knowledge"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <div 
                key={subject.name}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <subject.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{subject.name}</h3>
                <p className="text-sm text-muted-foreground">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-card">
              <img src={artsImage} alt="Creative learning" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader title="Our Teaching Approach" centered={false} />
              <div className="space-y-6">
                {approaches.map((approach, index) => (
                  <div 
                    key={approach.title}
                    className="flex gap-4 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Lightbulb className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{approach.title}</h3>
                      <p className="text-sm text-muted-foreground">{approach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader 
            title="Class Structure" 
            subtitle="Age-appropriate learning experiences at every level"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">PP1</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Pre-Primary 1</h3>
              <p className="text-sm text-muted-foreground mb-4">Ages 4-5 years</p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Introduction to school routines</li>
                <li>• Basic literacy foundations</li>
                <li>• Number recognition (1-20)</li>
                <li>• Social skills development</li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-foreground">PP2</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Pre-Primary 2</h3>
              <p className="text-sm text-muted-foreground mb-4">Ages 5-6 years</p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Reading readiness</li>
                <li>• Writing skills development</li>
                <li>• Numbers and counting (1-50)</li>
                <li>• Creative expression</li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1-3</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Grades 1-3</h3>
              <p className="text-sm text-muted-foreground mb-4">Ages 6-9 years</p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Independent reading & writing</li>
                <li>• Mathematical operations</li>
                <li>• Science exploration</li>
                <li>• Digital literacy basics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
