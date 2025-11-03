import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ScrollReveal } from "./ScrollReveal";

const ticketTiers = [
  {
    name: "General Admission",
    price: "$35",
    features: [
      "Access to all 13 rooms",
      "45-60 minute experience",
      "Group size: 8-10 people",
      "Standard entry time"
    ],
    popular: false
  },
  {
    name: "VIP Experience",
    price: "$65",
    features: [
      "Skip the line access",
      "Private group (up to 6)",
      "Extended 90-minute tour",
      "Behind-the-scenes access",
      "Commemorative photo"
    ],
    popular: true
  },
  {
    name: "Lights-On Tour",
    price: "$25",
    features: [
      "Family-friendly version",
      "All lights on, minimal scares",
      "Perfect for ages 8+",
      "Educational ghost stories",
      "Daytime slots available"
    ],
    popular: false
  }
];

export const Tickets = () => {
  const handleBooking = (tierName: string) => {
    toast.success(`Selected ${tierName}!`, {
      description: "In a real application, this would redirect to a booking system."
    });
  };

  return (
    <section id="tickets" className="relative py-24 px-4 bg-background overflow-hidden" aria-labelledby="tickets-heading">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
      <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal animation="scale-up">
          <h2 
            id="tickets-heading" 
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground"
            style={{ textShadow: "0 0 20px hsl(25 100% 60% / 0.3)" }}
          >
            Choose Your Fate
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Select your experience level. All tickets include access to the manor's darkest secrets.
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ticketTiers.map((tier, index) => (
            <ScrollReveal 
              key={index}
              animation="fade-in-up"
              delay={index * 150}
            >
              <Card 
                className={`relative bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 group cursor-pointer h-full ${
                  tier.popular ? "ring-2 ring-primary shadow-[0_0_40px_hsl(25_100%_60%/0.4)] scale-105" : ""
                }`}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/10 transition-all duration-500 rounded-lg" />
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold animate-pulse z-20">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center relative z-10">
                  <CardTitle className="text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {tier.name}
                  </CardTitle>
                  <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tier.price}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    per person
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-6" role="list">
                    {tier.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start gap-2 text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300"
                      >
                        <span className="text-primary mt-1 text-lg">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full group/btn relative overflow-hidden ${
                      tier.popular 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    }`}
                    style={{
                      boxShadow: tier.popular ? "0 0 30px hsl(25 100% 60% / 0.4)" : undefined
                    }}
                    onClick={() => handleBooking(tier.name)}
                    aria-label={`Book ${tier.name} ticket`}
                  >
                    <span className="relative z-10">Book Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            ⚠️ Warning: This experience contains strobe lights, fog effects, and intense scares. 
            Not recommended for children under 13 or those with heart conditions.
          </p>
          <p className="text-xs text-muted-foreground">
            All sales are final. Refunds available only for event cancellations.
          </p>
        </div>
      </div>
    </section>
  );
};
