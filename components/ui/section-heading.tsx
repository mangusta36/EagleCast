import { Eyebrow } from "@/components/ui/eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const eyebrowAlignment = align === "center" ? "justify-center" : "";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? <Eyebrow className={eyebrowAlignment}>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
