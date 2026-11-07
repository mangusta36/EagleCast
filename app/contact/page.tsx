import Link from "next/link";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/page-json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_URL } from "@/data/seo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV Customer Service and IPTV Support",
  description:
    "Find EagleCast TV setup, login, portal, buffering, and plan guidance. Verified customer-support contact details are not currently published.",
  pathname: "/contact",
});

const supportFaqs = [
  {
    question: "How do I contact EagleCast TV customer service?",
    answer:
      "This site does not currently publish a verified support email or messaging account. Use the setup and troubleshooting guides on this page while the operator confirms contact details.",
  },
  {
    question: "Where do I find my EagleCast TV login details?",
    answer:
      "Customers receive their login details during the activation or setup workflow. If you cannot find them, use login help or contact support.",
  },
  {
    question: "What should I do if my EagleCast TV credentials do not work?",
    answer:
      "Re-enter them carefully, confirm you are using the intended app or player, and contact support if they still fail.",
  },
  {
    question: "Where do I get my EagleCast TV portal information?",
    answer:
      "Portal information is supplied with the relevant setup details when it applies to your device or player.",
  },
  {
    question: "Can EagleCast TV help me set up my Smart TV?",
    answer:
      "Review the device-specific setup guides before selecting a plan. Device compatibility must be confirmed before purchase.",
  },
  {
    question: "What should I do if my stream buffers?",
    answer:
      "Start with the service status, buffering, and internet-speed guides linked below, then contact support with your device, app, and network details if the issue continues.",
  },
] as const;

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "EagleCast TV Customer Service",
    url: `${SITE_URL}/contact`,
    description:
      "EagleCast TV guidance for device setup, login help, portal help, and streaming troubleshooting.",
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
          __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <FaqJsonLd
        items={supportFaqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ]}
      />
      <section className="bg-canvas">
        <div className="site-container py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              Customer Support
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              EagleCast TV Customer Service &amp; Support
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
              Get help with package questions, activation details, device setup,
              login credentials, portal information, buffering issues, and
              reseller information. Verified external support contact details
              are not currently published. For the service overview, plans, and
              trial path, start from{" "}
              <Link
                href="/"
                className="font-semibold text-brand hover:text-brand-strong"
              >
                EagleCast TV
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/login-help" variant="secondary">
                Login help
              </ButtonLink>
              <ButtonLink href="/portal-help" variant="secondary">
                Portal help
              </ButtonLink>
            </div>

            <div className="mt-8 rounded-lg border border-line bg-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                Direct answer
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">
                How do I contact EagleCast TV customer service?
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                This site does not currently publish a verified email, WhatsApp
                number, Telegram account, or support-hours commitment. Use the
                linked guides for device setup, login details, portal help, and
                buffering checks while the operator confirms a contact route.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-canvas-alt">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="How can we help?"
            title="Support topics customers usually need most"
            description="Use the linked guidance for compatible devices, setup details, and troubleshooting while verified contact details are pending."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                Subscription help
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Ask about packages, renewals, activation details, subscription
                status, and reseller questions.
              </p>
            </article>
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">Device setup</h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Get help with Smart TV, Fire TV, Android, iOS, Windows, Mac, and
                compatible streaming boxes.
              </p>
            </article>
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                Login / credentials help
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Learn how EagleCast TV customers use their provided credentials
                and where to request replacement details if needed.
              </p>
              <ButtonLink
                href="/login-help"
                variant="outlineLight"
                className="mt-5"
              >
                Open login help
              </ButtonLink>
            </article>
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">Portal help</h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Understand what a portal is, where portal details come from, and
                what to check if a portal setup is not loading correctly.
              </p>
              <ButtonLink
                href="/portal-help"
                variant="outlineLight"
                className="mt-5"
              >
                Open portal help
              </ButtonLink>
            </article>
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                Streaming / buffering help
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Check whether the issue appears local, device-specific, or
                account-related before contacting support, then share your test
                results with the team.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink
                  href="/blog/is-eaglecast-tv-down"
                  variant="outlineLight"
                >
                  Check service guide
                </ButtonLink>
                <ButtonLink
                  href="/blog/fix-iptv-buffering"
                  variant="outlineLight"
                >
                  Buffering guide
                </ButtonLink>
              </div>
            </article>
            <article className="border-t border-line pt-5">
              <h2 className="text-xl font-semibold text-ink">
                Internet speed &amp; EPG help
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                Review practical guidance for internet speed, guide behavior,
                and schedule alignment before reaching out.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink
                  href="/blog/internet-speed-for-iptv"
                  variant="outlineLight"
                >
                  Internet speed
                </ButtonLink>
                <ButtonLink
                  href="/blog/what-is-iptv-epg"
                  variant="outlineLight"
                >
                  EPG guide
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-canvas-alt">
        <div className="site-container py-12 text-sm leading-7 text-ink-muted">
          This site does not collect or transmit support requests while a
          verified contact destination is pending. Use the guides above to
          prepare device, app, and error details for a future verified route.
        </div>
      </section>

      <section className="bg-canvas">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="Support FAQ"
            title="Answers to common support questions"
            description="These quick answers cover the customer-service questions that branded searchers usually mean when they look for EagleCast TV support."
          />
          <div className="mt-10 divide-y divide-line rounded-lg border border-line">
            {supportFaqs.map((faq) => (
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
    </>
  );
}
