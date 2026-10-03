import { HomeHero } from "@/components/sections/home-hero";
import {
  DeviceTrustSection,
  EaglecastAtGlanceSection,
  FinalConversionCta,
  HomeFaqSection,
  homeFaqItems,
  HowItWorksSection,
  IptvValueSection,
  PackagesSection,
  ResourceHubSection,
  SupportHelpSection,
} from "@/components/sections/iptv-home-sections";
import { FaqJsonLd } from "@/components/seo/page-json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV | IPTV Streaming, Plans & Setup",
  description:
    "Explore EagleCast TV IPTV streaming for live TV, sports, movies, catch-up, device setup, trial access, and subscription plans.",
  pathname: "/",
});

export default function Home() {
  return (
    <>
      <FaqJsonLd
        items={homeFaqItems.map(([question, answer]) => ({
          question,
          answer,
        }))}
      />
      <HomeHero />
      <EaglecastAtGlanceSection />
      <IptvValueSection />
      <PackagesSection />
      <DeviceTrustSection />
      <HowItWorksSection />
      <SupportHelpSection />
      <ResourceHubSection />
      <HomeFaqSection />
      <FinalConversionCta />
    </>
  );
}
