import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import {
  ComplianceShieldIcon,
  TransparentQuoteIcon,
  DirectDispatchIcon,
} from "@/components/TradeIcons";
import { buildWhatsAppUrl, type SiteContent } from "@/lib/content";

interface FooterProps {
  content: SiteContent;
}

export function Footer({ content }: FooterProps) {
  const { locale, brand, nav, services, footer } = content;
  const quoteHref = buildWhatsAppUrl(
    locale === "ms"
      ? "Hai RapiWorks KL, saya ingin meminta sebut harga."
      : "Hi RapiWorks KL, I would like to request a free quotation."
  );

  const pillarIcons = [ComplianceShieldIcon, TransparentQuoteIcon, DirectDispatchIcon];

  return (
    <footer className="bg-surface-50 text-ink-900">
      {/* Bardi-style Prefooter (Light Cool Gray + 4 Balanced Columns + 3 Stacked Orange Pill Buttons) */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand, Hours & Local Base */}
          <div className="lg:col-span-4">
            <BrandMark locale={locale} tagline={brand.tagline} />
            <div className="mt-5 font-display text-sm font-bold text-navy-900">
              {brand.hoursFull}
            </div>
            <div className="mt-3 space-y-2 text-xs leading-relaxed text-ink-600">
              <p>
                <span className="font-semibold text-accent-500">
                  {locale === "ms" ? "Pangkalan Puchong: " : "Puchong Office: "}
                </span>
                {brand.addressFull}
              </p>
              <p>
                <span className="font-semibold text-accent-500">
                  {locale === "ms" ? "Liputan: " : "Service Area: "}
                </span>
                {brand.regionsLine}
              </p>
              <p>
                <span className="font-semibold text-accent-500">Email: </span>
                <a href={`mailto:${brand.email}`} className="hover:text-navy-900">
                  {brand.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold text-navy-900">
              {footer.servicesHeading}
            </h4>
            <ul className="mt-3.5 space-y-2 text-xs text-ink-600">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="transition-colors hover:text-accent-500"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="font-semibold text-navy-900 transition-colors hover:text-accent-500"
                >
                  {nav.viewAllServices}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Areas */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold text-navy-900">
              {footer.coverageHeading}
            </h4>
            <ul className="mt-3.5 space-y-2 text-xs text-ink-600">
              {brand.regions.map((region) => (
                <li key={region}>
                  <Link
                    href={`/${locale}#service-area`}
                    className="transition-colors hover:text-accent-500"
                  >
                    {region}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${locale}/projects`}
                  className="transition-colors hover:text-accent-500"
                >
                  {nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="transition-colors hover:text-accent-500"
                >
                  {nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Bardi-style 3 Stacked Orange Pill Conversion Buttons */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <a
              href={quoteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent-500 px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-600"
            >
              {nav.quoteCta}
            </a>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent-500 px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-600"
            >
              {nav.projects}
            </Link>
            <a
              href={brand.phoneHref}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent-500 px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-600"
            >
              {nav.callNow}: {brand.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* White Trust Pillars Strip (mirroring Bardi's white credentials strip above legal bar) */}
      <div className="border-t border-surface-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-7 sm:px-6 md:grid-cols-3 lg:px-8">
          {footer.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] ?? ComplianceShieldIcon;
            return (
              <div key={pillar.title} className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-xs font-bold uppercase tracking-wider text-navy-900">
                    {pillar.title}
                  </div>
                  <p className="mt-0.5 text-xs text-ink-600">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Navy Legal & Compliance Bar */}
      <div className="bg-navy-950 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2.5 px-4 py-4 text-[11px] sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <p className="font-medium text-white">{footer.copyright}</p>
          <p className="text-slate-400">{footer.complianceNote}</p>
          <p className="shrink-0 text-slate-300">
            Powered by{" "}
            <a
              href="https://acumoai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-accent-500/80 underline-offset-4 transition-colors hover:text-sky-500"
            >
              Acumo AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
