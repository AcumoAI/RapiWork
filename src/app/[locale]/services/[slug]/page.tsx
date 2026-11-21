import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Layers,
  Phone,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ServiceTradeIcon } from "@/components/TradeIcons";
import { WhatsAppComposer } from "@/components/WhatsAppComposer";
import { FaqAccordion } from "@/components/FaqAccordion";
import { buildWhatsAppUrl, getContent } from "@/lib/content";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildPageMetadata,
  buildServiceJsonLd,
  SERVICE_SEO_KEYWORDS,
} from "@/lib/seo";

const VALID_SLUGS = [
  "aircond-installation",
  "electrical",
  "painting",
  "plaster-ceiling",
  "plumbing",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const isMs = locale === "ms";
  const content = getContent(locale);
  const service = content.services.find((s) => s.slug === slug);

  if (!service) {
    return {};
  }

  const seoData = SERVICE_SEO_KEYWORDS[slug];
  const title = seoData
    ? isMs
      ? seoData.titles.ms
      : seoData.titles.en
    : `${service.name} | RapiWorks KL`;

  const description = seoData
    ? isMs
      ? seoData.descriptions.ms
      : seoData.descriptions.en
    : service.summary;

  const keywords = seoData ? (isMs ? seoData.ms : seoData.en) : [];

  return buildPageMetadata({
    title,
    description,
    keywords,
    path: `/services/${slug}`,
    locale: isMs ? "ms" : "en",
    image: service.image,
  });
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["en", "ms"]) {
    for (const slug of VALID_SLUGS) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const content = getContent(locale);
  const service = content.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = content.services.filter((s) => s.slug !== slug);
  const relatedProjects = content.projects
    .filter((project) => project.category === service.slug)
    .slice(0, 2);
  const whatsappHref = buildWhatsAppUrl(service.whatsAppPrompt);

  const serviceSchema = buildServiceJsonLd({
    slug: service.slug,
    name: service.name,
    description: service.summary,
    image: service.image,
    locale: locale === "ms" ? "ms" : "en",
  });

  const faqSchema = buildFaqJsonLd(service.faqs);

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { name: locale === "ms" ? "Utama" : "Home", url: `/${locale}` },
    { name: locale === "ms" ? "Perkhidmatan" : "Services", url: `/${locale}/services` },
    { name: service.name, url: `/${locale}/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Split Daylight Hero Banner */}
      <section className="sky-band-gradient border-b-[5px] border-accent-500 pb-14 pt-28 text-cloudy sm:pb-16 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-white/90 hover:text-cloudy"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-cloudy" />
              {content.pages.backToServices}
            </Link>
            <p className="mt-5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white/80">
              {service.navSubtitle}
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-cloudy sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/95 sm:text-base">
              {service.summary}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent-500 px-7 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-cloudy shadow-md transition-colors hover:bg-accent-600"
              >
                <WhatsAppIcon className="h-4 w-4 text-cloudy" />
                {content.pages.requestQuoteFor} {service.shortName}
              </a>
              <a
                href={content.brand.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cloudy px-7 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-navy-900 shadow-md transition-colors hover:bg-surface-50"
              >
                <Phone className="h-4 w-4 text-accent-500" />
                {content.brand.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-800 shadow-2xl lg:col-span-5">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview + At a Glance */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-7">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent-500">
              {content.pages.overviewEyebrow}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-900 sm:text-xl">
              {service.fullDescription}
            </p>
            <div className="mt-8 border-l-2 border-accent-500 pl-5 sm:pl-6">
              <h2 className="font-display text-lg font-bold text-navy-900">
                {content.pages.approachHeading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 sm:text-base">
                {service.approach}
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-navy-800 bg-navy-900 p-6 text-white shadow-lg sm:p-7">
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent-500">
                {content.pages.atGlanceHeading}
              </h2>
              <dl className="mt-5 space-y-5">
                <div className="flex gap-3.5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <div>
                    <dt className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
                      {content.pages.timelineLabel}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-white/90">
                      {service.timeline}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <Layers className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <div>
                    <dt className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
                      {content.pages.materialsLabel}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-white/90">
                      {service.materials}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <div>
                    <dt className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
                      {content.pages.bestForLabel}
                    </dt>
                    <dd className="mt-1.5">
                      <ul className="space-y-1.5">
                        {service.idealFor.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-relaxed text-white/90"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </div>
              </dl>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 font-display text-[11px] font-bold uppercase tracking-wider text-cloudy transition-colors hover:bg-accent-600"
              >
                <WhatsAppIcon className="h-4 w-4 text-cloudy" />
                {content.pages.requestQuoteFor} {service.shortName}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Detailed Scope */}
      <section className="bg-surface-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent-500">
              {service.shortName}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              {content.pages.includedHeading}
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item, index) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-surface-100 bg-white p-6 shadow-xs"
              >
                <span className="font-display text-xs font-bold tracking-[0.16em] text-accent-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-navy-900 sm:text-[17px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {item.description}
                </p>
              </article>
            ))}

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl bg-navy-900 p-6 text-white shadow-md transition-colors hover:bg-navy-800"
            >
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-accent-500">
                  <WhatsAppIcon className="h-6 w-6 text-accent-500" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white sm:text-[17px]">
                  {content.pages.scopeCtaTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {content.pages.scopeCtaBody}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-wider text-accent-500">
                {content.pages.scopeCtaLabel}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Trade Process */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent-500">
                {content.process.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                {content.pages.processHeading}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-600">
              {content.process.subheading}
            </p>
          </div>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li
                key={step.title}
                className="relative border-t-2 border-surface-100 pt-6"
              >
                <span className="absolute -top-[17px] left-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 font-display text-xs font-bold text-cloudy">
                  {index + 1}
                </span>
                <h3 className="font-display text-base font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-surface-50 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent-500">
                  {content.projectsSection.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  {content.pages.relatedProjectsHeading}
                </h2>
              </div>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-accent-500"
              >
                {content.pages.viewAllProjects}
                <ArrowRight className="h-3.5 w-3.5 text-accent-500" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/${locale}/projects#${project.slug}`}
                  className="group overflow-hidden rounded-2xl border border-surface-100 bg-white shadow-xs transition-shadow hover:shadow-md"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-navy-900/90 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-white">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-accent-500">
                      {project.location}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-navy-900 group-hover:text-accent-500">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-600">
                      {project.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-wider text-navy-900 group-hover:text-accent-500">
                      {content.projectsSection.viewDetails}
                      <ArrowRight className="h-3.5 w-3.5 text-accent-500" />
                    </span>
                  </div>
                </Link>
              ))}

              {relatedProjects.length < 2 && (
                <Link
                  href={`/${locale}/projects`}
                  className="group flex min-h-[280px] flex-col justify-between rounded-2xl bg-navy-900 p-7 text-white shadow-md transition-colors hover:bg-navy-800"
                >
                  <div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-accent-500">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <p className="mt-5 font-display text-xl font-bold text-white">
                      {content.pages.viewAllProjects}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {content.projectsSection.subheading}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-wider text-accent-500">
                    {content.projectsSection.viewAllCta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Good to Know + Service FAQs */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-5">
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent-500">
              {service.shortName}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              {content.pages.goodToKnowHeading}
            </h2>
            <ul className="mt-6 space-y-5">
              {service.goodToKnow.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-50 text-accent-500">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-ink-600">{note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              {content.pages.faqHeading}
            </h2>
            <div className="mt-5">
              <FaqAccordion items={service.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Direct Pre-Filled WhatsApp Composer for This Trade */}
      <section className="bg-navy-900 py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent-500">
              {content.bottomCta.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              {content.pages.requestQuoteFor} {service.name}
            </h2>
          </div>
          <WhatsAppComposer content={content} defaultService={service.name} compact />
        </div>
      </section>

      {/* Other Trades */}
      <section className="bg-surface-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy-900">
            {content.pages.otherServices}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/${locale}/services/${other.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-surface-100 bg-white p-5 shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-100 bg-surface-50 text-navy-900">
                      <ServiceTradeIcon slug={other.slug} className="h-8 w-8" />
                    </div>
                    <div className="h-0.5 w-8 bg-accent-500" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-900 group-hover:text-accent-500">
                    {other.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-600">
                    {other.navSubtitle}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-accent-500">
                  {other.ctaLabel}
                  <ArrowRight className="h-3.5 w-3.5 text-accent-500" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
