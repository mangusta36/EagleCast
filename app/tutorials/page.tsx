import { ArticleCard } from "@/components/sections/article-card";
import { BreadcrumbJsonLd } from "@/components/seo/page-json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { tutorials } from "@/data/tutorials";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "EagleCast TV IPTV Tutorials & Setup Guides",
  description:
    "Browse EagleCast TV IPTV tutorials for getting started, troubleshooting common streaming issues, using catch-up and replay, and finding setup support.",
  pathname: "/tutorials",
});

const deviceGuides = [
  {
    title: "Smart TV setup",
    description:
      "Prepare the television, choose a compatible player, enter details safely, and test guide and playback behavior.",
    href: "/blog/how-to-set-up-iptv-smart-tv",
  },
  {
    title: "Fire TV and Firestick setup",
    description:
      "Check storage, network quality, player setup, remote navigation, and common Fire TV performance issues.",
    href: "/blog/how-to-set-up-iptv-fire-tv",
  },
  {
    title: "iPhone, iPad, and Apple TV setup",
    description:
      "Review Apple-platform app selection, account entry, playback testing, and device-specific troubleshooting.",
    href: "/blog/how-to-set-up-iptv-iphone-ipad-apple-tv",
  },
  {
    title: "Choose an IPTV player",
    description:
      "Compare player applications by supported platform, guide workflow, remote use, and account setup method.",
    href: "/blog/best-iptv-apps-comparison-tivimate-smarters-xciptv",
  },
] as const;

export default function TutorialsPage() {
  const [featured, ...rest] = tutorials;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Tutorials", item: "/tutorials" },
        ]}
      />
      <PageHero
        eyebrow="EagleCast TV guides"
        title="Practical reading for getting started with EagleCast TV"
        description="Review setup guidance for EagleCast TV, then return to the main service overview when you are ready to compare plans or request a trial."
      >
        <ButtonLink href="/free-trial">Get EagleCast TV trial</ButtonLink>
        <ButtonLink href="/contact" variant="outlineLight">
          Contact support
        </ButtonLink>
      </PageHero>

      <section className="bg-canvas">
        <div className="site-container section-pad">
          <div className="mb-8 flex items-center justify-between gap-4">
            <Eyebrow>Featured guide</Eyebrow>
            <span className="text-xs text-ink-subtle">Support library</span>
          </div>
          <ArticleCard item={featured} type="tutorial" horizontal />
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="Device setup"
            title="Choose the guide for your screen"
            description="Start with the platform you plan to use. Player applications provide the viewing interface; EagleCast TV provides the authorized service details and account support."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {deviceGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-lg border border-line bg-canvas p-6 shadow-sm transition hover:border-brand/45 hover:shadow-soft"
              >
                <h2 className="text-xl font-semibold text-ink transition-colors group-hover:text-brand">
                  {guide.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink-muted">
                  {guide.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-brand">
                  Open setup guide
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas-alt">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="More guides"
            title="Explore the EagleCast TV support library"
            description="Read the remaining guides about initial access and the viewing features listed by EagleCast TV."
          />
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-muted">
            New to the service? Start with the{" "}
            <Link
              href="/"
              className="font-semibold text-brand hover:text-brand-strong"
            >
              EagleCast TV homepage
            </Link>{" "}
            for the commercial overview, supported devices, trial path, and
            subscription links.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
            {rest.map((tutorial) => (
              <ArticleCard
                key={tutorial.slug}
                item={tutorial}
                type="tutorial"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
