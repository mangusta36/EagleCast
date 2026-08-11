import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV Terms and Conditions of Service",
  description:
    "Review the EagleCast TV terms and conditions for account use, purchases, service access, acceptable use, intellectual property and governing terms.",
  pathname: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-canvas py-16">
      <div className="site-container max-w-3xl space-y-6">
        <h1 className="text-3xl font-extrabold text-ink">Terms & Conditions</h1>
        <p className="text-sm text-ink-subtle">Last updated: August 2026</p>

        <div className="space-y-4 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          <p>
            Welcome to EagleCast TV. By accessing the website, requesting a
            trial, choosing a package, or contacting support, you agree to these
            Terms and Conditions.
          </p>
          <h2 className="text-lg font-bold text-ink">Service Availability</h2>
          <p>
            Live channels, sports, movies, series, replay, and higher-resolution
            playback may vary by source availability, device capability, app
            performance, internet connection, region, and package rules.
          </p>
        </div>
      </div>
    </div>
  );
}
