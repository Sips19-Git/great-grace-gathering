import { ArrowUpRight, HandHeart } from "lucide-react";

export const GiveBanner = () => {
  return (
    <section id="give" className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-40" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-primary-glow/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-highlight/20 blur-3xl" />

      <div className="relative max-w-site mx-auto container-x py-24 md:py-32 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <HandHeart className="w-5 h-5" />
            <span className="text-xs tracking-[0.2em] uppercase text-white/80">Generosity</span>
          </div>
          <p className="font-italiana text-2xl md:text-3xl italic text-white/90 mb-4">
            "Each of you should give what you have decided in your heart to give —
            for God loves a cheerful giver."
          </p>
          <p className="text-sm tracking-widest font-semibold text-white/70 mb-8">— 2 CORINTHIANS 9:7</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-balance">
            GIVE — AND
            <br />
            WATCH GOD <span className="text-stroke-cream" style={{ WebkitTextStrokeColor: "white" }}>MOVE.</span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <a
            href="#give"
            className="inline-flex items-center justify-between gap-2 bg-background text-foreground px-7 py-5 rounded-full font-bold text-lg hover:bg-cream-deep transition-colors group shadow-lift"
          >
            Give Online
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
          <a
            href="#give"
            className="inline-flex items-center justify-between gap-2 border-2 border-white/40 text-white px-7 py-5 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Set Up Recurring
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-white/70 text-center mt-2 tracking-wide">
            Secure giving · Card · Bank · Mobile money
          </p>
        </div>
      </div>
    </section>
  );
};
