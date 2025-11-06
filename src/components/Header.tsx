import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-primary/5" 
          : "bg-transparent"
      }`}
    >
      {/* Dripping blood effect on header */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo with creepy animation */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group"
            aria-label="Return to top"
          >
            <span 
              className="text-2xl md:text-3xl font-bold animate-flicker text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary"
              style={{ 
                fontFamily: "'Creepster', cursive",
                textShadow: "0 0 20px hsl(var(--primary) / 0.5)",
              }}
            >
              🕷️ The Midnight Manor
            </span>
          </button>

          {/* Spooky clock */}
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
            <span>🕰️</span>
            <span className="font-mono">{time.toLocaleTimeString()}</span>
          </div>

          {/* Navigation links */}
          <div className="flex items-center gap-2 md:gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors relative group"
            >
              <span className="relative">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection("attractions")}
              className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors relative group"
            >
              <span className="relative">
                Horrors
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </span>
            </button>
            
            <Button
              size="sm"
              onClick={() => scrollToSection("tickets")}
              className="relative overflow-hidden group bg-primary hover:bg-primary/90"
              style={{
                boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
              }}
            >
              <span className="relative z-10 text-xs md:text-sm">Enter If You Dare</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </div>
        </nav>
      </div>

      {/* Creepy shadow effect at bottom of header */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </header>
  );
};
