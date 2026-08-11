import Link from "next/link";
import {
  ArrowDown,
  CheckCircle2,
  Headphones,
  MessageCircle,
  Repeat2,
  Send,
  ShieldCheck,
  Smartphone,
  Store,
  UserPlus,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildWhatsappUrl } from "@/data/contact";
import { FAQS } from "@/data/faqs";
import { SITE_URL } from "@/data/seo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV IPTV Reseller Program & Support",
  description:
    "Start or grow your IPTV reselling business with EagleCast TV reseller access, customer workflows, setup guidance, renewals, and WhatsApp support.",
  pathname: "/reseller",
});

const resellerWhatsappUrl = buildWhatsappUrl(
  "Hi EagleCast TV, I'm interested in your reseller program and would like more information about getting started.",
);

const audience = [
  {
    title: "New Resellers",
    body: "For people who want to start selling IPTV subscriptions with a guided first setup.",
    icon: UserPlus,
  },
  {
    title: "Existing Sellers",
    body: "For sellers who want another provider for trials, renewals, and customer onboarding.",
    icon: Repeat2,
  },
  {
    title: "Small Businesses",
    body: "For teams that want to manage and sell subscriptions to their own customers.",
    icon: Store,
  },
] as const;

const benefits = [
  "Dedicated Xtream Codes / M3U management panel",
  "Create, manage, renew, and sell sub-accounts",
  "Credit package purchase workflow",
  "Customer trial, renewal, and onboarding support",
  "Device and setup guidance for common IPTV apps",
  "EagleCast TV technical backing when needed",
] as const;

const steps = [
  {
    title: "Contact EagleCast TV",
    body: "Speak with us on WhatsApp and tell us what kind of reseller setup you need.",
  },
  {
    title: "Choose Your Reseller Setup",
    body: "We explain the available reseller options and help you choose the appropriate setup.",
  },
  {
    title: "Start Selling",
    body: "Once your reseller access is ready, you can begin serving your own customers.",
  },
] as const;

const trustItems = [
  {
    title: "Guided onboarding",
    body: "Get help understanding the reseller flow before you begin.",
    icon: ShieldCheck,
  },
  {
    title: "Setup knowledge",
    body: "Use EagleCast TV guidance for Smart TVs, Firestick, Android, iOS, PC, and Mac devices.",
    icon: Smartphone,
  },
  {
    title: "Direct WhatsApp communication",
    body: "Ask questions before buying and continue the conversation during setup.",
    icon: Headphones,
  },
] as const;

const resellerFaqs = [
  ...FAQS.filter((faq) => faq.category === "reseller"),
  {
    id: "reseller-get-started",
    question: "How do I become an EagleCast TV reseller?",
    answer:
      "Contact EagleCast TV on WhatsApp and tell us you are interested in reseller access. We will explain the available setup and credit package workflow.",
  },
  {
    id: "reseller-experience",
    question: "Do I need IPTV experience?",
    answer:
      "Experience helps, but new resellers can contact EagleCast TV for guidance before getting started.",
  },
  {
    id: "reseller-pricing",
    question: "How do I get reseller pricing?",
    answer:
      "Reseller pricing depends on the setup and credit package. Ask EagleCast TV directly on WhatsApp for current reseller options.",
  },
  {
    id: "reseller-contact-before-buying",
    question: "Can I contact EagleCast TV before buying?",
    answer:
      "Yes. WhatsApp is the best way to ask questions about reseller access before you purchase or set anything up.",
  },
  {
    id: "reseller-setup-help",
    question: "Can I get help with customer setup?",
    answer:
      "Yes. EagleCast TV provides setup and device guidance that can help with customer onboarding.",
  },
  {
    id: "reseller-devices",
    question: "Which devices can my customers use?",
    answer:
      "EagleCast TV supports common IPTV app workflows across Smart TVs, Firestick and Fire TV devices, Android phones and tablets, iPhones and iPads, compatible boxes, Windows PCs, and Mac devices.",
  },
] as const;

function WhatsappButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={resellerWhatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366] px-5 py-3 text-[15px] font-semibold text-white shadow-[0_6px_18px_rgba(37,211,102,0.24)] transition hover:border-[#20bd5a] hover:bg-[#20bd5a] active:translate-y-px ${className}`}
    >
      <MessageCircle size={18} aria-hidden="true" className="fill-current" />
      {children}
    </a>
  );
}

