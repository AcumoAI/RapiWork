import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  CredibilityCircleMark,
  RapiWorksPassGraphic,
  ServiceTradeIcon,
  WhyChooseBlobEmblem,
} from "@/components/TradeIcons";
import { ServiceAreaLookup } from "@/components/ServiceAreaLookup";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppComposer } from "@/components/WhatsAppComposer";
import { buildWhatsAppUrl, getContent } from "@/lib/content";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getContent(locale);
  const {
    brand,
    hero,
    credibility,
    whyChoose,
    servicesSection,
    services,
    bundleBanner,
    spotlight,
    process,
    midCallStrip,
    projectsSection,
    projects,
    faq,
    bottomCta,
  } = content;

  const heroWhatsAppHref = buildWhatsAppUrl(
    locale === "ms"
      ? "Hai RapiWorks KL, saya ingin meminta sebut harga percuma untuk rumah/premis saya."
      : "Hi RapiWorks KL, I would like to request a free quotation for my property."
  );

  const standardsCards =
    locale === "ms"
      ? [
          {
            title: "Permit Pengurusan Kondo (JMB)",
            tag: "Kuala Lumpur & Selangor",
            body: "Kami biasa dengan borang renovasi kondominium, had waktu kerja, perlindungan lif serta pendaftaran kontraktor supaya kerja berjalan lancar tanpa teguran pengurusan.",
          },
          {
            title: "Sebut Harga Bahan & Upah Jelas",
            tag: "Tiada Kos Tersembunyi",
            body: "Setiap sebut harga menyenaraikan jenama cat (Dulux, Nippon, Jotun), ketebalan paip tembaga aircond atau spesifikasi PPR secara telus sebelum kerja bermula.",
          },
          {
            title: "Ujian Akhir & Serahan Bersih",
            tag: "Setiap Kerja Diuji",
            body: "Saliran aircond, titik suis elektrik, sambungan paip dan kemasan siling diuji bersama pemilik rumah sebelum serahan—beserta pembersihan kawasan kerja.",
          },
        ]
      : [
          {
            title: "Condo JMB Permit Ready",
            tag: "Kuala Lumpur & Selangor",
            body: "Familiar with KL condominium renovation forms, working-hour windows, lift protection rules, and contractor registration so your job runs without management delays.",
          },
          {
            title: "Materials & Scope Upfront",
            tag: "Itemised Before Start",
            body: "Every quotation clearly specifies paint brands (Dulux, Nippon, Jotun), insulated copper piping, or PN16 PPR specs before any hacking, drilling, or installation begins.",
          },
          {
            title: "Tested & Tidy Handover",
            tag: "Every Fixture Checked",
            body: "We test aircond drainage gradients, electrical sockets and breakers, plumbing pressure joints, and clean up work areas thoroughly before you sign off.",
          },
        ];

  return (
    <>
      {/* 1. FULL-BLEED DAYLIGHT HERO (Vibrant Sky Blue #0099FF scrim + Cloudy White #FDFDFE copy + Amber Red #E8250E primary CTA) */}
      <section className="relative overflow-hidden border-b-[5px] border-accent-500 bg-sky-600">
        <div className="absolute inset-0">
          <img
            src="/images/hero-technician.jpg"
            alt="RapiWorks KL technician arriving at a modern Kuala Lumpur home"
            className="h-full w-full object-cover object-[82%_top] sm:object-[76%_center] lg:object-right"
          />
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 128, 224, 0.92) 0%, rgba(0, 153, 255, 0.82) 60%, rgba(0, 114, 206, 0.88) 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="hidden absolute inset-0 md:block"
            style={{
              background:
                "linear-gradient(100deg, rgba(0, 126, 222, 0.95) 0%, rgba(0, 153, 255, 0.87) 44%, rgba(0, 153, 255, 0.36) 70%, rgba(253, 253, 254, 0.08) 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
          <div className="max-w-xl">
            <h1 className="font-display text-3xl font-bold leading-[1.13] tracking-tight text-cloudy sm:text-[44px]">
              {hero.title}
            </h1>

            <p className="mt-3 font-display text-base font-medium text-cloudy sm:text-xl">
              {hero.subtitle}
            </p>

            <p className="mt-4 text-sm font-normal leading-relaxed text-white/95 sm:text-[15.5px]">
              {hero.body}
            </p>

            {/* Amber Red #E8250E Primary CTA + Cloudy White #FDFDFE Secondary CTA */}
            <div className="mt-7 flex max-w-xs flex-col gap-3">
              <a
                href={heroWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent-500 px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-cloudy shadow-lg transition-colors hover:bg-accent-600"
              >
                <WhatsAppIcon className="h-4 w-4 text-cloudy" />
                {hero.primaryCta}
              </a>

              <a
                href={brand.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-cloudy px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-navy-900 shadow-md transition-colors hover:bg-surface-50"
              >
                <Phone className="h-4 w-4 text-accent-500" />
                {hero.secondaryCta}
              </a>
            </div>

            <div className="mt-5">
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cloudy transition-opacity hover:opacity-85"
              >
                {hero.exploreServices}
                <ArrowDown className="h-3.5 w-3.5 text-cloudy" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY 4-STAT BAND (Cloudy White #FDFDFE) */}
      <section className="bg-cloudy py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-[32px]">
            {credibility.heading}
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {credibility.items.map((item, idx) => (
              <div
                key={item.label}
                className="relative flex flex-col items-center px-4 text-center"
              >
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <CredibilityCircleMark
                    index={idx}
                    className="absolute inset-0 h-24 w-24"
                  />
                  <span className="relative z-10 whitespace-nowrap font-display text-4xl font-bold tracking-tight text-navy-900 sm:text-[42px]">
                    {item.value}
                  </span>
                </div>
                <div className="-mt-1 font-display text-sm font-semibold text-navy-900 sm:text-base">
                  {item.label}
                </div>
                <p className="mt-1 max-w-[200px] text-xs font-light leading-relaxed text-ink-500">
                  {item.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY LOCAL HOMEOWNERS CHOOSE RAPIWORKS KL (Soft Cool Gray — Organic Orange Blobs + Centered H3 + Orange Divider Rule) */}
      <section className="bg-surface-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-[34px]">
              {whyChoose.heading}
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-ink-600 sm:text-[15.5px]">
              {whyChoose.subheading}
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {whyChoose.items.map((item, idx) => {
              const isExternal = item.href.startsWith("http");
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center"
                >
                  <WhyChooseBlobEmblem
                    index={idx}
                    className="h-36 w-44 transition-transform duration-300 hover:-translate-y-1"
                  />
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy-900">
                    {item.title}
                  </h3>
                  <div
                    className="my-3.5 h-[2px] w-full max-w-[210px] bg-accent-500"
                    aria-hidden="true"
                  />
                  <p className="flex-1 text-[13.5px] font-light leading-relaxed text-ink-600">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    {isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-dotted border-accent-500 pb-0.5 text-xs font-medium text-accent-600 transition-colors hover:text-navy-900"
                      >
                        {item.linkLabel}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="border-b border-dotted border-accent-500 pb-0.5 text-xs font-medium text-accent-600 transition-colors hover:text-navy-900"
                      >
                        {item.linkLabel}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES BAND (Vibrant Sky Blue #0099FF Gradient + Cloudy White #FDFDFE Cards + Amber Red #E8250E Pills) */}
      <section id="services" className="sky-band-gradient py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cloudy sm:text-[38px]">
              {servicesSection.heading}
            </h2>
            <p className="mt-1.5 font-display text-base font-semibold text-white/95 sm:text-lg">
              {servicesSection.eyebrow}
            </p>
            <p className="mt-4 text-sm font-normal leading-relaxed text-white/90 sm:text-[15px]">
              {servicesSection.subheading}
            </p>
          </div>

          {/* Dynamic Photo-Forward 3 + 2 Centered Cards (uniform rounded-2xl + rounded-xl photos + hover lift) */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group flex w-full flex-col rounded-2xl bg-cloudy p-3.5 pb-6 shadow-[0_14px_34px_rgba(0,68,140,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,56,120,0.28)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Uniform Clean Rounded Photo Frame + Floating Trade Icon Badge */}
                <Link
                  href={`/${locale}/services/${service.slug}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface-100"
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy-900/35 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cloudy/95 text-navy-900 shadow-md backdrop-blur-xs transition-transform duration-300 group-hover:scale-105">
                    <ServiceTradeIcon slug={service.slug} className="h-6 w-6" />
                  </div>
                </Link>

                {/* Crisp Scannable Copy — Larger Title & Description to Fill Card Balance */}
                <div className="flex flex-1 flex-col px-3 pb-1 pt-4 text-center">
                  <h3 className="font-display text-[22px] font-bold leading-snug tracking-tight text-navy-900 sm:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[15px] font-normal leading-relaxed text-ink-600 sm:text-base">
                    {service.cardHook}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/${locale}/services/${service.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-cloudy shadow-xs transition-colors hover:bg-accent-600"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RECENT KL PROJECTS (Soft Gray Band + Signature Bardi Dot-Grid Textured Cards + Dual Stacked Solid/Outlined Pills) */}
      <section className="bg-surface-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-[36px]">
              {projectsSection.heading}
            </h2>
            <p className="mt-1.5 font-display text-base font-medium text-ink-600 sm:text-lg">
              {projectsSection.eyebrow}
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-ink-600 sm:text-[15px]">
              {projectsSection.subheading}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => {
              const quoteHref = buildWhatsAppUrl(
                locale === "ms"
                  ? `Hai RapiWorks KL, saya ingin sebut harga untuk projek seperti "${project.title}" (${project.location}).`
                  : `Hi RapiWorks KL, I'd like a quote for a similar scope to "${project.title}" (${project.location}).`
              );
              return (
                <article
                  key={project.id}
                  className="bardi-dot-card flex flex-col overflow-hidden rounded-2xl border border-surface-100 shadow-[0_6px_26px_rgba(5,59,110,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(5,59,110,0.12)]"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-surface-100">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-center px-5 pb-6 pt-5 text-center">
                    <div className="font-display text-xl font-bold leading-tight text-navy-900">
                      {project.location.split(",")[0]}
                    </div>
                    <h3 className="mt-1 font-display text-sm font-medium text-navy-900">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-xs font-light leading-relaxed text-ink-600">
                      {project.summary}
                    </p>

                    <div className="mt-5 flex w-full flex-col gap-2">
                      <a
                        href={quoteHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-full bg-accent-500 px-4 py-2.5 font-display text-[10.5px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-600"
                      >
                        {locale === "ms" ? "Minta Sebut Harga" : "Request Similar Quote"}
                      </a>
                      <Link
                        href={`/${locale}/projects#${project.slug}`}
                        className="inline-flex w-full items-center justify-center rounded-full border border-accent-500 bg-white px-4 py-2 font-display text-[10.5px] font-bold uppercase tracking-wider text-accent-600 transition-colors hover:bg-accent-50"
                      >
                        {projectsSection.viewDetails}
                      </Link>
                    </div>

                    <p className="mt-4 text-[10.5px] leading-snug text-ink-500">
                      *{project.materials}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. MID-PAGE DEEP SKY / INK BANNER */}
      <section className="bg-navy-900 py-10 text-cloudy">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-cloudy sm:text-[28px]">
              {bundleBanner.heading}
            </h2>
            <p className="mt-1.5 text-sm font-light text-slate-200">
              {bundleBanner.description}
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(bundleBanner.whatsAppText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent-500 px-7 py-3 font-display text-xs font-bold uppercase tracking-wider text-cloudy shadow-md transition-colors hover:bg-accent-600"
          >
            {bundleBanner.ctaLabel}
          </a>
        </div>
      </section>

      {/* 7. CURVED WATERMARK CONFIDENCE BAND (Cloudy White + Sky Blue Soft Arcs) */}
      <section className="bardi-arc-band bg-cloudy py-16 sm:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-[34px]">
              {locale === "ms"
                ? "Standard Kerja Kami di Tapak"
                : "What Every Homeowner Can Expect"}
            </h2>
            <p className="mt-1.5 font-display text-base font-medium text-ink-600">
              {whyChoose.eyebrow}
            </p>
            <div className="mt-2">
              <Link
                href={`/${locale}/projects`}
                className="text-xs font-medium text-accent-600 hover:underline"
              >
                {projectsSection.viewAllCta}
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {standardsCards.map((card) => (
              <div
                key={card.title}
                className="border-t-2 border-surface-100 pt-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy-900">
                      {card.title}
                    </h3>
                    <p className="text-xs font-medium text-ink-500">{card.tag}</p>
                  </div>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-500">
                    <Check className="h-4 w-4 stroke-[2.5]" />
                  </div>
                </div>
                <p className="mt-3.5 text-[13.5px] font-light leading-relaxed text-ink-600">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OUR SERVICE PROCESS (Light Cool Gray — Bardi's staggered/centered elevated sharp white cards with orange square 1-4 badges) */}
      <section className="bg-surface-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-[34px]">
              {process.heading}
            </h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-ink-600 sm:text-[15px]">
              {process.subheading}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {process.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-surface-100 bg-white p-6 shadow-[0_6px_26px_rgba(5,59,110,0.08)] sm:p-7"
              >
                <div className="flex items-start gap-5 sm:gap-6">
                  <div className="flex w-14 shrink-0 items-center justify-center border-r border-surface-100 pr-4 font-display text-6xl font-extrabold leading-none tracking-tighter text-accent-500 select-none sm:w-16 sm:text-[68px]">
                    {step.number}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-display text-lg font-semibold text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm font-normal leading-relaxed text-ink-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. QUICK-CALL CONVERSION STRIP (Vibrant Sky Blue #0099FF Strip + Amber Red #E8250E Pill) */}
      <section className="sky-band-gradient py-8 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="font-display text-xl font-semibold text-cloudy">
            {midCallStrip.prompt}
          </p>
          <div className="mt-3.5">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-cloudy shadow-md transition-colors hover:bg-accent-600"
            >
              {midCallStrip.ctaPrefix} {brand.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* 10. ASYMMETRIC SPOTLIGHT SECTION (Cloudy White #FDFDFE + Soft Sky-Mist Card) */}
      <section className="bg-cloudy py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center lg:grid-cols-12">
            <div className="overflow-hidden rounded-2xl bg-surface-100 shadow-md lg:col-start-1 lg:col-end-8 lg:row-start-1">
              <img
                src={spotlight.image}
                alt={spotlight.imageAlt}
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>

            <div className="relative z-10 -mt-10 mx-3 rounded-2xl bg-surface-50 p-7 shadow-xl sm:mx-6 sm:p-10 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:mx-0 lg:mt-0 lg:p-12">
              <h2 className="font-display text-2xl font-semibold leading-snug text-navy-900 sm:text-[32px]">
                {spotlight.heading}
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-ink-600 sm:text-[15px]">
                {spotlight.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {spotlight.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                    <Link
                      href={spotlight.secondaryHref}
                      className="border-b border-dotted border-ink-500/50 pb-0.5 text-ink-900 transition-colors hover:border-accent-500 hover:text-navy-900"
                    >
                      {bullet}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildWhatsAppUrl(spotlight.whatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 font-display text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-600"
                >
                  {spotlight.primaryCta}
                </a>
                <Link
                  href={spotlight.secondaryHref}
                  className="inline-flex items-center justify-center rounded-full border border-sky-600 bg-cloudy px-6 py-3 font-display text-[11px] font-bold uppercase tracking-wider text-sky-600 transition-colors hover:bg-sky-500 hover:text-cloudy"
                >
                  {spotlight.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. 60/40 ASYMMETRIC SERVICE GUARANTEE & PROPERTY CARE (Diagonal Subtle Texture + Top 3px Orange Border Cards just like Bardi's Membership band) */}
      <section className="bardi-diagonal-band py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-[34px]">
              {whyChoose.guaranteeLabel}
            </h2>
            <p className="mt-1.5 font-display text-base font-medium text-ink-600 sm:text-lg">
              {locale === "ms"
                ? "Penjagaan Menyeluruh Kediaman & Premis Anda"
                : "Complete Care for KL Condos & Landed Homes"}
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-ink-600 sm:text-[15px]">
              {whyChoose.guaranteeText}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {/* 60% Left White Card with 3px accent top rule + angled pass graphic */}
            <div className="flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border-t-[3px] border-accent-500 bg-white p-7 shadow-[0_6px_26px_rgba(5,59,110,0.08)] sm:flex-row sm:items-center sm:p-9 lg:col-span-7">
              <div>
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  {locale === "ms" ? "Termasuk Dalam Setiap Kerja" : "Included on Every Job"}
                </h3>
                <p className="mt-1 text-xs font-medium text-ink-500">
                  {locale === "ms"
                    ? "Penilaian Jelas, Kerja Selamat & Kemas"
                    : "Transparent Assessment, Safe Work & Clean Handover"}
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-ink-600">
                  {hero.trustPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                      <span>{pt}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                    <span>
                      {locale === "ms"
                        ? "Perlindungan lantai & perabot semasa kerja dijalankan"
                        : "Floor & furniture masking protection while on site"}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="shrink-0 self-center">
                <RapiWorksPassGraphic className="h-32 w-44 sm:h-36 sm:w-48" />
              </div>
            </div>

            {/* 40% Right White Card with 3px accent top rule */}
            <div className="flex flex-col justify-between overflow-hidden rounded-2xl border-t-[3px] border-accent-500 bg-white p-7 shadow-[0_6px_26px_rgba(5,59,110,0.08)] sm:p-9 lg:col-span-5">
              <div>
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  {locale === "ms"
                    ? "Satu Pasukan Tempatan"
                    : "One Local Team Across 5 Trades"}
                </h3>
                <p className="mt-1 text-xs font-medium text-ink-500">
                  {brand.regionsLine}
                </p>
                <p className="mt-4 text-sm font-light leading-relaxed text-ink-600">
                  {locale === "ms"
                    ? "Daripada pemasangan aircond, pendawaian elektrik dan paip hinggalah siling kapur serta mengecat—kami menyelaraskan kesemuanya dengan jadual yang teratur."
                    : "Your aircond piping, electrical switches, concealed plumbing, plaster ceiling, and wall painting all depend on one another. Handling them under one team prevents rework and delays."}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 font-display text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-600"
                >
                  {servicesSection.viewAllLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SKY BLUE HORIZONTAL CONVERSION BANNER */}
      <section className="sky-band-gradient py-10 text-cloudy">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-cloudy sm:text-[28px]">
              {locale === "ms"
                ? "Sebut Harga Terperinci Untuk Kediaman & Premis Komersial"
                : "Transparent Itemised Quotations for Homes & Businesses"}
            </h2>
            <p className="mt-1 font-display text-sm font-semibold text-white/95">
              {locale === "ms"
                ? "Hantar Gambar di WhatsApp Untuk Anggaran Awal"
                : "Send Photos on WhatsApp for Fast Scope Confirmation"}
            </p>
            <p className="mt-2 text-xs font-normal leading-relaxed text-white/90 sm:text-sm">
              {locale === "ms"
                ? "Kami mengesahkan skop kerja, jenis bahan dan kos sebelum sebarang kerja dimulakan di kondominium, rumah teres, pejabat atau kedai."
                : "We confirm scope, materials, and pricing upfront before work begins—serving condos, landed terrace homes, offices, and retail spaces."}
            </p>
          </div>
          <a
            href={heroWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent-500 px-7 py-3 font-display text-xs font-bold uppercase tracking-wider text-cloudy shadow-md transition-colors hover:bg-accent-600"
          >
            {content.nav.whatsappUs}
          </a>
        </div>
      </section>

      {/* 13. FULL-BLEED 50/50 SERVICE AREA SPLIT + LIGHT-GRAY MAP */}
      <ServiceAreaLookup content={content} />

      {/* 14. CLEAN CENTERED FAQ ACCORDION (Cloudy White Band) */}
      <section className="bg-cloudy py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-[34px]">
              {faq.heading}
            </h2>
            <p className="mt-2 text-sm font-light text-ink-600 sm:text-base">
              {faq.subheading}
            </p>
          </div>

          <div className="mt-10">
            <FaqAccordion items={faq.items} />
          </div>
        </div>
      </section>

      {/* 15. BOTTOM CONVERSION BAND (Deep Maritime Navy — matching Bardi's bottom banner + interactive WhatsApp quote selector) */}
      <section className="bg-navy-950 py-14 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-[34px]">
              {bottomCta.heading}
            </h2>
            <p className="mt-1.5 font-display text-base font-semibold text-accent-500">
              {bottomCta.eyebrow}
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-slate-300">
              {bottomCta.description}
            </p>
          </div>

          <div className="lg:col-span-6">
            <WhatsAppComposer content={content} compact />
          </div>
        </div>
      </section>
    </>
  );
}
