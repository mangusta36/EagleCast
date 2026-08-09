import { contactInfo } from "@/data/contact";
import { siteMetadata } from "@/data/seo";

const siteUrl = siteMetadata.metadataBase;

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "eaglecast",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      email: contactInfo.email,
      sameAs: [contactInfo.telegram],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "eaglecast",
      url: siteUrl,
      description: siteMetadata.description,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "eaglecast",
      serviceType: "IPTV service",
      url: siteUrl,
      description: siteMetadata.description,
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      isRelatedTo: {
        "@id": `${siteUrl}/#website`,
      },
      areaServed: [
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "Country",
          name: "Canada",
        },
      ],
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(siteStructuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
