import React from "react";
import { FaqSection } from "@/components/sections/faq-section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Help & FAQ | eaglecast",
  description:
    "Find answers about eaglecast free trials, supported devices, setup, package access, and reseller options.",
  pathname: "/faq",
});

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-canvas py-12">
      <FaqSection />
    </div>
  );
}
