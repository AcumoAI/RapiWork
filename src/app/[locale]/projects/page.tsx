import { ProjectsGallery } from "@/components/ProjectsGallery";
import { WhatsAppComposer } from "@/components/WhatsAppComposer";
import { getContent } from "@/lib/content";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getContent(locale);

  return (
    <>
      <section className="sky-band-gradient border-b-[5px] border-accent-500 pb-14 pt-28 text-cloudy sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white/90">
            {content.projectsSection.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {content.pages.projectsTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {content.pages.projectsSubtitle}
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectsGallery content={content} />
        </div>
      </section>

      <section className="bg-navy-900 py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent-500">
              {content.bottomCta.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              {content.bottomCta.heading}
            </h2>
          </div>
          <WhatsAppComposer content={content} compact />
        </div>
      </section>
    </>
  );
}
