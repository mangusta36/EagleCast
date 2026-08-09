"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Zap, Layers, ArrowRight } from "lucide-react";

export function BenefitStory() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Impact Defense Without Bulk",
      description: "Our patent-pending CornerSpring™ geometry dissipates 92% of drop shock energy while keeping the case profile under 1.4mm.",
    },
    {
      icon: Layers,
      title: "Precision Tactile Feel",
      description: "Custom anodized aluminum buttons provide sharp click feedback, paired with a anti-slip micro-textured perimeter grip.",
    },
    {
      icon: Zap,
      title: "Instant N52 MagSafe Alignment",
      description: "Integrated 1,200g magnetic core aligns perfectly with MagSafe chargers, car mounts, and wallets without removing your case.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="/images/lifestyle-hand-case.png"
                alt="Elgale Caset Precision Engineering"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  DESIGNED IN NEW YORK
                </span>
                <p className="text-white font-bold text-lg mt-2">
                  &ldquo;The most comfortable phone case I&apos;ve ever owned.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Benefits List */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-blue-400 text-xs font-extrabold uppercase tracking-widest bg-blue-950 px-3.5 py-1 rounded-full border border-blue-800">
                THE ELGALE DIFFERENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4">
                Designed for everyday protection & uncompromising style.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3">
                Most phone cases force you to choose between bulky plastic tanks or flimsy covers. Elgale Caset delivers military protection inside an ultra-refined aesthetic.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 text-blue-400 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{b.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link href="/shop" className="btn-primary bg-blue-600 hover:bg-blue-500 text-white shadow-xl group">
                <span>Explore the Full Lineup</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
