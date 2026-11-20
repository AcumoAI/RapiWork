import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RapiWorks KL | Home Improvement, Aircond & Repair Services in Kuala Lumpur",
  description:
    "Reliable Aircond Installation, Electrical, Plumbing, Plaster Ceiling, and House Painting services across Kuala Lumpur, Selangor, Putrajaya & Cyberjaya.",
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
