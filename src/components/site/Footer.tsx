import { Facebook, Instagram, Youtube, Music2, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-ggc.png";

const cols = [
  { label: "Quick Links", links: ["Home", "About", "Sermons", "Events", "Give", "Contact"] },
  { label: "Ministries", links: ["Kids", "Youth", "Men", "Women", "Worship", "Outreach"] },
  { label: "Connect", links: ["Plan a Visit", "Small Groups", "Volunteer", "Prayer Request"] },
];

export const Footer = () => {
  return (
    <footer id="visit" className="bg-cream/40 px-4 md:px-8 pb-8 pt-4">
      <div className="max-w-site mx-auto bg-background rounded-[2rem] shadow-[0_-10px_60px_-15px_hsl(0_0%_0%/0.25),0_30px_80px_-20px_hsl(6_67%_46%/0.15)] border border-border container-x py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-highlight/20 blur-3xl pointer-events-none" />

        {/* Big wordmark */}
        <div className="mb-20 text-center">
          <h2 className="font-display text-[16vw] md:text-[12vw] lg:text-[11rem] leading-none tracking-tight">
            GREAT GRACE
          </h2>
          <p className="font-display text-[8vw] md:text-[6vw] lg:text-[5.5rem] leading-none text-primary -mt-2">
            CHURCH
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src={logo}
                alt="Great Grace Church Logo"
                className="w-10 h-10 rounded-[30%] object-cover shadow-md"
              />
              <span className="font-display text-xl tracking-wide">GREAT GRACE CHURCH</span>
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
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" /> 018 384 5465
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
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "https://www.instagram.com/greatgracechurch/" },
                { Icon: Youtube, href: "#" },
                { Icon: Music2, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-bold mb-5 text-center">Find Us</h3>
          <div className="rounded-2xl overflow-hidden shadow-card aspect-[16/6] md:aspect-[16/5]">
            <iframe
              title="Great Grace Church Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.0!2d25.6!3d-25.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDUxJzAwLjAiUyAyNcKwMzYnMDAuMCJF!5e0!3m2!1sen!2sza!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            <MapPin className="w-4 h-4 inline-block mr-1 text-primary" />
            GGC Mmabatho, Unit 15, 6895 Cydonia Street, Mahikeng
          </p>
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
