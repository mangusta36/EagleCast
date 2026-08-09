import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light" | "outlineLight";
  withArrow?: boolean;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: ButtonLinkProps) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold transition-[background-color,border-color,color,transform] duration-200 active:translate-y-px";
  const styles = {
    primary:
      "border border-brand bg-brand text-white shadow-emerald hover:border-brand-strong hover:bg-brand-strong",
    secondary:
      "border border-line bg-panel text-ink hover:border-ink/30 hover:bg-panel-soft",
    dark: "border border-brand bg-brand text-white hover:border-brand-strong hover:bg-brand-strong",
    light:
      "border border-white bg-white text-brand shadow-soft hover:border-[#DBEAFE] hover:bg-[#EFF6FF]",
    outlineLight:
      "border border-line bg-white text-ink hover:border-brand/35 hover:bg-panel-soft",
  }[variant];

  return (
    <Link
      href={href}
      className={[base, styles, className].filter(Boolean).join(" ")}
    >
      {children}
      {withArrow ? (
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      ) : null}
    </Link>
  );
}
