import React from "react";
import Link from "next/link";
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
          <h2 className="text-lg font-bold text-ink">Trials and Purchases</h2>
          <p>
            Use the available trial to evaluate compatibility and playback on
            your own device and network before choosing a paid term. Published
            plans use one-time payments and do not renew automatically. The
            features, connection allowance, term, and price presented when an
            order is confirmed form part of that purchase.
          </p>
          <h2 className="text-lg font-bold text-ink">
            Account Responsibilities
          </h2>
          <p>
            You are responsible for providing accurate order information,
            keeping access credentials private, using the service only through
            compatible apps and devices, and following applicable law. Account
            access should not be resold, shared, or used beyond the connections
            included with the selected plan unless a separate reseller
            arrangement permits it.
          </p>
          <h2 className="text-lg font-bold text-ink">
            Devices and Connectivity
          </h2>
          <p>
            A compatible device, player app, and adequate internet connection
            are required. EagleCast TV can provide setup guidance, but cannot
            control local Wi-Fi conditions, internet-provider performance,
            third-party app changes, device limitations, or regional
            availability.
          </p>
          <h2 className="text-lg font-bold text-ink">
            Support and Refund Requests
          </h2>
          <p>
            Report technical issues with enough detail for support to review the
            device, app, connection, and error involved. Refund questions are
            evaluated under the{" "}
            <Link
              href="/refund-policy"
              className="font-semibold text-brand hover:text-brand-strong"
            >
              Refund Policy
            </Link>{" "}
            and the facts of the transaction. For account or billing help, use
            the official{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand hover:text-brand-strong"
            >
              support channels
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
