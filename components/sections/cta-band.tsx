import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export function CtaBand() {
  return (
    <section className="bg-canvas">
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-brand px-6 py-12 text-white sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/15"
          />
          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold text-white/70">
              See it on your own screen
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl">
              Try the full eaglecast service for 48 hours.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/75">
              Explore live TV, sports, movies, and catch-up before you decide
              which plan fits.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/80">
              <CheckCircle2 size={17} aria-hidden="true" />
              No automatic renewal after the trial or a paid term.
            </p>
          </div>
          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0 lg:flex-col">
            <ButtonLink href="/free-trial" variant="light">
              Request your free trial
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outlineLight">
              Compare plans
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
