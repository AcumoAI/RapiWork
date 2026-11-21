import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { DEFAULT_OG_IMAGE, GLOBAL_SEO_KEYWORDS, SITE_URL } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#005691",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RapiWorks KL | Aircond, Electrical, Plumbing, Plaster Ceiling & Painting Services in Kuala Lumpur & Selangor",
    template: "%s | RapiWorks KL",
  },
  description:
    "Professional home improvement, aircond servicing & installation, licensed electrical wiring, plumbing leak repair, modern plaster ceiling L-box, and house painting across Kuala Lumpur, Puchong, Petaling Jaya, Subang Jaya & Cheras.",
  keywords: [
    ...GLOBAL_SEO_KEYWORDS.en,
    ...GLOBAL_SEO_KEYWORDS.ms,
  ],
  authors: [{ name: "RapiWorks KL", url: SITE_URL }],
  creator: "RapiWorks KL",
  publisher: "RapiWorks KL",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      en: `${SITE_URL}/en`,
      ms: `${SITE_URL}/ms`,
      "x-default": `${SITE_URL}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    alternateLocale: ["ms_MY"],
    url: SITE_URL,
    siteName: "RapiWorks KL",
    title: "RapiWorks KL | Aircond, Electrical, Plumbing, Plaster Ceiling & Painting",
    description:
      "Reliable home improvement, air conditioning installation, electrical, plumbing, plaster ceiling, and house painting services across Kuala Lumpur, Selangor, Putrajaya & Cyberjaya.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "RapiWorks KL - Home Improvement & Repair Specialists in Kuala Lumpur & Selangor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RapiWorks KL | Home Improvement & Repair in KL & Selangor",
    description:
      "Trusted local contractor for Aircond, Electrical, Plumbing, Plaster Ceiling & Painting across KL & Selangor.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-white text-ink-900 antialiased">{children}</body>
    </html>
  );
}
