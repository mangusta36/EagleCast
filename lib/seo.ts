import type { Metadata } from "next";
import { SITE_URL } from "@/data/seo";
import { buildVerification } from "@/components/seo/analytics-scripts";

const DEFAULT_TITLE =
  "EagleCast TV | IPTV Streaming, Live TV, Sports & Entertainment";
const DEFAULT_DESCRIPTION =
  "Explore EagleCast TV for live TV, sports, movies, supported devices, and a practical trial path before you choose a longer subscription.";

interface MetadataOptions {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildMetadata(options: MetadataOptions = {}): Metadata {
  const {
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    pathname = "/",
    image = "/images/og-default.webp",
    openGraphType = "website",
    publishedTime,
    modifiedTime,
  } = options;
  const canonical =
    pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
  const openGraphImage =
    image === "/images/og-default.webp"
      ? {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        }
      : {
          url: image,
          alt: title,
        };
  const openGraph =
    openGraphType === "article"
      ? {
          title,
          description,
          url: canonical,
          siteName: "EagleCast TV",
          images: [openGraphImage],
          type: "article" as const,
          publishedTime,
          modifiedTime,
        }
      : {
          title,
          description,
          url: canonical,
          siteName: "EagleCast TV",
          images: [openGraphImage],
          type: "website" as const,
        };

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    verification: buildVerification(),
    alternates: {
      canonical,
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
