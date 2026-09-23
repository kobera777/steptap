/**
 * Цены школы STEP TAP.
 *
 * ЕДИНСТВЕННОЕ место, где задаются суммы: страница /prices и блок на главной
 * берут данные отсюда. Меняете число здесь — меняется на сайте.
 * Источник: таблица «STEP TAP — ПОЛНЫЙ ПРАЙС» (вкладка «Полный прайс»).
 */

/** Форматирует 7600 → «7 600 ₽» (неразрывный пробел, как принято в русской типографике). */
export function rub(sum: number) {
  return `${sum.toLocaleString("ru-RU").replace(/ /g, " ")} ₽`;
}

/* ==================================================
   ГРУППОВЫЕ ЗАНЯТИЯ
   ================================================== */

export type GroupPlan = {
  /** Название: «Разовое», «4 занятия»… */
  title: string;
  /** Полная стоимость абонемента в рублях. */
  total: number;
  /** Цена одного занятия внутри абонемента. */
  perLesson: number;
  /** Подпись справа: «Максимальная выгода» и т. п. */
  note?: string;
  /** true — карточка выделяется как популярная. */
  featured?: boolean;
};

/**
 * ⚠️ ЗАПОЛНИТЬ. На присланном фото таблица групповых занятий обрезана:
 * видна только последняя строка (16 занятий — 9 600 ₽, 600 ₽ за занятие).
 * Пока массив пустой, блок «Групповые занятия» на сайте не показывается —
 * лучше ничего, чем половина таблицы. Добавьте строки 4–10 из таблицы:
 *
 *   { title: "Разовое",    total: 0,    perLesson: 0 },
 *   { title: "4 занятия",  total: 0,    perLesson: 0 },
 *   { title: "8 занятий",  total: 0,    perLesson: 0, featured: true },
 *   { title: "12 занятий", total: 0,    perLesson: 0 },
 *   { title: "16 занятий", total: 9600, perLesson: 600, note: "Максимальная выгода" },
 */
export const groupPlans: GroupPlan[] = [];

/* ==================================================
   ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ
   ================================================== */

export type IndividualTier = {
  /** Категория тренера. */
  category: string;
  /** Разовое занятие. */
  single: number;
  /** Абонементы: количество занятий, полная сумма, цена за занятие. */
  packs: { lessons: number; total: number; perLesson: number }[];
};

export const individualTiers: IndividualTier[] = [
  {
    category: "Тренер",
    single: 2000,
    packs: [
      { lessons: 4, total: 7600, perLesson: 1900 },
      { lessons: 8, total: 14400, perLesson: 1800 },
      { lessons: 12, total: 21000, perLesson: 1750 },
    ],
  },
  {
    category: "Топ-тренер",
    single: 2500,
    packs: [
      { lessons: 4, total: 9600, perLesson: 2400 },
      { lessons: 8, total: 18400, perLesson: 2300 },
      { lessons: 12, total: 27000, perLesson: 2250 },
    ],
  },
  {
    category: "Мастер-тренер",
    single: 3000,
    packs: [
      { lessons: 4, total: 11400, perLesson: 2850 },
      { lessons: 8, total: 21600, perLesson: 2700 },
      { lessons: 12, total: 31200, perLesson: 2600 },
    ],
  },
  {
    category: "VIP-тренер",
    single: 3500,
    packs: [
      { lessons: 4, total: 13400, perLesson: 3350 },
      { lessons: 8, total: 25600, perLesson: 3200 },
      { lessons: 12, total: 37200, perLesson: 3100 },
    ],
  },
  {
    category: "Премиум",
    single: 4000,
    packs: [
      { lessons: 4, total: 15200, perLesson: 3800 },
      { lessons: 8, total: 29600, perLesson: 3700 },
      { lessons: 12, total: 42000, perLesson: 3500 },
    ],
  },
];

/* ==================================================
   АРЕНДА ЗАЛОВ
   ================================================== */

export type HallRate = {
  time: string;
  /** Цена за час: большой, средний, маленький зал. */
  big: number;
  medium: number;
  small: number;
  note: string;
};

/** Формат: тренер + 1–2 ученика, максимум 3 человека в зале. */
export const rentalIndividual: HallRate[] = [
  { time: "Будни до 13:00", big: 600, medium: 600, small: 500, note: "Дневной тариф" },
  {
    time: "Будни после 13:00",
    big: 1000,
    medium: 1000,
    small: 800,
    note: "Вечерний тариф",
  },
  {
    time: "Выходные — любое время",
    big: 1000,
    medium: 1000,
    small: 800,
    note: "Фиксированный тариф",
  },
];

export type GroupHallRate = {
  time: string;
  /** null — аренда в это время не предоставляется. */
  price: number | null;
  status: string;
};

/** Формат: тренер + 3 и более учеников, от 4 человек в зале. */
export const rentalGroup: GroupHallRate[] = [
  { time: "Будни — дневное время", price: 1800, status: "Предоставляется" },
  { time: "Будни — вечернее время", price: null, status: "Не предоставляется" },
  { time: "Выходные — любое время", price: 2200, status: "Предоставляется" },
];

export const rentalRules: string[] = [
  "До 3 человек включительно (тренер + максимум 2 ученика) — индивидуальная аренда.",
  "От 4 человек (тренер + 3 и более учеников) — групповая аренда.",
  "Групповая аренда в будни в вечернее время не предоставляется.",
  "Выходные тарифы действуют в любое время дня.",
];

/* ==================================================
   ЗАЛЫ — ФОТОГРАФИИ
   ================================================== */

export type Hall = {
  name: string;
  /** Короткое описание: площадь, оборудование. */
  description: string;
  photo: string;
  alt: string;
};

/**
 * ⚠️ ВРЕМЕННЫЕ ФОТО. Здесь стоят снимки из галереи, чтобы блок не пустовал.
 * Замените `photo` на реальные фотографии залов: положите файлы
 * в public/halls/ и укажите путь, например "/halls/big.webp".
 */
export const halls: Hall[] = [
  {
    name: "Большой зал",
    description: "Для групповых занятий, мастер-классов и вечеринок.",
    photo: "/gallery/demo/p03.webp",
    alt: "Большой зал школы STEP TAP",
  },
  {
    name: "Средний зал",
    description: "Для небольших групп и репетиций.",
    photo: "/gallery/demo/p07.webp",
    alt: "Средний зал школы STEP TAP",
  },
  {
    name: "Маленький зал",
    description: "Для индивидуальных занятий и разбора связок.",
    photo: "/gallery/demo/p10.webp",
    alt: "Маленький зал школы STEP TAP",
  },
];
