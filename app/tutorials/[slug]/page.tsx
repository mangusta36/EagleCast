import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { renderRichText } from "@/components/blog/rich-text";
import { BreadcrumbJsonLd } from "@/components/seo/page-json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SITE_URL } from "@/data/seo";
import { tutorials } from "@/data/tutorials";
import { buildMetadata } from "@/lib/seo";

interface TutorialPageProps {
  params: Promise<{ slug: string }>;
}

interface GuideSection {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
}

const guideSections: Record<string, readonly GuideSection[]> = {
  "diy-troubleshooting-guide": [
    {
      id: "identify-the-symptom",
      title: "Identify which part of the setup is failing",
      paragraphs: [
        "Start by putting the symptom into one category: the app will not open, login is rejected, the channel list is empty, the guide is missing, one stream fails, or playback repeatedly buffers. These symptoms can look related while pointing to different layers of the setup.",
        "Write down the device model, app name, exact message, and when the problem started. Note whether it affects one item or everything and whether another app on the same device still reaches the internet. This short description prevents random changes and gives support a useful starting point.",
      ],
      bullets: [
        "App does not open: check device storage, updates, and a full restart",
        "Login fails: verify the intended player and re-enter details exactly",
        "Guide is empty: confirm playback first, then allow the EPG to refresh",
        "Playback buffers: compare streams, devices, and network paths",
      ],
    },
    {
      id: "basic-checks",
      title: "Run a controlled five-minute check",
      paragraphs: [
        "Close the app, restart the device from its system menu, and confirm that another internet service works on that same device. Reopen the player and test one known item plus one different item. Change only one variable at a time so each result tells you something.",
        "If possible, compare the same account on another supported device or compare Wi-Fi with a wired connection. Do not reinstall the app or erase its data until you have saved the authorized setup details, because clearing app data can remove them.",
      ],
    },
    {
      id: "login-and-account",
      title: "Separate player, login, and account problems",
      paragraphs: [
        "An IPTV player is the application that displays the service; it does not create or recover the subscription itself. If the app opens but rejects the supplied details, confirm that you are using the setup method intended for that player and that no spaces were added while copying.",
        "Use [EagleCast TV login help](/login-help) when credentials are missing or rejected. Use [portal help](/portal-help) when a compatible box or player specifically asks for portal information. Do not post usernames, passwords, playlist URLs, or portal addresses in public forums or screenshots.",
      ],
    },
    {
      id: "playback-and-network",
      title: "Isolate playback and network symptoms",
      paragraphs: [
        "If menus and login work but video stalls, compare more than one stream and note whether the problem follows one item, one device, one room, or the whole setup. A fast speed test does not rule out weak Wi-Fi, packet loss, congestion, or an overloaded device.",
        "Use the [buffering diagnosis guide](/blog/fix-iptv-buffering) for repeated pauses and the [internet-speed guide](/blog/internet-speed-for-iptv) for household bandwidth and Wi-Fi planning. For a named authorization, timeout, or playback message, follow the [error-specific troubleshooting guide](/blog/ultimate-iptv-error-fixing-troubleshooting-guide).",
      ],
    },
    {
      id: "guide-and-catchup",
      title: "Check EPG, catch-up, and time settings separately",
      paragraphs: [
        "When live playback works but the guide is blank or shifted, refresh the EPG inside the player, confirm the device time zone, and allow the guide data to finish loading. A guide problem does not automatically mean the account or stream is unavailable.",
        "Catch-up depends on supported channels, guide data, and a compatible player. Review [how catch-up and replay work](/tutorials/catchup-and-replay-explained) and the [IPTV EPG guide](/blog/what-is-iptv-epg) before changing unrelated login or network settings.",
      ],
    },
    {
      id: "contact-support",
      title: "Send support a useful diagnostic summary",
      paragraphs: [
        "If the issue remains, use the published support route and share the evidence you collected. Include the device and app, the exact symptom, when it began, whether it affects one item or many, the network type, and which controlled checks changed the result.",
        "Do not include passwords or full private setup URLs in the first message. Support can request account-specific information through the appropriate channel if it is needed.",
      ],
      bullets: [
        "Device model and operating system",
        "Player name and version when available",
        "Exact error text or a redacted screenshot",
        "Wi-Fi or Ethernet and whether another device behaves differently",
        "Checks already completed and their results",
      ],
    },
  ],
  "getting-started-with-eaglecast-tv": [
    {
      id: "prepare",
      title: "Prepare the device and network first",
      paragraphs: [
        "Choose the first screen you want to test and identify its model, operating system, and connection type. Confirm that the device can install a compatible player from its official app source when one is available, and update the device before entering any account details.",
        "Test in the room and on the network you expect to use most. A setup that works next to the router may behave differently behind a television in another room.",
      ],
      bullets: [
        "Device model and operating system",
        "Available storage and current system updates",
        "Stable Wi-Fi in the viewing room or an Ethernet option",
        "A secure place to keep the setup details supplied to you",
      ],
    },
    {
      id: "request-trial",
      title: "Request a trial for the device you will actually use",
      paragraphs: [
        "Use the [trial request page](/free-trial) and include the device you want to test first. That detail helps support point you toward the relevant player and setup method without assuming that every app uses the same fields.",
        "A trial is most useful when you test normal viewing rather than only confirming that one stream opens. Check app navigation, guide loading where supported, playback stability, and how the setup behaves after you close and reopen the player.",
      ],
    },
    {
      id: "choose-setup-guide",
      title: "Follow the setup path for your platform",
      paragraphs: [
        "Use the [Smart TV setup guide](/blog/how-to-set-up-iptv-smart-tv) for built-in television platforms, the [Fire TV guide](/blog/how-to-set-up-iptv-fire-tv) for Firestick and Fire TV devices, or the [Apple device guide](/blog/how-to-set-up-iptv-iphone-ipad-apple-tv) for iPhone, iPad, and Apple TV. If you have not selected a player, compare [IPTV player applications](/blog/best-iptv-apps-comparison-tivimate-smarters-xciptv) by platform and workflow.",
        "The player application and the subscription provider have different roles. The player handles the interface, login fields, guide, and playback controls; EagleCast TV supplies the authorized service details and account support. Installing a player alone does not create a subscription.",
      ],
    },
    {
      id: "protect-details",
      title: "Enter and protect setup details carefully",
      paragraphs: [
        "Enter the supplied details exactly as provided and only in the intended compatible player. Avoid copying private usernames, passwords, playlist links, or portal addresses into public posts, untrusted websites, or screenshots that other people can read.",
        "If details are missing or rejected, use [login help](/login-help). If the player specifically requests portal information, use [portal help](/portal-help). Do not guess server values or reuse details found online.",
      ],
    },
    {
      id: "verify-setup",
      title: "Verify the setup before comparing terms",
      paragraphs: [
        "Confirm that the player reopens normally, multiple items load, the guide is readable where supported, and the device remains responsive during a realistic session. If playback pauses, compare another stream and network path before deciding whether the service, player, device, or home connection is responsible.",
      ],
      bullets: [
        "Open and reopen the player",
        "Test more than one live item and one on-demand item when available",
        "Check guide loading and device time-zone alignment",
        "Test under normal household network use",
        "Record any exact error before contacting support",
      ],
    },
    {
      id: "compare-terms",
      title: "Compare the current terms after testing",
      paragraphs: [
        "The current pricing page lists 3-, 6-, 12-, and 24-month terms. The published plans use one active subscription line, with extra-screen options available through support. Review the [current plan details](/pricing) rather than relying on an older message or saved screenshot.",
        "Paid terms use one-time payments and do not renew automatically.",
      ],
    },
  ],
  "catchup-and-replay-explained": [
    {
      id: "what-it-does",
      title: "What catch-up and replay add",
      paragraphs: [
        "EagleCast TV lists catch-up and replay access where the channel, guide data, and player support it. The feature is intended for returning to content you missed instead of relying only on the live moment.",
        "Catch-up is not the same as recording a program on your own device. It uses previously available programming associated with supported channel and guide data, while local recording depends on the player, device, storage, and account permissions.",
      ],
    },
    {
      id: "availability",
      title: "Why availability differs by channel and player",
      paragraphs: [
        "A program needs supported replay availability, usable guide data, and a compatible player interface before you can open it from the past schedule. Do not assume that every channel or every earlier guide listing is replayable.",
        "In a compatible player, look for a clock, replay, archive, or catch-up marker beside earlier programs. The exact symbol and navigation path belong to the player application, so they can differ across Smart TV, Fire TV, mobile, and set-top-box interfaces.",
      ],
    },
    {
      id: "use-catchup",
      title: "A practical catch-up check",
      paragraphs: [
        "Open the guide, move backward to an earlier program on a channel that shows replay availability, and select the program from its guide entry. Confirm that the program starts near the expected point and that normal pause or seek controls behave as your player supports them.",
      ],
      bullets: [
        "Confirm live playback works first",
        "Refresh the EPG and verify the device time zone",
        "Choose a listing that visibly shows replay availability",
        "Test a second supported listing if the first one fails",
      ],
    },
    {
      id: "troubleshoot",
      title: "Troubleshoot missing or incorrect replay",
      paragraphs: [
        "If the guide is empty or shifted, fix the guide and time-zone issue before treating catch-up as unavailable. The [IPTV EPG guide](/blog/what-is-iptv-epg) explains guide refreshes, missing data, and schedule alignment.",
        "If live playback works and a listing shows replay availability but the earlier program does not open, restart the player, refresh its guide data, and test another eligible listing. Avoid clearing app data until you have securely saved the authorized setup details.",
      ],
    },
    {
      id: "need-help",
      title: "Give support the details needed to investigate",
      paragraphs: [
        "For a catch-up question, use the [EagleCast TV contact page](/contact) and include the device, player, channel, program title, date, and time shown in the guide. Say whether live playback works and whether the replay marker appears. That separates a guide-data problem from a playback or account problem.",
      ],
    },
  ],
};

