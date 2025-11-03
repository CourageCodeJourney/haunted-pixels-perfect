import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background" aria-labelledby="about-heading">
      <div className="container mx-auto max-w-4xl">
        <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Enter If You Dare
        </h2>
        
        <Card className="bg-card border-border p-8 md:p-12 shadow-card">
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
            <div className="text-center p-6 bg-secondary/50 rounded-lg border border-border">
              <div className="text-4xl mb-2">👻</div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">Live Actors</h3>
              <p className="text-sm text-muted-foreground">Professional performers bringing scares to life</p>
            </div>
            
            <div className="text-center p-6 bg-secondary/50 rounded-lg border border-border">
              <div className="text-4xl mb-2">🕯️</div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">Authentic Sets</h3>
              <p className="text-sm text-muted-foreground">Victorian-era decor and atmospheric lighting</p>
            </div>
            
            <div className="text-center p-6 bg-secondary/50 rounded-lg border border-border">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">Interactive</h3>
              <p className="text-sm text-muted-foreground">Your choices affect your journey through the manor</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
