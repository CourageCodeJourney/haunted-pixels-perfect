import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Attractions } from "@/components/Attractions";
import { Tickets } from "@/components/Tickets";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Attractions />
      <Tickets />
      <Footer />
    </main>
  );
};

export default Index;
