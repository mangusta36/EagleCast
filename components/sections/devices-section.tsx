import { DeviceStage } from "@/components/visuals/devices";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";

const devices = [
  {
    group: "Smart TVs",
    body: "A familiar living-room experience on Samsung, LG, and other smart platforms.",
  },
  {
    group: "Android & iOS",
    body: "Take your lineup to your pocket with apps for phones and tablets.",
  },
  {
    group: "Fire TV & streaming devices",
    body: "Install EagleCast TV on Fire TV and popular streaming sticks in minutes.",
  },
  {
    group: "Desktop & laptop",
    body: "Keep watching on any computer with a modern browser or media player.",
  },
] as const;

export function DevicesSection() {
  return (
    <section className="bg-canvas">
      <div className="site-container section-pad">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <DeviceStage />
          </div>
          <div className="order-1 max-w-xl lg:order-2 lg:justify-self-end">
            <Eyebrow>Device compatibility</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
              Watch on the screens you already own
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink-muted">
              EagleCast TV is designed for a real entertainment setup — start on
              the big TV, switch to a tablet in the kitchen, and keep the same
              lineup on your phone when you head out.
            </p>
            <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {devices.map((device) => (
                <div key={device.group} className="border-t border-line pt-4">
                  <dt className="text-[15px] font-semibold text-ink">
                    {device.group}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-6 text-ink-muted">
                    {device.body}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <ButtonLink href="/tutorials" variant="secondary">
                Browse setup guides
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
