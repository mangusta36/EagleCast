import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleHelp,
  Headphones,
  MonitorSmartphone,
  PlayCircle,
  Settings,
  ShieldCheck,
  Tv,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { contactInfo } from "@/data/contact";
import { PRICING_PLANS } from "@/data/pricing";

const overviewItems: readonly {
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Device Friendly",
    body: "Smart TVs, Firestick, Android, iOS, Windows, and compatible TV boxes.",
    icon: MonitorSmartphone,
  },
  {
    title: "Trial Access",
    body: "Test your screen, app, and connection before choosing a paid term.",
    icon: PlayCircle,
  },
  {
    title: "Setup Support",
    body: "Get help with activation, app login, and basic playback questions.",
    icon: Headphones,
  },
  {
    title: "Flexible Plans",
    body: "Choose 3, 6, 12, or 24 months with the same core service included.",
    icon: ShieldCheck,
  },
] as const;

const serviceBenefits = [
  [
    "Live TV, Sports & Entertainment",
    "A single IPTV service for everyday channels, live sports viewing, and on-demand entertainment.",
  ],
  [
    "Flexible Plans",
    "Every listed package includes the same core access, so the main decision is subscription length.",
  ],
  [
    "Setup & Subscription Support",
    "Confirm your preferred device during the trial request and keep a clear route for help.",
  ],
] as const;

const deviceItems = [
  "Smart TV",
  "Firestick / Fire TV",
  "Android TV",
  "iPhone / iPad",
  "Windows PC",
  "MAG / Formuler",
] as const;

const faqItems = [
  [
    "Can I try EagleCast TV before choosing a plan?",
    "Yes. Request a trial so you can test your device, app workflow, and home connection before selecting a subscription.",
  ],
  [
    "Which devices work with EagleCast TV IPTV?",
    "EagleCast TV supports common IPTV apps across Smart TVs, Firestick and Fire TV, Android devices, iPhone and iPad, Windows PCs, and compatible TV boxes.",
  ],
  [
    "What is included with the subscription plans?",
    "Published plans include the same core service: live TV, sports, movies, series, catch-up where available, and setup support.",
  ],
  [
    "How many devices are included per subscription?",
    "Standard packages include one active device connection per subscription line. Ask support before purchase if you need extra screens.",
  ],
  [
    "How does setup support work?",
    "Share your device, app, and question with support. The team can guide activation, credential entry, and basic troubleshooting.",
  ],
  [
    "Where can I find detailed setup guides?",
    "Use the tutorials hub for device-specific setup details. The homepage stays focused on the service, plans, and trial path.",
  ],
] as const;

export const homeFaqItems = faqItems as readonly (readonly [string, string])[];

