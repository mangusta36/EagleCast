import type { Metadata } from "next";
import { SITE_URL } from "@/data/seo";

const DEFAULT_TITLE =
  "EagleCast TV | IPTV Streaming, Live TV, Sports & Entertainment";
const DEFAULT_DESCRIPTION =
  "Explore EagleCast TV for live TV, sports, movies, supported devices, and a practical trial path before you choose a longer subscription.";

interface MetadataOptions {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
}

export function buildMetadata(options: MetadataOptions = {}): Metadata {
  const {
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    pathname = "/",
    image = "/images/iptv-hero-tv-stage.png",
  } = options;
  const canonical = `${SITE_URL}${pathname}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "EagleCast TV",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
