import React from "react";
import Link from "next/link";
import { FAQS } from "@/data/faqs";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-[#050812] border-b border-white/10">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-200 text-xs font-extrabold uppercase tracking-widest bg-white/[0.06] px-3.5 py-1 rounded-full border border-blue-400/30">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-3">
            IPTV Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base text-slate-300 mt-2">
            Quick answers about IPTV streaming, apps, devices, trials, playback,
            setup, and reseller options. For the service overview, visit{" "}
            <Link href="/" className="font-semibold text-blue-200 underline">
              EagleCast TV
            </Link>
            .
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <details
              key={faq.id}
              open={index === 0}
              className="group bg-white/[0.045] rounded-lg border border-white/10 overflow-hidden transition-all duration-200"
            >
              <summary className="w-full cursor-pointer list-none p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-base hover:text-blue-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-300">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-300 shrink-0" />
                  <span>{faq.question}</span>
                </span>
                <ChevronDown className="w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-blue-300" />
              </summary>
              <div className="px-5 pb-5 pt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-12 text-center bg-white/[0.045] rounded-lg p-6 max-w-xl mx-auto border border-white/10">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-white mb-1">
            <ShieldCheck className="w-5 h-5 text-emerald" />
            <span>Need more help?</span>
          </div>
          <p className="text-xs text-slate-400">
            Use the setup and troubleshooting guides. Verified contact details
            are not currently published.
          </p>
        </div>
      </div>
    </section>
  );
}
