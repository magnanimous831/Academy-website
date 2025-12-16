import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+254 710 713 725", href: "tel:+254710713725" },
  { icon: Mail, label: "Email", value: "info@achieversacademy.edu", href: "mailto:info@achieversacademy.edu" },
  { icon: MessageCircle, label: "WhatsApp", value: "+254 710 713 725", href: "https://wa.me/254710713725" },
  { icon: MapPin, label: "Address", value: "123 Education Lane, Pipeline, Nairobi", href: "#map" },
];

const hours = [
  { day: "Monday - Friday", time: "7:30 AM - 4:30 PM" },
  { day: "Saturday", time: "8:00 AM - 12:00 PM (Office only)" },
  { day: "Sunday", time: "Closed" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We will respond within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 hero-gradient">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
        <WaveDivider variant="card" />
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionHeader title="Get in Touch" centered={false} />
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      if (item.href?.startsWith('mailto:')) {
                        e.preventDefault();
                        window.location.href = item.href;
                      }
                    }}
                    className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="bg-muted rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-foreground">Operating Hours</h3>
                </div>
                <div className="space-y-2">
                  {hours.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="font-medium text-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionHeader title="Send Us a Message" centered={false} />
              <form onSubmit={handleSubmit} className="bg-muted rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-card"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="bg-card"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-card min-h-[150px]"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="py-20 bg-muted">
        <div className="container">
          <SectionHeader 
            title="Find Us" 
            subtitle="Visit our campus located in Embakasi-Pipeline"
          />
          <div className="rounded-2xl overflow-hidden shadow-card h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176073964085!2d36.80395881475394!3d-1.2635315990648776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17366c8ed06f%3A0x7a7cae60f9e0b453!2sPipeline%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1645000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
