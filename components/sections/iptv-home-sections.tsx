import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  MessageCircle,
  Zap,
} from "lucide-react";
import { blogPosts } from "@/data/blog";
import { contactInfo } from "@/data/contact";
import { PRICING_PLANS } from "@/data/pricing";

const serviceItems = [
  [
    "Live TV Hub",
    "Organized live channel access covering international news, sports, and regional broadcasts with a familiar guide workflow.",
  ],
  [
    "Sports & Events",
    "Prepare for match nights, championship events, and live sports viewing with low-latency server routing.",
  ],
  [
    "Movies & Series",
    "Browse structured Video on Demand (VOD) entertainment libraries complete with poster art, ratings, and episode groupings.",
  ],
  [
    "Replay / VOD",
    "Access time-shifted catch-up television to return to available broadcasts without relying only on the live moment.",
  ],
  [
    "EPG Program Guide",
    "Navigate channels, current showtimes, and upcoming programming with interactive XMLTV guide schedule grids.",
  ],
  [
    "Multi-device Access",
    "Watch on Smart TVs, Android TV, Firestick, iPhone, iPad, Windows PCs, and MAG set-top boxes.",
  ],
  [
    "Reseller Workflows",
    "Manage client account panels, issue trial lines, support renewals, and streamline customer onboarding.",
  ],
  [
    "Setup Support",
    "Get help with app selection, login input, portal activation, network calibration, and troubleshooting.",
  ],
] as const;

const deviceItems = [
  "Smart TV (Samsung/LG)",
  "Android TV / Google TV",
  "Firestick / Fire TV",
  "iPhone / iPad",
  "Windows PC",
  "MAG / Formuler TV Box",
] as const;

const trustItems = [
  [
    "Live + VOD Access",
    "Structured channels and on-demand libraries",
    "text-brand-strong",
  ],
  [
    "Multi-Format Login",
    "Support for Xtream Codes, M3U & MAC Portals",
    "text-gold",
  ],
  [
    "4K-Ready Playback",
    "Where source and device hardware support it",
    "text-brand-strong",
  ],
  [
    "5+ Device Families",
    "Smart TV, mobile, desktop, sticks, and boxes",
    "text-emerald",
  ],
] as const;

