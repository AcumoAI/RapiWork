import type { ServiceItem } from "@/lib/content";

interface IconProps {
  className?: string;
}

/**
 * Sky Blue (#0099FF), Cloudy White (#FDFDFE), Amber Red (#E8250E), and Deep Ink (#082447)
 * custom vector icons & organic blob illustrations for RapiWorks KL.
 */

export function AircondTradeIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="9" width="40" height="17" fill="#0099FF" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="21" x2="44" y2="21" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9" y="21" width="30" height="3" fill="#0099FF" />
      <rect x="35" y="13" width="5" height="2.5" fill="#E8250E" />
      <line x1="9" y1="14.25" x2="22" y2="14.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 31C12 35 10 38 7 40" stroke="#0099FF" strokeWidth="1.8" strokeLinecap="square" />
      <path d="M24 31V41" stroke="#E8250E" strokeWidth="2" strokeLinecap="square" />
      <path d="M36 31C36 35 38 38 41 40" stroke="#0099FF" strokeWidth="1.8" strokeLinecap="square" />
      <path d="M24 35L26.5 37.5L24 40L21.5 37.5L24 35Z" fill="#E8250E" />
    </svg>
  );
}

export function ElectricalTradeIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="7" y="7" width="34" height="34" fill="#0099FF" fillOpacity="0.08" stroke="currentColor" strokeWidth="2" />
      <rect x="12" y="12" width="24" height="24" stroke="#0099FF" strokeOpacity="0.4" strokeWidth="1.4" />
      <rect x="9.5" y="9.5" width="2" height="2" fill="currentColor" />
      <rect x="36.5" y="9.5" width="2" height="2" fill="currentColor" />
      <rect x="9.5" y="36.5" width="2" height="2" fill="currentColor" />
      <rect x="36.5" y="36.5" width="2" height="2" fill="currentColor" />
      <path d="M26 14L17 25.5H24L22 34L31 22.5H24L26 14Z" fill="#E8250E" stroke="#E8250E" strokeWidth="1.2" />
    </svg>
  );
}

export function PaintingTradeIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="7" y="7" width="28" height="7" fill="#0099FF" fillOpacity="0.22" />
      <rect x="7" y="10" width="28" height="11" fill="#0099FF" fillOpacity="0.08" stroke="currentColor" strokeWidth="2" />
      <rect x="7" y="10" width="28" height="3.5" fill="#E8250E" />
      <path d="M35 15.5H40V26H21V31" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      <rect x="17.5" y="31" width="7" height="12" fill="currentColor" />
      <line x1="17.5" y1="35" x2="24.5" y2="35" stroke="#0099FF" strokeWidth="2" />
    </svg>
  );
}

export function PlasterCeilingTradeIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <line x1="4" y1="10" x2="44" y2="10" stroke="currentColor" strokeWidth="2" />
      <path d="M4 10V23H15V17H33V23H44V10" fill="#0099FF" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
      <rect x="15" y="19.5" width="18" height="3" fill="#E8250E" />
      <line x1="18" y1="26" x2="16" y2="30" stroke="#0099FF" strokeWidth="1.6" />
      <line x1="24" y1="26" x2="24" y2="31" stroke="#0099FF" strokeWidth="1.6" />
      <line x1="30" y1="26" x2="32" y2="30" stroke="#0099FF" strokeWidth="1.6" />
      <rect x="8" y="23" width="4" height="2" fill="currentColor" />
      <rect x="36" y="23" width="4" height="2" fill="currentColor" />
      <line x1="8" y1="38" x2="40" y2="38" stroke="#0099FF" strokeOpacity="0.35" strokeWidth="1.6" />
    </svg>
  );
}

export function PlumbingTradeIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M10 14H24C28.4 14 32 17.6 32 22V30" stroke="currentColor" strokeWidth="7" strokeLinecap="square" />
      <path d="M10 14H24C28.4 14 32 17.6 32 22V30" stroke="#FDFDFE" strokeWidth="3" strokeLinecap="square" />
      <rect x="6" y="9" width="4" height="10" fill="currentColor" />
      <rect x="27" y="29" width="10" height="4" fill="currentColor" />
      <line x1="20" y1="6" x2="20" y2="10.5" stroke="currentColor" strokeWidth="2" />
      <line x1="14" y1="6" x2="26" y2="6" stroke="#E8250E" strokeWidth="2.5" strokeLinecap="square" />
      <path d="M32 36L35.5 41.2C36.3 42.5 35.4 44 33.9 44H30.1C28.6 44 27.7 42.5 28.5 41.2L32 36Z" fill="#0099FF" />
    </svg>
  );
}

