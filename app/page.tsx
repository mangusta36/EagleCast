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
  title: "eaglecast | IPTV Streaming, Live TV, Sports & Entertainment",
  description:
    "Explore eaglecast for live TV, sports, movies, supported devices, setup support, and a free trial you can test on your real screen.",
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