const faqItems = [
  [
    "Can I try EagleCast TV before choosing a package?",
    "Yes. Request an EagleCast TV trial so our support team can confirm your preferred player application, device compatibility, and home internet connection before you select an official subscription plan.",
  ],
  [
    "Which devices work with EagleCast TV IPTV?",
    "EagleCast TV supports common IPTV workflows across Smart TVs (Samsung Tizen, LG webOS, Android TV), Amazon Firestick, Android devices, iOS (iPhone/iPad), Windows computers, and MAG set-top boxes.",
  ],
  [
    "What IPTV connection formats are supported by EagleCast TV?",
    "EagleCast TV subscription lines support multi-format credential logins including Xtream Codes API (server URL, username, password), custom M3U/M3U8 playlist URLs, and Stalker MAC address portal links.",
  ],
  [
    "How does setup support work?",
    "Share your device model, streaming application, and viewing priorities with support. Our technical team will guide you through app installation, credential entry, guide mapping, and player buffer settings.",
  ],
  [
    "Does EagleCast TV support 4K streaming?",
    "EagleCast TV is 4K-ready where channel source availability, device GPU decoding, application settings, and home network throughput (25+ Mbps) support higher-resolution video playback.",
  ],
  [
    "What should I do if playback buffers or freezes?",
    "First verify your home internet speed and latency. Use 5GHz Wi-Fi or Cat6 Ethernet, set custom public DNS servers (such as Cloudflare 1.1.1.1), enable hardware GPU decoding in your app, and follow our troubleshooting guide.",
  ],
  [
    "How many devices are included per subscription?",
    "Standard EagleCast TV packages include one active device connection per subscription line. Contact support if your household requires multi-screen options before purchase.",
  ],
  [
    "Does EagleCast TV offer reseller options?",
    "Yes. EagleCast TV provides reseller-friendly panel workflows for customer onboarding, trial generation, line renewals, and setup assistance.",
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
            Choose the plan that fits your viewing routine
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
            Compare available EagleCast TV subscription packages, then test your
            device setup with a trial before selecting your plan.
          </p>
          <p className="mt-3 text-sm leading-6 text-ink-subtle">
            All plans include multi-format credential support (Xtream Codes API,
            M3U playlists, MAC Portals), full access to live television and VOD
            libraries, interactive EPG guide data, and direct technical support.
            For custom duration inquiries or multi-screen setups, visit our{" "}
            <Link
              href="/pricing"
              className="text-brand font-semibold hover:text-brand-strong"
            >
              pricing page
            </Link>{" "}
            or contact{" "}
            <Link
              href="/contact"
              className="text-brand font-semibold hover:text-brand-strong"
            >
              EagleCast TV support
            </Link>
            .
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
      "IPTV streaming for live TV channels, sports broadcasts, movies, series, and catch-up viewing.",
    ],
    [
      "Formats",
      "Multi-format accounts supporting Xtream Codes API, M3U/M3U8 playlist URLs, and MAC address portals.",
    ],
    [
      "Devices",
      "Smart TV (Samsung/LG), Android TV, Firestick, iPhone, iPad, Windows PC, and MAG set-top boxes.",
    ],
    [
      "Trial",
      "A trial is available so viewers can test setup, app behavior, and network speeds before purchase.",
    ],
    [
      "Support",
      "Customer support, login assistance, and portal help are accessible via official communication channels.",
    ],
    [
      "Reseller",
      "Reseller panel options are available for account management, trial generation, and client renewals.",
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
              A clear introduction to the EagleCast TV IPTV service
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
              EagleCast TV is a subscription-based Internet Protocol Television
              (IPTV) streaming service built for viewers who want live TV,
              sports events, movies, series, and catch-up entertainment in one
              unified platform. Instead of relying on proprietary cable boxes or
              satellite dish installations, EagleCast TV delivers video streams
              directly over your broadband internet connection to compatible
              applications on the screens you already own.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              Behind the scenes, IP video delivery relies on standardized network
              protocols. EagleCast TV accounts support all major connection
              methods—including dynamic Xtream Codes API database queries, custom
              M3U and M3U8 playlist manifests, and hardware-bound Stalker MAC
              address portals. Understanding how these connection formats work
              helps viewers select the ideal setup for their hardware, as explained
              in our detailed guide to{" "}
              <Link
                href="/blog/iptv-playlist-formats-m3u-xtream-codes-guide"
                className="text-brand font-semibold hover:text-brand-strong"
              >
                IPTV playlist formats
              </Link>
              .
            </p>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              For most households, evaluating a streaming provider requires
              more than browsing a channel list. It involves verifying playback
              stability, electronic program guide (EPG) accuracy, and customer
              support assistance. That is why EagleCast TV provides a trial
              option alongside comprehensive setup guides for{" "}
              <Link
                href="/login-help"
                className="text-brand font-semibold hover:text-brand-strong"
              >
                login help
              </Link>
              ,{" "}
              <Link
                href="/portal-help"
                className="text-brand font-semibold hover:text-brand-strong"
              >
                portal help
              </Link>
              , and{" "}
              <Link
                href="/services"
                className="text-brand font-semibold hover:text-brand-strong"
              >
                service features
              </Link>
              .
            </p>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              Getting started is straightforward when supported by step-by-step documentation. Viewers can explore our comprehensive tutorial on{" "}
              <Link
                href="/tutorials/getting-started-with-eaglecast-tv"
                className="text-brand font-semibold hover:text-brand-strong"
              >
                getting started with EagleCast TV
              </Link>{" "}
              to set up their streaming hardware, or review our{" "}
              <Link
                href="/tutorials/diy-troubleshooting-guide"
                className="text-brand font-semibold hover:text-brand-strong"
              >
                DIY troubleshooting guide
              </Link>{" "}
              for network and buffer optimization.
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
                Get Trial
              </Link>
              <Link
                href="/contact"
                className="text-brand transition-colors hover:text-brand-strong"
              >
                Customer Support
              </Link>
              <Link
                href="/reseller"
                className="text-brand transition-colors hover:text-brand-strong"
              >
                Reseller Options
              </Link>
              <Link
                href="/blog"
                className="text-brand transition-colors hover:text-brand-strong"
              >
                IPTV Guides
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
      "Use an EagleCast TV trial to test your device hardware, streaming app, and home network connection before committing to a package.",
    ],
    [
      "Guided setup support",
      "Our support team assists viewers with app selection, login inputs, portal binding, and buffer settings to eliminate setup friction.",
    ],
    [
      "Watch across your screens",
      "Enjoy a consistent viewing experience across living room Smart TVs, Firesticks, mobile phones, tablets, and desktop computers.",
    ],
    [
      "EPG & Catch-up Replay",
      "Stay connected to your favorite programming with interactive guide schedules and time-shifted catch-up television replay.",
    ],
  ] as const;

  return (
    <section className="bg-canvas">
      <div className="site-container section-pad">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            Why Viewers Choose EagleCast TV
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-tight tracking-tight text-ink">
            A better IPTV experience starts with a better setup
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
            EagleCast TV is designed around transparent plan choices, practical
            setup preparation, multi-format login support, and dedicated guidance
            for every major device family.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            Achieving smooth 4K streaming depends on multiple factors: backend
            server infrastructure, client player app efficiency, local Wi-Fi
            stability, and proper DNS configuration. EagleCast TV helps viewers
            connect all these elements effectively. Learn more about self-service
            troubleshooting in our{" "}
            <Link
              href="/tutorials/diy-troubleshooting-guide"
              className="text-brand font-semibold hover:text-brand-strong"
            >
              DIY troubleshooting guide
            </Link>{" "}
            and discover how time-shifted viewing works in our{" "}
            <Link
              href="/tutorials/catchup-and-replay-explained"
              className="text-brand font-semibold hover:text-brand-strong"
            >
              catchup and replay guide
            </Link>
            .
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
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
            Live TV, sports, movies and catch-up in one service
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">
            EagleCast TV covers the core viewing habits of modern households:
            live channels for everyday watching, sports broadcasts for match
            nights, on-demand video libraries for movies and TV series, and
            time-shifted catch-up television. Consolidating these categories into
            one streamlined IPTV workflow eliminates the need for multiple
            separate streaming subscriptions.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            Whether you are exploring{" "}
            <Link
              href="/blog/what-is-iptv"
              className="text-brand font-semibold hover:text-brand-strong"
            >
              what IPTV is
            </Link>{" "}
            or evaluating{" "}
            <Link
              href="/blog/iptv-vs-cable-streaming"
              className="text-brand font-semibold hover:text-brand-strong"
            >
              IPTV vs cable streaming
            </Link>
            , understanding how channel guides and schedules operate is essential.
            Our comprehensive guide to{" "}
            <Link
              href="/blog/what-is-iptv-epg"
              className="text-brand font-semibold hover:text-brand-strong"
            >
              IPTV EPG
            </Link>{" "}
            explains how program guide schedule grids sync with player apps.
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
            Watch EagleCast TV on the devices you already own
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-muted sm:text-lg">
            Share your device during the trial request so support can recommend the
            ideal application and installation walkthrough.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-muted">
            EagleCast TV supports standard IPTV applications across Smart TVs
            (Samsung Tizen, LG webOS, Android TV), Amazon Firestick / Fire TV
            devices, Android smartphones and tablets, Apple iOS (iPhone & iPad),
            Windows PCs, and MAG set-top boxes. Starting with your existing TV or
            streaming device avoids purchasing unnecessary external hardware.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-muted">
            To choose the best setup for your screen, explore our detailed review of
            the{" "}
            <Link
              href="/blog/best-devices-for-iptv"
              className="text-brand font-semibold hover:text-brand-strong"
            >
              best devices for IPTV
            </Link>
            , follow our step-by-step{" "}
            <Link
              href="/blog/how-to-set-up-iptv-smart-tv"
              className="text-brand font-semibold hover:text-brand-strong"
            >
              Smart TV setup guide
            </Link>
            , or consult our dedicated{" "}
            <Link
              href="/blog/how-to-set-up-iptv-fire-tv"
              className="text-brand font-semibold hover:text-brand-strong"
            >
              Fire TV setup guide
            </Link>
            .
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            {deviceItems.map((device) => (
              <div
                key={device}
                className="rounded-lg border border-line bg-panel px-4 py-3 text-xs font-bold text-ink-muted shadow-sm transition hover:border-brand/45 hover:bg-[#EFF6FF]"
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
      "Choose your primary device",
      "Select the room, television, or mobile screen you use most frequently.",
    ],
    [
      "02",
      "Test EagleCast TV with a trial",
      "Use the trial to verify credential login, guide loading, and stream quality.",
    ],
    [
      "03",
      "Configure player app & network",
      "Follow player setup guidance and optimize 5GHz Wi-Fi or Ethernet settings.",
    ],
    [
      "04",
      "Select a subscription package",
      "Choose the 3, 6, 12, or 24-month package that fits your viewing routine.",
    ],
  ] as const;

  return (
    <section className="bg-canvas-alt">
      <div className="site-container section-pad grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            How EagleCast TV Works
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
              EagleCast TV works best when viewers begin with the device and room
              they actually use most. That keeps your trial testing grounded in
              real-world conditions. Once your player application is installed and
              credentials are entered, test live channel switching, sports broadcasts,
              and guide grids during peak household internet usage hours.
            </p>
            <p>
              Streaming performance depends directly on network infrastructure. A
              stable 4K-ready setup requires consistent download throughput and low
              latency. Review our technical guide on{" "}
              <Link
                href="/blog/internet-speed-for-iptv"
                className="text-brand font-semibold hover:text-brand-strong"
              >
                internet speed for IPTV
              </Link>
              , follow our complete manual to{" "}
              <Link
                href="/blog/how-to-optimize-home-network-for-iptv-streaming"
                className="text-brand font-semibold hover:text-brand-strong"
              >
                optimize your home network
              </Link>
              , and learn how to resolve stream freezing in our{" "}
              <Link
                href="/blog/fix-iptv-buffering"
                className="text-brand font-semibold hover:text-brand-strong"
              >
                IPTV buffering guide
              </Link>
              .
            </p>
            <p>
              After your initial setup is confirmed, save your account details and
              preferred player configuration. This ensures future line renewals, support
              inquiries, and multi-device additions proceed smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResellerCtaSection() {
  const points = [
    "Customer account panels",
    "Trial generation workflows",
    "Subscription renewals",
    "Device setup guidance",
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
                Build your IPTV business with an organized workflow
              </h2>
              <p className="mt-4 text-base leading-7 text-[#475569] sm:text-lg">
                Use a structured streaming brand foundation for customer trials,
                subscription renewals, setup guidance, and account management.
              </p>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                The EagleCast TV reseller program is built for partners who need
                a transparent, reliable framework for managing customer
                accounts. Instead of dealing with ambiguous support lines, our
                reseller panel enables clean customer onboarding, rapid trial
                creation, line management, and structured device setup help.
              </p>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                Whether managing a few client accounts or building a dedicated customer
                base, our reseller tools help you deliver consistent support, guide
                app installations, and handle renewals efficiently.
              </p>
              <Link href="/reseller" className="btn-secondary mt-8">
                <BriefcaseBusiness size={18} aria-hidden="true" />
                Explore Reseller Options
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
              Popular EagleCast TV setup & optimization guides
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              Our educational guides answer key questions about IPTV streaming:
              connection formats (Xtream Codes API, M3U, MAC Portals), home network
              optimization, electronic program guides, Smart TV setup, Firestick
              configuration, and buffer troubleshooting.
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
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.slice(0, 6).map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-lg border border-line bg-panel shadow-card transition hover:border-line-strong hover:shadow-soft flex flex-col"
            >
              <div className="relative aspect-[16/9] bg-panel">
                <Image
                  src={post.featuredImage.src}
                  alt={post.featuredImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-white/10" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">
                  {post.category} · {post.readingTime}
                </p>
                <h3 className="mt-3 line-clamp-2 text-lg font-black leading-6 text-ink">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-subtle flex-1">
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
            Frequently asked questions about IPTV streaming, player applications,
            supported devices, connection formats, trial setup, buffer troubleshooting,
            and reseller options.
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
              Share your device and viewing priorities so support can guide your
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
        <div className="rounded-lg border border-brand/20 bg-panel p-8 text-center shadow-card md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-strong">
            Ready to Start?
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-4xl">
            Stream Live TV, Sports & Entertainment with EagleCast TV
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink-muted">
            Request your trial line today to test setup on your Smart TV,
            Firestick, Android, or set-top box before selecting a package.
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
              href="/#packages"
              className="btn-secondary min-h-12 px-8 text-sm uppercase tracking-wide"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
