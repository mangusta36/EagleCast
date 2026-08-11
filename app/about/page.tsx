import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Headphones, MonitorPlay, ShieldCheck } from "lucide-react";

export const metadata = buildMetadata({
  title: "About EagleCast TV | IPTV Streaming Service",
  description:
    "See how EagleCast TV combines IPTV streaming, device setup support and trial-first onboarding for live TV, sports, movies and series across supported screens.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 md:py-24">
      <div className="site-container max-w-4xl space-y-16">
        <div className="text-center space-y-4">
          <span className="rounded-full border border-blue-400/30 bg-canvas-alt px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-brand">
            About EagleCast TV
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
            Premium IPTV built around trial-first setup.
          </h1>
          <p className="text-base md:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            EagleCast TV helps viewers test live TV, sports, movies, and series
            on their own devices before choosing a package.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-line bg-panel p-6">
            <ShieldCheck className="w-8 h-8 text-emerald" />
            <h3 className="mt-5 text-lg font-bold text-ink">
              Free trial confidence
            </h3>
            <p className="mt-3 text-sm text-ink-subtle leading-relaxed">
              Confirm your app, device, and connection before committing to a
              plan.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-panel p-6">
            <MonitorPlay className="w-8 h-8 text-brand" />
            <h3 className="mt-5 text-lg font-bold text-ink">
              Multi-device viewing
            </h3>
            <p className="mt-3 text-sm text-ink-subtle leading-relaxed">
              Watch through common IPTV workflows on TVs, sticks, phones,
              laptops, and compatible boxes.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-panel p-6">
            <Headphones className="w-8 h-8 text-gold" />
            <h3 className="mt-5 text-lg font-bold text-ink">Setup support</h3>
            <p className="mt-3 text-sm text-ink-subtle leading-relaxed">
              Get guidance for activation, app choice, package questions, and
              renewals.
            </p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-line">
          <Link href="/#packages" className="btn-primary py-4 px-8 text-base">
            <span>Explore EagleCast TV packages</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
