import type { MetadataRoute } from "next";
import { mainNav } from "@/data/nav";
import { getAlbums } from "@/data/gallery";
import { siteUrl } from "@/data/site";

/** Карта сайта для поисковиков: пункты меню + альбомы галереи. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = mainNav
    .filter((item) => !item.href.includes("#"))
    .map((item) => ({
      url: `${siteUrl}${item.href}`,
      changeFrequency: "weekly" as const,
    }));

  const albums = getAlbums().map((album) => ({
    url: `${siteUrl}/gallery/${album.slug}`,
    lastModified: new Date(album.date),
    changeFrequency: "monthly" as const,
  }));

  return [
    ...pages,
    { url: `${siteUrl}/song-analysis`, changeFrequency: "monthly" as const },
    ...albums,
  ];
}
