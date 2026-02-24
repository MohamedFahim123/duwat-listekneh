import type {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://duwat-listekneh.vercel.app/sitemap.xml"
  };
}