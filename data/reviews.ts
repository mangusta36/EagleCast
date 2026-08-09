export interface Review {
  id: string;
  author: string;
  verified: boolean;
  rating: number;
  date: string;
  title: string;
  comment: string;
  productName: string;
  deviceModel: string;
  avatarUrl?: string;
  highlightBadge?: string;
}

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Marcus Vance",
    verified: true,
    rating: 5,
    date: "2 days ago",
    title: "Saved my phone from a 12-foot concrete drop!",
    comment:
      "I accidentally dropped my iPhone 16 Pro Max off a second-story balcony rail onto solid concrete. I braced for shattered glass. The Titan Armor case didn't have a single scratch and the phone works flawlessly. Best $50 I've ever spent.",
    productName: "Titan Armor MagSafe Case",
    deviceModel: "iPhone 16 Pro Max",
    highlightBadge: "Verified Buyer • Drop Test Proven",
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    verified: true,
    rating: 5,
    date: "1 week ago",
    title: "The leather feels incredible and ages so gracefully",
    comment:
      "I was skeptical about ordering leather online, but the Apex Luxe is pure craftsmanship. High-end full grain leather with smooth metallic buttons that click so satisfyingly. Already developing a subtle warm patina.",
    productName: "Apex Luxe Leather Case",
    deviceModel: "iPhone 16 Pro",
    highlightBadge: "Verified Buyer • Luxury Grade",
  },
  {
    id: "rev-3",
    author: "David Chen",
    verified: true,
    rating: 5,
    date: "2 weeks ago",
    title: "Finally a clear case that actually stays crystal clear",
    comment:
      "Every clear case I've bought in the past turned nasty yellow in 2 months. I've had the GlassShield for 6 months under sunny California conditions, and it is still 100% optical clear. MagSafe lock is incredibly strong too.",
    productName: "GlassShield Ultra-Clear Case",
    deviceModel: "Samsung Galaxy S25 Ultra",
    highlightBadge: "Verified Buyer • Anti-Yellowing Verified",
  },
  {
    id: "rev-4",
    author: "Samantha Wright",
    verified: true,
    rating: 5,
    date: "3 weeks ago",
    title: "Sleek, slim, and MagSafe sticks to my car mount like glue",
    comment:
      "I love how lightweight this case is. It doesn't add any awkward bulk in my handbag or pocket, but when I attach it to my magnetic car charger, it locks in with total stability even on bumpy roads.",
    productName: "Titan Armor MagSafe Case",
    deviceModel: "iPhone 15 Pro",
    highlightBadge: "Verified Buyer • MagSafe Verified",
  },
  {
    id: "rev-5",
    author: "Julian Thorne",
    verified: true,
    rating: 5,
    date: "1 month ago",
    title: "The carbon fiber texture feels like a super car interior",
    comment:
      "The 1500D aramid fiber tactile grip is next level. Extremely rigid, precise camera cutout lip, zero fingerprints. Elgale Caset is now my go-to for all device protection.",
    productName: "Carbon Weave MagSafe Case",
    deviceModel: "iPhone 16 Pro Max",
    highlightBadge: "Verified Buyer • Premium Craft",
  },
];
