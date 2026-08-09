"use client";

import React from "react";
import { ShieldCheck, Magnet, Sparkles, RefreshCw } from "lucide-react";

export function WhyUsStrip() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "15 FT Drop Defense",
      description: "Air-cushioned CornerSpring™ technology absorbs severe impacts.",
    },
    {
      icon: Magnet,
      title: "N52 MagSafe Magnet Array",
      description: "1,200g magnetic holding force for wireless charging & accessories.",
    },
    {
      icon: Sparkles,
      title: "Premium Materials Only",
      description: "European Florentine leather and anti-yellowing Bayer polymers.",
    },
    {
      icon: RefreshCw,
      title: "30-Day Risk-Free Trial",
      description: "Full refund or instant exchange with free prepaid return label.",
    },
  ];

  return (
    <section id="why-us" className="py-10 bg-white border-b border-slate-200/80">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">{pillar.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
