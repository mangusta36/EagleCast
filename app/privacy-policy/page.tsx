import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV Privacy Policy & Data Protection",
  description:
    "Read the EagleCast TV privacy policy covering information collection, cookies, data use, sharing, security, retention and your privacy choices.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-canvas py-16">
      <div className="site-container max-w-3xl space-y-6">
        <h1 className="text-3xl font-extrabold text-ink">
          EagleCast TV Privacy Policy
        </h1>
        <p className="text-sm text-ink-subtle">Last updated: August 2026</p>

        <div className="space-y-4 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          <p>
            EagleCast TV values your privacy. This Privacy Policy describes how
            personal information may be collected, used, and protected when you
            request an EagleCast TV trial, contact support, or choose a
            streaming package.
          </p>
          <h2 className="text-lg font-bold text-ink">
            Information EagleCast TV Collects
          </h2>
          <p>
            We may collect contact details, package preferences, device
            information, and support messages needed to respond to setup,
            billing, trial, and compatibility requests.
          </p>
          <h2 className="text-lg font-bold text-ink">
            How Information Is Used
          </h2>
          <p>
            Information may be used to respond to EagleCast TV requests, provide
            trial or account assistance, process service questions, troubleshoot
            a reported issue, and maintain the website. Device and connection
            details shared with support are used to understand compatibility and
            playback problems.
          </p>
          <h2 className="text-lg font-bold text-ink">Cookies and Analytics</h2>
          <p>
            The EagleCast TV website may use essential browser storage and
            configured analytics tools to understand site use and maintain
            functionality. Browser settings can be used to limit or remove
            cookies, although doing so may affect some website features.
          </p>
          <h2 className="text-lg font-bold text-ink">Sharing and Retention</h2>
          <p>
            Personal information is not intended to be sold. Information may be
            handled by service providers needed to operate communications,
            analytics, payments, or hosting, and may be disclosed where required
            by law. Information should be kept only as long as needed for the
            purpose for which it was collected and for applicable record-keeping
            obligations.
          </p>
          <h2 className="text-lg font-bold text-ink">
            Security and Your Choices
          </h2>
          <p>
            Reasonable safeguards can reduce risk, but no website or electronic
            transmission can promise absolute security. To ask about personal
            information you previously provided, use the official{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand hover:text-brand-strong"
            >
              contact page
            </Link>
            . Do not include passwords or full payment credentials in a support
            message.
          </p>
        </div>
      </div>
    </div>
  );
}
