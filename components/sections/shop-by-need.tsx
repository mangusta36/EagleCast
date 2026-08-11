"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldAlert,
  Sparkles,
  Feather,
  Magnet,
} from "lucide-react";

export function ShopByNeed() {
  const categories = [
    {
      id: "protective",
      title: "Extreme Protection",
      tagline: "15 FT Military Drop Certified",
      description:
        "Air-cushioned CornerSpring™ corner armor for maximum shock resistance.",
      image: "/images/case-titan-black.png",
      icon: ShieldAlert,
      href: "/shop?category=protective",
    },
    {
      id: "leather",
      title: "Luxe Leather",
      tagline: "Top-Grain European Patina",
      description:
        "Hand-finished Florentine leather with aluminum button accents.",
      image: "/images/case-leather-tan.png",
      icon: Sparkles,
      href: "/shop?category=leather",
    },
    {
      id: "clear",
      title: "Ultra-Clear MagSafe",
      tagline: "Anti-Yellowing Guarantee",
      description:
        "100% optical clarity with embedded German Bayer UV polymers.",
      image: "/images/case-clear-magsafe.png",
      icon: Magnet,
      href: "/shop?category=clear",
    },
    {
      id: "minimal",
      title: "Ultra Minimalist",
      tagline: "0.8mm Thin Profile",
      description:
        "Weightless 19g feather construction designed to feel invisible.",
      image: "/images/hero-caset-composition.png",
      icon: Feather,
      href: "/shop?category=minimal",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            CURATED CATEGORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mt-3">
            Shop by Protection Style
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-2">
            Whether you prioritize heavy impact armor, timeless leather patina,
            or ultra-thin minimalism, we have engineered the ideal case for your
            device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-blue-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="flex justify-between items-start z-10">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="p-2 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>

                <div className="relative h-48 my-4">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain object-center group-hover:scale-108 transition-transform duration-500"
                  />
                </div>

                <div className="z-10 pt-2 border-t border-slate-200/60">
                  <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wide">
                    {cat.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
