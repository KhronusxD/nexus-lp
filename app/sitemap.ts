import type { MetadataRoute } from "next";
import { SITE_URL } from "./config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`,            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/teste/constancia`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Privacidade e termos moram no app (app.nucly.com.br) — ver next.config.ts.
  ];
}
