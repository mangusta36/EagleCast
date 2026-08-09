"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { contactInfo } from "@/data/contact";

const trustItems = [
  "eaglecast Setup",
  "Fast Activation",
  "4K Ready",
  "Device Options",
] as const;

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden border-b border-line bg-canvas md:min-h-[680px]">
      <Image
        src="/images/hero-living-room.webp"
        alt="Modern living room television setup for eaglecast IPTV streaming"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[62%_center] brightness-110 contrast-95 saturate-105 md:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_30%,rgba(255,255,255,0.62)_54%,rgba(255,255,255,0.22)_76%,rgba(255,255,255,0.05)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_48%,rgba(255,255,255,0.78)_100%)]" />

      <div className="site-container flex min-h-[640px] items-center py-16 md:min-h-[680px] md:py-20">
        <div className="w-full max-w-[42rem]">
          <p className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.16em] text-brand">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Stream with eaglecast
          </p>

          <h1 className="mt-6 max-w-[12ch] text-4xl font-black leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            eaglecast.
            <span className="block text-brand-strong">
              Live TV, Sports & Entertainment.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#475569] sm:text-lg">
            eaglecast is an IPTV streaming service for watching live TV, sports,
            movies, series, and catch-up entertainment on compatible devices.
            Request a free trial, confirm your setup with eaglecast support, and
            test the experience before choosing a package.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald min-h-12 px-7 text-sm uppercase tracking-wide"
            >
              <Zap size={17} className="fill-current" aria-hidden="true" />
              Get Trial
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <Link
              href="/#packages"
              className="btn-secondary min-h-12 px-7 text-sm uppercase tracking-wide"
            >
              View Packages
            </Link>
          </div>

          <p className="mt-7 grid max-w-xl grid-cols-2 gap-x-2 gap-y-2 border-t border-line pt-5 text-xs font-bold text-ink-muted sm:flex sm:flex-wrap sm:gap-x-3">
            {trustItems.map((item, index) => (
              <span key={item} className="flex items-center gap-2 sm:gap-3">
                {index > 0 ? (
                  <span className="hidden text-ink-subtle/60 sm:inline">/</span>
                ) : null}
                {index === 0 ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                ) : null}
                {item}
              </span>
            ))}
          </p>

          <p className="mt-4 text-xs font-semibold text-ink-subtle">
            Try your setup before choosing a package.
          </p>
        </div>
      </div>
    </section>
  );
}
