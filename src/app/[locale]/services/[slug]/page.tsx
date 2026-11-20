import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ServiceTradeIcon } from "@/components/TradeIcons";
import { WhatsAppComposer } from "@/components/WhatsAppComposer";
import { buildWhatsAppUrl, getContent } from "@/lib/content";

const VALID_SLUGS = [
  "aircond-installation",
  "electrical",
  "painting",
  "plaster-ceiling",
  "plumbing",
];

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
  const whatsappHref = buildWhatsAppUrl(service.whatsAppPrompt);

  return (
    <>
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
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-cloudy sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/95 sm:text-base">
              {service.fullDescription}
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

          <div className="overflow-hidden border border-white/15 bg-navy-800 shadow-2xl lg:col-span-5">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Scope & Ideal Use Cases */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="border border-surface-100 border-t-4 border-t-accent-500 bg-surface-50 p-7 sm:p-8">
            <h2 className="font-display text-xl font-bold text-navy-900">
              {content.pages.includedHeading}
            </h2>
            <ul className="mt-5 space-y-3.5">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm font-medium text-ink-900 sm:text-base"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-surface-100 border-t-4 border-t-navy-900 bg-white p-7 shadow-xs sm:p-8">
            <h2 className="font-display text-xl font-bold text-navy-900">
              {content.pages.idealForHeading}
            </h2>
            <ul className="mt-5 space-y-3.5">
              {service.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-ink-600 sm:text-base"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
                className="group flex flex-col justify-between border border-surface-100 bg-white p-5 shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-surface-100 bg-surface-50 text-navy-900">
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
