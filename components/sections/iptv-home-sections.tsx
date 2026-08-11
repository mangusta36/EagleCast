import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { blogPosts } from "@/data/blog";
import { contactInfo } from "@/data/contact";
import { PRICING_PLANS } from "@/data/pricing";

const serviceItems = [
  [
    "Live TV Hub",
    "Organized live channel access with a familiar guide workflow.",
  ],
  [
    "Sports & Events",
    "Prepare for match nights, PPV events, and live sports viewing.",
  ],
  [
    "Movies & Series",
    "Browse entertainment categories for relaxed on-demand viewing.",
  ],
  [
    "Replay / VOD",
    "Return to available content without relying only on the live moment.",
  ],
  [
    "EPG Program Guide",
    "Move through channels and schedules with a structured guide.",
  ],
  [
    "Multi-device Access",
    "Watch on Smart TV, Android, Firestick, iPhone, iPad, Windows, and boxes.",
  ],
  ["Reseller Workflows", "Support customer trials, renewals, and onboarding."],
  [
    "Setup Support",
    "Get help with app choice, activation, troubleshooting, and renewals.",
  ],
] as const;

const deviceItems = [
  "Smart TV",
  "Android",
  "Firestick",
  "iPhone / iPad",
  "Windows",
  "MAG / TV Box",
] as const;

const trustItems = [
  [
    "Live + VOD",
    "Availability varies by package and region",
    "text-brand-strong",
  ],
  ["Guided setup", "Support for app and device preparation", "text-gold"],
  ["4K-ready", "Where source and device support it", "text-brand-strong"],
  ["5+ device families", "TV, mobile, laptop, sticks, boxes", "text-emerald"],
] as const;

const faqItems = [
  [
    "Can I try EagleCast TV before choosing a package?",
    "Yes. Get Trial so support can confirm your app, internet connection, and preferred device before you choose a plan.",
  ],
  [
    "Which devices work with EagleCast TV IPTV?",
    "EagleCast TV supports common IPTV workflows for Smart TV, Android, Firestick-style devices, iOS, Windows, and compatible set-top boxes.",
  ],
  [
    "How does setup support work?",
    "Share your device model, country, connection type, and preferred viewing categories. Support will point you toward the right setup path.",
  ],
  [
    "Does EagleCast TV support 4K streaming?",
    "EagleCast TV is 4K-ready where source availability, device capability, app performance, and internet speed all support higher-resolution playback.",
  ],
  [
    "How many devices are included?",
    "The listed packages include one device per subscription. Ask support about any current multi-device options before purchase.",
  ],
  [
    "Does EagleCast TV offer reseller options?",
    "Yes. EagleCast TV supports reseller-friendly workflows for onboarding, trials, renewals, and device guidance.",
  ],
] as const;

