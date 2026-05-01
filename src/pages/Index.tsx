import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MarqueeStrip } from "@/components/site/MarqueeStrip";
import { Welcome } from "@/components/site/Welcome";
import { ServiceTimes } from "@/components/site/ServiceTimes";
import { LatestSermon } from "@/components/site/LatestSermon";
import { Events } from "@/components/site/Events";
import { Ministries } from "@/components/site/Ministries";
import { GiveBanner } from "@/components/site/GiveBanner";
import { SocialFeed } from "@/components/site/SocialFeed";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Welcome />
      <ServiceTimes />
      <LatestSermon />
      <Events />
      <Ministries />
      <GiveBanner />
      <SocialFeed />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
