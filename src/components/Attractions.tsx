import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section className="py-24 px-4 bg-secondary/30" aria-labelledby="attractions-heading">
      <div className="container mx-auto">
        <h2 id="attractions-heading" className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Featured Attractions
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Each room offers a unique horror experience. Are you brave enough to explore them all?
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <CardHeader>
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {attraction.icon}
                </div>
                <CardTitle className="text-xl text-foreground">
                  {attraction.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {attraction.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-muted-foreground">Scare Intensity:</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    attraction.intensity === "Extreme" 
                      ? "bg-destructive/20 text-destructive" 
                      : attraction.intensity === "High"
                      ? "bg-primary/20 text-primary"
                      : attraction.intensity === "Medium"
                      ? "bg-accent/20 text-accent"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {attraction.intensity}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
