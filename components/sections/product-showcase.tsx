"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCTS, DEVICES } from "@/data/products";
import { useCart } from "@/components/cart/cart-context";
import { Shield, Sparkles, ShoppingBag, Check, Star } from "lucide-react";

export function ProductShowcase() {
  const titanProduct =
    PRODUCTS.find((p) => p.id === "titan-armor-magsafe") || PRODUCTS[0];
  const { addItem } = useCart();
  const [selectedDevice, setSelectedDevice] = useState(DEVICES[0]);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(
      titanProduct,
      selectedDevice,
      titanProduct.colors[0].name,
      titanProduct.colors[0].hex,
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Oversized Visual Stage */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-6 shadow-2xl group">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-blue-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-md">
                  FLAGSHIP SPOTLIGHT
                </span>
              </div>
              <Image
                src="/images/case-titan-black.png"
                alt="Titan Armor MagSafe Case Spotlight"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Editorial Commercial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-white font-extrabold">4.9/5 Rating</span>
              <span className="text-slate-400">(348 verified reviews)</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The Titan Armor MagSafe Series
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              15 FT drop certification. Air-cushioned CornerSpring™ geometry.
              Integrated N52 Neodymium magnet core. Designed for those who
              demand maximum protection without compromise.
            </p>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-800">
              <div>
                <span className="text-xs text-slate-400 font-medium">
                  Drop Rating
                </span>
                <p className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                  <Shield className="w-4 h-4 text-emerald-400" /> 15 FT Military
                  Certified
                </p>
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium">
                  MagSafe Array
                </span>
                <p className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-4 h-4 text-amber-400" /> N52 Neodymium
                  Core
                </p>
              </div>
            </div>

            {/* Device Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Select Your Device Model:
              </label>
              <select
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
                className="w-full bg-slate-900 text-white border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-semibold"
              >
                {DEVICES.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Pricing & Add Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">
                    ${titanProduct.price.toFixed(2)}
                  </span>
                  {titanProduct.originalPrice && (
                    <span className="text-base text-slate-500 line-through">
                      ${titanProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <span className="text-xs text-emerald-400 font-bold">
                  In Stock • Ships Same Day
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full sm:w-auto flex-1 btn-primary py-4 px-8 bg-blue-600 hover:bg-blue-500 text-white text-base font-bold shadow-2xl justify-center group"
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>
                      Quick Buy Now — ${titanProduct.price.toFixed(2)}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
