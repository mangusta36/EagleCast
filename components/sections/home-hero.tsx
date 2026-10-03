import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { contactInfo } from "@/data/contact";

const trustItems = [
  "Trial Available",
  "Setup Support",
  "4K Ready Where Sources Allow",
  "Multi-Format Login",
  "Clear Plans",
] as const;

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden border-b border-line bg-canvas md:min-h-[680px]">
      <Image
        src="/images/hero-living-room.webp"
        alt="Modern living room television setup for EagleCast TV IPTV streaming"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[62%_center] brightness-110 contrast-95 saturate-105 md:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_30%,rgba(255,255,255,0.62)_54%,rgba(255,255,255,0.22)_76%,rgba(255,255,255,0.05)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_48%,rgba(255,255,255,0.78)_100%)]" />

      <div className="site-container flex min-h-[640px] items-center py-16 md:min-h-[680px] md:py-20">
        <div className="w-full max-w-[44rem]">
          <p className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.16em] text-brand">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            EagleCast TV IPTV streaming
          </p>

          <h1 className="mt-6 max-w-[14ch] text-4xl font-black leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            EagleCast TV IPTV Streaming for Live TV, Sports & Entertainment
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#475569] sm:text-lg">
            EagleCast TV brings live TV, sports, movies, series, catch-up, and
            setup support into one IPTV service for compatible Smart TVs,
            Firestick, Android, iOS, Windows, and set-top boxes.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-6 text-ink-muted">
            Compare plans, request a trial, and confirm your device setup with
            EagleCast TV support before choosing a subscription term.
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
              href="/pricing"
              className="btn-secondary min-h-12 px-7 text-sm uppercase tracking-wide"
            >
              View Subscriptions
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
            Need setup help first? Use the setup guides hub before choosing a
            plan.
          </p>
        </div>
      </div>
    </section>
  );
}
