import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { SITE_URL } from "@/data/seo";
import { tutorials } from "@/data/tutorials";

const routes = [
  "/",
  "/free-trial",
  "/about",
  "/services",
  "/pricing",
  "/reseller",
  "/contact",
  "/login-help",
  "/portal-help",
  "/faq",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-policy",
  "/tutorials",
  "/blog",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
  const tutorialEntries: MetadataRoute.Sitemap = tutorials.map(
    ({ slug, publishedAt }) => ({
      url: `${SITE_URL}/tutorials/${slug}`,
      lastModified: new Date(publishedAt),
    }),
  );
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(
    ({ slug, updatedAt }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(updatedAt),
    }),
  );

  return [...staticEntries, ...tutorialEntries, ...blogEntries];
}
