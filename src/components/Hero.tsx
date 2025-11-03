import { Button } from "@/components/ui/button";
import heroImage from "@/assets/haunted-manor-hero.jpg";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("tickets");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  const parallaxOffset = scrollY * 0.4;

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-[120%] absolute top-0"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          <img
            src={heroImage}
            alt="Victorian haunted mansion at midnight with eerie atmosphere"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Animated Fog Overlay */}
      <div className="absolute inset-0 z-5">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent" />
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(ellipse at bottom, hsl(280 60% 10% / 0.6), transparent 70%)",
            animation: "fog-drift 30s linear infinite",
          }}
        />
      </div>

      {/* Floating Spirits with Enhanced Effects */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-xl animate-float"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              background: i % 2 === 0 
                ? "radial-gradient(circle, hsl(25 100% 60% / 0.3), transparent)" 
                : "radial-gradient(circle, hsl(280 70% 50% / 0.2), transparent)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 3}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content with Dramatic Effects */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight animate-fade-in-up" 
          style={{ 
            fontFamily: "'Creepster', cursive",
            textShadow: "0 0 40px hsl(25 100% 60% / 0.5), 0 0 80px hsl(280 70% 45% / 0.3)",
          }}
        >
          <span className="inline-block animate-flicker text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
            The Midnight Manor
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          An immersive Halloween experience where Victorian elegance meets spine-tingling horror. 
          Dare you enter?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            onClick={scrollToBooking}
            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 transition-all duration-300 hover:scale-110 overflow-hidden"
            style={{
              boxShadow: "0 0 30px hsl(25 100% 60% / 0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 60px hsl(25 100% 60% / 0.8), 0 0 100px hsl(280 70% 45% / 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 30px hsl(25 100% 60% / 0.4)";
            }}
            aria-label="Book tickets for The Midnight Manor"
          >
            <span className="relative z-10">Book Your Tickets</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Learn more about The Midnight Manor"
          >
            Learn More
          </Button>
        </div>

        {/* Event Details */}
        <div className="mt-12 flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary">📅</span>
            <span>October 20-31, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">⏰</span>
            <span>7 PM - Midnight</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">📍</span>
            <span>1313 Cemetery Lane</span>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
