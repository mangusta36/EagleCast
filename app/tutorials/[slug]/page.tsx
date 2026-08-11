import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
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
      id: "describe-the-issue",
      title: "Describe the issue with useful context",
      paragraphs: [
        "Start by identifying the device you are using and whether the problem concerns setup, billing, or a technical issue. If you have an order or account reference, include it when you contact support.",
      ],
      bullets: [
        "Name the device type",
        "Describe what you need help with",
        "Include an order or account reference when available",
      ],
    },
    {
      id: "support-options",
      title: "Use the published support options",
      paragraphs: [
        "EagleCast TV lists support as available 24/7 for setup, billing, and technical assistance. The contact page brings the support email and message form together.",
      ],
    },
    {
      id: "trial-check",
      title: "Review the service during the trial",
      paragraphs: [
        "The EagleCast TV trial gives you access to the full package before choosing a paid term. Use it to review EagleCast TV on the screen you expect to use most often.",
      ],
    },
  ],
  "getting-started-with-eaglecast-tv": [
    {
      id: "request-trial",
      title: "Begin with the EagleCast TV trial",
      paragraphs: [
        "Request trial access from the EagleCast TV support team before choosing a paid plan. The trial covers the full package, including live TV, sports, movies, catch-up, and multi-screen viewing.",
      ],
    },
    {
      id: "choose-device",
      title: "Choose the screen you want to try first",
      paragraphs: [
        "The supported-device list includes smart TVs, Android and iOS devices, Fire TV, computers, and tablets. Include your preferred device when requesting access so the team can provide relevant setup guidance.",
      ],
    },
    {
      id: "compare-terms",
      title: "Compare terms after the trial",
      paragraphs: [
        "Published access terms cover one month, three months, one year, and two years. Every listed plan includes the same core features and three connections.",
        "Paid terms use one-time payments and do not renew automatically.",
      ],
    },
  ],
  "catchup-and-replay-explained": [
    {
      id: "what-it-does",
      title: "What catch-up and replay add",
      paragraphs: [
        "EagleCast TV lists catch-up and replay access for up to two days. The feature is intended for returning to content you missed instead of relying only on the live moment.",
      ],
    },
    {
      id: "where-it-fits",
      title: "Where the feature fits in the service",
      paragraphs: [
        "Catch-up appears alongside live TV with EPG, sports and PPV, movies and series, and multi-screen access in the full EagleCast TV package. It is listed as included across the published plan terms.",
      ],
    },
    {
      id: "need-help",
      title: "Get help with a specific device",
      paragraphs: [
        "For setup or technical questions about a supported screen, use the EagleCast TV contact page. Support is listed as available 24/7.",
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

  return (
    <article className="bg-canvas">
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
              {tutorial.readingTime} <span aria-hidden="true">·</span>{" "}
              {tutorial.publishedAt}
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
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-brand pl-4 text-sm font-medium text-ink"
                      >
                        {item}
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
