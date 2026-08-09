import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PricingCard } from "@/components/pricing/pricing-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingPlans } from "@/data/pricing";

export function PricingSection() {
  return (
    <section id="plans" className="bg-canvas-alt">
      <div className="site-container section-pad">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Plans"
            title="Same full service. Choose your term."
            description="Start with the free trial, then pick the duration that suits you. Prices are one-time payments with no automatic renewal."
          />
          <Link
            href="/pricing"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
          >
            See the full comparison
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 text-sm text-ink-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7">
          {["48-hour trial first", "3 connections included", "No automatic renewal"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-mint" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
