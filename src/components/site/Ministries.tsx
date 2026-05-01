import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import worship1 from "@/assets/photo-worship-1.jpg";
import prayer from "@/assets/photo-prayer.jpg";
import pastor from "@/assets/photo-pastor.jpg";
import congregation from "@/assets/photo-congregation.jpg";
import embrace from "@/assets/photo-embrace.jpg";
import singer from "@/assets/photo-singer.jpg";

const ministries = [
  { name: "Kids", count: "Ages 0–12", img: congregation, span: "md:col-span-2 md:row-span-2" },
  { name: "Youth", count: "Ages 13–18", img: singer, span: "" },
  { name: "Worship", count: "Sing & play", img: worship1, span: "" },
  { name: "Women", count: "Sisterhood", img: embrace, span: "" },
  { name: "Men", count: "Brotherhood", img: pastor, span: "" },
  { name: "Outreach", count: "Serve the city", img: prayer, span: "md:col-span-2" },
];

const MinistryCard = ({ m, index }: { m: typeof ministries[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>(0.1);

  return (
    <a
      ref={ref}
      key={m.name}
      href="#ministries"
      className={`group relative rounded-3xl overflow-hidden ${m.span} transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img
        src={m.img}
        alt={`${m.name} ministry at Great Grace Church`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] font-bold bg-white/15 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full">
            {m.count.toUpperCase()}
          </span>
          <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 grid place-items-center group-hover:bg-primary group-hover:border-primary transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-5xl">{m.name}</h3>
      </div>
    </a>
  );
};

export const Ministries = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);

  return (
    <section id="ministries" className="bg-background py-24 md:py-32">
      <div className="max-w-site mx-auto container-x">
        <div
          ref={headerRef}
          className={`grid grid-cols-12 gap-6 mb-14 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Find Your People</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
              EVERYTHING <span className="text-stroke">YOUR</span>
              <br />
              FAITH NEEDS TO <span className="text-primary">GROW</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 lg:pt-8 text-muted-foreground text-lg">
            Six ministries built to help you discover your gifts, deepen friendships, and live out
            your purpose. There's a place for every age and every season.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-4">
          {ministries.map((m, i) => (
            <MinistryCard key={m.name} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
