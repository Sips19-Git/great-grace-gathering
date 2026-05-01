import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're in! Check your inbox for a welcome note.");
    setEmail(""); setName("");
  };

  return (
    <section id="newsletter" className="bg-ink text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/15 blur-3xl" />
      <div className="relative max-w-3xl mx-auto container-x text-center">
        <p className="font-italiana text-cream-deep text-xl italic mb-4">— stay close</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 text-balance">
          MIDWEEK <span className="text-primary-glow">DEVOTIONALS</span>,
          <br />
          STRAIGHT TO YOU.
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          One short word every Wednesday. Plus event updates and sermon recaps. No spam — promise.
        </p>

        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
            className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-primary-glow transition-colors"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-[2] bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-primary-glow transition-colors"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-4 rounded-full font-semibold hover:bg-primary-glow transition-colors group whitespace-nowrap"
          >
            Subscribe
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
};