export function PackagesSection() {
  return (
    <section id="packages" className="bg-canvas">
      <div className="site-container section-pad">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            EagleCast TV Packages
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-tight tracking-tight text-ink">
            Choose the plan that fits your viewing
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
            Compare the available EagleCast TV packages, then use the trial to
            confirm your setup before choosing.
          </p>
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-subtle">
                {plan.name}
              </p>
              <h3 className="mt-3 text-xl font-black text-ink">
                {plan.connectionCount}
              </h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-ink-subtle">
                {plan.description}
              </p>
              <div className="mt-6 flex flex-wrap items-end gap-x-2">
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
                {plan.features.slice(0, 5).map((feature) => (
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

export function EaglecastAtGlanceSection() {
  const factItems = [
    [
      "Service",
      "IPTV streaming for live TV, sports, movies, series, and catch-up viewing.",
    ],
    [
      "Devices",
      "Smart TV, Android, Firestick, iPhone, iPad, Windows, and MAG / TV Box workflows.",
    ],
    [
      "Trial",
      "A trial is available so viewers can test setup before choosing a package.",
    ],
    [
      "Support",
      "Customer support, login help, and portal help are available through the official support routes.",
    ],
    [
      "Reseller",
      "Reseller options are available for onboarding, renewals, and customer account workflows.",
    ],
  ] as const;

  return (
    <section className="border-y border-line bg-canvas-alt">
      <div className="site-container section-pad">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
              What is EagleCast TV?
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3rem)] font-black leading-tight tracking-tight text-ink">
              A clear introduction to the EagleCast TV streaming service
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
              EagleCast TV is a subscription-based IPTV streaming service built
              for people who want live TV, sports, movies, series, and catch-up
              viewing in one place. Instead of relying on a cable box or
              satellite installation, EagleCast TV works through compatible apps
              and internet-connected devices, which gives viewers a more
              flexible way to watch at home or while moving between screens.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              For most households, the real value is not only channel access. It
              is the combination of live viewing, on-demand style browsing,
              practical device support, and a setup path that can be tested
              before purchase. That is why EagleCast TV puts the trial, device
              guidance, and support conversation early in the process, so
              viewers can confirm how the service behaves on the screen they
              actually use.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              EagleCast TV also supports the broader workflows around the
              service, including login help, portal help, renewals, and reseller
              onboarding. Whether someone is brand new to IPTV or comparing a
              better everyday setup, the goal is to make the service easier to
              understand before they commit to a package.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <Link
                href="/#packages"
                className="text-brand transition-colors hover:text-brand-strong"
              >
                EagleCast TV packages
              </Link>
              <Link
                href="/free-trial"
                className="text-brand transition-colors hover:text-brand-strong"
              >
                trial
              </Link>
              <Link
                href="/contact"
                className="text-brand transition-colors hover:text-brand-strong"
              >
                EagleCast TV customer support
              </Link>
              <Link
                href="/reseller"
                className="text-brand transition-colors hover:text-brand-strong"
              >
                EagleCast TV reseller options
              </Link>
              <Link
                href="/blog"
                className="text-brand transition-colors hover:text-brand-strong"
              >
                IPTV guides
              </Link>
            </div>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2">
            {factItems.map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-line bg-panel p-5"
              >
                <dt className="text-xs font-black uppercase tracking-[0.14em] text-ink-subtle">
                  {label}
                </dt>
                <dd className="mt-3 text-sm leading-7 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function TrustStripSection() {
  return (
    <section className="border-y border-line bg-canvas-alt">
      <div className="site-container py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(([title, body, color]) => (
            <div key={title} className="border-l border-line pl-4">
              <p className={`text-sm font-black ${color}`}>{title}</p>
              <p className="mt-1 text-xs leading-5 text-ink-subtle">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyEagleCastSection() {
  const reasons = [
    [
      "Try before you commit",
      "A trial helps confirm your device, app, and connection before you pick a package.",
    ],
    [
      "Guided setup",
      "Support helps viewers choose compatible apps, configure devices, and reduce avoidable friction.",
    ],
    [
      "Watch on your screen",
      "One streaming experience can support the living room TV, mobile viewing, and travel-friendly devices.",
    ],
  ] as const;

  return (
    <section className="bg-canvas">
      <div className="site-container section-pad">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            Why viewers choose EagleCast TV
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-tight tracking-tight text-ink">
            A better IPTV experience starts with a better setup
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
            EagleCast TV is designed around simple package choices, practical
            setup preparation, and guidance for common device families.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            That matters because a good IPTV experience depends on more than a
            plan name. EagleCast TV helps viewers connect the service to the
            right device, test playback in real conditions, and get answers
            about support, login, and trial steps before turning a trial into a
            longer subscription.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reasons.map(([title, body], index) => (
            <article key={title} className="border-t border-line pt-6">
              <p className="text-4xl font-black tracking-tight text-brand/15">
                0{index + 1}
              </p>
              <h3 className="mt-6 text-lg font-black uppercase tracking-[0.08em] text-ink">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-subtle">{body}</p>
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
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            Complete IPTV Service
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-tight tracking-tight text-ink">
            Live TV, sports, movies and more in one service
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
            EagleCast TV is meant to cover the core viewing patterns that matter
            most in a real household: live channels for everyday watching,
            sports and event nights when timing matters, and entertainment
            libraries for movies, series, and replay-based viewing. Keeping
            those categories together inside one IPTV workflow makes it easier
            to compare value across devices and routines instead of juggling
            separate experiences.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            The better way to evaluate a service like EagleCast TV is to look at
            how it performs across the content you actually care about. A
            sports-first viewer may care most about stream stability and guide
            navigation. A family may care more about how quickly the app opens,
            whether movies and series are easy to browse, and how simple the
            setup feels on the main TV. This section gives a practical picture
            of the service areas viewers usually want to test first.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {serviceItems.map(([title, body], index) => (
            <article key={title} className="bg-panel p-6">
              <p
                className={`text-xs font-black ${
                  index === 1 || index === 6
                    ? "text-gold"
                    : index === 5 || index === 7
                      ? "text-emerald"
                      : "text-brand-strong"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-lg font-black text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-subtle">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeviceTrustSection() {
  return (
    <section id="devices" className="bg-canvas">
      <div className="site-container section-pad grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            Device Compatibility
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-tight tracking-tight text-ink">
            Watch EagleCast TV on the devices you already use
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-muted sm:text-lg">
            Share your device during the trial request and support will guide
            the right app and setup path.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-muted">
            EagleCast TV supports common IPTV workflows for Smart TV apps,
            Android devices, Firestick-style streaming hardware, iPhone and
            iPad, Windows computers, and compatible TV boxes. That means many
            viewers can start with the screen they already own instead of
            rebuilding their setup from scratch.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-muted">
            If you are deciding where to begin, the simplest approach is to test
            the device you use most often, then compare setup guides for your
            platform. You can review the{" "}
            <Link
              href="/blog/best-devices-for-iptv"
              className="text-brand hover:text-brand-strong"
            >
              best devices for IPTV
            </Link>
            , follow the{" "}
            <Link
              href="/blog/how-to-set-up-iptv-smart-tv"
              className="text-brand hover:text-brand-strong"
            >
              Smart TV setup guide
            </Link>
            , or check the{" "}
            <Link
              href="/blog/how-to-set-up-iptv-fire-tv"
              className="text-brand hover:text-brand-strong"
            >
              Fire TV setup guide
            </Link>
            before requesting an EagleCast TV trial.
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            {deviceItems.map((device) => (
              <div
                key={device}
                className="rounded-lg border border-line bg-panel px-4 py-3 text-sm font-bold text-ink-muted shadow-sm transition hover:border-brand/45 hover:bg-[#EFF6FF]"
              >
                {device}
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border border-line bg-panel shadow-card">
          <div className="relative aspect-[16/11]">
            <Image
              src="/images/iptv-hero-tv-stage.png"
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
      "Choose how you want to watch",
      "Start with the room, device, and type of viewing that matters most.",
    ],
    [
      "02",
      "Test EagleCast TV with a trial",
      "Use the trial to confirm login, guide behavior, and playback comfort.",
    ],
    [
      "03",
      "Set up your compatible device",
      "Follow the right app and device path with support if you need it.",
    ],
    [
      "04",
      "Choose the package that fits",
      "Move to the plan that matches your routine once the setup works well.",
    ],
  ] as const;

  return (
    <section className="bg-canvas-alt">
      <div className="site-container section-pad grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            How EagleCast TV works
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-tight tracking-tight text-ink">
            A smoother IPTV setup starts with the right testing sequence
          </h2>
        </div>
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map(([count, title, body]) => (
              <article
                key={title}
                className="rounded-lg border border-line bg-panel p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-strong">
                  {count}
                </p>
                <h3 className="mt-3 text-base font-black text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-subtle">{body}</p>
              </article>
            ))}
          </div>
          <div className="space-y-5 text-base leading-8 text-ink-muted">
            <p>
              EagleCast TV works best when viewers begin with the device and
              room they actually use most. That keeps the trial grounded in real
              conditions instead of ideal ones. Once the app is installed and
              the login path is confirmed, test live TV, channel changes, guide
              navigation, and normal viewing at the time of day when your
              network is busiest. That tells you more than a feature list ever
              will.
            </p>
            <p>
              Streaming quality also depends on the connection feeding that
              screen. A stable HD or 4K-capable setup usually needs more than
              raw speed alone; router placement, Wi-Fi strength, and device
              performance all shape the result. If you want clearer benchmarks,
              review the guide on{" "}
              <Link
                href="/blog/internet-speed-for-iptv"
                className="text-brand hover:text-brand-strong"
              >
                internet speed for IPTV
              </Link>
              . If playback is inconsistent, the{" "}
              <Link
                href="/blog/fix-iptv-buffering"
                className="text-brand hover:text-brand-strong"
              >
                IPTV buffering guide
              </Link>
              walks through the most common fixes.
            </p>
            <p>
              After the first successful EagleCast TV session, keep a short note
              of the device, app, and connection type that worked well. That
              makes future support, renewals, and household setup changes much
              easier to manage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResellerCtaSection() {
  const points = [
    "Customer onboarding",
    "Trial workflows",
    "Renewal support",
    "Device guidance",
  ] as const;

  return (
    <section id="reseller" className="bg-canvas">
      <div className="site-container section-pad">
        <div className="rounded-lg border border-brand/15 bg-[#EFF6FF] p-6 shadow-soft md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
                EagleCast TV Reseller
              </p>
              <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-tight tracking-tight text-ink">
                Build your IPTV business with a cleaner workflow
              </h2>
              <p className="mt-4 text-base leading-7 text-[#475569] sm:text-lg">
                Use a polished streaming brand foundation for trials, renewals,
                setup questions, and customer onboarding.
              </p>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                The EagleCast TV reseller flow is designed for people who need a
                cleaner process around customer communication rather than vague
                promises. That includes explaining device compatibility, helping
                new users begin with a trial, guiding them toward the right
                setup article, and keeping renewals and portal questions inside
                a more organized support path.
              </p>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                For teams handling multiple users, that structure can make the
                difference between reactive troubleshooting and a repeatable
                onboarding routine. The goal is to help resellers present
                EagleCast TV more clearly, support customers more consistently,
                and reduce avoidable setup confusion from the start.
              </p>
              <Link href="/reseller" className="btn-secondary mt-8">
                <BriefcaseBusiness size={18} aria-hidden="true" />
                Explore Reseller
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {points.map((point, index) => (
                <div key={point} className="border-t border-line pt-5">
                  <p className="text-sm font-black text-brand-strong">
                    0{index + 1}
                  </p>
                  <p className="mt-3 font-bold text-ink">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GuidesSection() {
  return (
    <section className="bg-canvas-alt">
      <div className="site-container section-pad">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
              EagleCast TV Guides & Resources
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-tight tracking-tight text-ink">
              Popular EagleCast TV setup guides
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              These guides answer the questions most viewers ask before or just
              after starting with EagleCast TV: what IPTV is, how it compares
              with cable, which devices are easiest to use, how to set up a
              Smart TV, and what to check when buffering interrupts playback.
              They are written to help with real viewing decisions, not just
              search terms.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-bold text-brand-strong hover:text-brand"
          >
            View all guides
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {blogPosts.slice(0, 5).map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-lg border border-line bg-panel shadow-card transition hover:border-line-strong hover:shadow-soft"
            >
              <div className="relative aspect-[16/9] bg-panel">
                <Image
                  src={post.featuredImage.src}
                  alt={post.featuredImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-white/10" />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">
                  {post.category} · {post.readingTime}
                </p>
                <h3 className="mt-3 line-clamp-2 text-lg font-black leading-6 text-ink">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-subtle">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-strong hover:text-brand"
                >
                  Read Guide
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
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
            Helpful Answers
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-tight tracking-tight text-ink">
            EagleCast TV IPTV FAQ
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            Quick answers about IPTV streaming, apps, devices, trials, playback,
            packages, support, and reseller options.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            This EagleCast TV FAQ covers the questions people usually ask while
            comparing the service, testing a trial, setting up a device,
            troubleshooting internet issues, or deciding whether reseller
            support fits their workflow.
          </p>
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

export function TrialFlowSection() {
  return (
    <section id="trial" className="bg-canvas-alt">
      <div className="site-container py-12">
        <div className="grid gap-6 rounded-lg border border-line bg-panel p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
              EagleCast TV Get Trial
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-ink">
              Try EagleCast TV before you subscribe.
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink-muted">
              Send your device and viewing priorities so support can guide the
              setup path.
            </p>
          </div>
          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Get Trial
          </a>
        </div>
      </div>
    </section>
  );
}

export function FinalConversionCta() {
  return (
    <section className="bg-canvas-alt">
      <div className="site-container py-14">
        <div className="rounded-lg border border-line bg-panel p-6 text-center md:p-10">
          <p className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            <ShieldCheck size={16} aria-hidden="true" />
            Trial-first setup
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-ink sm:text-4xl">
            Ready to test EagleCast TV on your screen?
          </h2>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Get Trial
            </a>
            <Link href="/#packages" className="btn-secondary">
              <CircleDollarSign size={18} aria-hidden="true" />
              Compare Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
