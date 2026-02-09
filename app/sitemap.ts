import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cd-elec.fr";
  const lastUpdate = new Date("2025-02-04");

  return [
    {
      url: baseUrl,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: lastUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