export default function ResellerPage() {
  const resellerJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EagleCast TV Reseller Program",
    url: `${SITE_URL}/reseller`,
    description:
      "Overview of the EagleCast TV reseller program, who it is for, what it provides, and how to contact EagleCast TV to get started.",
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
          __html: JSON.stringify(resellerJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-canvas">
        <div className="site-container grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="max-w-3xl">
            <Eyebrow>EagleCast TV reseller</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-6xl">
              Start Your IPTV Reselling Business with EagleCast TV
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
              Sell IPTV subscriptions to your own customers with reseller
              access, setup guidance, and support from EagleCast TV.
            </p>
            <div className="mt-8 rounded-lg border border-line bg-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                Direct answer
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">
                What is the EagleCast TV reseller program?
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                The EagleCast TV reseller program is for people or small
                businesses that want reseller access for customer onboarding,
                renewals, and account workflows. It provides a practical route
                for managing customer subscriptions with setup guidance and
                direct support. To get started, contact EagleCast TV on WhatsApp
                and explain the kind of reseller setup you need.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappButton className="w-full sm:w-auto">
                Talk to Us on WhatsApp
              </WhatsappButton>
              <Link
                href="#how-it-works"
                className="btn-secondary w-full sm:w-auto"
              >
                <ArrowDown size={17} aria-hidden="true" />
                See How It Works
              </Link>
            </div>
          </div>

          <div className="border-y border-line bg-canvas-alt py-6 lg:border lg:p-8">
            <p className="text-sm font-semibold text-brand">
              Built for practical reseller workflows
            </p>
            <div className="mt-6 grid gap-5">
              {benefits.slice(0, 4).map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-mint-strong"
                  />
                  <p className="text-sm font-medium leading-7 text-ink">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas-alt">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="Who it is for"
            title="Who is EagleCast TV reseller for?"
            description="Reseller access is for people who want a direct way to serve their own IPTV customers."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {audience.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border-t border-line pt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-panel text-brand shadow-soft">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-ink-muted">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="site-container section-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="What you get"
            title="What You Get as an EagleCast TV reseller"
            description="The reseller program is centered on panel access, customer account workflows, and direct setup support."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex min-h-20 items-start gap-3 border-t border-line pt-5"
              >
                <CheckCircle2
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-brand"
                />
                <p className="text-sm font-semibold leading-7 text-ink">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-canvas-alt">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="How it works"
            title="A simple path from questions to reseller access"
            description="Start with a conversation, choose the appropriate setup, then begin serving your customers."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="border-t border-line pt-6">
                <p className="text-sm font-black text-brand">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-ink">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink-muted">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="site-container section-pad">
          <div className="grid gap-8 border-y border-line py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-brand">
                Reseller packages
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-4xl">
                Need reseller pricing?
              </h2>
              <p className="mt-4 text-base leading-8 text-ink-muted">
                Reseller options can depend on the setup and requirements. Ask
                EagleCast TV directly for current reseller pricing and package
                details.
              </p>
            </div>
            <WhatsappButton className="w-full sm:w-auto">
              Ask for Reseller Pricing on WhatsApp
            </WhatsappButton>
          </div>
        </div>
      </section>

      <section className="bg-canvas-alt">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="Why EagleCast TV"
            title="Why Work with EagleCast TV?"
            description="You get a clear communication route and practical support for the customer workflows resellers use most."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border-t border-line pt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-panel text-brand shadow-soft">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-ink-muted">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="Reseller FAQ"
            title="Questions before you start"
            description="Here are the key details to understand before you ask EagleCast TV about reseller access."
          />
          <div className="mt-10 divide-y divide-line border-y border-line">
            {resellerFaqs.map((faq) => (
              <details key={faq.id} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink">
                  {faq.question}
                  <span className="shrink-0 text-brand transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EFF6FF]">
        <div className="site-container py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-brand">
                Ready to Start Reselling?
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-4xl">
                Talk with EagleCast TV before you get started.
              </h2>
              <p className="mt-4 text-base leading-8 text-ink-muted">
                Talk with EagleCast TV directly and we&apos;ll help you
                understand the reseller options before you get started.
              </p>
            </div>
            <WhatsappButton className="w-full sm:w-auto">
              <Send size={17} aria-hidden="true" />
              Chat with Us on WhatsApp
            </WhatsappButton>
          </div>
        </div>
      </section>
    </>
  );
}
