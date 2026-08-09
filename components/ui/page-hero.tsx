import { Eyebrow } from "@/components/ui/eyebrow";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-canvas-alt">
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-28 h-72 w-72 rounded-full border border-brand/10 bg-white/45"
      />
      <div
        aria-hidden="true"
        className="absolute -right-5 -top-16 h-52 w-52 rounded-full border border-brand/10 bg-white/35"
      />
      <div className="site-container relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-5 max-w-[18ch] text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
            {description}
          </p>
          {children ? (
            <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
