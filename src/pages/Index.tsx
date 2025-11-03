import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Attractions } from "@/components/Attractions";
import { Tickets } from "@/components/Tickets";
import { Footer } from "@/components/Footer";
import { ParallaxBackground } from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <ParallaxBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Attractions />
        <Tickets />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
