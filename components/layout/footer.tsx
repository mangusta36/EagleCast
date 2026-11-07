import React from "react";
import Link from "next/link";
import { FOOTER_NAV } from "@/data/navigation";
import { Tv } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#F1F5F9] pb-20 pt-16 text-ink-muted md:pb-12">
      <div className="site-container">
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-line">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand flex items-center justify-center text-white font-black">
                <Tv className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl text-ink tracking-tight">
                EagleCast TV
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-ink-subtle">
              EagleCast TV provides IPTV streaming for live channels, sports,
              movies, series, supported apps, devices, and guided setup support.
            </p>
            <Link
              href="/contact"
              className="text-xs font-semibold text-brand hover:text-brand-strong"
            >
              Support information
            </Link>
          </div>

          <div>
            <h2 className="text-xs font-extrabold text-ink uppercase tracking-wider mb-4">
              Explore
            </h2>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_NAV.eaglecast.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-strong transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-extrabold text-ink uppercase tracking-wider mb-4">
              Guides
            </h2>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_NAV.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-strong transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-extrabold text-ink uppercase tracking-wider mb-4">
              Legal
            </h2>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_NAV.business.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-strong transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-subtle">
          <p>© {new Date().getFullYear()} EagleCast TV. All rights reserved.</p>
          <div className="flex items-center gap-4 text-ink-subtle">
            <Link href="/privacy-policy" className="hover:text-brand-strong">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-brand-strong"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
