import type { Metadata } from "next";

export const SITE_URL = "https://rapiworkskl.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-technician.jpg`;

export interface AreaDetail {
  name: string;
  region: string;
  postcodes: string[];
  lat?: number;
  lng?: number;
}

export const TARGET_AREAS: AreaDetail[] = [
  { name: "Kuala Lumpur", region: "Wilayah Persekutuan Kuala Lumpur", postcodes: ["50000", "50450", "50480", "55100", "56000", "57000", "58000", "59000"], lat: 3.139, lng: 101.6869 },
  { name: "Puchong", region: "Selangor", postcodes: ["47100", "47110", "47120", "47130", "47140", "47150", "47160", "47170", "47180"], lat: 3.0333, lng: 101.6167 },
  { name: "Petaling Jaya", region: "Selangor", postcodes: ["46000", "46100", "46200", "47300", "47400", "47800"], lat: 3.1073, lng: 101.6067 },
  { name: "Subang Jaya", region: "Selangor", postcodes: ["47500", "47600", "47610", "47620", "47630", "47650"], lat: 3.0567, lng: 101.5851 },
  { name: "Cheras", region: "Kuala Lumpur / Selangor", postcodes: ["56000", "56100", "43200"], lat: 3.0841, lng: 101.7335 },
  { name: "Setapak", region: "Kuala Lumpur", postcodes: ["53000", "53100", "53200", "53300"], lat: 3.1931, lng: 101.7145 },
  { name: "Kepong", region: "Kuala Lumpur", postcodes: ["52100", "52200"], lat: 3.2185, lng: 101.6375 },
  { name: "KLCC", region: "Kuala Lumpur", postcodes: ["50088", "50450"], lat: 3.1578, lng: 101.7118 },
  { name: "Ampang", region: "Kuala Lumpur / Selangor", postcodes: ["68000", "55000"], lat: 3.1499, lng: 101.7619 },
  { name: "Mont Kiara", region: "Kuala Lumpur", postcodes: ["50480"], lat: 3.1724, lng: 101.6527 },
  { name: "Bangsar", region: "Kuala Lumpur", postcodes: ["59000", "59100"], lat: 3.1292, lng: 101.667 },
  { name: "Shah Alam", region: "Selangor", postcodes: ["40000", "40100", "40150", "40400", "40460"], lat: 3.0738, lng: 101.5183 },
  { name: "Seri Kembangan", region: "Selangor", postcodes: ["43300"], lat: 3.0334, lng: 101.7068 },
  { name: "Cyberjaya", region: "Selangor", postcodes: ["63000"], lat: 2.9213, lng: 101.6559 },
  { name: "Putrajaya", region: "Wilayah Persekutuan Putrajaya", postcodes: ["62000", "62050", "62100"], lat: 2.9264, lng: 101.6964 },
];

export const SERVICE_SEO_KEYWORDS: Record<
  string,
  { en: string[]; ms: string[]; titles: { en: string; ms: string }; descriptions: { en: string; ms: string } }
