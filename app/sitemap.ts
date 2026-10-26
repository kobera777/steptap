import type { MetadataRoute } from "next";
import { legalNav, mainNav } from "@/data/nav";
import { siteUrl } from "@/data/site";

/** Карта сайта для поисковиков: пункты меню и юридические документы. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = mainNav
    .filter((item) => !item.href.includes("#"))
    .map((item) => ({
      url: `${siteUrl}${item.href}`,
      changeFrequency: "weekly" as const,
    }));

  const legal = legalNav.map((item) => ({
    url: `${siteUrl}${item.href}`,
    changeFrequency: "yearly" as const,
  }));

  return [
    ...pages,
    ...legal,
    { url: `${siteUrl}/song-analysis`, changeFrequency: "monthly" as const },
  ];
}
