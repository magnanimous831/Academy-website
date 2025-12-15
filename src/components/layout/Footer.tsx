import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
];

const parentLinks = [
  { name: "News & Events", href: "/news" },
  { name: "Parents Portal", href: "/parents" },
  { name: "Contact Us", href: "/contact" },
  { name: "School Calendar", href: "/news" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Wave divider */}
      <div className="wave-divider rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-foreground">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Achievers Academy</h3>
                <p className="text-sm opacity-70">Junior Primary School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Nurturing young minds with love, creativity, and excellence since 2005. 
              We believe every child is a star waiting to shine!
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Parents */}
          <div>
            <h4 className="text-lg font-bold mb-6">For Parents</h4>
            <ul className="space-y-3">
              {parentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                <span className="text-sm opacity-80">
                  123 Education Lane, Pipeline<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+254700123456" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  +254 700 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@achieversacademy.edu" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  info@achieversacademy.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
            <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">  
                      <p className="text-sm opacity-70">
                © {new Date().getFullYear()} Achievers Academy. All rights reserved.
                <span className="mx-2">|</span>
                Designed by{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors"
                >
                  Shadrak Kipkirui
                </a>
              </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
