"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  buildWhatsAppUrl,
  COVERAGE_NEIGHBORHOODS,
  type SiteContent,
} from "@/lib/content";

interface ServiceAreaLookupProps {
  content: SiteContent;
}

const MAP_PINS = [
  { id: "kepong", label: "Kepong", x: 205, y: 72, region: "Kuala Lumpur" },
  { id: "setapak", label: "Setapak", x: 350, y: 66, region: "Kuala Lumpur" },
  { id: "mont-kiara", label: "Mont Kiara", x: 222, y: 128, region: "Kuala Lumpur" },
  { id: "klcc", label: "Kuala Lumpur", x: 312, y: 138, region: "Kuala Lumpur", major: true },
  { id: "pj", label: "Petaling Jaya", x: 175, y: 190, region: "Selangor" },
  { id: "cheras", label: "Cheras", x: 376, y: 206, region: "Kuala Lumpur" },
  { id: "shah-alam", label: "Shah Alam", x: 86, y: 228, region: "Selangor" },
  { id: "subang", label: "Subang Jaya", x: 145, y: 268, region: "Selangor" },
  { id: "puchong", label: "Puchong", x: 225, y: 298, region: "Selangor", isHub: true },
  { id: "cyberjaya", label: "Cyberjaya", x: 215, y: 374, region: "Cyberjaya" },
  { id: "putrajaya", label: "Putrajaya", x: 316, y: 368, region: "Putrajaya" },
];

