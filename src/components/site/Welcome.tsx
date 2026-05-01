import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import pastor from "@/assets/photo-pastor.jpg";

export const Welcome = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="welcome" className="bg-background py-24 md:py-32">
      <div
        ref={ref}
        className={`max-w-site mx-auto container-x grid grid-cols-12 gap-8 lg:gap-16 items-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-primary" />
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">A Word from Pastor</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-balance">
            YOU WERE MADE
            <br />
            FOR <span className="text-primary">MORE</span> —
            <br />
            <span className="text-stroke">AND YOU'RE</span>
            <br />
            WELCOME HERE.
          </h2>
          <p className="font-italiana text-2xl md:text-3xl text-muted-foreground italic mb-6 max-w-2xl">
            "For we are God's handiwork, created in Christ Jesus to do good works."
            <span className="block text-base not-italic font-sans tracking-widest text-primary mt-2 font-semibold">
              — EPHESIANS 2:10
            </span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
            Great Grace exists to help every person take their next step with Jesus. We're not perfect —
            we're a family of imperfect people chasing a perfect Savior. Whatever season you're in,
            we'd love to walk it with you.
          </p>
          <a
            href="#welcome"
            className="inline-flex items-center gap-2 text-foreground font-semibold border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            Read our story
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 relative group">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lift transition-all duration-500 group-hover:[box-shadow:0_0_0_2px_#39FF14,0_0_40px_-2px_#39FF14,0_0_90px_-10px_#B026FF]">
            <img
              src={pastor}
              alt="Pastor Moses Tlalang, Lead Pastor of Great Grace Church"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay pointer-events-none"
              style={{ background: "linear-gradient(135deg, #39FF14 0%, #00F0FF 35%, #B026FF 70%, #FF00E5 100%)" }}
            />
            <div className="absolute inset-x-0 -top-1 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
              style={{ background: "linear-gradient(90deg, transparent, #39FF14, #00F0FF, #B026FF, transparent)", boxShadow: "0 0 20px #00F0FF" }}
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/90 to-transparent p-6">
              <div className="font-display text-2xl text-white">PASTOR MOSES TLALANG</div>
              <div className="text-sm text-white/80 tracking-widest uppercase">Lead Pastor</div>
            </div>
          </div>
          <div className="absolute -top-6 -left-6 hidden md:block bg-highlight text-highlight-foreground px-5 py-3 rounded-full font-display text-xl rotate-[-6deg] shadow-card">
            ✦ since 2010
          </div>
        </div>
      </div>
    </section>
  );
};
