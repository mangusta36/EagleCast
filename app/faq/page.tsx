import React from "react";
import { FaqSection } from "@/components/sections/faq-section";
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
      <FaqSection />
    </div>
  );
}