> = {
  "aircond-installation": {
    titles: {
      en: "Aircond Installation & Servicing Kuala Lumpur & Selangor | Daikin, Inverter & Chemical Wash",
      ms: "Pemasangan & Servis Aircond KL & Selangor | Daikin, Inverter & Chemical Wash",
    },
    descriptions: {
      en: "Expert air conditioning installation, chemical cleaning, and gas top-up across Kuala Lumpur, Puchong, Petaling Jaya, Subang Jaya & Cheras. Transparent quotes, Daikin/Panasonic split & cassette units.",
      ms: "Servis pemasangan aircond, cuci chemical wash, dan tambah gas di Kuala Lumpur, Puchong, Petaling Jaya, Subang Jaya & Cheras. Pasang aircond Daikin, Panasonic, split dan kaset siling.",
    },
    en: [
      "aircond installation kuala lumpur",
      "aircond service kuala lumpur",
      "aircond repair selangor",
      "aircond chemical wash puchong",
      "aircond installer petaling jaya",
      "daikin aircond installation subang jaya",
      "inverter aircond service cheras",
      "cassette aircond installation klcc",
      "aircond technician ampang",
      "aircon gas refill setapak",
      "air conditioning repair kepong",
      "aircond contractor mont kiara",
      "aircond service cyberjaya",
      "aircond maintenance shah alam",
      "aircon piping installation kl",
    ],
    ms: [
      "pasang aircond kuala lumpur",
      "servis aircond puchong",
      "tukang aircond petaling jaya",
      "cuci aircond chemical cheras",
      "pasang aircond inverter subang jaya",
      "baiki aircond bocor kl",
      "servis aircond murah selangor",
      "upah pasang aircond daikin",
      "servis aircond kaset setapak",
      "tambah gas aircond r32 kepong",
      "kontraktor aircond mont kiara",
      "servis aircond shah alam",
      "servis aircond rumah kondo kl",
    ],
  },
  electrical: {
    titles: {
      en: "Electrician & Wiring Services Kuala Lumpur & Selangor | Wireman, Lighting & DB Box",
      ms: "Tukang Elektrik & Pendawaian KL & Selangor | Wireman, Pasang Lampu & Kotak DB",
    },
    descriptions: {
      en: "Licensed electrical wiring, DB box trip troubleshooting, ceiling fan & designer track lighting installation in KL, Puchong, PJ, Subang Jaya & Cheras. Suruhanjaya Tenaga compliant.",
      ms: "Perkhidmatan pendawaian elektrik, baiki DB box trip, pasang kipas siling & lampu track moden di Kuala Lumpur, Puchong, PJ, Subang Jaya & Cheras. Mematuhi piawaian Suruhanjaya Tenaga.",
    },
    en: [
      "electrician kuala lumpur",
      "wireman selangor",
      "electrical wiring puchong",
      "db box trip repair petaling jaya",
      "ceiling fan installation subang jaya",
      "lighting point installation cheras",
      "track light electrician klcc",
      "electrical contractor ampang",
      "power socket installation setapak",
      "home rewire specialist kepong",
      "commercial electrician mont kiara",
      "emergency electrician near me kl",
      "switchboard upgrade shah alam",
      "electrical repair cyberjaya",
    ],
    ms: [
      "tukang elektrik kuala lumpur",
      "wireman elektrik selangor",
      "pendawaian elektrik puchong",
      "baiki db box trip petaling jaya",
      "pasang kipas siling subang jaya",
      "tambah suis plug elektrik cheras",
      "pasang lampu track light kl",
      "upah wireman elektrik ampang",
      "tukang elektrik setapak",
      "kontraktor elektrik kepong",
      "pendawaian rumah baru shah alam",
      "tukang elektrik berhampiran kl",
    ],
  },
  painting: {
    titles: {
      en: "House Painting Services Kuala Lumpur & Selangor | Interior & Exterior Painters",
      ms: "Perkhidmatan Mengecat Rumah KL & Selangor | Tukang Cat Dalam & Luar Rumah",
    },
    descriptions: {
      en: "Professional residential & commercial house painting across KL, Puchong, Petaling Jaya, Subang Jaya & Cheras. Weatherproof exterior painting, Nippon Odour-less interior, Jotun Jotashield.",
      ms: "Tukang cat rumah berpengalaman di Kuala Lumpur, Puchong, Petaling Jaya, Subang Jaya & Cheras. Cat dalaman Nippon tanpa bau, cat luaran Jotun Jotashield tahan cuaca dan anti-kulat.",
    },
    en: [
      "house painting services kuala lumpur",
      "painting contractor selangor",
      "house painter puchong",
      "condo interior painting petaling jaya",
      "exterior weatherproof painting subang jaya",
      "wall painting contractor cheras",
      "nippon paint painter klcc",
      "jotun jotashield painting ampang",
      "commercial painter setapak",
      "skim coat wall repair kepong",
      "terrace house painting mont kiara",
      "professional house painter shah alam",
      "office repainting cyberjaya",
    ],
    ms: [
      "tukang cat rumah kuala lumpur",
      "kontraktor mengecat selangor",
      "upah cat rumah puchong",
      "cat dinding kondo petaling jaya",
      "cat luar rumah kalis air subang jaya",
      "tukang cat cheras",
      "cat rumah jotun ampang",
      "cat dalaman nippon setapak",
      "skim coat dinding retak kepong",
      "cat rumah teres 2 tingkat shah alam",
      "upah mengecat rumah murah kl",
    ],
  },
  "plaster-ceiling": {
    titles: {
      en: "Plaster Ceiling & L-Box Contractor Kuala Lumpur & Selangor | False Ceiling & LED Cove",
      ms: "Kontraktor Siling Kapur & Plaster Ceiling L-Box KL & Selangor | Lampu Cove & Downlight",
    },
    descriptions: {
      en: "Modern plaster ceiling design, perimeter L-box, warm LED cove lighting troughs, and water damage ceiling repair in KL, Puchong, PJ, Subang Jaya & Cheras. High-grade gypsum board.",
      ms: "Pemasangan siling plaster moden, rekaan L-box, ruang lampu LED cove tersembunyi, dan baiki siling kapur rosak di Kuala Lumpur, Puchong, PJ, Subang Jaya & Cheras. Papan gipsum berkualiti.",
    },
    en: [
      "plaster ceiling contractor kuala lumpur",
      "plaster ceiling selangor",
      "l box ceiling design puchong",
      "false ceiling installer petaling jaya",
      "cove light plaster ceiling subang jaya",
      "gypsum ceiling contractor cheras",
      "living hall plaster ceiling klcc",
      "water damage ceiling repair ampang",
      "downlight hole cutting setapak",
      "plaster ceiling repair kepong",
      "ceiling contractor mont kiara",
      "modern false ceiling shah alam",
      "condo plaster ceiling cyberjaya",
    ],
    ms: [
      "kontraktor siling kapur kuala lumpur",
      "tukang plaster ceiling selangor",
      "plaster ceiling l box puchong",
      "siling gantung petaling jaya",
      "siling ruang tamu moden subang jaya",
      "siling plaster lampu cove cheras",
      "baiki siling kapur bocor ampang",
      "siling kapur rumah kondo setapak",
      "tukang siling plaster kepong",
      "harga plaster ceiling shah alam",
      "pemasangan siling gipsum kl",
    ],
  },
  plumbing: {
    titles: {
      en: "Plumber & Pipe Leak Repair Kuala Lumpur & Selangor | Concealed Leak, PPR Piping & Sanitary",
      ms: "Tukang Paip & Baiki Paip Bocor KL & Selangor | Paip PPR, Tersumbat & Pemasangan Sanitari",
    },
    descriptions: {
      en: "Fast emergency plumber in KL, Puchong, Petaling Jaya, Subang Jaya & Cheras. Concealed wall pipe leak detection, durable PN16 PPR fusion piping, drain unblocking & toilet repairs.",
      ms: "Tukang paip mahir di Kuala Lumpur, Puchong, Petaling Jaya, Subang Jaya & Cheras. Kesan paip bocor dalam dinding tanpa tebuk berlebihan, tukar paip PPR tahan panas, dan baiki paip sumbat.",
    },
    en: [
      "plumber kuala lumpur",
      "plumber selangor",
      "water leak repair puchong",
      "concealed pipe leak detection petaling jaya",
      "plumbing contractor subang jaya",
      "blocked drain plumber cheras",
      "ppr pipe installation klcc",
      "toilet leaking repair ampang",
      "water heater plumber setapak",
      "kitchen sink unclog kepong",
      "emergency plumber near me kl",
      "bathroom plumbing repair mont kiara",
      "water pressure pump installation shah alam",
      "plumber cyberjaya",
    ],
    ms: [
      "tukang paip kuala lumpur",
      "tukang paip selangor",
      "baiki paip bocor puchong",
      "kesan paip bocor dalam dinding petaling jaya",
      "saluran singki tersumbat subang jaya",
      "tandas mangkuk tersumbat cheras",
      "pasang paip ppr panas sejuk kl",
      "tukar paip meter air ampang",
      "tukang paip murah setapak",
      "baiki paip air kepong",
      "tukang paip berhampiran saya kl",
      "kontraktor paip shah alam",
    ],
  },
};

