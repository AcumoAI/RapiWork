"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { buildWhatsAppUrl, type SiteContent } from "@/lib/content";

interface WhatsAppComposerProps {
  content: SiteContent;
  defaultService?: string;
  compact?: boolean;
}

export function WhatsAppComposer({
  content,
  defaultService,
  compact = false,
}: WhatsAppComposerProps) {
  const { locale, services, bottomCta, brand } = content;
  const [selectedService, setSelectedService] = useState<string>(
    defaultService || services[0].name
  );
  const [area, setArea] = useState<string>("");

  const message =
    locale === "ms"
      ? `Hai RapiWorks KL, saya berminat dengan servis ${selectedService}.${
          area.trim() ? ` Kawasan: ${area.trim()}.` : ""
        } Saya akan lampirkan gambar ruang/masalah di sini.`
      : `Hi RapiWorks KL, I would like a quotation for ${selectedService}.${
          area.trim() ? ` Location: ${area.trim()}.` : ""
        } I will attach photos of the work here.`;

  const href = buildWhatsAppUrl(message);

  return (
    <div
      className={`border border-white/15 bg-navy-900/75 ${
        compact ? "p-5 sm:p-6" : "p-6 sm:p-8"
      }`}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="rw-service-select"
            className="block font-display text-xs font-bold uppercase tracking-wider text-slate-300"
          >
            {bottomCta.selectServiceLabel}
          </label>
          <select
            id="rw-service-select"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="mt-2 w-full border border-white/20 bg-white px-3.5 py-3 text-sm font-medium text-navy-900 focus:border-accent-500 focus:outline-none"
          >
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option
              value={
                locale === "ms"
                  ? "Renovasi Gabungan (Pelbagai Servis)"
                  : "Full Home Renovation / Multiple Trades"
              }
            >
              {locale === "ms"
                ? "Renovasi Gabungan (Pelbagai Servis)"
                : "Full Home Renovation / Multiple Trades"}
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="rw-area-input"
            className="block font-display text-xs font-bold uppercase tracking-wider text-slate-300"
          >
            {bottomCta.selectAreaLabel}
          </label>
          <input
            id="rw-area-input"
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder={
              locale === "ms"
                ? "cth: Cheras, Puchong, Setapak"
                : "e.g. Cheras, Puchong, Setapak"
            }
            className="mt-2 w-full border border-white/20 bg-white px-3.5 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-accent-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-accent-500 px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-600"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {bottomCta.sendWhatsAppCta}
        </a>
        <a
          href={brand.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
        >
          <Phone className="h-4 w-4 text-accent-500" />
          {brand.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
