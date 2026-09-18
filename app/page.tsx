import { HomeHero } from "@/components/sections/home-hero";
import {
  DeviceTrustSection,
  EaglecastAtGlanceSection,
  FinalConversionCta,
  GuidesSection,
  HomeFaqSection,
  homeFaqItems,
  HowItWorksSection,
  IptvValueSection,
  PackagesSection,
  ResellerCtaSection,
  SetupChecklistSection,
  SupportHelpSection,
  TrialFlowSection,
  TrustStripSection,
  WhyEagleCastSection,
} from "@/components/sections/iptv-home-sections";
import { FaqJsonLd } from "@/components/seo/page-json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV | IPTV Streaming Service for Live TV, Sports & VOD",
  description:
    "Discover EagleCast TV IPTV streaming for live channels, sports broadcasts, movies, series, and catch-up. Test setup with a trial across Smart TV, Firestick, and Android.",
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
      <PackagesSection />
      <TrustStripSection />
      <WhyEagleCastSection />
      <IptvValueSection />
      <DeviceTrustSection />
      <HowItWorksSection />
      <SetupChecklistSection />
      <SupportHelpSection />
      <ResellerCtaSection />
      <TrialFlowSection />
      <GuidesSection />
      <HomeFaqSection />
      <FinalConversionCta />
    </>
  );
}
