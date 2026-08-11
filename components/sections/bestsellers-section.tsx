"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { ArrowRight, Flame } from "lucide-react";

export function BestsellersSection() {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-200/80">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
              <Flame className="w-3.5 h-3.5 text-amber-600 fill-current" />
              <span>COMMERCIAL HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              Most Wanted Cases
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl mt-2">
              Our highest-rated protective designs, engineered for MagSafe
              speed, tactical grip, and daily phone defense.
            </p>
          </div>

          <Link
            href="/shop"
            className="btn-secondary text-xs sm:text-sm py-2.5 px-5 self-start md:self-auto group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
