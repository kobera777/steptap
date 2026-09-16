/**
 * Карточки страницы «Направления».
 * variant — класс оформления карточки (цвет/размер), см. app/directions/directions.css.
 */

export type CardDecor =
  | { kind: "circle"; text: string }
  | { kind: "note"; lines: string[] }
  | { kind: "outline"; lines: string[] };

export type BachataCard = {
  href: string;
  variant: "card-large" | "card-pink" | "card-dark" | "card-outline";
  number: string;
  kicker: string;
  title: string;
  decor: CardDecor;
};

export const bachataCards: BachataCard[] = [
  {
    href: "/directions/bachata/pair",
    variant: "card-large",
    number: "01",
    kicker: "ПАРНАЯ",
    title: "БАЧАТА",
    decor: { kind: "circle", text: "КОНТАКТ" },
  },
  {
    href: "/directions/bachata/lady",
    variant: "card-pink",
    number: "02",
    kicker: "БАЧАТА",
    title: "ЛЕДИ",
    decor: { kind: "note", lines: ["ПЛАСТИКА", "ПОДАЧА", "МУЗЫКА"] },
  },
  {
    href: "/directions/bachata/mens-style",
    variant: "card-dark",
    number: "03",
    kicker: "МУЖСКОЙ",
    title: "СТИЛЬ",
    decor: { kind: "note", lines: ["ТЕХНИКА", "ФУТВОРК", "ПОДАЧА"] },
  },
  {
    href: "/directions/bachata/experimental",
    variant: "card-outline",
    number: "04",
    kicker: "ЭКСПЕРИМЕНТАЛЬНАЯ",
    title: "БАЧАТА",
    decor: { kind: "outline", lines: ["ЭКСПЕРИМЕНТ", "×", "ДВИЖЕНИЕ"] },
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
    href: "/directions/dancehall",
    variant: "dancehall-card",
    number: "02",
    kicker: "ЭНЕРГИЯ / РИТМ / СВОБОДА",
    title: "ДЭНСХОЛЛ",
  },
  {
    href: "/directions/latina",
    variant: "latina-card",
    number: "03",
    kicker: "МУЗЫКА / ДВИЖЕНИЕ / ХАРАКТЕР",
    title: "ЛАТИНА",
    circleWords: ["ТАНЦУЙ", "ЧУВСТВУЙ"],
  },
];
