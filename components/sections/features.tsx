import { Headphones, Radio, RotateCcw, Trophy } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { TvGuide } from "@/components/visuals/tv-guide";
import { services } from "@/data/services";

const icons = {
  "Live TV with EPG": Radio,
  "Sports and PPV": Trophy,
  "Catchup & Replay": RotateCcw,
  "24x7 Support": Headphones,
} as const;

export function Features() {
  return (
    <section id="features" className="bg-canvas-alt">
      <div className="site-container section-pad">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What you get"
            title="The essentials are included in every plan"
            description="Choose a term, not a feature tier. Every listed plan includes the same core eaglecast experience."
          />
          <ButtonLink
            href="/services"
            variant="secondary"
            className="shrink-0 self-start lg:self-auto"
          >
            Explore all features
          </ButtonLink>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <TvGuide />
          <div className="divide-y divide-line border-y border-line">
            {services.map((service) => {
              const Icon = icons[service.title as keyof typeof icons] ?? Radio;
              return (
                <article
                  key={service.title}
                  className="grid grid-cols-[auto_1fr] gap-4 py-5 sm:gap-5 sm:py-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-panel text-brand shadow-soft">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-7 text-ink-muted">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
