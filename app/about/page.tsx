import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/page-json-ld";
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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
        ]}
      />
      <div className="site-container max-w-4xl space-y-16">
        <div className="text-center space-y-4">
          <span className="rounded-full border border-blue-400/30 bg-canvas-alt px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-brand">
            About EagleCast TV
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
            IPTV viewing built around trial-first setup.
          </h1>
          <p className="text-base md:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            <Link
              href="/"
              className="font-semibold text-brand hover:text-brand-strong"
            >
              EagleCast TV
            </Link>{" "}
            helps viewers test live TV, sports, movies, and series on their own
            devices before choosing a package.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-line bg-panel p-6">
            <ShieldCheck className="w-8 h-8 text-emerald" />
            <h2 className="mt-5 text-lg font-bold text-ink">
              Free trial confidence
            </h2>
            <p className="mt-3 text-sm text-ink-subtle leading-relaxed">
              Confirm your app, device, and connection before committing to a
              plan.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-panel p-6">
            <MonitorPlay className="w-8 h-8 text-brand" />
            <h2 className="mt-5 text-lg font-bold text-ink">
              Multi-device viewing
            </h2>
            <p className="mt-3 text-sm text-ink-subtle leading-relaxed">
              Watch through common IPTV workflows on TVs, sticks, phones,
              laptops, and compatible boxes.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-panel p-6">
            <Headphones className="w-8 h-8 text-gold" />
            <h2 className="mt-5 text-lg font-bold text-ink">Setup support</h2>
            <p className="mt-3 text-sm text-ink-subtle leading-relaxed">
              Get guidance for activation, app choice, package questions, and
              renewals.
            </p>
          </div>
        </div>

        <section className="grid gap-10 border-t border-line pt-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">
              What viewers can evaluate first
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              The trial is the practical starting point. Use it on the device,
              app, and home connection you expect to use most. Check live TV,
              sports, movies and series, guide navigation, catch-up, and the way
              playback behaves on that specific setup before choosing a longer
              term.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink">
              What support can help with
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              EagleCast TV provides guidance for app selection, credentials,
              portal activation, device setup, billing questions, and common
              playback problems. The experience can still depend on the app,
              device capability, and network quality, so useful support starts
              with those details.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              For self-service help, review the{" "}
              <Link
                href="/tutorials"
                className="font-semibold text-brand hover:text-brand-strong"
              >
                setup tutorials
              </Link>{" "}
              or visit the{" "}
              <Link
                href="/faq"
                className="font-semibold text-brand hover:text-brand-strong"
              >
                frequently asked questions
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-line pt-12">
          <h2 className="text-2xl font-bold text-ink">
            A clear path to service
          </h2>
          <ol className="mt-6 grid gap-5 md:grid-cols-3">
            <li className="border-t border-line pt-4 text-sm leading-7 text-ink-muted">
              <strong className="block text-ink">1. Name your device</strong>
              Tell support which TV, stick, box, phone, tablet, or computer you
              plan to use.
            </li>
            <li className="border-t border-line pt-4 text-sm leading-7 text-ink-muted">
              <strong className="block text-ink">
                2. Test the full package
              </strong>
              Review the included viewing features on your normal network and
              screen.
            </li>
            <li className="border-t border-line pt-4 text-sm leading-7 text-ink-muted">
              <strong className="block text-ink">3. Compare plan terms</strong>
              Choose a published term only after confirming the setup works for
              you.
            </li>
          </ol>
        </section>

        <div className="text-center pt-8 border-t border-line">
          <Link href="/pricing" className="btn-primary py-4 px-8 text-base">
            <span>Compare EagleCast TV plans</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
