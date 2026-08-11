import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you requested could not be found. Return to the EagleCast TV homepage or explore our service pages.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-canvas">
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 font-display text-[24rem] font-semibold leading-none tracking-[-0.08em] text-brand/[0.05] lg:block"
      >
        404
      </div>
      <div className="site-container relative flex min-h-[68vh] items-center py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand">Error 404</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
            This page could not be found.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink-muted sm:text-lg">
            The address may be out of date or the page may have moved. Return to
            EagleCast TV, compare plans, or contact support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" withArrow>
              Return home
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact support
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
