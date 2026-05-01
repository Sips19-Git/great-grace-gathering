import { Clock, MapPin, Sunrise, Sun, Moon } from "lucide-react";

const services = [
  {
    day: "SUNDAY", time: "9:00 AM", name: "First Service", location: "Main Campus", icon: Sunrise,
    neon: "#39FF14", // neon green
  },
  {
    day: "SUNDAY", time: "11:00 AM", name: "Second Service", location: "Main Campus", icon: Sun,
    neon: "#FFE600", // neon yellow
  },
  {
    day: "SUNDAY", time: "6:00 PM", name: "Evening Worship", location: "Downtown Campus", icon: Moon,
    neon: "#B026FF", // neon purple
  },
  {
    day: "WEDNESDAY", time: "7:00 PM", name: "Midweek Prayer", location: "Online + Main", icon: Clock,
    neon: "#00F0FF", // neon cyan
  },
];

export const ServiceTimes = () => {
  return (
    <section id="services" className="bg-cream py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain grain-light" />
      <div className="max-w-site mx-auto container-x relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Gather With Us</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
              SERVICE TIMES
              <br />
              <span className="text-primary">EVERY WEEK</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg">
            Find a time that fits your week and join the family in worship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                style={{ ["--neon" as string]: s.neon }}
                className="group bg-background rounded-3xl p-7 border border-border/60 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-ink hover:border-[var(--neon)] hover:[box-shadow:0_0_0_1px_var(--neon),0_0_30px_-2px_var(--neon),0_0_70px_-10px_var(--neon)]"
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" style={{ background: "var(--neon)" }} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-12 h-12 rounded-full bg-primary/10 text-primary grid place-items-center transition-all duration-500 group-hover:bg-[var(--neon)]/15 group-hover:text-[var(--neon)] group-hover:[box-shadow:0_0_20px_var(--neon)]"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] tracking-[0.25em] font-bold text-muted-foreground transition-colors group-hover:text-[var(--neon)]">
                      {s.day}
                    </span>
                  </div>
                  <div
                    className="font-display text-5xl text-foreground mb-2 transition-all duration-500 group-hover:text-[var(--neon)] group-hover:[text-shadow:0_0_20px_var(--neon),0_0_40px_var(--neon)]"
                  >
                    {s.time}
                  </div>
                  <div className="text-base font-semibold text-foreground mb-3 transition-colors group-hover:text-white">{s.name}</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-white/70">
                    <MapPin className="w-3.5 h-3.5" />
                    {s.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
