import { Play, Headphones, Download, Share2 } from "lucide-react";
import thumb from "@/assets/sermon-life-barriers.jpg";

export const LatestSermon = () => {
  return (
    <section id="sermon" className="bg-ink text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />
      <div className="max-w-site mx-auto container-x relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-primary" />
          <span className="text-xs tracking-[0.2em] uppercase text-white/60">Now Streaming</span>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="col-span-12 lg:col-span-7 group relative">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
              <img
                src={thumb}
                alt="Latest sermon: Abilities to Deal with Enemies of Success (Life Barriers) Part 3 by Pastor Moses Tlalang"
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <button
                aria-label="Play latest sermon"
                className="absolute inset-0 grid place-items-center"
              >
                <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-white grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </span>
              </button>
              <div className="absolute top-5 left-5 flex gap-2">
                <span className="bg-primary text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full">
                  NEW
                </span>
                <span className="bg-white/15 backdrop-blur-md text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/20">
                  SERIES — LIFE BARRIERS
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="text-xs tracking-[0.2em] uppercase text-cream-deep mb-4">
              Sunday · Part 3 of Series
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-6 text-balance">
              ABILITIES TO DEAL WITH
              <br />
              <span className="text-primary-glow">ENEMIES OF SUCCESS</span>
              <br />
              <span className="text-white/80 text-2xl md:text-3xl">(Life Barriers) [Part 3]</span>
            </h2>
            <p className="font-italiana text-xl text-cream-deep italic mb-2">
              "No weapon formed against you shall prosper…"
            </p>
            <p className="text-sm tracking-widest text-white/60 font-semibold mb-6">
              ISAIAH 54:17 · PASTOR MOSES TLALANG
            </p>
            <p className="text-white/75 leading-relaxed mb-8">
              When the storms hit and the ground shakes, what's left standing? In part three of our
              series, we discover the kind of hope that anchors the soul and outlasts the ache.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full font-semibold hover:bg-primary-glow transition-colors">
                <Play className="w-4 h-4 fill-current" /> Watch
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors">
                <Headphones className="w-4 h-4" /> Listen
              </button>
              <button aria-label="Download notes" className="w-12 h-12 grid place-items-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                <Download className="w-4 h-4" />
              </button>
              <button aria-label="Share sermon" className="w-12 h-12 grid place-items-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
