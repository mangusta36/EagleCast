"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./cart-context";
import { X, Trash2, Plus, Minus, ShieldCheck, Truck, ArrowRight, Sparkles, Check } from "lucide-react";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    freeShippingProgress,
    amountNeededForFreeShipping,
    isFreeShipping,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "ELGALE15" || promoCode.trim().toUpperCase() === "WELCOME15") {
      setAppliedDiscount(subtotal * 0.15);
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try ELGALE15 for 15% off!");
    }
  };

  const finalTotal = Math.max(0, subtotal - appliedDiscount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-slide-in-right">
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold tracking-tight">Your Cart</h2>
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {items.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="bg-amber-50/80 border-b border-amber-200/60 px-6 py-3">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>You&apos;ve unlocked <strong>FREE Express Shipping!</strong></span>
              </div>
            ) : (
              <div>
                <p className="text-xs text-slate-700 mb-1.5 font-medium">
                  Add <strong className="text-amber-900">${amountNeededForFreeShipping.toFixed(2)}</strong> more for <strong>FREE Shipping</strong>
                </p>
                <div className="w-full h-2 bg-amber-200/70 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-600 transition-all duration-300 rounded-full"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items Scroll Container */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Your cart is empty</h3>
                <p className="text-sm text-slate-500 max-w-xs mb-6">
                  Discover our military-grade Titan Armor, Luxe Leather & MagSafe clear series.
                </p>
                <button
                  onClick={closeCart}
                  className="btn-primary text-sm"
                >
                  Shop Best Sellers
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.cartItemId}
                  className="flex gap-4 p-3 bg-slate-50/80 rounded-xl border border-slate-100 relative group"
                >
                  <div className="w-20 h-20 relative bg-white rounded-lg overflow-hidden border border-slate-200 shrink-0">
                    <Image
                      src={item.product.mainImage}
                      alt={item.product.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start pr-6">
                        <h4 className="text-sm font-semibold text-slate-900 truncate">
                          {item.product.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {item.selectedDevice} • {item.selectedColor}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-slate-200 bg-white rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1 hover:bg-slate-100 text-slate-600 rounded-l-lg"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1 hover:bg-slate-100 text-slate-600 rounded-r-lg"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-sm font-bold text-slate-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.cartItemId)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="border-t border-slate-200 p-6 bg-slate-50/50 space-y-4">
              {/* Promo code */}
              {!promoApplied ? (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code (e.g. ELGALE15)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200 font-medium">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Code ELGALE15 Applied (15% Off)
                  </span>
                  <span>-${appliedDiscount.toFixed(2)}</span>
                </div>
              )}
              {promoError && <p className="text-xs text-red-600 font-medium">{promoError}</p>}

              {/* Price summary */}
              <div className="space-y-1.5 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount</span>
                    <span>-${appliedDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Shipping</span>
                  <span className="font-medium text-slate-700">
                    {isFreeShipping ? "FREE Express" : "Calculated at checkout"}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Primary Checkout Button */}
              <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full btn-primary py-3.5 text-base justify-center font-bold tracking-wide shadow-lg group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Micro Trust Indicators */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 30-Day Guarantee
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-blue-600" /> Fast US Shipping
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
