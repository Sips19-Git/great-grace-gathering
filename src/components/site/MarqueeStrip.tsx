export const MarqueeStrip = () => {
  const items = ["✦ FAITH OVER FEAR", "✦ COME AS YOU ARE", "✦ EVERY NATION", "✦ EVERY GENERATION", "✦ HOPE NEVER FAILS", "✦ LOVE WINS"];
  const row = [...items, ...items, ...items];
  return (
    <div className="bg-primary text-primary-foreground border-y border-primary-glow/40 overflow-hidden">
      <div className="flex marquee whitespace-nowrap py-4">
        {row.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl tracking-wider px-8">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};
