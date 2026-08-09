"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/components/cart/cart-context";
import { Star, Shield, ShoppingBag, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedDevice] = useState(product.devices[0]);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, selectedDevice, selectedColor.name, selectedColor.hex);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden relative">
      {/* Badge Overlay */}
      <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1.5 items-start">
        {product.badge && (
          <span className="bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm tracking-wide">
            {product.badge}
          </span>
        )}
        {discountPercent > 0 && (
          <span className="bg-amber-500 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
            Save {discountPercent}%
          </span>
        )}
      </div>

      {/* Drop test tag right top */}
      <div className="absolute top-3.5 right-3.5 z-10">
        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
          <Shield className="w-3 h-3 text-emerald-600" />
          {product.dropTest}
        </span>
      </div>

      {/* Product Image Stage */}
      <Link href={`/product/${product.slug}`} className="block relative aspect-square bg-slate-50/80 overflow-hidden p-6">
        <Image
          src={selectedColor.image || product.mainImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-slate-800">{product.rating}</span>
            <span className="text-xs text-slate-400">({product.reviewCount})</span>
          </div>

          {/* Title */}
          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{product.tagline}</p>

          {/* Color Swatches */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-[11px] font-semibold text-slate-400">Colors:</span>
            <div className="flex items-center gap-1.5">
              {product.colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color)}
                  className={`w-4.5 h-4.5 rounded-full border transition-all ${
                    selectedColor.id === color.id
                      ? "ring-2 ring-blue-600 ring-offset-1 scale-110 border-white"
                      : "border-slate-300 hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-slate-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold">In Stock • Fast Shipping</span>
          </div>

          <button
            onClick={handleQuickAdd}
            className={`btn-primary text-xs py-2 px-3.5 rounded-full transition-all ${
              added ? "bg-emerald-600 text-white" : ""
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
