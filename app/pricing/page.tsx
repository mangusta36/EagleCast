import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { PricingCard } from "@/components/pricing/pricing-card";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/page-json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingPlans } from "@/data/pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV IPTV Pricing & Subscription Plans",
  description:
    "Compare EagleCast TV IPTV subscription plans for 3, 6, 12, and 24 months of live TV, sports, movies, series, and catch-up access with multi-screen options.",
  pathname: "/pricing",
});

const includedForAll = [
  "Live TV with EPG",
  "Sports & PPV events",
  "Movies and series VOD",
  "Catch-up and replay",
  "Multi-screen connections",
  "24/7 setup and technical support",
] as const;

const pricingFaqs = [
  {
    question: "What is included in every EagleCast TV plan?",
    answer:
      "Every published plan includes the same core service: live TV with an electronic program guide, sports and PPV events, international movies and series, catch-up and replay, multi-screen connections, and 24/7 setup and technical support.",
  },
  {
    question: "Are EagleCast TV payments one-time or automatic?",
    answer:
      "Each listed plan is a one-time payment for access over the chosen term. There is no automatic renewal, so your subscription does not continue billing on its own.",
  },
  {
    question: "Can I try EagleCast TV before paying for a full term?",
    answer:
      "Yes. EagleCast TV offers a trial so you can test live TV, sports, movies, catch-up, and multi-screen viewing on your own device before selecting a paid subscription term.",
  },
  {
    question: "Can I add extra screens to my plan?",
    answer:
      "Yes. Multi-screen connections can be added to any plan. Ask the EagleCast TV team about the additional connection price that applies to the term you choose.",
  },
  {
    question: "Which payment and activation path do I use?",
    answer:
      "Plans purchase directly through the listed support channels. After a trial, the EagleCast TV team confirms your device setup and activates your chosen plan.",
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <FaqJsonLd
        items={pricingFaqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Pricing", item: "/pricing" },
        ]}
      />
      <PageHero
        eyebrow="EagleCast TV plans"
        title="Simple, transparent IPTV subscription plans"
        description="Choose the viewing term that fits your routine. Every plan includes the same full-service line-up: live TV, sports, movies, catch-up, multi-screen connections, and setup support."
      >
        <Link
          href="/free-trial"
          className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold transition-colors"
        >
          Start with a free trial
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="bg-canvas-alt">
        <div className="site-container section-pad">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Compare plans"
              title="One full service. Pick your term."
              description="All EagleCast TV plans include the same features — the difference is the length of access and the per-month value."
            />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.slug} plan={plan} />
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-line bg-panel p-5 text-sm leading-7 text-ink-muted">
            <p className="font-semibold text-ink">
              Not sure which plan fits best?
            </p>
            <p className="mt-1">
              Start with the{" "}
              <Link
                href="/free-trial"
                className="font-semibold text-brand hover:text-brand-strong"
              >
                EagleCast TV trial
              </Link>{" "}
              and confirm playback on your device first. After the trial, the
              support team can recommend the term that matches your viewing
              routine. If you need the broader service overview first, return to
              the{" "}
              <Link
                href="/"
                className="font-semibold text-brand hover:text-brand-strong"
              >
                EagleCast TV homepage
              </Link>
              . For custom durations, payment questions, or activation details,
              read the{" "}
              <Link
                href="/blog/how-to-pay-for-eaglecast-tv-subscription"
                className="font-semibold text-brand hover:text-brand-strong"
              >
                EagleCast TV subscription payment guide
              </Link>{" "}
              or{" "}
              <Link
                href="/contact"
                className="font-semibold text-brand hover:text-brand-strong"
              >
                contact EagleCast TV support
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="site-container section-pad">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="What you get"
                title="The same complete service in every plan"
                description="Each EagleCast TV subscription includes the full viewing package — none of the features are locked behind a higher tier."
              />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {includedForAll.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-line bg-panel p-5"
                >
                  <CheckCircle2
                    size={19}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-mint-strong"
                  />
                  <span className="text-sm font-medium leading-7 text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-canvas-alt">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="No hidden terms"
            title="One-time payments, transparent conditions"
            description="The published prices cover the full term. There is no automatic renewal, and multi-screen connections can be added to any plan before you activate."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="border-t border-line pt-6">
              <ShieldCheck
                size={20}
                aria-hidden="true"
                className="text-brand"
              />
              <h2 className="mt-4 text-xl font-semibold text-ink">
                No automatic renewal
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Each plan is a one-time payment for access over the chosen term.
                Nothing renews or bills until you confirm a new subscription.
              </p>
            </article>
            <article className="border-t border-line pt-6">
              <ShieldCheck
                size={20}
                aria-hidden="true"
                className="text-brand"
              />
              <h2 className="mt-4 text-xl font-semibold text-ink">
                Trial before you buy
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Test live TV, sports, movies, catch-up, and multi-screen viewing
                on your own screen before paying for a full term.
              </p>
            </article>
            <article className="border-t border-line pt-6">
              <ShieldCheck
                size={20}
                aria-hidden="true"
                className="text-brand"
              />
              <h2 className="mt-4 text-xl font-semibold text-ink">
                Setup support included
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                The support team guides you through app selection, credential
                entry, portal activation, and network tuning after you
                subscribe.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="Pricing FAQ"
            title="Questions about EagleCast TV plans"
            description="Quick answers about what is included, how payment works, and when to subscribe."
          />
          <div className="mx-auto mt-10 max-w-4xl divide-y divide-line rounded-lg border border-line">
            {pricingFaqs.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink">
                  {faq.question}
                  <span className="text-brand transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-ink-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
