import { HomeHero } from "@/components/sections/home-hero";
import {
  DeviceTrustSection,
  EaglecastAtGlanceSection,
  GuidesSection,
  HomeFaqSection,
  IptvValueSection,
  PackagesSection,
  ResellerCtaSection,
  TrustStripSection,
  WhyEagleCastSection,
  HowItWorksSection,
} from "@/components/sections/iptv-home-sections";
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
      <HomeHero />
      <EaglecastAtGlanceSection />
      <PackagesSection />
      <TrustStripSection />
      <WhyEagleCastSection />
      <IptvValueSection />
      <DeviceTrustSection />
      <HowItWorksSection />
      <ResellerCtaSection />
      <GuidesSection />
      <HomeFaqSection />
    </>
  );
}
