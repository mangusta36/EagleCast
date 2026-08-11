import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { SITE_URL } from "@/data/seo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV Login Help & Account Access",
  description:
    "Get EagleCast TV login help, understand where IPTV credentials are delivered, and find practical steps when account details stop working on your device.",
  pathname: "/login-help",
});

export default function LoginHelpPage() {
  const loginHelpJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EagleCast TV Login Help",
    url: `${SITE_URL}/login-help`,
    description:
      "Explanation of how EagleCast TV customers use login details, where credentials are received, and how to recover them through support.",
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
          __html: JSON.stringify(loginHelpJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-canvas">
        <div className="site-container py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              Login Help
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl">
              EagleCast TV Login Help
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
              People searching for &ldquo;EagleCast TV login&rdquo; are usually
              looking for the credentials or setup instructions provided with
              their subscription. EagleCast TV does not use a public website
              login dashboard for customers here. Instead, customers receive the
              details they need during the activation and setup workflow.
            </p>

            <div className="mt-8 rounded-lg border border-line bg-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                Direct answer
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">
                How do I log in to EagleCast TV?
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                EagleCast TV customers do not log in through a public website
                account dashboard on this site. Customers use the login details
                provided during activation or setup inside the compatible IPTV
                player or app they were instructed to use. If those details are
                missing or no longer work, contact EagleCast TV support for help
                recovering them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-canvas-alt">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="How credentials work"
            title="How to use your EagleCast TV login details"
            description="Use the provided username, password, or account details exactly as supplied for the intended compatible player or app."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                Where customers receive details
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Login details are provided during activation, setup, or support
                communication. Keep them exactly as delivered and avoid adding
                extra spaces or changing letter case.
              </p>
            </article>
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                Where those details are used
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Customers usually enter those credentials inside the compatible
                IPTV player or app, not into an EagleCast TV website account
                dashboard.
              </p>
            </article>
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                If your login does not work
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Re-enter the details carefully, confirm you are using the
                correct app, restart the device, and contact support if the same
                credentials still fail.
              </p>
            </article>
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                Lost your login details?
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Use the official support route to request help with account
                details. Do not share credentials publicly or store them in
                insecure notes.
              </p>
            </article>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact">
              Contact EagleCast TV support
            </ButtonLink>
            <ButtonLink href="/portal-help" variant="outlineLight">
              Portal help
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
