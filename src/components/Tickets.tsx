import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

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
    <section id="tickets" className="py-24 px-4 bg-background" aria-labelledby="tickets-heading">
      <div className="container mx-auto">
        <h2 id="tickets-heading" className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Choose Your Fate
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Select your experience level. All tickets include access to the manor's darkest secrets.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ticketTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative bg-card border-border hover:border-primary/50 transition-all duration-300 ${
                tier.popular ? "ring-2 ring-primary shadow-[0_0_30px_hsl(25_100%_60%/0.3)]" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground mb-2">
                  {tier.name}
                </CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">
                  {tier.price}
                </div>
                <CardDescription className="text-muted-foreground">
                  per person
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6" role="list">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow" 
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                  onClick={() => handleBooking(tier.name)}
                  aria-label={`Book ${tier.name} ticket`}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
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