export function generateStaticParams() {
  return tutorials.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: TutorialPageProps) {
  const { slug } = await params;
  const tutorial = tutorials.find((item) => item.slug === slug);

  if (!tutorial) {
    return {};
  }

  return buildMetadata({
    title: tutorial.seoTitle,
    description: tutorial.metaDescription,
    pathname: `/tutorials/${tutorial.slug}`,
    openGraphType: "article",
    publishedTime: new Date(tutorial.publishedAt).toISOString(),
    modifiedTime: new Date(tutorial.updatedAt).toISOString(),
  });
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { slug } = await params;
  const tutorial = tutorials.find((item) => item.slug === slug);

  if (!tutorial) {
    notFound();
  }

  const sections = guideSections[tutorial.slug] ?? [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [tutorial.excerpt],
    },
  ];
  const supportGuide = tutorial.category === "Support";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: tutorial.title,
    description: tutorial.metaDescription,
    datePublished: new Date(tutorial.publishedAt).toISOString(),
    dateModified: new Date(tutorial.updatedAt).toISOString(),
    mainEntityOfPage: `${SITE_URL}/tutorials/${tutorial.slug}`,
    articleSection: tutorial.category,
  };

  return (
    <article className="bg-canvas">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Tutorials", item: "/tutorials" },
          { name: tutorial.title, item: `/tutorials/${tutorial.slug}` },
        ]}
      />
      <header className="relative isolate overflow-hidden border-b border-line bg-canvas-alt">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-brand/10 bg-white/45"
        />
        <div className="site-container relative py-12 sm:py-16 lg:py-20">
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All guides
          </Link>
          <div className="mt-10 max-w-4xl">
            <Eyebrow>{tutorial.category}</Eyebrow>
            <h1 className="mt-5 max-w-[22ch] text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.5rem]">
              {tutorial.title}
            </h1>
            <p className="mt-6 text-sm text-ink-subtle">
              Published {tutorial.publishedAt} <span aria-hidden="true">·</span>{" "}
              Updated {tutorial.updatedAt} <span aria-hidden="true">·</span>{" "}
              {tutorial.readingTime}
            </p>
          </div>
        </div>
      </header>

      <div className="site-container section-pad grid gap-12 lg:grid-cols-[13rem_minmax(0,45rem)] lg:justify-center lg:gap-16">
        <aside className="hidden lg:block">
          <nav
            aria-label="Guide contents"
            className="sticky top-28 border-l border-line pl-5"
          >
            <p className="text-xs font-semibold text-ink">In this guide</p>
            <ol className="mt-4 space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-xs leading-5 text-ink-muted transition-colors hover:text-brand"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="min-w-0">
          <details className="mb-8 rounded-lg border border-line bg-panel p-5 shadow-soft lg:hidden">
            <summary className="cursor-pointer text-sm font-semibold text-ink">
              In this guide
            </summary>
            <ol className="mt-4 space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm leading-6 text-ink-muted transition-colors hover:text-brand"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </details>

          <p className="border-b border-line pb-8 font-display text-xl leading-8 text-ink sm:text-2xl sm:leading-9">
            {tutorial.excerpt}
          </p>

          <div className="mt-10 space-y-12">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <h2 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-ink-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{renderRichText(paragraph)}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-brand pl-4 text-sm font-medium text-ink"
                      >
                        {renderRichText(item)}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-5 border-y border-line py-7 sm:flex-row sm:items-center">
            <div className="max-w-md">
              <h2 className="text-xl font-semibold text-ink">
                {supportGuide
                  ? "Need help with your setup?"
                  : "Ready to see the service on your screen?"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                {supportGuide
                  ? "Support is available for setup, billing, and technical questions."
                  : "Request an EagleCast TV trial before choosing a paid term."}
              </p>
            </div>
            <ButtonLink
              href={supportGuide ? "/contact" : "/free-trial"}
              withArrow
            >
              {supportGuide ? "Contact support" : "Get Trial"}
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}
