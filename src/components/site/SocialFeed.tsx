import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import a from "@/assets/photo-worship-1.jpg";
import b from "@/assets/photo-prayer.jpg";
import c from "@/assets/photo-pastor.jpg";
import d from "@/assets/photo-congregation.jpg";
import e from "@/assets/photo-embrace.jpg";
import f from "@/assets/photo-singer.jpg";
import g from "@/assets/photo-prayer-service.jpg";
import h from "@/assets/photo-joy.jpg";
import i from "@/assets/photo-men-ministry.png";
import j from "@/assets/photo-women-worship.png";
import k from "@/assets/photo-worship-lady.png";
import l from "@/assets/photo-praise.png";

const allImages = [a, b, c, d, e, f, g, h, i, j, k, l];

// Each tile gets a rotating pool of images
const tilePools = Array.from({ length: 8 }, (_, idx) => {
  const pool: string[] = [];
  for (let n = 0; n < allImages.length; n++) {
    pool.push(allImages[(idx + n) % allImages.length]);
  }
  return pool;
});

const RotatingTile = ({ pool, delay }: { pool: string[]; delay: number }) => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>(0.1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % pool.length);
      }, 4000);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [pool.length, delay]);

  return (
    <a
      ref={ref}
      href="https://www.instagram.com/greatgracechurch/"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative aspect-square rounded-2xl overflow-hidden bg-ink transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      {pool.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Great Grace community moment`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors grid place-items-center">
        <Instagram className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </a>
  );
};

export const SocialFeed = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);

  return (
    <section id="community" className="bg-cream py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain grain-light" />
      <div className="max-w-site mx-auto container-x relative">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Church Life</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              FROM THE
              <br />
              <span className="text-primary">@greatgrace</span> FEED
            </h2>
          </div>
          <a
            href="https://www.instagram.com/greatgracechurch/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full font-semibold hover:bg-primary transition-colors self-start md:self-end"
          >
            <Instagram className="w-4 h-4" /> Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {tilePools.map((pool, idx) => (
            <RotatingTile key={idx} pool={pool} delay={idx * 600} />
          ))}
        </div>
      </div>
    </section>
  );
};