export function ServiceTradeIcon({
  slug,
  className = "h-7 w-7",
}: {
  slug: ServiceItem["slug"];
  className?: string;
}) {
  switch (slug) {
    case "aircond-installation":
      return <AircondTradeIcon className={className} />;
    case "electrical":
      return <ElectricalTradeIcon className={className} />;
    case "painting":
      return <PaintingTradeIcon className={className} />;
    case "plaster-ceiling":
      return <PlasterCeilingTradeIcon className={className} />;
    case "plumbing":
      return <PlumbingTradeIcon className={className} />;
  }
}

/**
 * Alternating Sky Blue (#0099FF) & Amber Red (#E8250E) organic blobs
 * with Cloudy White (#FDFDFE) & Deep Ink (#082447) crisp foreground illustrations.
 */
export function WhyChooseBlobEmblem({
  index,
  className = "h-36 w-44",
}: {
  index: number;
  className?: string;
}) {
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 180 150" fill="none" className={className} aria-hidden="true">
          <path
            d="M37.5 34.5C58.2 14.2 103.5 9.8 131.8 29.4C160.1 49 167.2 91.5 144.6 118.4C122 145.3 71.8 147.8 43.2 126.1C14.6 104.4 16.8 54.8 37.5 34.5Z"
            fill="#0099FF"
          />
          <path d="M48 70L90 36L132 70V120H48V70Z" fill="#FDFDFE" stroke="#082447" strokeWidth="3.2" />
          <path d="M38 72L90 30L142 72" stroke="#082447" strokeWidth="4" strokeLinecap="square" />
          <rect x="65" y="72" width="21" height="19" fill="#DFECF7" stroke="#082447" strokeWidth="2.4" />
          <rect x="94" y="72" width="21" height="19" fill="#E8250E" stroke="#082447" strokeWidth="2.4" />
          <rect x="65" y="96" width="21" height="16" fill="#082447" />
          <rect x="94" y="96" width="21" height="16" fill="#DFECF7" stroke="#082447" strokeWidth="2.4" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 180 150" fill="none" className={className} aria-hidden="true">
          <path
            d="M28.4 48.2C40.1 20.4 81.2 12.6 117.4 22.8C153.6 33 166.5 72.1 151.2 103.5C135.9 134.9 92.6 144.2 58.1 130.6C23.6 117 16.7 76 28.4 48.2Z"
            fill="#E8250E"
          />
          <rect x="52" y="26" width="76" height="98" fill="#FDFDFE" stroke="#082447" strokeWidth="3.2" />
          <rect x="72" y="20" width="36" height="12" fill="#082447" />
          <rect x="64" y="47" width="12" height="12" fill="#0099FF" />
          <line x1="83" y1="53" x2="115" y2="53" stroke="#082447" strokeWidth="3.2" />
          <rect x="64" y="69" width="12" height="12" fill="#0099FF" />
          <line x1="83" y1="75" x2="115" y2="75" stroke="#082447" strokeWidth="3.2" />
          <rect x="64" y="91" width="12" height="12" fill="#082447" />
          <line x1="83" y1="97" x2="115" y2="97" stroke="#082447" strokeWidth="3.2" />
          <rect x="104" y="96" width="34" height="22" fill="#082447" />
          <path d="M113 107L119 112.5L130 101" stroke="#E8250E" strokeWidth="3" strokeLinecap="square" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 180 150" fill="none" className={className} aria-hidden="true">
          <path
            d="M44.6 22.8C76.2 9.4 124.8 18.2 146.3 48.9C167.8 79.6 154.2 121.4 119.5 134.8C84.8 148.2 38.4 134.6 25.1 101.3C11.8 68 13 36.2 44.6 22.8Z"
            fill="#0099FF"
          />
          <rect x="44" y="34" width="44" height="88" fill="#FDFDFE" stroke="#082447" strokeWidth="3.2" />
          <rect x="53" y="45" width="9" height="9" fill="#082447" />
          <rect x="69" y="45" width="9" height="9" fill="#082447" />
          <rect x="53" y="62" width="9" height="9" fill="#082447" />
          <rect x="69" y="62" width="9" height="9" fill="#E8250E" />
          <rect x="53" y="79" width="9" height="9" fill="#082447" />
          <rect x="69" y="79" width="9" height="9" fill="#082447" />
          <path d="M88 74L114 52L140 74V122H88V74Z" fill="#FDFDFE" stroke="#082447" strokeWidth="3.2" />
          <rect x="106" y="94" width="16" height="28" fill="#082447" />
          <rect x="106" y="78" width="16" height="10" fill="#E8250E" />
          <line x1="34" y1="122" x2="148" y2="122" stroke="#082447" strokeWidth="3.6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 180 150" fill="none" className={className} aria-hidden="true">
          <path
            d="M32.4 39.6C54.8 14.8 106.2 11.4 136.4 33.8C166.6 56.2 164.8 104.2 135.2 126.4C105.6 148.6 52.4 143.8 29.8 116.4C7.2 89 10 64.4 32.4 39.6Z"
            fill="#E8250E"
          />
          <rect x="58" y="24" width="64" height="102" fill="#FDFDFE" stroke="#082447" strokeWidth="3.2" />
          <line x1="58" y1="39" x2="122" y2="39" stroke="#082447" strokeWidth="2.4" />
          <line x1="58" y1="110" x2="122" y2="110" stroke="#082447" strokeWidth="2.4" />
          <rect x="67" y="49" width="46" height="32" fill="#DFECF7" stroke="#082447" strokeWidth="2.4" />
          <path d="M67 76L80 63L91 73L99 66L113 76" stroke="#0099FF" strokeWidth="2.8" />
          <rect x="67" y="88" width="38" height="12" fill="#082447" />
          <circle cx="90" cy="118" r="3" fill="#E8250E" />
        </svg>
      );
  }
}

