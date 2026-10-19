import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { landingPages } from "@/lib/landing";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["", "/experiences", "/prices", "/visiting-liverpool", "/gift", "/faq", "/about", "/andrew-reeves", "/bring-the-hideout-to-you"];
  const landing = landingPages.map((p) => `/${p.slug}`);
  return [...core, ...landing].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : landing.includes(p) ? 0.9 : 0.7
  }));
}
