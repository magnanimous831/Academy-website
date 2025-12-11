import { SectionHeader } from "@/components/shared/SectionHeader";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const news = [
  {
    date: "December 5, 2024",
    category: "Announcement",
    title: "Term 3 Report Cards Distribution",
    excerpt: "Report cards for Term 3 will be available for collection from December 10-12. Parents are encouraged to meet with class teachers.",
    image: "/placeholder.svg"
  },
  {
    date: "November 28, 2024",
    category: "Achievement",
    title: "Inter-School Quiz Competition Winners",
    excerpt: "Congratulations to our Grade 3 team for winning first place in the regional quiz competition!",
    image: "/placeholder.svg"
  },
  {
    date: "November 15, 2024",
    category: "Event",
    title: "Annual Sports Day Success",
    excerpt: "Thank you to all parents who joined us for an exciting day of athletics and team sports. Red House emerged as overall winners.",
    image: "/placeholder.svg"
  },
];

const upcomingEvents = [
  { date: "Dec 15", day: "Fri", title: "Christmas Concert", time: "10:00 AM", venue: "School Hall" },
  { date: "Dec 18", day: "Mon", title: "Term 3 Closing Day", time: "12:00 PM", venue: "Campus" },
  { date: "Jan 8", day: "Mon", title: "Term 2 Opens", time: "7:30 AM", venue: "Campus" },
  { date: "Jan 20", day: "Sat", title: "Sports Day", time: "8:00 AM", venue: "Sports Field" },
  { date: "Feb 14", day: "Wed", title: "Valentine's Party", time: "11:00 AM", venue: "Classrooms" },
  { date: "Mar 8", day: "Fri", title: "Parent-Teacher Meeting", time: "2:00 PM", venue: "School Hall" },
];

const News = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 hero-gradient">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Events</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Stay updated with the latest happenings at Achievers Academy
          </p>
        </div>
        <WaveDivider variant="card" />
      </section>

      {/* News */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionHeader title="Latest News" subtitle="What's happening in our school community" />
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <article 
                key={index}
                className="bg-muted rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-primary/10" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
                  <Button variant="link" className="px-0 mt-3">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader title="Upcoming Events" subtitle="Mark your calendars for these important dates" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-4 shadow-soft hover:shadow-card transition-all duration-300 flex gap-4 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex flex-col items-center justify-center text-primary-foreground shrink-0">
                  <span className="text-xs font-medium">{event.date.split(" ")[0]}</span>
                  <span className="text-lg font-bold">{event.date.split(" ")[1]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-1">{event.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-card">
        <div className="container max-w-2xl text-center">
          <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">Never Miss an Update</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive the latest news, event invitations, and important 
            announcements directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
