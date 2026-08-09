import { CircleDollarSign, Headphones, MonitorSmartphone, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Try before you subscribe",
    body: "Full service access for 48 hours",
  },
  {
    icon: MonitorSmartphone,
    title: "Three connections",
    body: "Included with every listed plan",
  },
  {
    icon: Headphones,
    title: "Support around the clock",
    body: "Help with setup, billing, and playback",
  },
  {
    icon: CircleDollarSign,
    title: "One-time payments",
    body: "No automatic subscription renewal",
  },
] as const;

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-panel" aria-label="Service highlights">
      <div className="site-container py-7 sm:py-8">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className={`flex gap-3.5 ${index > 0 ? "lg:border-l lg:border-line lg:pl-7" : ""} ${index < items.length - 1 ? "lg:pr-7" : ""}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-0.5 text-xs leading-5 text-ink-muted">{item.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
