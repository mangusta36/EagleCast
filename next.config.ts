import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/best-iptv-subscription-plans", destination: "/pricing", permanent: true },
      { source: "/best-iptv-subscription-plans-for-usa-and-canada", destination: "/pricing", permanent: true },
      { source: "/getting-started-with-eaglecast-tv-plan", destination: "/free-trial", permanent: true },
      { source: "/getting-started-with-eagle-cast-tv", destination: "/free-trial", permanent: true },
      { source: "/contact-eaglecast", destination: "/contact", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/terms-conditions", destination: "/terms-and-conditions", permanent: true },
      { source: "/privacy-policy-final", destination: "/privacy-policy", permanent: true },
      { source: "/terms-conditions-final", destination: "/terms-and-conditions", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https: data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
