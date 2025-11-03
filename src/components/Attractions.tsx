import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "./ScrollReveal";

const attractions = [
  {
    title: "The Grand Ballroom",
    description: "Where phantoms still dance to music only they can hear. Watch shadows waltz across the floor as the clock strikes midnight.",
    icon: "💃",
    intensity: "Medium"
  },
  {
    title: "The Séance Chamber",
    description: "Madame Blackwood's occult parlor where she attempted to contact the other side. Some say she succeeded... too well.",
    icon: "🔮",
    intensity: "High"
  },
  {
    title: "The Cursed Portrait Gallery",
    description: "Follow the eyes of the Blackwood ancestors as they watch your every move through paintings that seem alive.",
    icon: "🖼️",
    intensity: "Low"
  },
  {
    title: "The Basement Laboratory",
    description: "Dr. Blackwood's forbidden experiments continue in the depths. The specimens are restless tonight.",
    icon: "⚗️",
    intensity: "Extreme"
  },
  {
    title: "The Children's Nursery",
    description: "Toys move on their own. Lullabies play from nowhere. The children never left...",
    icon: "🧸",
    intensity: "Medium"
  },
  {
    title: "The Moonlit Garden Maze",
    description: "Navigate overgrown hedges by lantern light. But beware - something prowls between the shadows.",
    icon: "🌙",
    intensity: "High"
  }
];

export const Attractions = () => {
  return (
    <section className="relative py-24 px-4 bg-secondary/30 overflow-hidden" aria-labelledby="attractions-heading">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal animation="scale-up">
          <h2 
            id="attractions-heading" 
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground"
            style={{ textShadow: "0 0 20px hsl(25 100% 60% / 0.3)" }}
          >
            Featured Attractions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Each room offers a unique horror experience. Are you brave enough to explore them all?
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <ScrollReveal 
              key={index}
              animation={index % 3 === 0 ? "slide-in-left" : index % 3 === 1 ? "fade-in-up" : "slide-in-right"}
              delay={index * 100}
            >
              <Card 
                className="relative bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(25_100%_60%/0.3)] group cursor-pointer overflow-hidden h-full"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="text-6xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {attraction.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {attraction.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {attraction.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-muted-foreground">Scare Intensity:</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold transition-all duration-300 ${
                      attraction.intensity === "Extreme" 
                        ? "bg-destructive/20 text-destructive group-hover:bg-destructive/30" 
                        : attraction.intensity === "High"
                        ? "bg-primary/20 text-primary group-hover:bg-primary/30"
                        : attraction.intensity === "Medium"
                        ? "bg-accent/20 text-accent group-hover:bg-accent/30"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {attraction.intensity}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
