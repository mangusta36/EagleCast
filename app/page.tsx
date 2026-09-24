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
  SupportHelpSection,
} from "@/components/sections/iptv-home-sections";
import { FaqJsonLd } from "@/components/seo/page-json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EagleCast TV | IPTV Streaming Service & Subscriptions",
  description:
    "Explore EagleCast TV IPTV streaming for live TV, sports, movies, series, catch-up, and subscription options across Smart TV, Firestick, Android TV, iOS, and more.",
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
      <HomeFaqSection />
      <FinalConversionCta />
    </>
  );
}
