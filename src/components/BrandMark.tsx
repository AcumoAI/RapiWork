import Link from "next/link";
import type { Locale } from "@/lib/content";

interface BrandMarkProps {
  locale: Locale;
  tagline: string;
  inverted?: boolean;
  compact?: boolean;
}

export function BrandMark({
  locale,
  tagline,
  inverted = false,
  compact = false,
}: BrandMarkProps) {
  return (
    <Link
      href={`/${locale}`}
      className="group inline-flex items-center gap-2 focus:outline-none"
      aria-label="rapiwork KL Home"
    >
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline">
          <span
            className={`font-display font-bold tracking-[-0.03em] ${
              compact ? "text-[20px] sm:text-[22px]" : "text-[26px] sm:text-[28px]"
            } ${inverted ? "text-white" : "text-navy-900"}`}
          >
            rapiwork
          </span>
          <span
            className={`ml-0.5 inline-block rounded-full bg-accent-500 transition-transform duration-200 group-hover:scale-125 ${
              compact ? "h-1.5 w-1.5" : "h-2 w-2"
            }`}
            aria-hidden="true"
          />
          <span
            className={`ml-1 font-display font-bold uppercase tracking-[0.14em] ${
              compact ? "text-[10.5px]" : "text-xs"
            } ${inverted ? "text-sky-500" : "text-sky-500"}`}
          >
            KL
          </span>
        </div>
        {!compact && (
          <span
            className={`mt-1 text-[10.5px] font-medium tracking-[0.06em] ${
              inverted ? "text-slate-300" : "text-ink-500"
            }`}
          >
            {tagline}
          </span>
        )}
      </div>
    </Link>
  );
}
