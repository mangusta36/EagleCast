import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  CreditCard,
  Film,
  LifeBuoy,
  Radio,
  Rocket,
  Settings2,
  ShoppingBag,
  Tv,
  type LucideIcon,
} from "lucide-react";
import type { BlogPost } from "@/data/blog";
import type { TutorialItem } from "@/data/tutorials";

interface ArticleCardProps {
  item: BlogPost | TutorialItem;
  type: "blog" | "tutorial";
  horizontal?: boolean;
}

const categoryTone: Record<
  string,
  { surface: string; iconColor: string; iconSurface: string; icon: LucideIcon }
> = {
  Payments: {
    surface: "bg-gold-soft",
    iconColor: "text-gold",
    iconSurface: "bg-white/75",
    icon: CreditCard,
  },
  Company: {
    surface: "bg-brand-soft",
    iconColor: "text-brand",
    iconSurface: "bg-white/75",
    icon: Building2,
  },
  Support: {
    surface: "bg-mint-soft",
    iconColor: "text-mint-strong",
    iconSurface: "bg-white/75",
    icon: LifeBuoy,
  },
  "IPTV Basics": {
    surface: "bg-[#EFF6FF]",
    iconColor: "text-brand",
    iconSurface: "bg-white/80",
    icon: Tv,
  },
  Devices: {
    surface: "bg-[#EFF6FF]",
    iconColor: "text-brand",
    iconSurface: "bg-white/80",
    icon: Radio,
  },
  "Setup Guides": {
    surface: "bg-[#ECFDF5]",
    iconColor: "text-mint-strong",
    iconSurface: "bg-white/80",
    icon: Settings2,
  },
  Troubleshooting: {
    surface: "bg-[#ECFDF5]",
    iconColor: "text-mint-strong",
    iconSurface: "bg-white/80",
    icon: LifeBuoy,
  },
  "Streaming Quality": {
    surface: "bg-[#EFF6FF]",
    iconColor: "text-brand",
    iconSurface: "bg-white/80",
    icon: Radio,
  },
  "Business / Reseller": {
    surface: "bg-[#EFF6FF]",
    iconColor: "text-brand",
    iconSurface: "bg-white/80",
    icon: Building2,
  },
  "Buying Guides": {
    surface: "bg-[#F8FAFC]",
    iconColor: "text-ink",
    iconSurface: "bg-white/80",
    icon: ShoppingBag,
  },
  "Getting Started": {
    surface: "bg-brand-soft",
    iconColor: "text-brand",
    iconSurface: "bg-white/75",
    icon: Rocket,
  },
  Features: {
    surface: "bg-brand-soft",
    iconColor: "text-brand",
    iconSurface: "bg-white/75",
    icon: Film,
  },
};

function MediaBlock({
  category,
  type,
  image,
  title,
}: {
  category: string;
  type: "blog" | "tutorial";
  image?: { src: string; alt: string };
  title: string;
}) {
  const tone = categoryTone[category] ?? categoryTone.Company;
  const Icon = tone.icon;

  return (
    <span
      className={`relative isolate flex aspect-[16/10] w-full items-end overflow-hidden rounded-[1.5rem] p-5 sm:p-6 ${tone.surface}`}
      aria-hidden="true"
    >
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.45))]" />
        </>
      ) : (
        <>
          <span className="absolute -right-10 -top-12 h-40 w-40 rounded-full border border-current opacity-10" />
          <span className="absolute -right-2 -top-5 h-28 w-28 rounded-full border border-current opacity-10" />
        </>
      )}
      <span
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl shadow-soft ${tone.iconSurface} ${tone.iconColor}`}
      >
        <Icon size={22} strokeWidth={1.8} />
      </span>
      <span className="relative ml-auto text-[11px] font-semibold text-white">
        {type === "blog" ? "Article" : "Guide"}
      </span>
      <span className="sr-only">{title}</span>
    </span>
  );
}

export function ArticleCard({
  item,
  type,
  horizontal = false,
}: ArticleCardProps) {
  const href =
    type === "blog" ? `/blog/${item.slug}` : `/tutorials/${item.slug}`;
  const meta =
    "author" in item
      ? `${item.readingTime} · ${item.updatedAt}`
      : item.readingTime;
  const tone = categoryTone[item.category] ?? categoryTone.Company;
  const image = "featuredImage" in item ? item.featuredImage : undefined;

  if (horizontal) {
    return (
      <article className="group">
        <Link
          href={href}
          className="grid gap-8 border-y border-line py-6 sm:grid-cols-[0.92fr_1.08fr] sm:items-center sm:py-8 lg:gap-14"
        >
          <span className="overflow-hidden rounded-[1.5rem]">
            <span className="block transition-transform duration-300 group-hover:scale-[1.015]">
              <MediaBlock
                category={item.category}
                type={type}
                image={image}
                title={item.title}
              />
            </span>
          </span>
          <span className="flex flex-col py-1">
            <span className={`text-xs font-semibold ${tone.iconColor}`}>
              {item.category}
            </span>
            <h2 className="mt-3 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-ink transition-colors group-hover:text-brand sm:text-3xl">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-muted sm:text-[15px]">
              {item.excerpt}
            </p>
            <span className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4 text-sm">
              <span className="text-ink-muted">{meta}</span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-brand">
                Read {type === "blog" ? "article" : "guide"}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </span>
          </span>
        </Link>
      </article>
    );
  }

  return (
    <article className="group h-full border-t border-line pt-6">
      <Link href={href} className="flex h-full flex-col">
        <span className="overflow-hidden rounded-[1.5rem]">
          <span className="block transition-transform duration-300 group-hover:scale-[1.02]">
            <MediaBlock
              category={item.category}
              type={type}
              image={image}
              title={item.title}
            />
          </span>
        </span>
        <span className={`mt-5 text-xs font-semibold ${tone.iconColor}`}>
          {item.category}
        </span>
        <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.025em] text-ink transition-colors group-hover:text-brand sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-ink-muted">
          {item.excerpt}
        </p>
        <span className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4 text-sm">
          <span className="text-ink-muted">{meta}</span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-panel-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </span>
      </Link>
    </article>
  );
}
