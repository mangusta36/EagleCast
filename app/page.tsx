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
  title: "EagleCast TV | Live IPTV Streaming Service",
  description:
    "Stream live TV, sports, movies and series with EagleCast TV, plus catch-up, multi-screen access, device support and a trial before choosing a plan.",
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
