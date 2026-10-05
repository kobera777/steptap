/**
 * Галерея STEP TAP — фотографии по категориям, как в прототипе владельца.
 *
 * Раньше здесь были «альбомы» с датами и названиями событий, но снимки в них
 * демонстрационные — выдавать их за конкретные вечеринки и концерты нельзя.
 * Когда появятся настоящие фото, достаточно добавить их в galleryPhotos
 * (файл — в public/gallery) с нужной категорией.
 */

export type GalleryCategory = "party" | "class" | "performance" | "masterclass" | "trip";

export const categoryLabels: Record<GalleryCategory, string> = {
  party: "ВЕЧЕРИНКИ",
  class: "ЗАНЯТИЯ",
  performance: "ВЫСТУПЛЕНИЯ",
  masterclass: "МАСТЕР-КЛАССЫ",
  trip: "ПОЕЗДКИ",
};

export type GalleryPhoto = {
  type: "photo";
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CategorizedPhoto = GalleryPhoto & { category: GalleryCategory };

const photo = (
  name: string,
  width: number,
  height: number,
  category: GalleryCategory,
  alt: string,
): CategorizedPhoto => ({
  type: "photo",
  src: `/gallery/demo/${name}.webp`,
  alt,
  width,
  height,
  category,
});

export const galleryPhotos: CategorizedPhoto[] = [
  photo("p01", 900, 1125, "party", "Вместе на танцполе"),
  photo("p04", 900, 1125, "class", "Начать — с первого шага"),
  photo("p06", 900, 1200, "performance", "Музыка, свет и движение"),
  photo("p07", 900, 900, "masterclass", "Внимание к деталям"),
  photo("p10", 900, 506, "performance", "Танец перед зрителями"),
  photo("p11", 900, 1200, "trip", "Танцы объединяют"),
];
