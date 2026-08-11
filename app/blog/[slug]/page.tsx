import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ArticleInlineCta } from "@/components/blog/article-inline-cta";
import { renderRichText } from "@/components/blog/rich-text";
import { ArticleCard } from "@/components/sections/article-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { blogPosts, getBlogPost } from "@/data/blog";
import { SITE_URL } from "@/data/seo";
import { buildMetadata } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: `${post.seoTitle} | EagleCast TV`,
    description: post.metaDescription,
    pathname: `/blog/${post.slug}`,
    image: post.featuredImage.src,
  });
}

function getArticleJsonLd(slug: string) {
  const post = getBlogPost(slug);

  if (!post) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.featuredImage.src}`,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "EagleCast TV",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    articleSection: post.category,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedSlugs
    .map((relatedSlug) => getBlogPost(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const jsonLd = getArticleJsonLd(post.slug);

  return (
    <article className="bg-canvas">
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}

      <header className="border-b border-line bg-canvas-alt">
        <div className="site-container py-10 sm:py-12 lg:py-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-ink-subtle"
          >
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/blog" className="transition-colors hover:text-ink">
              Blog
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-ink">{post.title}</span>
          </nav>

          <div className="mt-8 max-w-4xl">
            <Eyebrow>{post.category}</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.8rem]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-ink-muted sm:text-lg">
              {post.deck}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-subtle">
              <span>Updated: {post.updatedAt}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-lg border border-line bg-panel shadow-soft">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.featuredImage.src}
                alt={post.featuredImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="site-container grid gap-12 py-12 sm:py-14 lg:grid-cols-[15rem_minmax(0,50rem)] lg:justify-center lg:gap-16 lg:py-16">
        <aside className="hidden lg:block">
          <nav
            aria-label="Article contents"
            className="sticky top-28 rounded-lg border border-line bg-panel p-5 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
              On this page
            </p>
            <ol className="mt-4 space-y-3">
              {post.sections.map((section) => (
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
          </nav>
        </aside>

        <div className="min-w-0">
          <details className="rounded-lg border border-line bg-panel p-5 shadow-soft lg:hidden">
            <summary className="cursor-pointer text-sm font-semibold text-ink">
              On this page
            </summary>
            <ol className="mt-4 space-y-3">
              {post.sections.map((section) => (
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

          <div className="mt-8 rounded-lg border border-line bg-[#EFF6FF] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              Quick answer
            </p>
            <p className="mt-3 text-base leading-8 text-ink">
              {post.quickAnswer}
            </p>
          </div>

          <div className="mt-8 space-y-5 border-b border-line pb-8 text-base leading-8 text-ink-muted">
            {post.intro.map((paragraph) => (
              <p key={paragraph}>{renderRichText(paragraph)}</p>
            ))}
          </div>

          <div className="mt-10 space-y-12">
            {post.sections.map((section) => (
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
                {section.table ? (
                  <div className="mt-8 overflow-x-auto rounded-lg border border-line">
                    <table className="min-w-full divide-y divide-line text-left text-sm">
                      {section.table.caption ? (
                        <caption className="border-b border-line bg-canvas-alt px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                          {section.table.caption}
                        </caption>
                      ) : null}
                      <thead className="bg-canvas-alt text-ink">
                        <tr>
                          {section.table.columns.map((column) => (
                            <th
                              key={column}
                              className="px-4 py-3 font-semibold"
                            >
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line">
                        {section.table.rows.map((row) => (
                          <tr key={row.join("-")}>
                            {row.map((cell) => (
                              <td
                                key={cell}
                                className="px-4 py-3 align-top text-ink-muted"
                              >
                                {renderRichText(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
                {section.cta ? (
                  <ArticleInlineCta
                    variant={section.cta.variant}
                    title={section.cta.title}
                    description={section.cta.description}
                    href={section.cta.href}
                    label={section.cta.label}
                  />
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-14 border-t border-line pt-10">
            <h2 className="text-2xl font-semibold text-ink">FAQ</h2>
            <div className="mt-6 divide-y divide-line rounded-lg border border-line">
              {post.faqs.map((faq) => (
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
          </section>

          {post.sources?.length ? (
            <section className="mt-14 border-t border-line pt-10">
              <h2 className="text-2xl font-semibold text-ink">
                Sources &amp; further reading
              </h2>
              <ul className="mt-6 space-y-3">
                {post.sources.map((source) => (
                  <li
                    key={source.href}
                    className="border-l-2 border-brand pl-4 text-sm leading-7 text-ink-muted"
                  >
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand transition-colors hover:text-brand-strong"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="mt-16 border-t border-line pt-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  Related Guides
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-ink">
                  Keep reading
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
              >
                All blog articles
              </Link>
            </div>
            <div className="mt-8 grid gap-10 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <ArticleCard
                  key={relatedPost.slug}
                  item={relatedPost}
                  type="blog"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
