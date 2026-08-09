"use client";

import React from "react";
import { REVIEWS } from "@/data/reviews";
import { Star, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-slate-50/80 border-b border-slate-200/80">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Loved by 50,000+ Device Owners
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-2">
            Real feedback from verified customers who trust Elgale Caset to protect their daily devices.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>

                {/* Title & Comment */}
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  &ldquo;{rev.title}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Product badge */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900">{rev.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.deviceModel}</span>
                </div>
                <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  {rev.productName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
