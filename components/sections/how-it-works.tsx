import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Get Trial",
    body: "Email the EagleCast TV team for trial access before you pay.",
  },
  {
    number: "02",
    title: "Set up your screen",
    body: "Receive your access details and device guidance, with support available if you need it.",
  },
  {
    number: "03",
    title: "Watch, then choose",
    body: "Explore the service at your own pace and select a subscription term only when you are ready.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-midnight text-white">
      <div className="site-container section-pad">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-sky before:h-2 before:w-2 before:rounded-full before:bg-sky">
              How it works
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.75rem]">
              From curious to watching in three clear steps
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-white/65">
              The trial comes first, so you can check the service and your setup
              before choosing a plan.
            </p>
            <Link
              href="/free-trial"
              className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-semibold text-midnight transition-colors hover:bg-sky"
            >
              Request your trial
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <ol className="grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="flex min-h-64 flex-col rounded-2xl border border-white/10 bg-white/[0.055] p-6 sm:p-7"
              >
                <span className="text-xs font-semibold text-sky">
                  {step.number}
                </span>
                <h3 className="mt-10 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  {step.body}
                </p>
                <Check
                  size={18}
                  className="mt-auto pt-6 box-content text-mint"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
