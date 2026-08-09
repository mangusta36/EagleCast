import type { Metadata } from "next";

const DEFAULT_TITLE =
  "eaglecast | IPTV Streaming, Live TV, Sports & Entertainment";
const DEFAULT_DESCRIPTION =
  "Explore eaglecast for live TV, sports, movies, supported devices, and a practical free-trial path before you choose a longer subscription.";
const SITE_URL = "https://www.eaglecast.tv";

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
      siteName: "eaglecast",
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
