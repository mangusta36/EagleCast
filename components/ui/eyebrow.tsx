interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  tone?: "brand" | "light" | "mint";
}

export function Eyebrow({ children, className = "", tone = "brand" }: EyebrowProps) {
  const tones = {
    brand: "text-brand before:bg-brand",
    light: "text-sky before:bg-sky",
    mint: "text-mint-strong before:bg-mint",
  }[tone];

  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[13px] font-semibold before:h-2 before:w-2 before:rounded-full ${tones} ${className}`}
    >
      {children}
    </span>
  );
}
