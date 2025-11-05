import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Attractions } from "@/components/Attractions";
import { Tickets } from "@/components/Tickets";
import { Footer } from "@/components/Footer";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { FloatingGhosts } from "@/components/FloatingGhosts";
import { SpookyEyes } from "@/components/SpookyEyes";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <ParallaxBackground />
      <FloatingGhosts />
      <SpookyEyes />
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