export function ServiceAreaLookup({ content }: ServiceAreaLookupProps) {
  const { serviceArea, locale } = content;
  const [query, setQuery] = useState("");
  const [checkedArea, setCheckedArea] = useState<string | null>(null);
  const [matchedRegion, setMatchedRegion] = useState<string | null>(null);
  const [selectedPin, setSelectedPin] = useState<string>("puchong");

  function evaluateArea(rawInput: string) {
    const cleaned = rawInput.trim();
    if (!cleaned) {
      setCheckedArea(null);
      setMatchedRegion(null);
      return;
    }
    const lower = cleaned.toLowerCase();
    const match = COVERAGE_NEIGHBORHOODS.find(
      (area) =>
        area.name.toLowerCase().includes(lower) ||
        lower.includes(area.name.toLowerCase()) ||
        area.region.toLowerCase().includes(lower) ||
        area.postcodes.some((prefix) => lower.startsWith(prefix))
    );

    setCheckedArea(cleaned);
    setMatchedRegion(match ? `${match.name} (${match.region})` : null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    evaluateArea(query);
  }

  function handleSelectArea(name: string, pinId?: string) {
    setQuery(name);
    if (pinId) setSelectedPin(pinId);
    evaluateArea(name);
  }

  const areaWhatsAppHref = buildWhatsAppUrl(
    locale === "ms"
      ? `Hai RapiWorks KL, saya berada di ${matchedRegion || checkedArea || "Kuala Lumpur / Selangor"} dan ingin menyemak slot perkhidmatan.`
      : `Hi RapiWorks KL, I'm located in ${matchedRegion || checkedArea || "Kuala Lumpur / Selangor"} and would like to check your next available service slot.`
  );

  return (
    <section id="service-area" className="w-full bg-white">
      {/* Full-bleed edge-to-edge 50/50 split just like Bardi */}
      <div className="grid w-full lg:grid-cols-2">
        {/* Left Bright Sky-Blue Lookup Panel */}
        <div className="sky-band-gradient px-6 py-14 text-white sm:px-10 lg:py-16 lg:pl-12 lg:pr-14">
          <div className="ml-auto max-w-[560px]">
            <h2 className="font-display text-3xl font-semibold leading-tight text-cloudy sm:text-[34px]">
              {serviceArea.heading}
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-white/95 sm:text-[15.5px]">
              {serviceArea.description}
            </p>

            {/* White input wrapped in crisp Amber Red border + solid Amber Red check button */}
            <form
              onSubmit={handleSubmit}
              className="mt-7 flex overflow-hidden rounded-md border-2 border-accent-500 bg-cloudy shadow-md"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={serviceArea.placeholder}
                aria-label={serviceArea.placeholder}
                className="w-full bg-cloudy px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label={serviceArea.buttonLabel}
                className="inline-flex shrink-0 items-center justify-center bg-accent-500 px-5 py-3 text-white transition-colors hover:bg-accent-600"
              >
                <Check className="h-5 w-5 stroke-[2.5]" />
              </button>
            </form>

            {checkedArea && (
              <div className="mt-4 border-l-4 border-accent-500 bg-navy-900/80 p-4">
                <p className="text-sm leading-relaxed text-white">
                  {matchedRegion ? (
                    <>
                      <span className="font-semibold text-white">
                        {serviceArea.coveredPrefix} {matchedRegion}.
                      </span>{" "}
                      {serviceArea.coveredSuffix}
                    </>
                  ) : (
                    serviceArea.notFoundText
                  )}
                </p>
                <a
                  href={areaWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-accent-400 hover:underline"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 text-whatsapp" />
                  {serviceArea.whatsappAreaCta} →
                </a>
              </div>
            )}

            {/* Clean 4-col dot-bulleted city links */}
            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-2.5 sm:grid-cols-4">
              {[
                "Kuala Lumpur",
                "Cheras",
                "Setapak",
                "Kepong",
                "KLCC",
                "Mont Kiara",
                "Puchong",
                "Petaling Jaya",
                "Subang Jaya",
                "Shah Alam",
                "Putrajaya",
                "Cyberjaya",
              ].map((areaName) => (
                <button
                  key={areaName}
                  type="button"
                  onClick={() => handleSelectArea(areaName)}
                  className="group flex items-center gap-2 text-left text-[13px] font-normal text-white/95 transition-colors hover:text-white"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cloudy transition-colors group-hover:bg-accent-500" />
                  <span className="truncate">{areaName}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Full-Bleed Minimal Clean Light-Gray Map */}
        <div className="relative min-h-[360px] w-full overflow-hidden border-t border-surface-100 bg-[#F3F8FD] lg:min-h-[440px] lg:border-t-0">
          <svg
            viewBox="0 0 540 440"
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
            role="img"
            aria-label="Klang Valley service area map covering Kuala Lumpur, Selangor, Putrajaya, and Cyberjaya"
          >
            <rect width="540" height="440" fill="#F3F8FD" />

            <path
              d="M 110 80 L 420 55 L 470 210 L 390 390 L 140 410 L 65 250 Z"
              fill="#FDFDFE"
            />

            <g stroke="#DFECF7" fill="none" strokeLinecap="round">
              <path d="M 30 240 Q 170 215 312 138 T 485 68" strokeWidth="4.5" />
              <path d="M 205 20 Q 210 185 225 298 T 215 430" strokeWidth="4" />
              <path d="M 312 20 Q 325 220 316 425" strokeWidth="3" />
              <path d="M 86 228 Q 225 265 376 206 T 510 190" strokeWidth="3" />
              <path d="M 120 110 L 425 260" strokeWidth="2" />
              <path d="M 95 340 L 430 355" strokeWidth="2" />
            </g>

            <g fontSize="8.5" fill="#8DA6C0" fontWeight="600">
              <text x="142" y="218">E2</text>
              <text x="234" y="255">E11</text>
              <text x="325" y="278">E20</text>
              <text x="278" y="110">MRR2</text>
            </g>

            <text
              x="408"
              y="112"
              fill="#8DA6C0"
              fontSize="10"
              fontWeight="600"
              letterSpacing="1.8"
            >
              SELANGOR
            </text>

            {MAP_PINS.map((pin) => {
              const isSelected = selectedPin === pin.id;
              const isHub = Boolean(pin.isHub);
              return (
                <g
                  key={pin.id}
                  onClick={() => handleSelectArea(pin.label, pin.id)}
                  className="cursor-pointer"
                >
                  {(isHub || isSelected) && (
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={14}
                      fill={isHub ? "#E8250E" : "#0099FF"}
                      fillOpacity="0.16"
                    />
                  )}
                  <circle
                    cx={pin.x}
                    cy={pin.y}
                    r={isHub ? 6 : isSelected ? 5.5 : 3.8}
                    fill={isHub ? "#E8250E" : isSelected ? "#0099FF" : "#5E738C"}
                    stroke="#FDFDFE"
                    strokeWidth="2"
                  />
                  <text
                    x={pin.x + 10}
                    y={pin.y + 4}
                    fill={pin.major || isSelected || isHub ? "#082447" : "#42566E"}
                    fontSize={pin.major || isHub ? "12" : "10.5"}
                    fontWeight={pin.major || isHub || isSelected ? "700" : "500"}
                  >
                    {pin.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Subtle clean bottom-right map attribution chip */}
          <div className="absolute bottom-3 right-3 border border-surface-100 bg-white/95 px-3 py-1.5 text-[11px] font-medium text-ink-600 shadow-xs">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent-500" />
            {serviceArea.hubAddress}
          </div>
        </div>
      </div>
    </section>
  );
}
