import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-ggc.png";

const VISIT_LINK = "https://share.google/zR3CGAEvPSyPZ7Gh4";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#welcome" },
  { label: "Sermons", href: "#sermon" },
  { label: "Events", href: "#events" },
  { label: "Ministries", href: "#ministries" },
  { label: "Give", href: "#give" },
  { label: "Connect", href: "#newsletter" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-site mx-auto container-x flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="Great Grace Church Logo"
              className="w-10 h-10 rounded-[30%] object-cover shadow-md"
            />
            <span
              className={`font-display text-xl tracking-wide transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              GREAT GRACE CHURCH
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${
                    scrolled ? "text-foreground" : "text-white/90"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={VISIT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-glow transition-colors group"
            >
              Plan a Visit
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden p-2 rounded-full border ${
                scrolled ? "border-border text-foreground" : "border-white/40 text-white"
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink text-white transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Great Grace Church Logo"
              className="w-10 h-10 rounded-[30%] object-cover"
            />
            <span className="font-display text-xl">GREAT GRACE CHURCH</span>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="container-x flex flex-col gap-2 mt-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block font-display text-5xl py-2 hover:text-primary-glow transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a
              onClick={() => setOpen(false)}
              href={VISIT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold"
            >
              Plan a Visit <ArrowUpRight className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
