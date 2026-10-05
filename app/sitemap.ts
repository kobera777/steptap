import type { MetadataRoute } from "next";
import { mainNav } from "@/data/nav";
import { danceStyles, styleHref } from "@/data/directions";
import { siteUrl } from "@/data/site";

/** Карта сайта для поисковиков: пункты меню + страницы направлений. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = mainNav
    .filter((item) => !item.href.includes("#"))
    .map((item) => ({
      url: `${siteUrl}${item.href}`,
      changeFrequency: "weekly" as const,
    }));

  const styles = danceStyles.map((style) => ({
    url: `${siteUrl}${styleHref(style)}`,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...pages,
    ...styles,
    { url: `${siteUrl}/song-analysis`, changeFrequency: "monthly" as const },
  ];
}
