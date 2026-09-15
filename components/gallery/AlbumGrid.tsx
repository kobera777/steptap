"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  categoryLabels,
  formatAlbumDate,
  formatMediaCount,
  type GalleryAlbum,
  type GalleryCategory,
} from "@/data/gallery";

type Filter = "all" | GalleryCategory;

export function AlbumGrid({ albums }: { albums: GalleryAlbum[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const result: Partial<Record<GalleryCategory, number>> = {};
    for (const album of albums) {
      result[album.category] = (result[album.category] ?? 0) + 1;
    }
    return result;
  }, [albums]);

  const visible =
    filter === "all"
      ? albums
      : albums.filter((album) => album.category === filter);

  const filters: { value: Filter; label: string; count: number }[] = [
    { value: "all", label: "ВСЕ", count: albums.length },
    ...(Object.keys(categoryLabels) as GalleryCategory[])
      .filter((category) => counts[category])
      .map((category) => ({
        value: category,
        label: categoryLabels[category],
        count: counts[category] ?? 0,
      })),
  ];

  return (
    <>
      <div className="gal-filters" role="group" aria-label="Фильтр по категории">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            className={filter === item.value ? "is-active" : undefined}
            aria-pressed={filter === item.value}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
            <small>{item.count}</small>
          </button>
        ))}
      </div>

      <div className="gal-albums">
        {visible.map((album, index) => {
          const featured = album.featured && filter === "all";

          return (
            <Link
              key={album.slug}
              href={`/gallery/${album.slug}`}
              className={`gal-album ${featured ? "is-featured" : ""}`}
            >
              <div className="gal-album-cover">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  priority={index < 2}
                  sizes={
                    featured
                      ? "(max-width: 640px) 100vw, (max-width: 1000px) 90vw, 60vw"
                      : "(max-width: 640px) 100vw, (max-width: 1000px) 45vw, 30vw"
                  }
                />
                <span className="gal-album-date">{formatAlbumDate(album.date)}</span>
                <span className="gal-album-category">
                  {categoryLabels[album.category]}
                </span>
              </div>

              <div className="gal-album-body">
                <div>
                  <h3>{album.title}</h3>
                  <small>{formatMediaCount(album)}</small>
                </div>
                <span className="gal-album-arrow" aria-hidden="true">
                  →
                </span>
              </div>
            </Link>
          );
        })}

        {visible.length === 0 && (
          <p className="gal-empty">В этой категории пока нет альбомов.</p>
        )}
      </div>
    </>
  );
}
