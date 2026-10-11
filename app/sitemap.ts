import type { MetadataRoute } from "next";
import { mainNav } from "@/data/nav";
import { siteUrl } from "@/data/site";

/** Карта сайта для поисковиков: пункты меню. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = mainNav
    .filter((item) => !item.href.includes("#"))
    .map((item) => ({
      url: `${siteUrl}${item.href}`,
      changeFrequency: "weekly" as const,
    }));

  return [
    ...pages,
    { url: `${siteUrl}/song-analysis`, changeFrequency: "monthly" as const },
  ];
}
