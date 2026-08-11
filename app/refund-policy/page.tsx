import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV Refund Policy and Support Terms",
  description:
    "Read the EagleCast TV refund policy for eligibility, request timing, technical support steps, exclusions and how approved refunds are processed.",
  pathname: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-canvas py-16">
      <div className="site-container max-w-3xl space-y-6">
        <h1 className="text-3xl font-extrabold text-ink">Refund Policy</h1>
        <p className="text-sm text-ink-subtle">Last updated: August 2026</p>

        <div className="space-y-4 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          <h2 className="text-lg font-bold text-ink">
            1. Trial Before Purchase
          </h2>
          <p>
            EagleCast TV encourages viewers to request a trial before choosing a
            package so device compatibility, app setup, and playback can be
            checked first.
          </p>

          <h2 className="text-lg font-bold text-ink">2. Support Review</h2>
          <p>
            If you experience an issue after purchase, contact EagleCast TV
            support with your device, app, connection type, package, and error
            details so the team can review the setup path.
          </p>

          <h2 className="text-lg font-bold text-ink">3. Refund Questions</h2>
          <p>
            Refund eligibility depends on the transaction details, service
            status, account usage, and support findings. Contact support for the
            current policy that applies to your order.
          </p>
        </div>

        <div className="pt-6">
          <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
            Contact EagleCast TV support
          </Link>
        </div>
      </div>
    </div>
  );
}
