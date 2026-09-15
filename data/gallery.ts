/**
 * Галерея STEP TAP — данные альбомов.
 *
 * Сейчас здесь демо-контент: фотографии сгенерированы из существующих
 * снимков сайта (public/gallery/demo). Когда определимся, где хранить
 * медиа (Cloudinary / папка public / CMS), достаточно поменять `src`
 * у фотографий и добавить `youtubeId` или `src` у видео — страницы
 * остаются без изменений.
 */

export type GalleryCategory =
  | "party"
  | "masterclass"
  | "performance"
  | "concert"
  | "trip"
  | "open";

export const categoryLabels: Record<GalleryCategory, string> = {
  party: "ВЕЧЕРИНКИ",
  masterclass: "МАСТЕР-КЛАССЫ",
  performance: "ВЫСТУПЛЕНИЯ",
  concert: "КОНЦЕРТЫ",
  trip: "ПОЕЗДКИ",
  open: "ОТКРЫТЫЕ УРОКИ",
};

export type GalleryPhoto = {
  type: "photo";
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryVideo = {
  type: "video";
  title: string;
  /** Длительность для подписи, например "0:42". */
  duration?: string;
  /** ID ролика на YouTube (например "dQw4w9WgXcQ") — рендерится как embed. */
  youtubeId?: string;
  /** Прямая ссылка на .mp4 — рендерится как <video>. */
  src?: string;
  /** Обложка для <video>. */
  poster?: string;
};

export type GalleryMedia = GalleryPhoto | GalleryVideo;

export type GalleryAlbum = {
  slug: string;
  title: string;
  /** ISO-дата события: YYYY-MM-DD. */
  date: string;
  category: GalleryCategory;
  description: string;
  cover: string;
  /** Крупная карточка на странице галереи. */
  featured?: boolean;
  media: GalleryMedia[];
};

/* ---------- демо-фотографии ---------- */

const demo = (
  name: string,
  width: number,
  height: number,
  alt = "STEP TAP — момент с занятия",
): GalleryPhoto => ({
  type: "photo",
  src: `/gallery/demo/${name}.webp`,
  alt,
  width,
  height,
});

const p01 = demo("p01", 900, 1125);
const p02 = demo("p02", 900, 600);
const p03 = demo("p03", 900, 900);
const p04 = demo("p04", 900, 1125);
const p05 = demo("p05", 900, 506);
const p06 = demo("p06", 900, 1200);
const p07 = demo("p07", 900, 900);
const p08 = demo("p08", 900, 600);
const p09 = demo("p09", 900, 1125);
const p10 = demo("p10", 900, 506);
const p11 = demo("p11", 900, 1200);
const p12 = demo("p12", 900, 900);

const demoVideo = (title: string, duration: string): GalleryVideo => ({
  type: "video",
  title,
  duration,
});

/* ---------- альбомы ---------- */

export const albums: GalleryAlbum[] = [
  {
    slug: "2026-09-12-den-rozhdeniya-zariny",
    title: "День рождения Зарины: МК Бачата Леди + вечеринка",
    date: "2026-09-12",
    category: "party",
    description:
      "Мастер-класс по Бачата Леди, торт, много музыки и танцы до последнего трека. Спасибо всем, кто пришёл поздравить!",
    cover: "/gallery/demo/p01.webp",
    featured: true,
    media: [
      demoVideo("Афтемуви вечеринки", "1:12"),
      p01, p02, p03, p05, p06, p07, p09, p10, p12,
    ],
  },
  {
    slug: "2026-09-02-otkrytye-uroki",
    title: "Бесплатные открытые уроки",
    date: "2026-09-02",
    category: "open",
    description:
      "Старт нового сезона: открытые уроки для всех, кто давно хотел попробовать бачату, но откладывал.",
    cover: "/gallery/demo/p04.webp",
    media: [p04, p08, p11, p02, p07, p05],
  },
  {
    slug: "2026-07-25-magiya-bachaty",
    title: "Отчётный концерт «Магия бачаты»",
    date: "2026-07-25",
    category: "concert",
    description:
      "Большая сцена, все группы школы и полный зал. Главный вечер года для наших учеников.",
    cover: "/gallery/demo/p06.webp",
    media: [
      demoVideo("Полная запись концерта", "1:48:20"),
      demoVideo("Номер группы 3.0 Развитие", "3:05"),
      p06, p09, p01, p10, p03, p08, p11, p12,
    ],
  },
  {
    slug: "2026-06-14-mk-muzhskoy-stil",
    title: "Мастер-класс по мужскому стилю",
    date: "2026-06-14",
    category: "masterclass",
    description:
      "Пластика, ведение и музыкальность — два часа интенсивной работы с Гио.",
    cover: "/gallery/demo/p07.webp",
    media: [p07, p02, p04, p05, p12],
  },
  {
    slug: "2026-05-09-festival",
    title: "Выступление на фестивале",
    date: "2026-05-09",
    category: "performance",
    description:
      "Наша шоу-группа на открытой площадке городского фестиваля.",
    cover: "/gallery/demo/p10.webp",
    media: [demoVideo("Выступление шоу-группы", "4:31"), p10, p03, p09, p08, p01],
  },
  {
    slug: "2026-03-21-poezdka-na-festival",
    title: "Поездка на бачата-фестиваль",
    date: "2026-03-21",
    category: "trip",
    description:
      "Три дня мастер-классов, вечеринок и новых знакомств. Едем всей школой.",
    cover: "/gallery/demo/p11.webp",
    media: [p11, p05, p02, p06, p12, p04, p07],
  },
];

/* ---------- helpers ---------- */

const monthShort = [
  "ЯНВ", "ФЕВ", "МАР", "АПР", "МАЯ", "ИЮН",
  "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК",
];

/** "2026-09-12" → "12 СЕН 2026" */
export function formatAlbumDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${String(day).padStart(2, "0")} ${monthShort[month - 1]} ${year}`;
}

/** "24 ФОТО · 2 ВИДЕО" */
export function formatMediaCount(album: GalleryAlbum) {
  const photos = album.media.filter((m) => m.type === "photo").length;
  const videos = album.media.filter((m) => m.type === "video").length;
  const parts = [`${photos} ФОТО`];
  if (videos > 0) parts.push(`${videos} ВИДЕО`);
  return parts.join(" · ");
}

/** Альбомы от новых к старым. */
export function getAlbums() {
  return [...albums].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAlbum(slug: string) {
  return albums.find((album) => album.slug === slug);
}

/** Соседние альбомы для навигации «предыдущий / следующий». */
export function getAdjacentAlbums(slug: string) {
  const sorted = getAlbums();
  const index = sorted.findIndex((album) => album.slug === slug);
  return {
    newer: index > 0 ? sorted[index - 1] : undefined,
    older: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined,
  };
}
