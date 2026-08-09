import { Film, Play, Radio, RotateCcw, Trophy } from "lucide-react";

const guideItems = [
  {
    icon: Trophy,
    title: "Live sports",
    meta: "Sports & PPV",
    tone: "bg-brand text-white",
  },
  {
    icon: Radio,
    title: "Live channels",
    meta: "Guide included",
    tone: "bg-mint text-white",
  },
  {
    icon: Film,
    title: "Movies & series",
    meta: "Browse the bundle",
    tone: "bg-gold text-ink",
  },
] as const;

export function TvGuide() {
  return (
    <div
      className="overflow-hidden rounded-[1.5rem] border border-line bg-panel p-3 shadow-card sm:p-4"
      aria-label="Illustrative eaglecast viewing interface"
    >
      <div className="flex items-center justify-between px-2 pb-3 pt-1 text-ink">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
          <span className="text-xs font-semibold">eaglecast guide</span>
        </div>
        <span className="rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 py-1 text-[10px] font-medium text-brand">
          Example interface
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-[0.32fr_0.68fr]">
        <div className="hidden rounded-2xl bg-panel-soft p-3 md:block">
          <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-subtle">
            Browse
          </p>
          <ul className="mt-3 space-y-1 text-xs font-medium text-ink-muted">
            {[
              "Live TV",
              "Sports & PPV",
              "Movies & series",
              "Catch-up & replay",
            ].map((item, index) => (
              <li
                key={item}
                className={`rounded-lg px-2.5 py-2 ${
                  index === 0 ? "bg-[#EFF6FF] text-brand" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex min-h-52 flex-col justify-end overflow-hidden rounded-2xl bg-brand p-5 text-white sm:min-h-60 sm:p-6">
          <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand shadow-soft">
            <Play size={18} fill="currentColor" aria-hidden="true" />
          </div>
          <span className="text-xs font-semibold text-white/70">
            Live TV with EPG
          </span>
          <p className="mt-2 max-w-sm font-display text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
            Find what you want to watch, without the guesswork.
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs font-medium text-white/75">
            <RotateCcw size={14} aria-hidden="true" />
            Catch-up and replay available
          </div>
        </div>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {guideItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-xl border border-line bg-panel p-3 text-ink"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.tone}`}
              >
                <Icon size={16} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold">{item.title}</p>
                <p className="mt-0.5 text-[10px] text-ink-subtle">
                  {item.meta}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
