import { ArrowUpRight, Play } from "lucide-react";
import hero from "@/assets/photo-worship-1.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-white">
      <img
        src={hero}
        alt="Great Grace Church congregation in worship with hands raised under warm stage lights"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* LIVE pill */}
      <div className="absolute top-24 md:top-28 right-6 md:right-12 z-10">
        <div className="flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-xs font-bold tracking-widest">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse-dot" />
          LIVE SUNDAY 9 & 11 AM
        </div>
      </div>

      <div className="relative z-10 max-w-site mx-auto container-x pt-32 md:pt-40 pb-16 min-h-[100svh] flex flex-col justify-end">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8 reveal">
            <p className="font-italiana text-cream-deep text-xl md:text-2xl mb-6 italic">
              — Transforming lives through the gospel to impact the community
            </p>
            <h1 className="font-display text-[18vw] md:text-[12vw] lg:text-[10rem] leading-[0.85] tracking-tight">
              FAITH<span className="text-primary">.</span>
              <br />
              FAMILY<span className="text-primary">.</span>
              <br />
              <span className="text-stroke-cream">FUTURE.</span>
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:pb-4 reveal" style={{ animationDelay: "0.15s" }}>
            <p className="text-white/80 text-base md:text-lg max-w-md mb-8 leading-relaxed">
              We're Great Grace — a Spirit-led community gathering across the city to worship,
              grow, and serve. No matter where you're starting from, there's a seat saved for you.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#sermon"
                className="inline-flex items-center gap-2 bg-white text-ink px-6 py-3.5 rounded-full font-semibold hover:bg-cream-deep transition-colors group"
              >
                <Play className="w-4 h-4 fill-current" /> Watch Latest
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 border border-white/50 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white hover:text-ink transition-colors group"
              >
                Plan a Visit
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
