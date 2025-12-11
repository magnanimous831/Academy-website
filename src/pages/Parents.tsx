import { SectionHeader } from "@/components/shared/SectionHeader";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { Button } from "@/components/ui/button";
import { FileDown, Clock, BookOpen, Shirt, ClipboardList } from "lucide-react";

const timetable = [
  { time: "7:30 AM", activity: "Arrival & Assembly" },
  { time: "8:00 AM", activity: "Lesson 1" },
  { time: "8:40 AM", activity: "Lesson 2" },
  { time: "9:20 AM", activity: "Short Break (Snack)" },
  { time: "9:40 AM", activity: "Lesson 3" },
  { time: "10:20 AM", activity: "Lesson 4" },
  { time: "11:00 AM", activity: "Long Break (Play)" },
  { time: "11:30 AM", activity: "Lesson 5" },
  { time: "12:10 PM", activity: "Lesson 6" },
  { time: "12:50 PM", activity: "Lunch Break" },
  { time: "1:30 PM", activity: "Afternoon Activities" },
  { time: "3:00 PM", activity: "Dismissal (PP1 & PP2)" },
  { time: "4:00 PM", activity: "Dismissal (Grades 1-3)" },
];

const homeworkGuidelines = [
  "Homework is given daily except Fridays",
  "Allow 15-30 minutes for PP1/PP2, 30-45 minutes for Grades 1-3",
  "Create a quiet, well-lit study space at home",
  "Review homework diary daily and sign when complete",
  "Encourage independence but assist when needed",
  "Contact the class teacher if homework is consistently too difficult",
];

const uniformItems = [
  { item: "Regular Uniform", description: "Navy blue shorts/skirt, light blue shirt, school sweater" },
  { item: "PE Uniform", description: "School t-shirt, navy shorts, white socks, sports shoes" },
  { item: "Shoes", description: "Black closed shoes for regular days" },
  { item: "Accessories", description: "Navy blue hair ribbons for girls, school bag" },
];

const downloads = [
  { name: "School Calendar 2024", type: "PDF", size: "1.2 MB" },
  { name: "Fee Structure", type: "PDF", size: "450 KB" },
  { name: "Homework Policy", type: "PDF", size: "320 KB" },
  { name: "Uniform Guidelines", type: "PDF", size: "580 KB" },
  { name: "Medical Form", type: "PDF", size: "280 KB" },
  { name: "Transport Request Form", type: "PDF", size: "195 KB" },
];

const Parents = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 hero-gradient">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Parents Portal</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Everything you need to support your child's learning journey
          </p>
        </div>
        <WaveDivider variant="card" />
      </section>

      {/* Timetable */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Daily Timetable</h2>
              </div>
              <div className="bg-muted rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetable.map((item, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="px-4 py-2 text-sm font-medium text-primary">{item.time}</td>
                        <td className="px-4 py-2 text-sm text-muted-foreground">{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Homework Guidelines */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Homework Guidelines</h2>
              </div>
              <div className="bg-muted rounded-2xl p-6">
                <ul className="space-y-4">
                  {homeworkGuidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-secondary-foreground">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uniform Policy */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
              <Shirt className="w-6 h-6 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Uniform Policy</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uniformItems.map((uniform, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-bold text-foreground mb-2">{uniform.item}</h3>
                <p className="text-sm text-muted-foreground">{uniform.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Uniforms can be purchased from the school office. Please label all items with your child's name.
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionHeader 
            title="Downloads" 
            subtitle="Access important documents and forms"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {downloads.map((doc, index) => (
              <div 
                key={index}
                className="bg-muted rounded-xl p-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{doc.name}</h3>
                    <p className="text-xs text-muted-foreground">{doc.type} • {doc.size}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <FileDown className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parents;
