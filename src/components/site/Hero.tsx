import { ArrowUpRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import hero from "@/assets/photo-worship-1.jpg";
import img2 from "@/assets/photo-prayer-service.jpg";
import img3 from "@/assets/photo-joy.jpg";
import img4 from "@/assets/photo-choir.jpg";
import img5 from "@/assets/photo-worship-team.jpg";
import img6 from "@/assets/photo-seated.jpg";

const VISIT_LINK = "https://share.google/zR3CGAEvPSyPZ7Gh4";
const images = [hero, img2, img3, img4, img5, img6];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-white">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Great Grace Church moment ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          width={1920}
          height={1280}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* LIVE pill */}
      <div className="absolute top-24 md:top-28 right-6 md:right-12 z-10">
        <div className="flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-xs font-bold tracking-widest">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse-dot" />
          LIVE SUNDAY 9 & 11 AM
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-primary" : "w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-site mx-auto container-x pt-32 md:pt-40 pb-16 min-h-[100svh] flex flex-col justify-end">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 reveal">
            <p className="font-italiana text-cream-deep text-xl md:text-2xl mb-6 italic">
              — Transforming lives through the gospel to impact the community
            </p>
            <h1 className="font-display text-[18vw] md:text-[13vw] lg:text-[11rem] leading-[0.85] tracking-tighter uppercase" style={{ fontWeight: 900 }}>
              Courageous<span className="text-primary">.</span>
              <br />
              Faith<span className="text-primary">.</span>
              <br />
              <span className="text-stroke-cream">Family.</span>
            </h1>
          </div>

          <div className="col-span-12 lg:pb-4 reveal" style={{ animationDelay: "0.15s" }}>
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
                href={VISIT_LINK}
                target="_blank"
                rel="noopener noreferrer"
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
