import { contactInfo } from "@/data/contact";
import { siteMetadata, SITE_URL } from "@/data/seo";

const faqSchemaItems = [
  {
    question: "Can I try EagleCast TV before choosing a package?",
    answer: "Yes. Request a trial so support can help confirm your preferred app, device compatibility, and internet connection before choosing a subscription package."
  },
  {
    question: "Which devices work with EagleCast TV IPTV?",
    answer: "EagleCast TV supports common IPTV workflows across Smart TVs (Samsung, LG, Android TV), Amazon Firestick, Android devices, iOS (iPhone/iPad), Windows PCs, and MAG set-top boxes."
  },
  {
    question: "What IPTV connection formats are supported by EagleCast TV?",
    answer: "EagleCast TV accounts support multi-format connections including Xtream Codes API logins (server URL, username, password), M3U/M3U8 playlist URLs, and Stalker MAC address portal links."
  },
  {
    question: "How does setup support work?",
    answer: "Share your device model, streaming application, and preferred categories with support. Our technical team guides you through app installation, login input, and buffer calibration."
  },
  {
    question: "Does EagleCast TV support 4K streaming?",
    answer: "EagleCast TV is 4K-ready where source availability, device decoding capabilities, player app settings, and home network internet speeds support higher-resolution playback."
  },
  {
    question: "What should I do if playback buffers or freezes?",
    answer: "First verify your connection speed and latency. Use 5GHz Wi-Fi or Cat6 Ethernet, set public DNS servers (such as Cloudflare 1.1.1.1), enable hardware GPU decoding in your app, and consult our troubleshooting guide."
  },
  {
    question: "How many devices are included per subscription?",
    answer: "Standard EagleCast TV packages include one active device connection per subscription line. Contact support if your household requires multi-screen options."
  },
  {
    question: "Does EagleCast TV offer reseller options?",
    answer: "Yes. EagleCast TV provides reseller-friendly panel workflows for customer onboarding, trial generation, line renewals, and setup management."
  }
];

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
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqSchemaItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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
