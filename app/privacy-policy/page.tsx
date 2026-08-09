import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | eaglecast",
  description:
    "Privacy policy and data protection principles for eaglecast customers.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-canvas py-16">
      <div className="site-container max-w-3xl space-y-6">
        <h1 className="text-3xl font-extrabold text-ink">Privacy Policy</h1>
        <p className="text-sm text-ink-subtle">Last updated: August 2026</p>

        <div className="space-y-4 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          <p>
            eaglecast values your privacy. This Privacy Policy describes how
            personal information may be collected, used, and protected when you
            request a trial, contact support, or choose a streaming package.
          </p>
          <h2 className="text-lg font-bold text-ink">Information We Collect</h2>
          <p>
            We may collect contact details, package preferences, device
            information, and support messages needed to respond to setup,
            billing, trial, and compatibility requests.
          </p>
        </div>
      </div>
    </div>
  );
}
