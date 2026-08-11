import Link from "next/link";
import { ArrowRight, Check, Mail, MessageCircleMore, Send } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { contactInfo } from "@/data/contact";
import { pricingPlans } from "@/data/pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV Free IPTV Trial | Test Before You Choose",
  description:
    "Request an EagleCast TV free IPTV trial to test live TV, sports, movies, catch-up and multi-screen viewing on your device before selecting a plan.",
  pathname: "/free-trial",
});

const trialIncludes = [
  "Live TV with EPG",
  "Sports and PPV events",
  "Movies and series bundle",
  "Catch-up and multi-screen access",
] as const;

const steps = [
  {
    number: "1",
    title: "Request access by email",
    body: "Send the team a trial request. If you came from a plan, that interest is carried into the email draft.",
  },
  {
    number: "2",
    title: "Receive your setup details",
    body: "The team provides your access information and guidance for your chosen device.",
  },
  {
    number: "3",
    title: "Explore before you subscribe",
    body: "Try the full package, then decide whether one of the listed subscription terms fits.",
  },
] as const;

interface FreeTrialPageProps {
  searchParams: Promise<{ plan?: string | string[] }>;
}

export default async function FreeTrialPage({
  searchParams,
}: FreeTrialPageProps) {
  const params = await searchParams;
  const planSlug = Array.isArray(params.plan) ? params.plan[0] : params.plan;
  const selectedPlan = pricingPlans.find((plan) => plan.slug === planSlug);
  const subject = selectedPlan
    ? `EagleCast TV trial request — ${selectedPlan.name}`
    : "EagleCast TV trial request";
  const body = selectedPlan
    ? `Hello EagleCast TV team,\n\nI would like to request the EagleCast TV trial. I am interested in the ${selectedPlan.name} plan (${selectedPlan.price} one-time payment) if the trial is a good fit.\n\nMy preferred device is: `
    : "Hello EagleCast TV team,\n\nI would like to request the EagleCast TV trial.\n\nMy preferred device is: ";
  const trialEmailHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <section className="border-b border-line bg-canvas-alt">
        <div className="site-container grid gap-12 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-brand before:h-2 before:w-2 before:rounded-full before:bg-emerald">
              EagleCast TV trial
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
              See how EagleCast TV fits your screens.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink-muted sm:text-lg">
              Try the full package before choosing a paid term. Request access
              directly from the EagleCast TV support team.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {trialIncludes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-ink-muted"
                >
                  <Check
                    size={16}
                    className="shrink-0 text-mint"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] bg-panel p-6 text-ink shadow-lift sm:p-8 lg:ml-auto lg:max-w-xl">
            {selectedPlan ? (
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-brand-soft p-4">
                <div>
                  <p className="text-xs font-semibold text-brand">
                    Plan interest saved
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {selectedPlan.name} · {selectedPlan.price}
                  </p>
                </div>
                <Link
                  href="/pricing"
                  className="text-xs font-semibold text-brand hover:text-brand-strong"
                >
                  Change plan
                </Link>
              </div>
            ) : null}

            <h2 className="text-2xl font-semibold text-ink">
              Request your trial
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink-muted">
              The button below opens a prepared email to {contactInfo.email}.
              Add your device and any setup questions before sending.
            </p>
            <a
              href={trialEmailHref}
              className="group mt-6 flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-strong"
            >
              <Mail size={17} aria-hidden="true" />
              Open trial request email
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <p className="mt-3 text-center text-xs leading-5 text-ink-muted">
              You will review and send the request from your own email app.
            </p>

            <div className="mt-6 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line bg-panel px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <MessageCircleMore size={16} aria-hidden="true" />
                Contact options
              </Link>
              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line bg-panel px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <Send size={16} aria-hidden="true" />
                Telegram updates
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="site-container section-pad">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-brand">
              What happens next
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-ink sm:text-4xl">
              A simple path from request to watching
            </h2>
          </div>
          <ol className="mt-12 grid gap-5 lg:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-line bg-panel p-6 shadow-soft sm:p-7"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-canvas-alt p-6 sm:flex-row sm:p-8">
            <div>
              <p className="font-semibold text-ink">
                Want to review the terms first?
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                All listed plans include the same service features.
              </p>
            </div>
            <ButtonLink
              href="/pricing"
              variant="secondary"
              withArrow
              className="w-full sm:w-auto"
            >
              Compare plans
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
