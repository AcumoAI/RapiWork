"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X, ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ServiceTradeIcon } from "@/components/TradeIcons";
import { buildWhatsAppUrl, type SiteContent } from "@/lib/content";

interface HeaderProps {
  content: SiteContent;
}

export function Header({ content }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const { locale, brand, nav, services } = content;
  const otherLocale = locale === "en" ? "ms" : "en";
  const switchedPath = pathname
    ? pathname.replace(/^\/(en|ms)/, `/${otherLocale}`)
    : `/${otherLocale}`;

  const quoteHref = buildWhatsAppUrl(
    locale === "ms"
      ? "Hai RapiWorks KL, saya ingin mendapatkan sebut harga percuma."
      : "Hi RapiWorks KL, I would like to request a free quotation."
  );

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3.5 z-50 px-3 sm:px-6">
      <div className="pointer-events-auto mx-auto max-w-6xl">
        {/* Centered Rounded Floating Navbar Pill */}
        <div className="flex items-center justify-between gap-4 rounded-full border border-sky-500/20 bg-cloudy/95 px-4 py-2.5 shadow-[0_10px_32px_rgba(0,119,214,0.16)] backdrop-blur-md sm:px-6">
          {/* Left: Compact Brand Mark */}
          <BrandMark locale={locale} tagline={brand.tagline} compact />

          {/* Center: Clean 4-Item Navigation */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main Navigation">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
                className={`inline-flex items-center gap-1 py-1.5 text-[13.5px] font-medium transition-colors ${
                  pathname?.includes("/services")
                    ? "text-accent-500"
                    : "text-ink-900 hover:text-navy-900"
                }`}
              >
                {nav.services}
                <ChevronDown
                  className={`h-3.5 w-3.5 text-accent-500 transition-transform duration-150 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 top-full w-[440px] -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-2xl border border-surface-100 bg-white shadow-2xl">
                    <div className="h-1 w-full bg-accent-500" />
                    <div className="divide-y divide-surface-100 p-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/${locale}/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-center justify-between gap-3.5 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-surface-50"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-surface-100 bg-surface-50 text-navy-900 transition-colors group-hover:border-accent-500/40 group-hover:bg-white">
                              <ServiceTradeIcon slug={service.slug} className="h-7 w-7" />
                            </div>
                            <div>
                              <div className="font-display text-sm font-semibold text-navy-900 group-hover:text-accent-500">
                                {service.name}
                              </div>
                              <div className="mt-0.5 text-xs text-ink-500">
                                {service.navSubtitle}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-accent-500" />
                        </Link>
                      ))}
                    </div>
                    <div className="bg-surface-50 px-5 py-3">
                      <Link
                        href={`/${locale}/services`}
                        onClick={() => setServicesOpen(false)}
                        className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-accent-500"
                      >
                        {nav.viewAllServices}
                        <ArrowRight className="h-3.5 w-3.5 text-accent-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/projects`}
              className={`text-[13.5px] font-medium transition-colors ${
                pathname?.includes("/projects")
                  ? "text-accent-500"
                  : "text-ink-900 hover:text-accent-500"
              }`}
            >
              {nav.projects}
            </Link>

            <Link
              href={`/${locale}#service-area`}
              className="text-[13.5px] font-medium text-ink-900 transition-colors hover:text-accent-500"
            >
              {nav.coverage}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className={`text-[13.5px] font-medium transition-colors ${
                pathname?.includes("/contact")
                  ? "text-accent-500"
                  : "text-ink-900 hover:text-accent-500"
              }`}
            >
              {nav.contact}
            </Link>
          </nav>

          {/* Right: Language Switcher + Phone + Primary Orange Pill CTA */}
          <div className="hidden items-center gap-3.5 lg:flex">
            <div
              className="inline-flex items-center rounded-full border border-surface-100 bg-surface-50 p-0.5 text-[10.5px] font-semibold"
              role="group"
              aria-label="Language Switcher"
            >
              <Link
                href={locale === "en" ? pathname || "/en" : switchedPath}
                className={`rounded-full px-2.5 py-0.5 transition-colors ${
                  locale === "en"
                    ? "bg-sky-500 text-white"
                    : "text-ink-600 hover:text-navy-900"
                }`}
              >
                EN
              </Link>
              <Link
                href={locale === "ms" ? pathname || "/ms" : switchedPath}
                className={`rounded-full px-2.5 py-0.5 transition-colors ${
                  locale === "ms"
                    ? "bg-sky-500 text-white"
                    : "text-ink-600 hover:text-navy-900"
                }`}
              >
                BM
              </Link>
            </div>

            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-1.5 font-display text-[13px] font-bold text-navy-900 transition-colors hover:text-accent-500"
            >
              <Phone className="h-3.5 w-3.5 text-accent-500" />
              {brand.phoneDisplay}
            </a>

            <a
              href={quoteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-5 py-2 font-display text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-600"
            >
              {nav.quoteCta}
            </a>
          </div>

          {/* Mobile Actions inside Floating Pill */}
          <div className="flex items-center gap-2 lg:hidden">
            <div
              className="inline-flex items-center rounded-full border border-surface-100 bg-surface-50 p-0.5 text-[10.5px] font-semibold"
              role="group"
              aria-label="Language Switcher"
            >
              <Link
                href={locale === "en" ? pathname || "/en" : switchedPath}
                className={`rounded-full px-2 py-0.5 ${
                  locale === "en" ? "bg-sky-500 text-white" : "text-ink-600"
                }`}
              >
                EN
              </Link>
              <Link
                href={locale === "ms" ? pathname || "/ms" : switchedPath}
                className={`rounded-full px-2 py-0.5 ${
                  locale === "ms" ? "bg-sky-500 text-white" : "text-ink-600"
                }`}
              >
                BM
              </Link>
            </div>
            <a
              href={brand.phoneHref}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-100 bg-surface-50 text-navy-900"
              aria-label={`${nav.callNow} ${brand.phoneDisplay}`}
            >
              <Phone className="h-4 w-4 text-accent-500" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-white"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Floating Drawer */}
        {mobileOpen && (
          <div className="mt-2.5 overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-2xl lg:hidden">
            <div className="space-y-1 px-4 py-4">
              <Link
                href={`/${locale}`}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 font-display text-sm font-semibold text-navy-900 hover:bg-surface-50"
              >
                {nav.home}
              </Link>
              <div className="pt-1.5">
                <div className="px-3 pb-1 font-display text-[11px] font-bold uppercase tracking-wider text-accent-500">
                  {nav.services}
                </div>
                <div className="space-y-0.5 pl-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${locale}/services/${service.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-1.5 text-sm font-medium text-ink-600 hover:bg-surface-50 hover:text-navy-900"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href={`/${locale}/services`}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-cobalt-700 hover:bg-surface-50"
                  >
                    {nav.viewAllServices} →
                  </Link>
                </div>
              </div>
              <Link
                href={`/${locale}/projects`}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 font-display text-sm font-semibold text-navy-900 hover:bg-surface-50"
              >
                {nav.projects}
              </Link>
              <Link
                href={`/${locale}#service-area`}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 font-display text-sm font-semibold text-navy-900 hover:bg-surface-50"
              >
                {nav.coverage}
              </Link>
              <Link
                href={`/${locale}/contact`}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 font-display text-sm font-semibold text-navy-900 hover:bg-surface-50"
              >
                {nav.contact}
              </Link>

              <div className="grid grid-cols-2 gap-2.5 pt-3">
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy-900 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-navy-900"
                >
                  <Phone className="h-3.5 w-3.5 text-accent-500" />
                  {brand.phoneDisplay}
                </a>
                <a
                  href={quoteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  {nav.whatsappUs}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
