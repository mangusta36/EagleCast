import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { SITE_URL } from "@/data/seo";
import { tutorials } from "@/data/tutorials";

const routes = [
  "/",
  "/free-trial",
  "/about",
  "/services",
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
  const tutorialRoutes = tutorials.map(({ slug }) => `/tutorials/${slug}`);
  const blogRoutes = blogPosts.map(({ slug }) => `/blog/${slug}`);

  return [...routes, ...tutorialRoutes, ...blogRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
