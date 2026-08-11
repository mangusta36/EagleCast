import { contactInfo } from "@/data/contact";
import { siteMetadata, SITE_URL } from "@/data/seo";

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "EagleCast TV",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      email: contactInfo.email,
      sameAs: [contactInfo.telegram],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "EagleCast TV",
      url: SITE_URL,
      description: siteMetadata.description,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "EagleCast TV",
      serviceType: "IPTV service",
      url: SITE_URL,
      description: siteMetadata.description,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      isRelatedTo: {
        "@id": `${SITE_URL}/#website`,
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
