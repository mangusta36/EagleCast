export interface TutorialItem {
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  metaDescription: string;
  category: string;
  publishedAt: string;
  readingTime: string;
}

export const tutorials: TutorialItem[] = [
  {
    slug: "diy-troubleshooting-guide",
    title: "DIY Troubleshooting Guide",
    seoTitle: "IPTV Troubleshooting Guide | EagleCast TV",
    excerpt:
      "A practical overview of the common issues customers encounter and the support steps EagleCast TV recommends for a smoother experience.",
    metaDescription:
      "Troubleshoot common EagleCast TV issues by identifying your device and problem, sharing useful account context, contacting support and reviewing the trial.",
    category: "Support",
    publishedAt: "October 3, 2025",
    readingTime: "4 min read",
  },
  {
    slug: "getting-started-with-eaglecast-tv",
    title: "Getting Started with EagleCast TV",
    seoTitle: "Getting Started with EagleCast TV: IPTV Setup",
    excerpt:
      "Learn how to begin with the trial, choose a plan, and prepare for a premium streaming experience on supported devices.",
    metaDescription:
      "Get started with EagleCast TV by requesting a trial, choosing a supported device, reviewing setup guidance and comparing plan terms after testing.",
    category: "Getting Started",
    publishedAt: "September 8, 2025",
    readingTime: "5 min read",
  },
  {
    slug: "catchup-and-replay-explained",
    title: "Catchup and Replay Explained",
    seoTitle: "IPTV Catch-Up and Replay Guide | EagleCast TV",
    excerpt:
      "See how EagleCast TV brings back missed moments and helps viewers enjoy flexible entertainment across live TV and sports.",
    metaDescription:
      "Understand EagleCast TV catch-up and replay, how the feature fits with live TV and sports, what access includes and where to get device-specific support.",
    category: "Features",
    publishedAt: "August 14, 2025",
    readingTime: "3 min read",
  },
] as const;
