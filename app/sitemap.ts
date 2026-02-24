import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://duwat-listekneh.vercel.app";
  const now = new Date();

  return [
    {
      url: `${siteUrl}/en`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/ar`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/en/home`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/ar/home`,
      lastModified: now,
    },
  ];
}
