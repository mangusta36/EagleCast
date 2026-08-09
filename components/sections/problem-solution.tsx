"use client";

import React from "react";
import Link from "next/link";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            WHY SWITCH TO ELGALE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mt-3">
            Stop risking your $1,200 device with cheap cases.
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-2">
            See how standard market cases compare against Elgale Caset precision engineering.
          </p>
        </div>

        {/* Side by side comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem Card */}
          <div className="bg-red-50/50 rounded-3xl p-8 border border-red-200/70 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold mb-6">
              <XCircle className="w-4 h-4 text-red-600" />
              <span>THE ORDINARY CASE PROBLEM</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Fragile, bulky, and turns ugly yellow in months.
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <span><strong>Expensive Repair Risks:</strong> A single drop onto asphalt can cause $400+ screen & rear glass repair costs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <span><strong>Slippery Grip:</strong> Glossy cheap plastics slip out of hand during daily use.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <span><strong>Discoloration & Yellowing:</strong> Clear cases absorb skin oil and sunlight, turning dingy yellow.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <span><strong>Weak MagSafe Magnets:</strong> Phone disconnects from car mounts over bumps.</span>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-emerald-50/60 rounded-3xl p-8 border border-emerald-200/80 shadow-md relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-6">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>THE ELGALE CASET SOLUTION</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Confidence, defense, and timeless luxury.
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span><strong>15 FT Drop Certification:</strong> CornerSpring™ air bumpers absorb brutal impacts effortlessly.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span><strong>Tactile Anti-Slip Feel:</strong> Micro-textured side edges ensure a secure, effortless grip.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span><strong>Guaranteed Clarity / Rich Leather:</strong> Anti-UV Bayer polymers & European full-grain leather.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span><strong>1,200g N52 Magnetic Core:</strong> Locks firmly to chargers, wallets, and magnetic mounts.</span>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-emerald-200/80">
              <Link href="/shop" className="btn-primary w-full justify-center bg-slate-900 text-white shadow-lg">
                <span>Choose Your Elgale Case</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
