import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const SLUGS = [
  "aircond-installation",
  "electrical",
  "painting",
  "plaster-ceiling",
  "plumbing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Root / Home
  const homeEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          ms: `${SITE_URL}/ms`,
        },
      },
    },
    {
      url: `${SITE_URL}/ms`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          ms: `${SITE_URL}/ms`,
        },
      },
    },
  ];

  // Services overview
  const servicesOverviewEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/en/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/services`,
          ms: `${SITE_URL}/ms/services`,
        },
      },
    },
    {
      url: `${SITE_URL}/ms/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/services`,
          ms: `${SITE_URL}/ms/services`,
        },
      },
    },
  ];

  // Individual service pages
  const serviceDetailEntries: MetadataRoute.Sitemap = SLUGS.flatMap((slug) => [
    {
      url: `${SITE_URL}/en/services/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/services/${slug}`,
          ms: `${SITE_URL}/ms/services/${slug}`,
        },
      },
    },
    {
      url: `${SITE_URL}/ms/services/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/services/${slug}`,
          ms: `${SITE_URL}/ms/services/${slug}`,
        },
      },
    },
  ]);

  // Projects page
  const projectsEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/en/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/projects`,
          ms: `${SITE_URL}/ms/projects`,
        },
      },
    },
    {
      url: `${SITE_URL}/ms/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/projects`,
          ms: `${SITE_URL}/ms/projects`,
        },
      },
    },
  ];

  // Contact page
  const contactEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/en/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/contact`,
          ms: `${SITE_URL}/ms/contact`,
        },
      },
    },
    {
      url: `${SITE_URL}/ms/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/contact`,
          ms: `${SITE_URL}/ms/contact`,
        },
      },
    },
  ];

  return [
    ...homeEntries,
    ...servicesOverviewEntries,
    ...serviceDetailEntries,
    ...projectsEntries,
    ...contactEntries,
  ];
}
