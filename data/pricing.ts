import { buildWhatsappUrl } from "@/data/contact";

export interface PricingPlan {
  slug: string;
  name: string;
  description: string;
  price: string;
  monthlyEquivalent: string;
  billingPeriod: string;
  savings?: string;
  featured?: boolean;
  badge?: string;
  additionalConnectionPrice: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  whatsappMsg: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    slug: "3-months",
    name: "3 Months",
    description: "Flexible short-term access to test out premium streaming.",
    price: "$37",
    monthlyEquivalent: "$12.33/mo",
    billingPeriod: "every 3 months",
    additionalConnectionPrice: "+$10 for Extra Screen",
    features: [
      "6,000+ Premium Live TV Channels",
      "Sports & PPV Event Access",
      "International Movies & Series VOD",
      "Full EPG TV Guide & Catch-up",
      "4K & Ultra HD Quality",
      "Instant Setup & Device Support",
    ],
    ctaText: "Get 3 Months",
    ctaHref: buildWhatsappUrl(
      "Hello, I want to get the 3-Month EagleCast TV Plan",
    ),
    whatsappMsg: "Hello, I want to get the 3-Month EagleCast TV plan ($37)",
  },
  {
    slug: "6-months",
    name: "6 Months",
    description: "Great value for regular sports & entertainment viewers.",
    price: "$49",
    monthlyEquivalent: "$8.16/mo",
    billingPeriod: "every 6 months",
    savings: "Save 34% vs 3M rate",
    additionalConnectionPrice: "+$15 for Extra Screen",
    features: [
      "6,000+ Premium Live TV Channels",
      "Sports & PPV Event Access",
      "International Movies & Series VOD",
      "Full EPG TV Guide & Catch-up",
      "4K & Ultra HD Quality",
      "Instant Setup & Device Support",
    ],
    ctaText: "Get 6 Months",
    ctaHref: buildWhatsappUrl(
      "Hello, I want to get the 6-Month EagleCast TV Plan",
    ),
    whatsappMsg: "Hello, I want to get the 6-Month EagleCast TV plan ($49)",
  },
  {
    slug: "12-months",
    name: "12 Months",
    description: "Our most popular package. Maximum stability & best value.",
    price: "$67",
    monthlyEquivalent: "$5.58/mo",
    billingPeriod: "billed annually",
    savings: "Save 55% vs short-term",
    featured: true,
    badge: "MOST POPULAR",
    additionalConnectionPrice: "+$20 for Extra Screen",
    features: [
      "6,000+ Premium Live TV Channels",
      "Sports & PPV Event Access",
      "International Movies & Series VOD",
      "Full EPG TV Guide & Catch-up",
      "4K & Ultra HD Quality",
      "Priority 24/7 Setup & VIP Support",
      "Free Multi-Device App Setup Guide",
    ],
    ctaText: "Get 1 Year Best Deal",
    ctaHref: buildWhatsappUrl(
      "Hello, I want to get the 12-Month EagleCast TV Plan",
    ),
    whatsappMsg: "Hello, I want to get the 12-Month EagleCast TV plan ($67)",
  },
  {
    slug: "24-months",
    name: "24 Months",
    description: "Long-term VIP pass. Lock in the absolute lowest rate.",
    price: "$110",
    monthlyEquivalent: "$4.58/mo",
    billingPeriod: "every 2 years",
    savings: "Save 63% vs monthly",
    badge: "ULTIMATE SAVINGS",
    additionalConnectionPrice: "+$30 for Extra Screen",
    features: [
      "6,000+ Premium Live TV Channels",
      "Sports & PPV Event Access",
      "International Movies & Series VOD",
      "Full EPG TV Guide & Catch-up",
      "4K & Ultra HD Quality",
      "Priority 24/7 Setup & VIP Support",
      "Free Multi-Device App Setup Guide",
    ],
    ctaText: "Get 2 Years Pass",
    ctaHref: buildWhatsappUrl(
      "Hello, I want to get the 24-Month EagleCast TV Plan",
    ),
    whatsappMsg: "Hello, I want to get the 24-Month EagleCast TV plan ($110)",
  },
];

export const pricingPlans = PRICING_PLANS;
