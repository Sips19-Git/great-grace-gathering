import { Instagram } from "lucide-react";
import a from "@/assets/photo-worship-1.jpg";
import b from "@/assets/photo-prayer.jpg";
import c from "@/assets/photo-pastor.jpg";
import d from "@/assets/photo-congregation.jpg";
import e from "@/assets/photo-embrace.jpg";
import f from "@/assets/photo-singer.jpg";

const tiles = [a, f, b, e, c, d, e, f];

export const SocialFeed = () => {
  return (
    <section id="community" className="bg-cream py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain grain-light" />
      <div className="max-w-site mx-auto container-x relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
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
            href="#"
            className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full font-semibold hover:bg-primary transition-colors self-start md:self-end"
          >
            <Instagram className="w-4 h-4" /> Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {tiles.map((src, i) => (
            <a
              key={i}
              href="#"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-ink"
            >
              <img
                src={src}
                alt={`Great Grace community moment ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors grid place-items-center">
                <Instagram className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
