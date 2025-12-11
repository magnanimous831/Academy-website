import { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-children.jpg";
import classroomImage from "@/assets/classroom.jpg";
import sportsImage from "@/assets/sports.jpg";
import artsImage from "@/assets/arts.jpg";
import libraryImage from "@/assets/library.jpg";
import playgroundImage from "@/assets/playground.jpg";

const categories = ["All", "Events", "Sports", "Academics", "Facilities"];

const galleryItems = [
  { src: heroImage, category: "Events", title: "Sports Day 2024" },
  { src: classroomImage, category: "Academics", title: "Interactive Learning" },
  { src: sportsImage, category: "Sports", title: "Football Practice" },
  { src: artsImage, category: "Academics", title: "Art Class" },
  { src: libraryImage, category: "Facilities", title: "Our Library" },
  { src: playgroundImage, category: "Facilities", title: "Playground Fun" },
  { src: heroImage, category: "Events", title: "Annual Concert" },
  { src: classroomImage, category: "Academics", title: "Science Experiment" },
  { src: sportsImage, category: "Sports", title: "Swimming Lessons" },
  { src: artsImage, category: "Events", title: "Cultural Day" },
  { src: libraryImage, category: "Academics", title: "Reading Time" },
  { src: playgroundImage, category: "Sports", title: "Outdoor Games" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 hero-gradient">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Explore the vibrant life at Achievers Academy through our photo collection
          </p>
        </div>
        <WaveDivider variant="card" />
      </section>

      {/* Gallery */}
      <section className="py-20 bg-card">
        <div className="container">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full font-semibold transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-card translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium opacity-80">{item.category}</span>
                  <h3 className="font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] rounded-2xl object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
