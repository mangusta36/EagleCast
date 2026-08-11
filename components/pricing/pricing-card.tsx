import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { PricingPlan } from "@/data/pricing";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const featured = Boolean(plan.featured);

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-panel p-6 transition-[border-color,box-shadow,transform] duration-200 sm:p-7 ${
        featured
          ? "border-brand shadow-card ring-1 ring-brand"
          : "border-line shadow-soft hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-card"
      }`}
    >
      {featured ? (
        <span className="absolute -top-3 left-5 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white shadow-soft">
          Best value
        </span>
      ) : null}

      <div>
        <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
        <p className="mt-2 min-h-10 text-sm leading-6 text-ink-muted">
          {plan.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-display text-[2.5rem] font-semibold tracking-[-0.045em] text-ink">
          {plan.price}
        </span>
        <span className="text-xs font-medium text-ink-muted">one time</span>
      </div>
      <p className="mt-1 text-xs text-ink-muted">
        Access for {plan.billingPeriod}
      </p>
      {plan.savings ? (
        <p className="mt-3 inline-flex w-fit rounded-full bg-mint-soft px-2.5 py-1 text-[11px] font-semibold text-mint-strong">
          {plan.savings}
        </p>
      ) : (
        <div className="h-7" aria-hidden="true" />
      )}

      <ul className="mt-6 space-y-3 border-t border-line pt-6 text-sm text-ink">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-mint"
              strokeWidth={2.2}
              aria-hidden="true"
            />
            <span className="leading-6">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <div className="rounded-xl bg-panel-soft p-3.5 text-xs leading-5 text-ink-muted">
          <p className="font-semibold text-ink">{plan.connectionCount}</p>
          <p>{plan.additionalConnectionPrice}</p>
        </div>

        <Link
          href={plan.ctaHref}
          className={`group mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
            featured
              ? "border-brand bg-brand text-white hover:border-brand-strong hover:bg-brand-strong"
              : "border-ink bg-ink text-white hover:border-brand hover:bg-brand"
          }`}
        >
          Try EagleCast TV free
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
