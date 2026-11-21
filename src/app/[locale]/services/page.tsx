import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ServiceTradeIcon } from "@/components/TradeIcons";
import { buildWhatsAppUrl, getContent } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildPageMetadata, GLOBAL_SEO_KEYWORDS } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isMs = locale === "ms";

  const title = isMs
    ? "5 Perkhidmatan Utama Baiki & Ubahsuai Rumah KL & Selangor | RapiWorks KL"
    : "Home Improvement & Repair Services in Kuala Lumpur & Selangor | RapiWorks KL";

  const description = isMs
    ? "5 servis teras di bawah satu kontraktor tempatan: Pemasangan aircond, pendawaian elektrik, perpaipan, siling kapur dan mengecat rumah di KL, Puchong, PJ, Subang Jaya & Cheras."
    : "Five essential home trades under one accountable contractor: Aircond installation, electrical wiring, plumbing leak repair, plaster ceiling L-box, and house painting across KL & Selangor.";

  const keywords = isMs
    ? [
        "servis rumah kuala lumpur",
        "kontraktor rumah selangor",
        "servis aircond elektrik paip puchong",
        "tukang siling dan cat petaling jaya",
        ...GLOBAL_SEO_KEYWORDS.ms,
      ]
    : [
        "home improvement services kuala lumpur",
        "home repair contractor selangor",
        "aircond electrical plumbing puchong",
        "plaster ceiling painting petaling jaya",
        ...GLOBAL_SEO_KEYWORDS.en,
      ];

  return buildPageMetadata({
    title,
    description,
    keywords,
    path: "/services",
    locale: isMs ? "ms" : "en",
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getContent(locale);
  const { pages, services, bundleBanner } = content;

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { name: locale === "ms" ? "Utama" : "Home", url: `/${locale}` },
    { name: locale === "ms" ? "Perkhidmatan" : "Services", url: `/${locale}/services` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Clean Sky Blue Page Header */}
      <section className="sky-band-gradient border-b-[5px] border-accent-500 pb-14 pt-28 text-cloudy sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white/90">
            {content.brand.regionsLine}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {pages.servicesTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {pages.servicesSubtitle}
          </p>
        </div>
      </section>

      {/* Alternating Editorial Service Rows */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={service.slug}
                className="grid items-center gap-8 overflow-hidden rounded-2xl border border-surface-100 bg-surface-50 p-6 sm:p-8 lg:grid-cols-12"
              >
                <div
                  className={`overflow-hidden rounded-xl bg-white shadow-xs lg:col-span-5 ${
                    isEven ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                </div>

                <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-surface-100 bg-white text-navy-900">
                      <ServiceTradeIcon slug={service.slug} className="h-9 w-9" />
                    </div>
                    <div>
                      <div className="h-0.5 w-8 bg-accent-500" aria-hidden="true" />
                      <h2 className="mt-1.5 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                        {service.name}
                      </h2>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">
                    {service.fullDescription}
                  </p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm font-medium text-navy-900"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href={`/${locale}/services/${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-cobalt-700"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="h-4 w-4 text-accent-500" />
                    </Link>
                    <a
                      href={buildWhatsAppUrl(service.whatsAppPrompt)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-600"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      {content.nav.quoteCta}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Multi-Trade Bundle CTA */}
      <section className="sky-band-gradient py-12 text-cloudy">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white/90">
              {bundleBanner.eyebrow}
            </p>
            <h2 className="mt-1.5 font-display text-2xl font-bold text-cloudy sm:text-3xl">
              {bundleBanner.heading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/95">
              {bundleBanner.description}
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(bundleBanner.whatsAppText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-accent-500 px-7 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-cloudy shadow-md transition-colors hover:bg-accent-600"
          >
            <WhatsAppIcon className="h-4 w-4 text-cloudy" />
            {bundleBanner.ctaLabel}
          </a>
        </div>
      </section>
    </>
  );
}
