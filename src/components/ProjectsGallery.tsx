"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Layers, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { buildWhatsAppUrl, type SiteContent } from "@/lib/content";

interface ProjectsGalleryProps {
  content: SiteContent;
}

export function ProjectsGallery({ content }: ProjectsGalleryProps) {
  const { locale, projects, services, projectsSection } = content;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const filterOptions = [
    { key: "all", label: projectsSection.allFilterLabel },
    ...services
      .filter((s) => projects.some((p) => p.category === s.slug))
      .map((s) => ({ key: s.slug, label: s.shortName })),
  ];

  return (
    <div>
      {/* Clean Sharp Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-surface-100 pb-6">
        {filterOptions.map((option) => {
          const isActive = activeCategory === option.key;
          return (
            <button
              key={option.key}
              type="button"
              onClick={() => setActiveCategory(option.key)}
              className={`rounded-full border px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition-colors ${
                isActive
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-surface-100 bg-surface-50 text-ink-600 hover:border-navy-900/30 hover:text-navy-900"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Editorial 2-Column Project Cards — Sharp Rectangles, Zero Truncation */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {filtered.map((project) => {
          const quoteHref = buildWhatsAppUrl(
            locale === "ms"
              ? `Hai RapiWorks KL, saya ingin bertanya tentang projek seperti "${project.title}" (${project.location}).`
              : `Hi RapiWorks KL, I'd like a quote for a similar project to "${project.title}" (${project.location}).`
          );

          return (
            <article
              key={project.id}
              id={project.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-surface-100 bg-white shadow-xs transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-surface-100">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold">
                  <span className="text-accent-500 uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 text-ink-600">
                    <MapPin className="h-3.5 w-3.5 text-cobalt-700" />
                    {project.location}
                  </span>
                </div>

                <h2 className="mt-2.5 font-display text-xl font-bold text-navy-900">
                  {project.title}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-500">
                  {project.propertyType}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-ink-600">
                  {project.summary}
                </p>

                <div className="mt-5 rounded-xl border-l-2 border-accent-500 bg-surface-50 px-4 py-3 text-xs text-ink-600">
                  <div className="flex items-center gap-1.5 font-display font-bold uppercase tracking-wider text-navy-900">
                    <Layers className="h-3.5 w-3.5 text-accent-500" />
                    {projectsSection.materialsLabel}
                  </div>
                  <p className="mt-1 text-sm text-ink-600">{project.materials}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-surface-100 pt-5">
                  <Link
                    href={`/${locale}/services/${project.category}`}
                    className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-accent-500"
                  >
                    {locale === "ms" ? "Lihat Servis Berkaitan" : "Related Service"}
                    <ArrowRight className="h-3.5 w-3.5 text-accent-500" />
                  </Link>
                  <a
                    href={quoteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-600"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    {locale === "ms" ? "Minta Sebut Harga" : "Request Similar Quote"}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