export const GLOBAL_SEO_KEYWORDS: { en: string[]; ms: string[] } = {
  en: [
    "home improvement kuala lumpur",
    "home repair services selangor",
    "handyman kuala lumpur",
    "renovation contractor puchong",
    "aircond electrical plumbing contractor kl",
    "house repair petaling jaya",
    "condo maintenance subang jaya",
    "house renovation cheras",
    "home maintenance setapak",
    "contractor kepong",
    "home repair ampang",
    "commercial maintenance mont kiara",
    "home improvement shah alam",
    "home repair cyberjaya",
    "handyman putrajaya",
    "rapiworks kl",
  ],
  ms: [
    "kontraktor ubahsuai rumah kuala lumpur",
    "servis baiki rumah selangor",
    "tukang rumah puchong",
    "kontraktor baiki kondo petaling jaya",
    "servis aircond elektrik paip subang jaya",
    "tukang baiki rumah cheras",
    "ubahsuai rumah setapak",
    "tukang kemasan rumah kepong",
    "kontraktor selenggara rumah ampang",
    "baiki rumah mont kiara",
    "servis membaiki rumah shah alam",
    "tukang rumah cyberjaya",
    "kontraktor pembaikan rumah putrajaya",
    "rapiworks kl",
  ],
};

interface MetadataOptions {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  locale: "en" | "ms";
  image?: string;
}

