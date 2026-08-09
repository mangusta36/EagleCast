import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "eaglecast",
    short_name: "eaglecast",
    description: "IPTV streaming, live TV, sports, and device support",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F3",
    theme_color: "#071923",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
