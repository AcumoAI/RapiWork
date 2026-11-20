import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getContent } from "@/lib/content";

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

  return (
    <div className="flex min-h-screen flex-col">
      <Header content={content} />
      <main className="flex-1">{children}</main>
      <Footer content={content} />
    </div>
  );
}
