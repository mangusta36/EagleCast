export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  category: "protective" | "leather" | "clear" | "minimal" | "magsafe";
  categoryLabel: string;
  dropTest: string;
  mainImage: string;
  gallery: string[];
  colors: ColorVariant[];
  devices: string[];
  description: string;
  features: string[];
  specs: {
    material: string;
    thickness: string;
    weight: string;
    magsafe: string;
    warranty: string;
  };
  isBestSeller?: boolean;
  isFeatured?: boolean;
}

export const DEVICES = [
  "iPhone 16 Pro Max",
  "iPhone 16 Pro",
  "iPhone 16 Plus",
  "iPhone 16",
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "Samsung Galaxy S25 Ultra",
  "Samsung Galaxy S24 Ultra",
];

export const PRODUCTS: Product[] = [
  {
    id: "titan-armor-magsafe",
    slug: "titan-armor-magsafe",
    name: "Titan Armor MagSafe Case",
    tagline: "Military-Grade Shock Absorption Meets Ergonomic Precision",
    price: 49.99,
    originalPrice: 65.0,
    rating: 4.9,
    reviewCount: 348,
    badge: "Bestseller",
    category: "protective",
    categoryLabel: "Extreme Protection",
    dropTest: "15 FT Drop Certified",
    mainImage: "/images/case-titan-black.png",
    gallery: [
      "/images/case-titan-black.png",
      "/images/hero-caset-composition.png",
      "/images/lifestyle-hand-case.png",
    ],
    colors: [
      {
        id: "stealth-black",
        name: "Stealth Black",
        hex: "#1A1A1A",
        image: "/images/case-titan-black.png",
      },
      {
        id: "cognac-tan",
        name: "Cognac Leather Accent",
        hex: "#9E5829",
        image: "/images/case-leather-tan.png",
      },
      {
        id: "titanium-clear",
        name: "Titanium Clear",
        hex: "#D1D5DB",
        image: "/images/case-clear-magsafe.png",
      },
    ],
    devices: DEVICES,
    description:
      "Engineered for ultimate defense without sacrificing your phone's slim silhouette. Features patent-pending CornerSpring™ air bumpers, N52 Neodymium MagSafe alignment, and an anti-fingerprint matte exterior finish.",
    features: [
      "15 FT Military Drop Certified (MIL-STD-810G tested)",
      "Ultra-Strong N52 Neodymium MagSafe Magnet Array",
      "1.8mm Raised Screen Bezel & 2.2mm Raised Camera Guard",
      "Soft Tactile Anti-Slip Side Grip Ridges",
      "Lifetime Craftsmanship Warranty",
    ],
    specs: {
      material: "Polycarbonate + Air-Cushioned TPU + Zinc Alloy Hardware",
      thickness: "1.4 mm profile",
      weight: "38 grams",
      magsafe: "N52 Neodymium Magnetic Core (1,200g holding force)",
      warranty: "Lifetime Free Replacement Guarantee",
    },
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: "apex-luxe-leather",
    slug: "apex-luxe-leather",
    name: "Apex Luxe Leather Case",
    tagline: "Full-Grain Florentine Leather That Ages Beautifully Over Time",
    price: 59.99,
    originalPrice: 75.0,
    rating: 4.95,
    reviewCount: 212,
    badge: "Editorial Favorite",
    category: "leather",
    categoryLabel: "Luxe Leather",
    dropTest: "10 FT Drop Tested",
    mainImage: "/images/case-leather-tan.png",
    gallery: [
      "/images/case-leather-tan.png",
      "/images/hero-caset-composition.png",
      "/images/lifestyle-hand-case.png",
    ],
    colors: [
      {
        id: "cognac-tan",
        name: "Cognac Tan",
        hex: "#9E5829",
        image: "/images/case-leather-tan.png",
      },
      {
        id: "stealth-black",
        name: "Obsidian Black",
        hex: "#1A1A1A",
        image: "/images/case-titan-black.png",
      },
    ],
    devices: DEVICES,
    description:
      "Crafted from sustainably sourced, top-grain European leather. Hand-finished with anodized aluminum buttons and micro-fiber lining to protect your device finish from scratch damage.",
    features: [
      "Full-grain European natural patina leather",
      "Anodized metallic buttons with crisp click response",
      "MagSafe fast wireless charging compatibility",
      "Soft micro-suede interior protective layer",
      "10 FT everyday fall protection",
    ],
    specs: {
      material: "Top-Grain Leather + Aluminum Accent Rings + Microfiber",
      thickness: "1.2 mm profile",
      weight: "34 grams",
      magsafe: "Integrated MagSafe Ring Array",
      warranty: "2-Year Leather Patina Guarantee",
    },
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: "glass-shield-ultra-clear",
    slug: "glass-shield-ultra-clear",
    name: "GlassShield Ultra-Clear Case",
    tagline: "Crystal Transparency Guaranteed Anti-Yellowing Technology",
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.85,
    reviewCount: 184,
    badge: "Anti-Yellowing",
    category: "clear",
    categoryLabel: "Ultra-Clear",
    dropTest: "12 FT Drop Tested",
    mainImage: "/images/case-clear-magsafe.png",
    gallery: [
      "/images/case-clear-magsafe.png",
      "/images/hero-caset-composition.png",
    ],
    colors: [
      {
        id: "crystal-clear",
        name: "Crystal Clear",
        hex: "#E5E7EB",
        image: "/images/case-clear-magsafe.png",
      },
      {
        id: "stealth-black",
        name: "Obsidian Frame",
        hex: "#1A1A1A",
        image: "/images/case-titan-black.png",
      },
    ],
    devices: DEVICES,
    description:
      "Showcase your device's original color in 100% optical clarity. Infused with UV-defending Bayer™ polymers that prevent yellowing even under continuous sunlight.",
    features: [
      "UV-Resistant Bayer Polycarbonate anti-yellowing tech",
      "ImpactShield™ perimeter polymer frame",
      "Tactile responsive volume & power button covers",
      "Precision cutouts for USB-C & speaker ports",
      "MagSafe ecosystem ready",
    ],
    specs: {
      material: "German Bayer Anti-UV Polycarbonate + Flexible Edge TPU",
      thickness: "1.1 mm profile",
      weight: "31 grams",
      magsafe: "Seamless Embedded MagSafe Magnet",
      warranty: "1-Year No-Yellowing Guarantee",
    },
    isBestSeller: true,
    isFeatured: false,
  },
  {
    id: "minimalist-matte-series",
    slug: "minimalist-matte-series",
    name: "Minimalist Ultra-Slim Case",
    tagline: "Barely-There 0.8mm Profile with Soft Touch Feather Grip",
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.8,
    reviewCount: 146,
    badge: "Ultra Slim",
    category: "minimal",
    categoryLabel: "Ultra Minimalist",
    dropTest: "8 FT Drop Protection",
    mainImage: "/images/case-titan-black.png",
    gallery: [
      "/images/case-titan-black.png",
      "/images/lifestyle-hand-case.png",
    ],
    colors: [
      {
        id: "matte-black",
        name: "Matte Black",
        hex: "#1A1A1A",
        image: "/images/case-titan-black.png",
      },
      {
        id: "sage-green",
        name: "Alpine Sage",
        hex: "#4B6354",
        image: "/images/case-titan-black.png",
      },
    ],
    devices: DEVICES,
    description:
      "Designed for purists who want scratch defense and sleek grip without bulk. Feathery 0.8mm construction feels invisible in your hand while protecting against daily bumps.",
    features: [
      "Ultra-thin 0.8mm minimalist profile",
      "Oleophobic anti-fingerprint coating",
      "Camera island protection flange",
      "Full wireless charging support",
      "Anti-lint smooth pocket feel",
    ],
    specs: {
      material: "Featherweight Hard Polypropylene",
      thickness: "0.8 mm profile",
      weight: "19 grams",
      magsafe: "MagSafe Compatible",
      warranty: "1-Year Warranty",
    },
    isBestSeller: false,
    isFeatured: false,
  },
  {
    id: "carbon-weave-magsafe",
    slug: "carbon-weave-magsafe",
    name: "Carbon Weave MagSafe Case",
    tagline: "Aerospace Aramid Fiber Armor for High-Performance Professionals",
    price: 54.99,
    originalPrice: 69.99,
    rating: 4.92,
    reviewCount: 97,
    badge: "Aerospace Fiber",
    category: "magsafe",
    categoryLabel: "Aramid Carbon",
    dropTest: "14 FT Drop Tested",
    mainImage: "/images/case-titan-black.png",
    gallery: [
      "/images/case-titan-black.png",
      "/images/hero-caset-composition.png",
    ],
    colors: [
      {
        id: "carbon-black",
        name: "Kevlar Carbon Weave",
        hex: "#262626",
        image: "/images/case-titan-black.png",
      },
    ],
    devices: DEVICES,
    description:
      "Woven from genuine 1500D Aramid Carbon Fiber used in modern aerospace engineering. 5x stronger than steel at a fraction of the weight, finished with a tactile 3D grip texture.",
    features: [
      "Authentic 1500D Aramid Aerospace Carbon Fiber",
      "3D Grip weave texture resists slip & sweat",
      "Precision CNC machined aluminum camera bezel",
      "Ultra-fast MagSafe magnetic attachment",
      "Heat dissipating internal structural design",
    ],
    specs: {
      material: "1500D Aramid Fiber + Aluminum Camera Guard",
      thickness: "1.0 mm profile",
      weight: "26 grams",
      magsafe: "High-Strength MagSafe Magnet Grid",
      warranty: "Lifetime Product Warranty",
    },
    isBestSeller: false,
    isFeatured: true,
  },
];

export const CATEGORIES = [
  {
    id: "all",
    label: "All Cases",
    description: "Explore the full Elgale Caset flagship lineup.",
  },
  {
    id: "protective",
    label: "Armor & Drop Protection",
    description: "Maximum shock absorption certified up to 15ft.",
  },
  {
    id: "leather",
    label: "Luxe Leather",
    description: "Top-grain Florentine leather that patinas with time.",
  },
  {
    id: "clear",
    label: "Ultra-Clear MagSafe",
    description: "100% optical clarity with anti-yellowing tech.",
  },
  {
    id: "minimal",
    label: "Ultra Minimalist",
    description: "0.8mm thin profile for weightless protection.",
  },
  {
    id: "magsafe",
    label: "MagSafe Series",
    description: "Optimized for wireless power and magnetic mounts.",
  },
];
