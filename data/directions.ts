/**
 * Карточки страницы «Направления».
 * variant — класс оформления карточки (цвет/размер), см. app/directions/directions.css.
 *
 * kicker — общее слово («БАЧАТА»), title — то, что отличает направление.
 * Крупным всегда идёт title: человек ищет глазами «Парная», «Леди»,
 * «Мужской стиль», а не слово «бачата», которое одинаково у всех.
 *
 * href у всех ведёт на цены: своих страниц у направлений пока нет, а
 * раньше карточки возвращали человека туда же, где он стоял.
 */

export type CardDecor =
  | { kind: "circle"; text: string }
  | { kind: "note"; lines: string[] }
  | { kind: "outline"; lines: string[] };

/** Фотография на карточке направления (файлы лежат в public/directions). */
export type CardPhoto = { src: string; alt: string };

export type BachataCard = {
  href: string;
  variant: "card-large" | "card-pink" | "card-dark" | "card-outline";
  number: string;
  kicker: string;
  title: string;
  decor: CardDecor;
  /**
   * Снимок школы: какая фотография на какой карточке — сказал владелец.
   * Файлы лежат в public/directions и уже обрезаны в квадрат под плитку.
   * Чтобы поменять фотографии местами, достаточно переставить здесь
   * строки `src` — вёрстку трогать не нужно.
   */
  photo: CardPhoto;
};

export const bachataCards: BachataCard[] = [
  {
    href: "/prices#group",
    variant: "card-large",
    number: "01",
    kicker: "БАЧАТА",
    title: "ПАРНАЯ",
    decor: { kind: "circle", text: "КОНТАКТ" },
    photo: {
      src: "/directions/pareja.webp",
      alt: "Пара танцует бачату в школе STEP TAP",
    },
  },
  {
    href: "/prices#group",
    variant: "card-pink",
    number: "02",
    kicker: "БАЧАТА",
    title: "ЛЕДИ",
    decor: { kind: "note", lines: ["ПЛАСТИКА", "ПОДАЧА", "МУЗЫКА"] },
    photo: {
      src: "/directions/lady.webp",
      alt: "Две танцовщицы STEP TAP на занятии «бачата леди»",
    },
  },
  {
    href: "/prices#group",
    variant: "card-dark",
    number: "03",
    kicker: "БАЧАТА",
    title: "МУЖСКОЙ СТИЛЬ",
    decor: { kind: "note", lines: ["ТЕХНИКА", "ФУТВОРК", "ПОДАЧА"] },
    photo: {
      src: "/directions/estilo-masculino.webp",
      alt: "Преподаватель мужского стиля бачаты в STEP TAP",
    },
  },
  {
    href: "/prices#group",
    variant: "card-outline",
    number: "04",
    kicker: "БАЧАТА",
    title: "ЭКСПЕРИМЕНТАЛЬНАЯ",
    decor: { kind: "outline", lines: ["ЭКСПЕРИМЕНТ", "×", "ДВИЖЕНИЕ"] },
    photo: {
      src: "/directions/experimental.webp",
      alt: "Танцовщица STEP TAP на занятии экспериментальной бачатой",
    },
  },
];

export type OtherCard = {
  href: string;
  variant: "dancehall-card" | "latina-card";
  number: string;
  kicker: string;
  title: string;
  /** Слова внутри круга (только у «Латины»). */
  circleWords?: string[];
};

export const otherCards: OtherCard[] = [
  {
    href: "/prices#group",
    variant: "dancehall-card",
    number: "02",
    kicker: "ЭНЕРГИЯ / РИТМ / СВОБОДА",
    title: "ДЭНСХОЛЛ",
  },
  {
    href: "/prices#group",
    variant: "latina-card",
    number: "03",
    kicker: "МУЗЫКА / ДВИЖЕНИЕ / ХАРАКТЕР",
    title: "ЛАТИНА",
    circleWords: ["ТАНЦУЙ", "ЧУВСТВУЙ"],
  },
];
