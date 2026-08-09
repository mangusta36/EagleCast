import { ArticleCard } from "@/components/sections/article-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "IPTV Guides, Setup Help & Streaming Advice | eaglecast",
  description:
    "Explore eaglecast guides covering IPTV basics, setup, devices, troubleshooting, streaming quality, buying advice, and reseller topics.",
  pathname: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <section className="bg-canvas">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <Eyebrow>eaglecast guides</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              IPTV Guides, Setup Help &amp; Streaming Advice
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
              eaglecast publishes practical IPTV guides for understanding the
              technology, choosing devices, setting up apps, improving streaming
              quality, and making smarter purchase decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-canvas-alt">
        <div className="site-container section-pad">
          <div className="mb-8 flex items-center justify-between gap-4">
            <Eyebrow>Pillar article</Eyebrow>
            <span className="text-xs font-medium text-ink-subtle">
              Start with the essentials
            </span>
          </div>
          <ArticleCard item={featured} type="blog" horizontal />
        </div>
      </section>

      <section className="bg-canvas">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="Editorial archive"
            title="More eaglecast blog guides"
            description="Read the rest of the cornerstone collection for setup, troubleshooting, device comparisons, streaming quality, provider research, and reseller topics."
          />
          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((post) => (
              <ArticleCard key={post.slug} item={post} type="blog" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
