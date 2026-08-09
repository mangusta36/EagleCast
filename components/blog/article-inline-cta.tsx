import { LifeBuoy, Package, Smartphone, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

type ArticleCtaVariant =
  "trial" | "packages" | "devices" | "support" | "reseller";

interface ArticleInlineCtaProps {
  variant: ArticleCtaVariant;
  title: string;
  description: string;
  href: string;
  label: string;
}

const ctaStyles: Record<
  ArticleCtaVariant,
  {
    icon: typeof Sparkles;
    surface: string;
    iconSurface: string;
    iconColor: string;
  }
> = {
  trial: {
    icon: Sparkles,
    surface: "bg-[#EFF6FF]",
    iconSurface: "bg-white",
    iconColor: "text-brand",
  },
  packages: {
    icon: Package,
    surface: "bg-canvas-alt",
    iconSurface: "bg-white",
    iconColor: "text-brand",
  },
  devices: {
    icon: Smartphone,
    surface: "bg-canvas-alt",
    iconSurface: "bg-white",
    iconColor: "text-brand",
  },
  support: {
    icon: LifeBuoy,
    surface: "bg-[#ECFDF5]",
    iconSurface: "bg-white",
    iconColor: "text-mint-strong",
  },
  reseller: {
    icon: Package,
    surface: "bg-[#EFF6FF]",
    iconSurface: "bg-white",
    iconColor: "text-brand",
  },
};

export function ArticleInlineCta({
  variant,
  title,
  description,
  href,
  label,
}: ArticleInlineCtaProps) {
  const style = ctaStyles[variant];
  const Icon = style.icon;

  return (
    <div
      className={`mt-8 rounded-lg border border-line p-6 shadow-soft ${style.surface}`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm ${style.iconSurface} ${style.iconColor}`}
        >
          <Icon size={18} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-muted">
            {description}
          </p>
          <ButtonLink href={href} className="mt-5" withArrow>
            {label}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
