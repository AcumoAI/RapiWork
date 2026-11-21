import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getContent } from "@/lib/content";
import { buildLocalBusinessJsonLd, buildWebSiteJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ms" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ms") {
    notFound();
  }

  const content = getContent(locale);
  const localBusinessSchema = buildLocalBusinessJsonLd(locale);
  const websiteSchema = buildWebSiteJsonLd();

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Header content={content} />
      <main className="flex-1">{children}</main>
      <Footer content={content} />
    </div>
  );
}
