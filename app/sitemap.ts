import type {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://duwatlstikneh.ae";
  const now = new Date();

  return [
    {
      url: `${siteUrl}/en`,
      lastModified: now
    },
    {
      url: `${siteUrl}/ar`,
      lastModified: now
    }
  ];
}