export function buildPageMetadata({
  title,
  description,
  keywords,
  path,
  locale,
  image = DEFAULT_OG_IMAGE,
}: MetadataOptions): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}/${locale}${cleanPath === "/" ? "" : cleanPath}`;
  const enUrl = `${SITE_URL}/en${cleanPath === "/" ? "" : cleanPath}`;
  const msUrl = `${SITE_URL}/ms${cleanPath === "/" ? "" : cleanPath}`;

  const finalTitle = title.includes("RapiWorks KL")
    ? title
    : `${title} | RapiWorks KL`;

  return {
    title: { absolute: finalTitle },
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        ms: msUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: finalTitle,
      description,
      url: canonicalUrl,
      siteName: "RapiWorks KL",
      locale: locale === "ms" ? "ms_MY" : "en_MY",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
      images: [image],
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
}

export function buildLocalBusinessJsonLd(locale: "en" | "ms" = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "RapiWorks KL - Home Improvement & Repair Services",
    alternateName: "RapiWorks KL",
    url: SITE_URL,
    logo: `${SITE_URL}/images/hero-technician.jpg`,
    image: [
      `${SITE_URL}/images/hero-technician.jpg`,
      `${SITE_URL}/images/work/living-lbox-cassette.jpg`,
      `${SITE_URL}/images/work/aircond-split-bedroom.jpg`,
    ],
    telephone: "+601121206259",
    email: "hello@rapiworkskl.com",
    priceRange: "RM",
    currenciesAccepted: "MYR",
    paymentAccepted: "Cash, Online Banking, DuitNow, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Seri Manja Square One",
      addressLocality: "Puchong",
      addressRegion: "Selangor",
      postalCode: "47100",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.0673,
      longitude: 101.6547,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: TARGET_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: area.region,
      },
      ...(area.lat && area.lng
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: area.lat,
              longitude: area.lng,
            },
          }
        : {}),
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "ms" ? "Perkhidmatan Baiki & Ubahsuai Rumah" : "Home Improvement & Repair Trades",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: locale === "ms" ? "Pemasangan & Servis Aircond" : "Aircond Installation & Servicing",
          url: `${SITE_URL}/${locale}/services/aircond-installation`,
        },
        {
          "@type": "OfferCatalog",
          name: locale === "ms" ? "Pendawaian & Kerja Elektrik" : "Electrical Works & Wiring",
          url: `${SITE_URL}/${locale}/services/electrical`,
        },
        {
          "@type": "OfferCatalog",
          name: locale === "ms" ? "Perkhidmatan Mengecat Rumah" : "House Painting Services",
          url: `${SITE_URL}/${locale}/services/painting`,
        },
        {
          "@type": "OfferCatalog",
          name: locale === "ms" ? "Siling Kapur & Plaster Ceiling" : "Plaster Ceiling & False Ceiling",
          url: `${SITE_URL}/${locale}/services/plaster-ceiling`,
        },
        {
          "@type": "OfferCatalog",
          name: locale === "ms" ? "Tukang Paip & Baiki Paip Bocor" : "Plumbing Repair & Pipe Replacement",
          url: `${SITE_URL}/${locale}/services/plumbing`,
        },
      ],
    },
  };
}

export function buildServiceJsonLd({
  slug,
  name,
  description,
  image,
  locale = "en",
}: {
  slug: string;
  name: string;
  description: string;
  image?: string;
  locale?: "en" | "ms";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/${locale}/services/${slug}#service`,
    name,
    serviceType: name,
    description,
    url: `${SITE_URL}/${locale}/services/${slug}`,
    image: image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : DEFAULT_OG_IMAGE,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "RapiWorks KL",
      telephone: "+601121206259",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Seri Manja Square One",
        addressLocality: "Puchong",
        addressRegion: "Selangor",
        postalCode: "47100",
        addressCountry: "MY",
      },
    },
    areaServed: TARGET_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: area.region,
      },
    })),
  };
}

export function buildFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item : `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "RapiWorks KL",
    url: SITE_URL,
    description: "Reliable home improvement, aircond, electrical, plumbing, plaster ceiling, and house painting services in Kuala Lumpur, Selangor, Putrajaya & Cyberjaya.",
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
    inLanguage: ["en-MY", "ms-MY"],
  };
}
