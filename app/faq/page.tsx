import React from "react";
import Link from "next/link";
import { FaqSection } from "@/components/sections/faq-section";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/page-json-ld";
import { FAQS } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV Help & Frequently Asked Questions",
  description:
    "Find clear answers about EagleCast TV trials, supported devices, IPTV setup, package access, payments, support options and the reseller program.",
  pathname: "/faq",
});

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-canvas py-12">
      <FaqJsonLd
        items={FAQS.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "FAQ", item: "/faq" },
        ]}
      />
      <section className="bg-canvas">
        <div className="site-container max-w-3xl pt-10 text-sm leading-7 text-ink-muted">
          These answers support current customers and shoppers. For the main
          service overview, plan path, and supported device summary, start with
          the{" "}
          <Link
            href="/"
            className="font-semibold text-brand hover:text-brand-strong"
          >
            EagleCast TV IPTV
          </Link>{" "}
          homepage.
        </div>
      </section>
      <FaqSection />
    </div>
  );
}
