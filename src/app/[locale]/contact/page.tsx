import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppComposer } from "@/components/WhatsAppComposer";
import { ServiceAreaLookup } from "@/components/ServiceAreaLookup";
import { getContent } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildPageMetadata, GLOBAL_SEO_KEYWORDS } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isMs = locale === "ms";

  const title = isMs
    ? "Hubungi RapiWorks KL | Sebut Harga Pantas WhatsApp & Liputan Lembah Klang"
    : "Contact RapiWorks KL | Fast WhatsApp Quote & Klang Valley Service Dispatch";

  const description = isMs
    ? "Hubungi RapiWorks KL di 011-2120 6259 atau pangkalan operasi Seri Manja Square One di Puchong. Sebut harga telus untuk servis aircond, elektrik, paip, siling kapur & cat rumah di KL & Selangor."
    : "Contact RapiWorks KL at 011-2120 6259 or our Seri Manja Square One dispatch hub in Puchong. Instant WhatsApp quotes for aircond, electrical, plumbing, plaster ceiling & painting across KL & Selangor.";

  const keywords = isMs
    ? [
        "hubungi tukang rumah kl",
        "nombor kontraktor puchong",
        "whatsapp tukang aircond elektrik",
        "kontraktor seri manja square one",
        ...GLOBAL_SEO_KEYWORDS.ms,
      ]
    : [
        "contact home contractor kuala lumpur",
        "puchong renovation contractor phone",
        "whatsapp electrician plumber kl",
        "rapiworks contact number",
        ...GLOBAL_SEO_KEYWORDS.en,
      ];

  return buildPageMetadata({
    title,
    description,
    keywords,
    path: "/contact",
    locale: isMs ? "ms" : "en",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getContent(locale);
  const { brand, pages, bottomCta } = content;

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { name: locale === "ms" ? "Utama" : "Home", url: `/${locale}` },
    { name: locale === "ms" ? "Hubungi Kami" : "Contact", url: `/${locale}/contact` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="sky-band-gradient border-b-[5px] border-accent-500 pb-14 pt-28 text-cloudy sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white/90">
            {brand.regionsLine}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {pages.contactTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {pages.contactSubtitle}
          </p>
        </div>
      </section>

      <section className="bg-surface-50 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Direct Contact Details */}
          <div className="space-y-4 lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-surface-100 border-t-4 border-t-accent-500 bg-white p-6 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <Phone className="h-5 w-5 text-accent-500" />
                </div>
                <div>
                  <div className="font-display text-xs font-bold uppercase tracking-wider text-ink-500">
                    Phone & WhatsApp
                  </div>
                  <a
                    href={brand.phoneHref}
                    className="mt-1 block font-display text-xl font-bold text-navy-900 hover:text-accent-500"
                  >
                    {brand.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-surface-100 bg-white p-6 shadow-xs">
              <div className="space-y-4 text-sm text-ink-600">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <div>
                    <div className="font-display text-xs font-bold uppercase tracking-wider text-navy-900">
                      {bottomCta.hoursLabel}
                    </div>
                    <p className="mt-0.5">{brand.hoursFull}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <div>
                    <div className="font-display text-xs font-bold uppercase tracking-wider text-navy-900">
                      {bottomCta.addressLabel}
                    </div>
                    <p className="mt-0.5">{brand.addressFull}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <div>
                    <div className="font-display text-xs font-bold uppercase tracking-wider text-navy-900">
                      Email
                    </div>
                    <a
                      href={`mailto:${brand.email}`}
                      className="mt-0.5 block hover:text-accent-500"
                    >
                      {brand.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive WhatsApp Quote Builder */}
          <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-md sm:p-8 lg:col-span-7">
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent-500">
              {bottomCta.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white">
              {bottomCta.heading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {bottomCta.description}
            </p>
            <div className="mt-6">
              <WhatsAppComposer content={content} compact />
            </div>
          </div>
        </div>
      </section>

      <ServiceAreaLookup content={content} />
    </>
  );
}
