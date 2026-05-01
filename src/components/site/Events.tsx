import { ArrowUpRight, MapPin } from "lucide-react";
import servanthood from "@/assets/event-servanthood.png";
import thornCrown from "@/assets/event-good-friday.png";
import easter from "@/assets/event-women-conference.png";

const events = [
  {
    img: servanthood,
    date: { d: "14", m: "FEB" },
    tag: "Seminar",
    title: "Servanthood & Leadership Seminar",
    location: "GGC Mahikeng, 6895 Cydonia Street",
    desc: "A practical seminar on serving with humility and leading with purpose. Hosted by Ps Giet Khoza.",
  },
  {
    img: thornCrown,
    date: { d: "03", m: "APR" },
    tag: "Good Friday",
    title: "Good Friday — The Message of the Cross",
    location: "GGC Mahikeng, Mmabatho",
    desc: "Reflect on the sacrifice of Christ. A solemn morning service of worship, scripture and communion at 9AM.",
  },
  {
    img: easter,
    date: { d: "28", m: "MAR" },
    tag: "Conference",
    title: "Woman to Woman Conference 2025",
    location: "GGC Mahikeng, Mmabatho",
    desc: "A powerful women's conference hosted by Pastor Grace Tlalang with guest speakers. Registration R200.",
  },
];

export const Events = () => {
  return (
    <section id="events" className="bg-background py-24 md:py-32">
      <div className="max-w-site mx-auto container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">What's Coming</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
              UPCOMING
              <br />
              <span className="text-primary">EVENTS</span>
            </h2>
          </div>
          <a href="#events" className="inline-flex items-center gap-2 text-foreground font-semibold border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary transition-colors self-start md:self-end">
            See all events <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e) => (
            <article key={e.title} className="group bg-card rounded-3xl overflow-hidden border border-border hover-lift flex flex-col">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-background rounded-2xl px-3 py-2 text-center shadow-card">
                  <div className="font-display text-3xl text-primary leading-none">{e.date.d}</div>
                  <div className="text-[10px] tracking-widest font-bold text-muted-foreground">{e.date.m}</div>
                </div>
                <span className="absolute top-4 right-4 bg-ink/70 backdrop-blur-md text-white text-[10px] tracking-widest font-bold px-3 py-1.5 rounded-full">
                  {e.tag.toUpperCase()}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors">
                  {e.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-3.5 h-3.5" /> {e.location}
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{e.desc}</p>
                <a href="#events" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link">
                  Register
                  <ArrowUpRight className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
