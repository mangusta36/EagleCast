import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { SITE_URL } from "@/data/seo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV Portal Help | IPTV Setup & Access Guide",
  description:
    "Learn what the EagleCast TV portal means in practice, where customers receive portal details, and what to do if portal access is not loading.",
  pathname: "/portal-help",
});

export default function PortalHelpPage() {
  const portalHelpJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EagleCast TV Portal Help",
    url: `${SITE_URL}/portal-help`,
    description:
      "Explanation of what EagleCast TV portal details mean, where customers receive them, and how to recover them through support.",
    about: {
      "@type": "Organization",
      name: "EagleCast TV",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portalHelpJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-canvas">
        <div className="site-container py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              Portal Help
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl">
              EagleCast TV Portal Setup &amp; Help
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
              Customers searching for an EagleCast TV portal are usually looking
              for setup information or the portal details provided with their
              subscription. This page explains the concept at a high level
              without exposing private server addresses, usernames, or
              passwords.
            </p>

            <div className="mt-8 rounded-lg border border-line bg-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                Direct answer
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">
                Where do I find my EagleCast TV portal details?
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                EagleCast TV portal details are provided during activation or
                through the official support workflow when a compatible player
                or box needs portal-style setup. If you cannot find those
                details or the portal is not working, contact EagleCast TV
                support instead of guessing at old server values or searching
                for private infrastructure online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-canvas-alt">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="Portal basics"
            title="What the EagleCast TV portal means in practice"
            description="A portal is a setup endpoint used by some compatible IPTV players and boxes. Customers receive the information they need during the official setup workflow."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                Where portal details come from
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                If your device or player uses portal-based setup, the required
                information is supplied through the activation or support
                process. It is not published as an open public login page on
                this site.
              </p>
            </article>
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                MAG / box setup context
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Some boxes or compatible players ask for portal-style details
                during setup. Enter them exactly as provided and contact support
                if your device path is unclear.
              </p>
            </article>
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                Portal not loading?
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Confirm your internet connection, re-check the entered details,
                restart the device, confirm the subscription is active, and then
                contact support if the issue continues.
              </p>
            </article>
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                Lost your portal details?
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Use the official support route instead of guessing at old values
                or searching for private infrastructure online.
              </p>
            </article>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact">
              Contact EagleCast TV support
            </ButtonLink>
            <ButtonLink href="/login-help" variant="outlineLight">
              Login help
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
