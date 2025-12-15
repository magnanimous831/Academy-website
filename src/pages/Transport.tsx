import { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Bus, MapPin, Clock, Phone, CheckCircle, Calendar, Users, Shield, Navigation, Bell, Wrench, Check, Play, Map } from "lucide-react";
import { LiveBusTracker } from "@/components/transport/LiveBusTracker";
import { NotificationSubscription } from "@/components/transport/NotificationSubscription";
import { TestBusUpdater } from "@/components/transport/TestBusUpdater";
import schoolBusHero from "@/assets/school-bus-hero.png";

export default function Transport() {
  const { toast } = useToast();
  
const [showSafetyVideo, setShowSafetyVideo] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    grade: "",
    phone: "",
    email: "",
    pickupAddress: "",
    preferredTime: "",
    additionalNotes: ""
  });

  const busRoutes = [
    {
      id: 1,
      name: "Route A - North District",
      areas: ["Greenview Estate", "Sunrise Gardens", "Pine Valley"],
      departureTime: "6:30 AM",
      arrivalTime: "7:15 AM",
      returnTime: "3:30 PM",
      availableSeats: 8
    },
    {
      id: 2,
      name: "Route B - East District",
      areas: ["Lakeside Heights", "River Park", "Meadow Lane"],
      departureTime: "6:45 AM",
      arrivalTime: "7:20 AM",
      returnTime: "3:35 PM",
      availableSeats: 5
    },
    {
      id: 3,
      name: "Route C - South District",
      areas: ["Hillcrest", "Valley View", "Oak Ridge"],
      departureTime: "6:35 AM",
      arrivalTime: "7:10 AM",
      returnTime: "3:25 PM",
      availableSeats: 12
    },
    {
      id: 4,
      name: "Route D - West District",
      areas: ["Sunset Boulevard", "Garden City", "Palm Springs"],
      departureTime: "6:40 AM",
      arrivalTime: "7:18 AM",
      returnTime: "3:40 PM",
      availableSeats: 3
    }
  ];

  const pickupSchedule = [
    { stop: "Greenview Estate Main Gate", time: "6:30 AM", route: "Route A" },
    { stop: "Sunrise Gardens Community Center", time: "6:38 AM", route: "Route A" },
    { stop: "Pine Valley Junction", time: "6:45 AM", route: "Route A" },
    { stop: "Lakeside Heights Mall", time: "6:45 AM", route: "Route B" },
    { stop: "River Park School Lane", time: "6:52 AM", route: "Route B" },
    { stop: "Meadow Lane Roundabout", time: "7:00 AM", route: "Route B" },
    { stop: "Hillcrest Shopping Plaza", time: "6:35 AM", route: "Route C" },
    { stop: "Valley View Apartments", time: "6:42 AM", route: "Route C" },
    { stop: "Oak Ridge Community Hall", time: "6:50 AM", route: "Route C" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.parentName || !formData.childName || !formData.phone || !formData.pickupAddress) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Transport Request Submitted! 🚌",
      description: "We'll contact you within 24-48 hours to confirm your child's bus route.",
    });

    setFormData({
      parentName: "",
      childName: "",
      grade: "",
      phone: "",
      email: "",
      pickupAddress: "",
      preferredTime: "",
      additionalNotes: ""
    });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${schoolBusHero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-school-blue/95 via-school-purple/95 to-school-blue/95" />
        
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-school-yellow rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-school-green rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        {/* Decorative bus icon */}
        <div className="absolute right-10 bottom-10 opacity-20">
          <Bus className="w-64 h-64 text-primary-foreground" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-primary-foreground">
              <div className="inline-flex items-center gap-3 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="w-3 h-3 bg-school-green rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live Tracking Active</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                Safe School Transport
                <span className="block text-school-yellow">For Every Child</span>
              </h1>
              
              <p className="text-xl opacity-90 mb-8 max-w-2xl">
                GPS-tracked buses, real-time updates, and peace of mind. 
                We ensure your child's journey to school is safe, timely, and comfortable.
              </p>
              
              <div className="flex flex-wrap gap-4">
  <Button
  size="lg"
  onClick={() => setShowSafetyVideo(true)}
  className="bg-red-600 text-white hover:bg-red-700 hover:shadow-xl transition-all ring-2 ring-red-300"
>
  <Play className="w-5 h-5 mr-2" />
  Watch Safety Video
</Button>

  <Button size="lg" className="bg-school-blue text-white hover:bg-school-blue/90 hover:shadow-md transition-all">
    <Map className="w-5 h-5 mr-2" />
    View All Routes
  </Button>
</div>
            </div>

            <div className="lg:w-1/2">
              {/* Content Card with Stats */}
              <div className="relative w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-school-yellow to-school-green rounded-3xl blur-xl opacity-30" />
                <div className="relative bg-gradient-to-br from-white/95 to-gray-100/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/30">
                  
                  {/* On-Time Arrival Badge */}
                  <div className="mb-8">
                    <div className="text-center mb-4">
                      <div className="text-5xl font-bold text-school-blue">98%</div>
                      <div className="text-lg font-medium text-gray-800">On-Time Arrival Rate</div>
                      <p className="text-gray-600 mt-2">Industry-leading punctuality</p>
                    </div>
                  </div>
                  
                  {/* Stats Grid with colored cards */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                      <div className="text-2xl font-bold text-blue-700">50+</div>
                      <div className="text-sm text-blue-600">Buses Fleet</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                      <div className="text-2xl font-bold text-green-700">200+</div>
                      <div className="text-sm text-green-600">Daily Routes</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                      <div className="text-2xl font-bold text-purple-700">24/7</div>
                      <div className="text-sm text-purple-600">Support</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border border-yellow-200">
                      <div className="text-2xl font-bold text-yellow-700">100%</div>
                      <div className="text-sm text-yellow-600">Safety Certified</div>
                    </div>
                  </div>
                  
                  {/* Live Tracking Indicator */}
                  <div className="bg-gradient-to-r from-school-blue to-school-purple text-white px-6 py-4 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse" />
                        <span className="font-medium">Live Tracking Active</span>
                      </div>
                      <Button size="sm" className="bg-white text-school-blue hover:bg-gray-100 font-medium">
                        Track Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <WaveDivider variant="card" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Why Choose Our Transport"
            subtitle="We prioritize safety, comfort, and reliability above all"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { 
                icon: Shield, 
                title: "Maximum Safety", 
                desc: "CCTV cameras, GPS tracking, and trained drivers",
                color: "from-school-blue to-school-purple"
              },
              { 
                icon: Users, 
                title: "Trained Attendants", 
                desc: "Dedicated staff on every bus route",
                color: "from-school-green to-school-blue"
              },
              { 
                icon: Clock, 
                title: "Punctual Service", 
                desc: "98% on-time pickup and drop-off record",
                color: "from-school-orange to-school-yellow"
              },
              { 
                icon: Navigation, 
                title: "Live Tracking", 
                desc: "Real-time bus location on parent app",
                color: "from-school-purple to-school-pink"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} text-primary-foreground rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Buses Fleet" },
              { value: "200+", label: "Daily Routes" },
              { value: "98%", label: "Safety Rating" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-card to-muted/50 rounded-2xl shadow-soft border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Bus Tracking Section */}
      <section className="py-20 bg-muted/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Live Bus Tracking"
            subtitle="Track bus locations in real-time and see estimated arrival times"
            centered
          />
          
          <div className="mt-12 bg-gradient-to-br from-card to-background rounded-3xl shadow-2xl overflow-hidden border border-border/50">
            <div className="p-8 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Active Buses Map</h3>
                  <p className="text-muted-foreground mt-1">Real-time locations of all school buses</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-school-green rounded-full animate-pulse" />
                    <span className="text-sm">Active</span>
                  </div>
                  <div className="flex items-center gap-1 ml-4">
                    <div className="w-3 h-3 bg-muted-foreground rounded-full" />
                    <span className="text-sm">Inactive</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <LiveBusTracker />
            </div>
          </div>
        </div>
      </section>

      {/* Admin Tools & Notifications Section */}
      <section className="py-20 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Bus Management Tools"
            subtitle="Advanced tools for administrators and parents"
            centered
          />
          
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {/* Test Bus Updater */}
            <div>
              <div className="bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 shadow-2xl border border-border/50 h-full">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-school-orange to-school-yellow rounded-2xl flex items-center justify-center shadow-lg">
                    <Wrench className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Testing Dashboard</h3>
                    <p className="text-muted-foreground">Admin tools for system testing</p>
                  </div>
                </div>
                <TestBusUpdater />
                
                <div className="mt-8 pt-8 border-t border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-5 h-5 text-school-green" />
                    <h4 className="font-bold text-foreground">System Status</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      { status: "✓", label: "Mock Data Active", color: "text-school-green" },
                      { status: "✓", label: "Tracking System Ready", color: "text-school-green" },
                      { status: "⏳", label: "Real-time Updates", color: "text-school-orange" },
                      { status: "✓", label: "UI Components", color: "text-school-green" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 px-3 bg-muted/30 rounded-lg">
                        <span className="text-foreground">{item.label}</span>
                        <span className={`font-medium ${item.color}`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* SMS Notification Subscription */}
            <div>
              <div className="bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 shadow-2xl border border-border/50 h-full">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-school-blue to-school-purple rounded-2xl flex items-center justify-center shadow-lg">
                    <Bell className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Smart Notifications</h3>
                    <p className="text-muted-foreground">Never miss the bus again</p>
                  </div>
                </div>
                
                <div className="mb-8 p-6 bg-gradient-to-r from-school-blue/10 to-school-purple/10 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-md">
                      <Bell className="w-6 h-6 text-school-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">How it works</h4>
                      <p className="text-sm text-muted-foreground">
                        Get instant alerts when the bus is approaching your stop. 
                        Choose between SMS, Email, or Push notifications.
                      </p>
                    </div>
                  </div>
                </div>
                
                <NotificationSubscription />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bus Routes Section */}
      <section className="py-20 bg-muted/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Coverage Map & Routes"
            subtitle="Comprehensive network covering all major residential areas"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {busRoutes.map((route) => (
              <div 
                key={route.id}
                className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-school-purple rounded-xl flex items-center justify-center">
                    <Bus className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    route.availableSeats > 5 
                      ? 'bg-school-green/20 text-school-green' 
                      : route.availableSeats > 0 
                        ? 'bg-school-orange/20 text-school-orange'
                        : 'bg-destructive/20 text-destructive'
                  }`}>
                    {route.availableSeats} seats
                  </span>
                </div>
                
                <h4 className="font-bold text-foreground mb-3">{route.name}</h4>
                
                <div className="space-y-3 mb-4">
                  {route.areas.slice(0, 2).map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{area}</span>
                    </div>
                  ))}
                  {route.areas.length > 2 && (
                    <div className="text-xs text-muted-foreground">
                      +{route.areas.length - 2} more stops
                    </div>
                  )}
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="text-xs text-muted-foreground">Departure</div>
                      <div className="font-semibold">{route.departureTime}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Return</div>
                      <div className="font-semibold">{route.returnTime}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup Schedule Section */}
      <section className="py-20 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Detailed Pickup Schedule"
            subtitle="Exact timings for every bus stop on all routes"
            centered
          />
          
          <div className="mt-12 bg-gradient-to-br from-card to-card/80 rounded-3xl shadow-2xl overflow-hidden border border-border/50">
            <div className="p-8 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Timing Schedule</h3>
                  <p className="text-muted-foreground">Morning pickup times (Monday - Friday)</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-school-green rounded-full" />
                  <span className="text-sm">On time</span>
                  <div className="w-3 h-3 bg-school-orange rounded-full ml-4" />
                  <span className="text-sm">Delayed</span>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary to-school-purple text-primary-foreground">
                  <tr>
                    <th className="px-8 py-4 text-left font-semibold">Bus Stop</th>
                    <th className="px-8 py-4 text-left font-semibold">Pickup Time</th>
                    <th className="px-8 py-4 text-left font-semibold">Route</th>
                    <th className="px-8 py-4 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pickupSchedule.map((item, index) => (
                    <tr 
                      key={index}
                      className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{item.stop}</div>
                            <div className="text-xs text-muted-foreground">Stop #{index + 1}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <div className="font-semibold text-foreground">{item.time}</div>
                            <div className="text-xs text-muted-foreground">±2 min tolerance</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium">
                          <Bus className="w-4 h-4" />
                          {item.route}
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${index % 4 === 0 ? 'bg-school-orange' : 'bg-school-green'}`} />
                          <span className="text-sm font-medium">
                            {index % 4 === 0 ? 'Slight delay' : 'On schedule'}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-muted/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Request Transport Service"
                subtitle="Secure a seat for your child on our safe school buses"
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-school-green mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Quick Processing</h4>
                    <p className="text-muted-foreground">Approval within 24-48 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-school-green mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Flexible Options</h4>
                    <p className="text-muted-foreground">Daily, weekly, or monthly plans</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-school-green mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Safety First</h4>
                    <p className="text-muted-foreground">All drivers background checked</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-card to-background rounded-3xl p-8 shadow-2xl border border-border/50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-school-blue to-school-purple rounded-xl flex items-center justify-center">
                    <Bus className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Book a Seat</h3>
                    <p className="text-muted-foreground">Fill the form to get started</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Parent Name *
                      </label>
                      <Input
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-background"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Child's Name *
                      </label>
                      <Input
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="Child's full name"
                        required
                        className="bg-background"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Grade/Class
                      </label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                        className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        <option value="">Select Grade</option>
                        <option value="pre-k">Pre-Kindergarten</option>
                        <option value="kg">Kindergarten</option>
                        <option value="grade1">Grade 1</option>
                        <option value="grade2">Grade 2</option>
                        <option value="grade3">Grade 3</option>
                        <option value="grade4">Grade 4</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        required
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Pickup Address *
                      </label>
                      <Input
                        name="pickupAddress"
                        value={formData.pickupAddress}
                        onChange={handleInputChange}
                        placeholder="Enter your complete home address"
                        required
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Pickup Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        <option value="">Select preferred time</option>
                        <option value="6:30-6:45">6:30 AM - 6:45 AM</option>
                        <option value="6:45-7:00">6:45 AM - 7:00 AM</option>
                        <option value="7:00-7:15">7:00 AM - 7:15 AM</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Additional Notes
                      </label>
                      <Textarea
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        placeholder="Any special requirements, medical conditions, or notes..."
                        rows={4}
                        className="bg-background"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full mt-8 bg-gradient-to-r from-school-blue to-school-purple hover:opacity-90"
                  >
                    <Bus className="w-5 h-5 mr-2" />
                    Submit Transport Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-school-purple text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-heading mb-6">
                Need Help With Transport?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Our dedicated transport team is available to assist you with route planning, 
                schedule queries, and special requirements.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Transport Office</h4>
                    <p className="opacity-90">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Support</h4>
                    <p className="opacity-90">transport@sunshineacademy.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Office Hours</h4>
                    <p className="opacity-90">Mon-Fri: 7:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-foreground/10 rounded-3xl blur-xl" />
              <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-full aspect-video bg-gradient-to-br from-school-blue/30 to-school-purple/30 rounded-xl flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <Bus className="w-24 h-24 mx-auto mb-4 text-primary-foreground/50" />
                    <p className="text-lg font-medium">
                      "Safe journeys, happy children, peace of mind for parents"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SAFETY VIDEO MODAL */}
      {showSafetyVideo && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4">
          <div className="relative bg-black rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setShowSafetyVideo(false)}
              className="absolute top-3 right-3 z-10 bg-black/70 text-white px-3 py-1 rounded-lg hover:bg-black"
            >
              ✕
            </button>

            {/* Auto-play Video */}
            <div className="aspect-video">
              <iframe
                src="http://youtube.com/watch?v=tZfCC2SPh2E?autoplay=1&mute=1&rel=0"
                title="School Transport Safety Video"
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>

          </div>
        </div>
      )}


    </div>
  );
}