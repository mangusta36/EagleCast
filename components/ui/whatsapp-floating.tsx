"use client";

import React from "react";
import Link from "next/link";
import { contactInfo } from "@/data/contact";
import { MessageCircle, Zap } from "lucide-react";

export function WhatsappFloating() {
  return (
    <>
      {/* Floating WhatsApp Button - Desktop & Tablet */}
      <a
        href={contactInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 rounded-full border border-[#25D366]/35 bg-white/95 px-4 py-3 text-ink shadow-card backdrop-blur-md transition hover:bg-[#ECFDF5] group"
        aria-label="Chat with 24/7 Support on WhatsApp"
      >
        <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#059669]">
            24/7 WHATSAPP SETUP
          </span>
          <span className="text-xs font-bold text-ink">Get Trial</span>
        </div>
      </a>

      {/* Sticky Mobile Conversion Bar - Mobile (< 768px) */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-t border-line bg-white/95 p-3 shadow-2xl backdrop-blur-lg md:hidden">
        <a
          href={contactInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-0 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 py-3 text-xs font-bold text-white transition hover:bg-[#20bd5a]"
        >
          <Zap className="h-4 w-4 shrink-0 fill-current" />
          <span>Get Trial</span>
        </a>
        <Link
          href="/#packages"
          className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-lg border border-line bg-panel px-3 py-3 text-xs font-bold text-ink transition hover:border-[#CBD5E1] hover:bg-panel-soft"
        >
          Packages
        </Link>
      </div>
    </>
  );
}