export function EaglecastAtGlanceSection() {
  return (
    <section className="border-y border-line bg-canvas-alt">
      <div className="site-container py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overviewItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-lg border border-line bg-panel p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <p className="mt-4 text-base font-black text-ink">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-subtle">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PackagesSection() {
  return (
    <section id="packages" className="bg-canvas">
      <div className="site-container section-pad">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
              EagleCast TV Plans
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.15rem)] font-black leading-tight tracking-tight text-ink">
              Choose Your EagleCast TV IPTV Subscription Plan
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
              Pricing is visible early because the homepage is the main service
              page. Start with a trial if you want to confirm playback before
              selecting a plan.
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-black text-brand-strong hover:text-brand"
          >
            Full pricing details
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.slug}
              className={`relative flex min-h-full flex-col rounded-lg border p-6 transition hover:-translate-y-0.5 ${
                plan.featured
                  ? "border-brand bg-panel shadow-glow"
                  : "border-line bg-panel shadow-card hover:border-line-strong hover:shadow-soft"
              }`}
            >
              {plan.featured ? (
                <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-ink">
                  Popular
                </span>
              ) : null}
              <h3 className="text-lg font-black text-ink">{plan.name}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-ink-subtle">
                {plan.description}
              </p>
              <div className="mt-5 flex flex-wrap items-end gap-x-2">
                <span className="text-5xl font-black tracking-tight text-ink">
                  {plan.price}
                </span>
                <span className="pb-2 text-sm font-semibold text-ink-subtle">
                  / {plan.billingPeriod.replace("every ", "")}
                </span>
              </div>
              <p className="mt-2 text-sm font-bold text-gold">
                {plan.monthlyEquivalent}
              </p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {plan.features.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 text-sm leading-6 text-ink"
                  >
                    <Check
                      size={16}
                      className="mt-1 shrink-0 text-emerald"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-brand bg-brand px-4 py-3 text-sm font-black text-white shadow-emerald transition hover:border-brand-strong hover:bg-brand-strong"
              >
                {plan.ctaText}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IptvValueSection() {
  return (
    <section id="services" className="bg-canvas-alt">
      <div className="site-container section-pad">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
              Why EagleCast TV
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.15rem)] font-black leading-tight tracking-tight text-ink">
              Why Choose EagleCast TV for Live TV, Sports & Entertainment
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
              EagleCast TV brings the main viewing experience, plan comparison,
              trial path, and support route into one service homepage. Detailed
              setup and troubleshooting live in the support hubs where they
              belong.
            </p>
            <Link
              href="/services"
              className="btn-secondary mt-7 w-full sm:w-auto"
            >
              View service features
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {serviceBenefits.map(([title, body], index) => (
              <article
                key={title}
                className="rounded-lg border border-line bg-panel p-5"
              >
                <p className="text-xs font-black text-brand-strong">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg font-black text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-subtle">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DeviceTrustSection() {
  return (
    <section id="devices" className="bg-canvas">
      <div className="site-container section-pad grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            Device Compatibility
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.15rem)] font-black leading-tight tracking-tight text-ink">
            Watch EagleCast TV on Your Favorite Devices
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-muted sm:text-lg">
            EagleCast TV supports common IPTV apps across major device
            categories. Share your device during the trial request so support
            can point you to the right setup path.
          </p>
          <Link
            href="/tutorials"
            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand-strong hover:text-brand"
          >
            Open setup guides
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            {deviceItems.map((device) => (
              <div
                key={device}
                className="rounded-lg border border-line bg-panel px-4 py-3 text-xs font-bold text-ink-muted shadow-sm"
              >
                {device}
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border border-line bg-panel shadow-card">
          <div className="relative aspect-[16/11]">
            <Image
              src="/images/iptv-hero-tv-stage.webp"
              alt="EagleCast TV supported devices for IPTV streaming"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    [
      "01",
      "Choose a Plan or Trial",
      "Start with the trial path or pick the subscription term you already want.",
    ],
    [
      "02",
      "Receive Your Setup Details",
      "Support sends the activation and app guidance for your selected device.",
    ],
    [
      "03",
      "Start Streaming",
      "Use your compatible IPTV app to watch live TV, sports, movies, and series.",
    ],
  ] as const;

  return (
    <section className="bg-canvas-alt">
      <div className="site-container section-pad">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            How It Works
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.15rem)] font-black leading-tight tracking-tight text-ink">
            How to Start Streaming with EagleCast TV
          </h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map(([count, title, body]) => (
            <li key={title} className="rounded-lg border border-line bg-panel p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-strong">
                {count}
              </p>
              <h3 className="mt-4 text-lg font-black text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-subtle">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function SupportHelpSection() {
  return (
    <section id="support" className="bg-canvas">
      <div className="site-container py-12">
        <div className="grid gap-6 rounded-lg border border-line bg-panel p-6 shadow-card md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
              Need Help Choosing?
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-ink">
              EagleCast TV Subscription & Setup Support
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink-muted">
              Ask about trials, activation, extra screens, or setup before you
              buy.
            </p>
          </div>
          <Link href="/contact" className="btn-secondary">
            <Headphones size={18} aria-hidden="true" />
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ResourceHubSection() {
  const resources = [
    {
      title: "Setup Guides",
      body: "Device and app setup instructions for supported screens.",
      href: "/tutorials",
      icon: Settings,
    },
    {
      title: "Help & FAQ",
      body: "Short answers about trials, plans, devices, and support.",
      href: "/faq",
      icon: CircleHelp,
    },
    {
      title: "EagleCast TV Blog",
      body: "Educational IPTV articles for deeper research when needed.",
      href: "/blog",
      icon: Tv,
    },
  ] as const;

  return (
    <section className="bg-canvas-alt">
      <div className="site-container section-pad">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            Resources
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3rem)] font-black leading-tight tracking-tight text-ink">
            EagleCast TV Setup, Support & Resources
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            The homepage stays focused on the service. Use these hubs for
            setup, support, and deeper IPTV education.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link
                key={resource.href}
                href={resource.href}
                className="group rounded-lg border border-line bg-panel p-6 shadow-card transition hover:-translate-y-0.5 hover:border-brand/45 hover:shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-black text-ink group-hover:text-brand">
                  {resource.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-subtle">
                  {resource.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
                  Open hub
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeFaqSection() {
  return (
    <section id="faq" className="bg-canvas">
      <div className="site-container section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            FAQ
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.15rem)] font-black leading-tight tracking-tight text-ink">
            EagleCast TV IPTV FAQs
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-4xl divide-y divide-line rounded-lg border border-line bg-panel shadow-card">
          {faqItems.map(([question, answer]) => (
            <details key={question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-black text-ink transition hover:text-brand-strong">
                <span>{question}</span>
                <span className="text-2xl leading-none text-brand-strong group-open:hidden">
                  +
                </span>
                <span className="hidden text-2xl leading-none text-brand-strong group-open:block">
                  -
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#475569]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalConversionCta() {
  return (
    <section className="bg-canvas-alt">
      <div className="site-container py-14">
        <div className="rounded-lg border border-brand/20 bg-panel p-8 text-center shadow-card md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            Start Watching
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-4xl">
            Start Streaming with EagleCast TV
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink-muted">
            Request a trial or compare subscriptions, then activate EagleCast TV
            on your preferred device with setup support.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald min-h-12 px-8 text-sm uppercase tracking-wide"
            >
              <Zap size={18} className="fill-current" aria-hidden="true" />
              Get Trial Now
            </a>
            <Link
              href="/pricing"
              className="btn-secondary min-h-12 px-8 text-sm uppercase tracking-wide"
            >
              View Subscriptions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
