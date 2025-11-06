import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Attractions } from "@/components/Attractions";
import { Tickets } from "@/components/Tickets";
import { Footer } from "@/components/Footer";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import FloatingEntities from "@/components/FloatingEntities"; // ✅ replaced FloatingGhosts
import { SpookyEyes } from "@/components/SpookyEyes";
import { CrawlingSpiders } from "@/components/CrawlingSpiders";
import { BloodDrips } from "@/components/BloodDrips";
import { LightningFlashes } from "@/components/LightningFlashes";
import { FlyingBats } from "@/components/FlyingBats";
import { ScreenGlitch } from "@/components/ScreenGlitch";
import { ShadowFigures } from "@/components/ShadowFigures";
import { CreepyAudio } from "@/components/CreepyAudio";
import { Cobwebs } from "@/components/Cobwebs";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Background & Global FX */}
      <ParallaxBackground />
      <Cobwebs />
      <ShadowFigures />
      <FloatingEntities /> {/* 👻 Replaced FloatingGhosts */}
      <SpookyEyes />
      <CrawlingSpiders />
      <FlyingBats />
      <BloodDrips />
      <LightningFlashes />
      <ScreenGlitch />
      <CreepyAudio />

      {/* Header */}
      <Header />

      {/* Foreground Content */}
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
