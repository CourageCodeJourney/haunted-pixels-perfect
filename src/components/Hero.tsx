import { Button } from "@/components/ui/button";
import heroImage from "@/assets/haunted-manor-hero.jpg";

export const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("tickets");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Victorian haunted mansion at midnight with eerie atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Floating Ghosts Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight" style={{ fontFamily: "'Creepster', cursive" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
            The Midnight Manor
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto font-light">
          An immersive Halloween experience where Victorian elegance meets spine-tingling horror. 
          Dare you enter?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToBooking}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-glow transition-all hover:shadow-[0_0_40px_hsl(25_100%_60%/0.5)] hover:scale-105"
            aria-label="Book tickets for The Midnight Manor"
          >
            Book Your Tickets
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
