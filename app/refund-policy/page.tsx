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

          <h2 className="text-lg font-bold text-ink">4. What to Include</h2>
          <p>
            Include the contact details used for the order, the selected plan,
            the device and app involved, when the issue began, and the support
            steps already attempted. Do not send passwords or full payment
            credentials. Complete information helps support distinguish an
            account issue from a device, app, or local-network problem.
          </p>

          <h2 className="text-lg font-bold text-ink">
            5. Technical Limitations
          </h2>
          <p>
            Compatibility and playback can be affected by third-party apps,
            device capability, Wi-Fi quality, internet-provider performance, and
            regional availability. A support review may ask you to test a
            different app, device, or connection before a refund decision is
            made.
          </p>

          <h2 className="text-lg font-bold text-ink">
            6. Decisions and Processing
          </h2>
          <p>
            Support will explain the outcome after reviewing the transaction and
            reported issue. When a refund is approved, processing also depends
            on the original payment method and its provider. Contact support for
            the status of a specific request rather than submitting duplicate
            requests through multiple channels.
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
