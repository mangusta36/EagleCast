"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HEADER_NAV } from "@/data/navigation";
import { contactInfo } from "@/data/contact";
import { Tv, Menu, X, Zap } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/96 py-3 shadow-soft backdrop-blur-md border-b border-line"
            : "bg-white/94 py-4 backdrop-blur-sm border-b border-line"
        }`}
      >
        <div className="site-container flex items-center justify-between gap-4">
          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ink-muted hover:text-ink focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center text-white font-black shadow-glow group-hover:bg-brand-strong transition-colors">
              <Tv className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg md:text-xl tracking-tight text-ink leading-none">
                  eaglecast
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-ink-subtle font-semibold uppercase -mt-0.5">
                Premium IPTV
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {HEADER_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Primary Free Trial Action */}
          <div className="flex w-10 items-center justify-end gap-3 md:w-auto">
            <Link
              href="/#packages"
              className="hidden items-center justify-center rounded-xl border border-line bg-white px-4 py-2.5 text-xs font-bold text-ink transition hover:border-brand/55 hover:bg-canvas-alt md:inline-flex"
            >
              View Packages
            </Link>
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald hidden px-4 py-2.5 text-xs shadow-emerald md:inline-flex lg:px-5 lg:text-sm"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Get Trial</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/98 backdrop-blur-xl border-b border-line shadow-soft py-6 px-6 space-y-4 animate-slide-in-right z-40">
          <nav className="flex flex-col space-y-4">
            {HEADER_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-ink hover:text-brand-strong border-b border-line pb-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full btn-emerald justify-center text-sm py-3"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Get 24h Free Trial</span>
            </a>
            <Link
              href="/reseller"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full btn-secondary justify-center text-xs py-2.5 text-ink-muted"
            >
              Become a Reseller
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
