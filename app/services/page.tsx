import {
  Film,
  Headphones,
  RotateCcw,
  Trophy,
  Tv,
  type LucideIcon,
} from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { TvGuide } from "@/components/visuals/tv-guide";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services | eaglecast",
  description:
    "Explore eaglecast features for live TV with EPG, sports and PPV, movies and series, catch-up, replay, multi-screen viewing, and support.",
  pathname: "/services",
});

const servicePresentation: Record<
  string,
  { icon: LucideIcon; body: string; detail: string }
> = {
  "Catchup & Replay": {
    icon: RotateCcw,
    body: "Return to missed content with catch-up and replay access for up to two days.",
    detail: "Included in every listed plan",
  },
  "Sports and PPV": {
    icon: Trophy,
    body: "Watch local and international sports alongside the PPV events included in the service offering.",
    detail: "Part of the full eaglecast package",
  },
  "Live TV with EPG": {
    icon: Tv,
    body: "Browse live TV with an electronic program guide and HD-quality streaming support.",
    detail: "Guide access is included",
  },
  "24x7 Support": {
    icon: Headphones,
    body: "Get help with setup, billing, and technical questions through the listed support channels.",
    detail: "Support is listed as available 24/7",
  },
};

const packageItems = [
  { icon: Tv, label: "Live TV with EPG" },
  { icon: Trophy, label: "Sports and PPV" },
  { icon: Film, label: "Movies and series" },
  { icon: RotateCcw, label: "Catch-up and multi-screen" },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What is included"
        title="The viewing features that come with every plan"
        description="eaglecast combines live TV, sports, movies, catch-up, multi-screen access, and support under the same core service."
      >
        <ButtonLink href="/free-trial">Request a free trial</ButtonLink>
        <ButtonLink href="/pricing" variant="outlineLight">
          Compare plans
        </ButtonLink>
      </PageHero>

      <section className="bg-canvas">
        <div className="site-container section-pad grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="One complete package"
              title="Move from the guide to the content you want"
              description="The service covers the main ways viewers browse and return to entertainment, without splitting features across higher tiers."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {packageItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm font-medium text-ink"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:justify-self-end">
            <TvGuide />
          </div>
        </div>
      </section>

      <section className="bg-canvas-alt">
        <div className="site-container section-pad">
          <SectionHeading
            eyebrow="Feature overview"
            title="Four parts of the everyday experience"
            description="Each feature below is listed as part of the same eaglecast service and is available across the published plan terms."
          />

          <div className="mt-12 grid gap-x-12 gap-y-0 md:grid-cols-2 lg:gap-x-20">
            {services.map((service, index) => {
              const presentation = servicePresentation[service.title];
              const Icon = presentation?.icon ?? Tv;
              return (
                <article
                  key={service.title}
                  className="border-t border-line py-8 sm:py-10"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-panel text-brand shadow-soft">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <p
                        className="text-xs font-semibold text-brand"
                        aria-hidden="true"
                      >
                        0{index + 1}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-ink">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-ink-muted">
                        {presentation?.body ?? service.description}
                      </p>
                      {presentation ? (
                        <p className="mt-5 text-xs font-semibold text-mint-strong">
                          {presentation.detail}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[#EFF6FF]">
        <div className="site-container grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand">
              Support is part of the service
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-4xl">
              Setup, billing, and technical questions have a clear route.
            </h2>
            <p className="mt-4 text-base leading-8 text-ink-muted">
              eaglecast lists support as available through its official support
              contact options.
            </p>
          </div>
          <ButtonLink href="/contact">Contact support</ButtonLink>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
