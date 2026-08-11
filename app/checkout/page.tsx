"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/cart-context";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function CheckoutPage() {
  const { items, subtotal, isFreeShipping, clearCart } = useCart();

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "CA",
    zip: "",
    phone: "",
    cardNumber: "",
    cardExp: "",
    cardCvc: "",
  });

  const [isCompleted, setIsCompleted] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `EGL-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setIsCompleted(true);
    clearCart();
  };

  const shippingCost = isFreeShipping ? 0 : 4.99;
  const finalTotal = subtotal + shippingCost;

  if (isCompleted) {
    return (
      <div className="py-16 md:py-24 bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="site-container max-w-xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                ORDER CONFIRMED
              </span>
              <h1 className="text-3xl font-extrabold text-slate-950 mt-3">
                Thank you for your order!
              </h1>
              <p className="text-sm text-slate-500 mt-2">
                Order confirmation <strong>#{orderId}</strong> has been sent to{" "}
                <strong>{form.email || "your email"}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left text-xs space-y-2 text-slate-600">
              <div className="flex justify-between">
                <span>Shipping Address:</span>
                <span className="font-bold text-slate-900">
                  {form.address || "123 Main St"}, {form.city || "New York"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery:</span>
                <span className="font-bold text-emerald-700">
                  2–3 Business Days (Express Dispatch)
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount Paid:</span>
                <span className="font-bold text-slate-900">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/shop"
                className="btn-primary w-full justify-center text-sm py-3.5"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-20 bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="site-container max-w-md text-center space-y-4">
          <h1 className="text-2xl font-bold text-slate-900">
            Your cart is empty
          </h1>
          <p className="text-sm text-slate-500">
            Please add items to your cart before checking out.
          </p>
          <Link href="/shop" className="btn-primary text-sm">
            Browse Flagship Cases
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 md:py-16 bg-slate-50 min-h-screen">
      <div className="site-container">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/shop"
            className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Store
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
            <Lock className="w-4 h-4 text-emerald-600" /> 256-Bit SSL Encrypted
            Checkout
          </div>
        </div>

        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* Left Form Column */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xs">
            {/* Express Checkout */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Express Checkout
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="bg-slate-950 text-white font-extrabold text-sm py-3 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Apple Pay</span>
                </button>
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="bg-blue-600 text-white font-extrabold text-sm py-3 rounded-xl hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Shop Pay</span>
                </button>
              </div>
              <div className="relative py-2 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <span className="relative bg-white px-3 text-xs text-slate-400 font-semibold uppercase">
                  Or continue with shipping
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                Contact Information
              </h2>
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="alex@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Alex"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Morgan"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="123 Fifth Avenue, Suite 400"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="New York"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    placeholder="NY"
                    value={form.state}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    required
                    placeholder="10001"
                    value={form.zip}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">
                Payment Information
              </h2>
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  required
                  placeholder="4532 •••• •••• 8912"
                  value={form.cardNumber}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Expiration (MM/YY)
                  </label>
                  <input
                    type="text"
                    name="cardExp"
                    required
                    placeholder="08/28"
                    value={form.cardExp}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Security CVC
                  </label>
                  <input
                    type="text"
                    name="cardCvc"
                    required
                    placeholder="345"
                    value={form.cardCvc}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-4 text-base font-bold shadow-xl justify-center"
            >
              <span>Complete Order — ${finalTotal.toFixed(2)}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6 sticky top-24">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
              Order Summary ({items.length})
            </h2>

            <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.cartItemId} className="flex gap-3 items-center">
                  <div className="w-14 h-14 relative bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shrink-0">
                    <Image
                      src={item.product.mainImage}
                      alt={item.product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      {item.selectedDevice} • {item.selectedColor}
                    </p>
                    <span className="text-xs text-slate-400">
                      Qty: {item.quantity}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs text-slate-600 pt-4 border-t border-slate-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-emerald-700">
                  {isFreeShipping
                    ? "FREE Express"
                    : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-slate-950 pt-2 border-t border-slate-200">
                <span>Total Due</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                If your case doesn&apos;t fit perfectly or meet your
                expectations, return it within 30 days for a full refund.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
