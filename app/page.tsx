import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { InvitationSection } from "@/components/sections/InvitationSection";
import { OurStorySection } from "@/components/sections/OurStorySection";
import { WeddingDetailsSection } from "@/components/sections/WeddingDetailsSection";
import { DressGuideSection } from "@/components/sections/DressGuideSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { RSVPSection } from "@/components/sections/RSVPSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <CountdownSection />
      <InvitationSection />
      <OurStorySection />
      <WeddingDetailsSection />
      <DressGuideSection />
      <GallerySection />
      <RSVPSection />
      <Footer />
    </main>
  );
}
