import Link from "next/link";

interface LogoProps {
  href?: string;
  inverse?: boolean;
}

export function Logo({ href = "/", inverse = false }: LogoProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-lg"
      aria-label="EagleCast TV home"
    >
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-brand shadow-soft transition-transform duration-200 group-hover:-rotate-2">
        <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden="true">
          <path
            d="M15 12.8c0-1 1.1-1.6 2-1.1l11.2 6.5c.9.5.9 1.8 0 2.3L17 27c-.9.5-2-.1-2-1.1V12.8Z"
            fill="white"
          />
          <path
            d="M9.5 13.5a10 10 0 0 0 0 13"
            fill="none"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity=".72"
          />
        </svg>
      </span>
      <span
        className={`font-display text-lg font-bold tracking-[-0.03em] ${inverse ? "text-white" : "text-ink"}`}
      >
        EagleCast TV
      </span>
    </Link>
  );
}
