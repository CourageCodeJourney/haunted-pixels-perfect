import { Card } from "@/components/ui/card";
import { ScrollReveal } from "./ScrollReveal";

export const About = () => {
  return (
    <section id="about" className="relative py-24 px-4 bg-background overflow-hidden" aria-labelledby="about-heading">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <ScrollReveal animation="scale-up">
          <h2 
            id="about-heading" 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground"
            style={{ 
              textShadow: "0 0 20px hsl(25 100% 60% / 0.3)",
            }}
          >
            Enter If You Dare
          </h2>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in-up" delay={200}>
          <Card className="relative bg-card/80 backdrop-blur-sm border-border p-8 md:p-12 shadow-card overflow-hidden group hover:border-primary/30 transition-all duration-500">
            {/* Glowing corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Step back in time to the Victorian era, where the Blackwood family once resided in opulent grandeur. 
                But prosperity came at a terrible price, and the manor's dark secrets have awakened after decades 
                of silence.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Navigate through 13 meticulously crafted rooms, each telling a chapter of the manor's haunted history. 
                From the candlelit library where books fly off shelves to the conservatory where ghostly vines ensnare 
                the unsuspecting, every corner holds a new terror.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                {[
                  { icon: "👻", title: "Live Actors", desc: "Professional performers bringing scares to life" },
                  { icon: "🕯️", title: "Authentic Sets", desc: "Victorian-era decor and atmospheric lighting" },
                  { icon: "⚡", title: "Interactive", desc: "Your choices affect your journey through the manor" },
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="group/card text-center p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/70 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="text-5xl mb-3 group-hover/card:scale-125 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-xl mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};
