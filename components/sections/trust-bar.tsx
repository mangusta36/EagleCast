"use client";

import React from "react";
import {
  Tv,
  Flame,
  Film,
  Sparkles,
  MonitorSmartphone,
  Zap,
} from "lucide-react";

export function TrustBar() {
  const items = [
    { icon: Tv, label: "6,000+ Live Channels" },
    { icon: Flame, label: "Live Sports & PPV" },
    { icon: Film, label: "Movies & Series VOD" },
    { icon: Sparkles, label: "4K & Ultra HD Ready" },
    { icon: MonitorSmartphone, label: "Multi-Device Compatibility" },
    { icon: Zap, label: "Fast 2-Min Activation" },
  ];

  return (
    <section className="py-6 bg-slate-900 border-b border-slate-800/80">
      <div className="site-container">
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-950/60 border border-slate-800/80 shrink-0 text-xs font-bold text-slate-200"
              >
                <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
