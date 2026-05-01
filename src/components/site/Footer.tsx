import { Facebook, Instagram, Youtube, Music2, MapPin, Mail } from "lucide-react";

const cols = [
  { label: "Quick Links", links: ["Home", "About", "Sermons", "Events", "Give", "Contact"] },
  { label: "Ministries", links: ["Kids", "Youth", "Men", "Women", "Worship", "Outreach"] },
  { label: "Connect", links: ["Plan a Visit", "Small Groups", "Volunteer", "Prayer Request"] },
];

export const Footer = () => {
  return (
    <footer id="visit" className="bg-cream/40 px-4 md:px-8 pb-8 pt-4">
      <div className="max-w-site mx-auto bg-background rounded-[2rem] shadow-lift border border-border container-x py-16 md:py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-highlight/20 blur-3xl pointer-events-none" />
        {/* Big wordmark */}
        <div className="mb-16">
          <h2 className="font-display text-[18vw] md:text-[14vw] lg:text-[12rem] leading-none text-stroke">
            GREAT GRACE
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-xl">
                G
              </span>
              <span className="font-display text-xl tracking-wide">GREAT GRACE</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              A modern, Spirit-led church gathering across the city. Come as you are — leave changed.
            </p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                GGC Mmabatho, Unit 15, 6895 Cydonia Street
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" /> gracegreat121@gmail.com
              </li>
            </ul>
          </div>

          {cols.map((c) => (
            <div key={c.label} className="col-span-6 lg:col-span-2">
              <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-bold mb-5">
                {c.label}
              </h3>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-12 lg:col-span-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-bold mb-5">Follow</h3>
            <div className="flex flex-wrap gap-2">
              {[Facebook, Instagram, Youtube, Music2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Great Grace Church. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-primary transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
