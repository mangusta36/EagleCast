import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildWhatsappUrl } from "@/data/contact";
import { buildMetadata } from "@/lib/seo";

const supportWhatsappUrl = buildWhatsappUrl(
  "Hi eaglecast, I need help with setup, account details, or streaming support.",
);

export const metadata = buildMetadata({
  title: "eaglecast Customer Service | Support & Setup Help",
  description:
    "Get help with your eaglecast subscription, device setup, login details, portal questions, buffering issues, and reseller support through the official contact routes.",
  pathname: "/contact",
});

const supportFaqs = [
  {
    question: "How do I contact eaglecast customer service?",
    answer:
      "Use the official email route on this page or chat with eaglecast on WhatsApp for setup and support questions.",
  },
  {
    question: "Where do I find my eaglecast login details?",
    answer:
      "Customers receive their login details during the activation or setup workflow. If you cannot find them, use login help or contact support.",
  },
  {
    question: "What should I do if my eaglecast credentials do not work?",
    answer:
      "Re-enter them carefully, confirm you are using the intended app or player, and contact support if they still fail.",
  },
  {
    question: "Where do I get my eaglecast portal information?",
    answer:
      "Portal information is provided through the official setup workflow when it applies to the device or player you are using.",
  },
  {
    question: "Can eaglecast help me set up my Smart TV?",
    answer:
      "Yes. Setup help is available for Smart TV, Fire TV, Android, iOS, Windows, and compatible boxes.",
  },
  {
    question: "What should I do if my stream buffers?",
    answer:
      "Start with the buffering and internet-speed guides linked below, then contact support with your device, app, and network details if the issue continues.",
  },
] as const;

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "eaglecast Customer Service",
    url: "https://www.eaglecast.tv/contact",
    description:
      "Official eaglecast customer support page for subscription help, device setup, login help, portal help, and streaming troubleshooting.",
    about: {
      "@type": "Organization",
      name: "eaglecast",
      url: "https://www.eaglecast.tv",
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

      <section className="bg-canvas">
        <div className="site-container py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              Customer Support
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              eaglecast Customer Service &amp; Support
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
              Get help with package questions, activation details, device setup,
              login credentials, portal information, buffering issues, and
              reseller support through the official eaglecast support channels.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={supportWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366] px-5 py-3 text-[15px] font-semibold text-white shadow-[0_6px_18px_rgba(37,211,102,0.24)] transition hover:border-[#20bd5a] hover:bg-[#20bd5a]"
              >
                <MessageCircle
                  size={18}
                  aria-hidden="true"
                  className="fill-current"
                />
                Chat with eaglecast on WhatsApp
              </a>
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
                How do I contact eaglecast customer service?
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                The official way to contact eaglecast customer service is
                through the support email on this page or the WhatsApp support
                button above. Use those support routes for subscription
                questions, device setup, login details, portal help, buffering
                issues, and reseller support.
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
            description="Use the official support channels for questions about your subscription, compatible devices, setup details, and troubleshooting."
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
                Learn how eaglecast customers use their provided credentials and
                where to request replacement details if needed.
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
                Work through the structured buffering guide before contacting
                support, then share your test results with the team.
              </p>
              <ButtonLink
                href="/blog/fix-iptv-buffering"
                variant="outlineLight"
                className="mt-5"
              >
                Read buffering guide
              </ButtonLink>
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

      <ContactForm />

      <section className="bg-canvas">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="Support FAQ"
            title="Answers to common support questions"
            description="These quick answers cover the customer-service questions that branded searchers usually mean when they look for eaglecast support."
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
