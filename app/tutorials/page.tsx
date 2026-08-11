import { ArticleCard } from "@/components/sections/article-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { tutorials } from "@/data/tutorials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV IPTV Tutorials & Setup Guides",
  description:
    "Browse EagleCast TV IPTV tutorials for getting started, troubleshooting common streaming issues, using catch-up and replay, and finding setup support.",
  pathname: "/tutorials",
});

export default function TutorialsPage() {
  const [featured, ...rest] = tutorials;

  return (
    <>
      <PageHero
        eyebrow="Guides and support"
        title="Practical reading for getting started with EagleCast TV"
        description="Review the trial path, supported service features, and the support routes available when you need help."
      >
        <ButtonLink href="/free-trial">Get Trial</ButtonLink>
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

      <section className="bg-canvas-alt">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="More guides"
            title="Explore the support library"
            description="Read the remaining guides about initial access and the viewing features listed by EagleCast TV."
          />
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
