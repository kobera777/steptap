"use client";

import { useState } from "react";
import { PhotoGrid } from "@/components/gallery/PhotoGrid";
import {
  categoryLabels,
  type CategorizedPhoto,
  type GalleryCategory,
} from "@/data/gallery";

type Filter = "all" | GalleryCategory;

/**
 * Фото с фильтром по категориям. Нажатие на снимок открывает его крупно
 * (PhotoGrid). Категории без фотографий в фильтре не показываются.
 */
export function GalleryGrid({ photos }: { photos: CategorizedPhoto[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const count = (category: GalleryCategory) =>
    photos.filter((item) => item.category === category).length;

  const filters: { value: Filter; label: string; count: number }[] = [
    { value: "all", label: "ВСЕ", count: photos.length },
    ...(Object.keys(categoryLabels) as GalleryCategory[])
      .filter((category) => count(category) > 0)
      .map((category) => ({
        value: category,
        label: categoryLabels[category],
        count: count(category),
      })),
  ];

  const visible =
    filter === "all" ? photos : photos.filter((item) => item.category === filter);

  return (
    <>
      <div className="gal-filters-bar">
        <div className="gal-filters glass" role="group" aria-label="Фильтр по категории">
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
      </div>

      <div className="gal-section">
        {/* key: при смене фильтра сетка и счётчик в просмотре начинаются заново */}
        <PhotoGrid key={filter} photos={visible} />
      </div>
    </>
  );
}
