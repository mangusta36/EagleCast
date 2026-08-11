"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background visual asset */}
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/hero-caset-composition.png"
          alt="Elgale Caset Lineup"
          fill
          className="object-cover object-center blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
      </div>

      <div className="site-container relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 text-blue-300 border border-blue-500/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>JOIN OVER 50,000 HAPPY USERS</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Your phone deserves better protection.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Upgrade to military-grade drop defense, Florentine leather
          craftsmanship, and seamless MagSafe charging today. Backed by our
          30-day money-back guarantee.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto btn-primary py-4 px-8 text-base bg-blue-600 hover:bg-blue-500 text-white shadow-2xl group"
          >
            <span>Shop the Full Collection</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/shop?category=magsafe"
            className="w-full sm:w-auto btn-secondary py-4 px-8 text-base bg-slate-900 border-slate-800 text-white hover:bg-slate-800"
          >
            Explore MagSafe Cases
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs text-slate-400 font-semibold pt-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Free 2-Day US
            Shipping
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> 30-Day Easy
            Returns
          </span>
        </div>
      </div>
    </section>
  );
}
