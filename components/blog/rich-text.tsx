import Link from "next/link";
import React from "react";

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderRichText(text: string) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(linkPattern)) {
    const [fullMatch, label, href] = match;
    const index = match.index ?? 0;

    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }

    const isInternal = href.startsWith("/");

    parts.push(
      isInternal ? (
        <Link
          key={`${href}-${index}`}
          href={href}
          className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:text-brand-strong"
        >
          {label}
        </Link>
      ) : (
        <a
          key={`${href}-${index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:text-brand-strong"
        >
          {label}
        </a>
      ),
    );

    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}
