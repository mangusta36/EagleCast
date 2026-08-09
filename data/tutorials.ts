export interface TutorialItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
}

export const tutorials: TutorialItem[] = [
  {
    slug: "diy-troubleshooting-guide",
    title: "DIY Troubleshooting Guide",
    excerpt:
      "A practical overview of the common issues customers encounter and the support steps eaglecast recommends for a smoother experience.",
    category: "Support",
    publishedAt: "October 3, 2025",
    readingTime: "4 min read",
  },
  {
    slug: "getting-started-with-eaglecast-tv",
    title: "Getting Started with eaglecast",
    excerpt:
      "Learn how to begin with the free trial, choose a plan, and prepare for a premium streaming experience on supported devices.",
    category: "Getting Started",
    publishedAt: "September 8, 2025",
    readingTime: "5 min read",
  },
  {
    slug: "catchup-and-replay-explained",
    title: "Catchup and Replay Explained",
    excerpt:
      "See how eaglecast brings back missed moments and helps viewers enjoy flexible entertainment across live TV and sports.",
    category: "Features",
    publishedAt: "August 14, 2025",
    readingTime: "3 min read",
  },
] as const;