export function CredibilityCircleMark({
  index,
  className = "h-24 w-24",
}: {
  index: number;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={className} aria-hidden="true">
      <circle cx="48" cy="48" r="44" fill="#0099FF" fillOpacity="0.11" />
      {index === 0 && (
        <path d="M28 48H68M48 28V68" stroke="#0099FF" strokeOpacity="0.22" strokeWidth="6" strokeLinecap="square" />
      )}
      {index === 1 && (
        <circle cx="48" cy="48" r="24" stroke="#0099FF" strokeOpacity="0.22" strokeWidth="5" />
      )}
      {index === 2 && (
        <path d="M32 50L43 61L66 36" stroke="#E8250E" strokeOpacity="0.18" strokeWidth="7" strokeLinecap="square" />
      )}
      {index === 3 && (
        <path d="M28 52L48 34L68 52V70H28V52Z" stroke="#0099FF" strokeOpacity="0.22" strokeWidth="5" />
      )}
    </svg>
  );
}

export function RapiWorksPassGraphic({ className = "h-36 w-48" }: IconProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden="true">
      <path d="M24 98L128 48L198 84L94 136L24 98Z" fill="#0099FF" fillOpacity="0.16" />
      <path d="M20 88L124 38L194 74L90 126L20 88Z" fill="#FDFDFE" stroke="#DFECF7" strokeWidth="2" />
      <path d="M20 88L58 70L128 106L90 126L20 88Z" fill="#0099FF" />
      <ellipse cx="74" cy="98" rx="18" ry="12" fill="#E8250E" />
      <path d="M68 98L73 102L82 94" stroke="#FDFDFE" strokeWidth="2.8" strokeLinecap="square" />
      <line x1="106" y1="68" x2="150" y2="90" stroke="#082447" strokeWidth="5" />
      <line x1="120" y1="60" x2="154" y2="77" stroke="#E8250E" strokeWidth="3.5" />
      <line x1="96" y1="78" x2="134" y2="97" stroke="#5E738C" strokeWidth="2.5" />
    </svg>
  );
}

export function ComplianceShieldIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <path d="M14 3L23 6.5V14.5C23 19.8 19 23.4 14 25C9 23.4 5 19.8 5 14.5V6.5L14 3Z" stroke="#FDFDFE" strokeWidth="1.8" />
      <path d="M10 14.2L12.8 17L18.5 11" stroke="#E8250E" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}

export function TransparentQuoteIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="4" width="18" height="20" stroke="#FDFDFE" strokeWidth="1.8" />
      <line x1="9" y1="10" x2="19" y2="10" stroke="#E8250E" strokeWidth="2" />
      <line x1="9" y1="14.5" x2="19" y2="14.5" stroke="#FDFDFE" strokeWidth="1.6" />
      <line x1="9" y1="19" x2="15" y2="19" stroke="#FDFDFE" strokeWidth="1.6" />
    </svg>
  );
}

export function DirectDispatchIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <path d="M4 6H24V19H13L8 23V19H4V6Z" stroke="#FDFDFE" strokeWidth="1.8" />
      <path d="M10 12.5H18" stroke="#E8250E" strokeWidth="2" />
      <path d="M15 9.5L18 12.5L15 15.5" stroke="#E8250E" strokeWidth="2" />
    </svg>
  );
}

export function DispatchPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2L20 7V15L12 22L4 15V7L12 2Z" stroke="#FDFDFE" strokeWidth="1.8" />
      <rect x="9.5" y="9.5" width="5" height="5" fill="#E8250E" />
    </svg>
  );
}
