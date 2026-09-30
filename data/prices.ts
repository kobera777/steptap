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
  /** Сколько занятий входит в абонемент. */
  lessons: number;
  /** Полная стоимость абонемента в рублях. */
  total: number;
  /** Подпись справа: «Максимальная выгода» и т. п. */
  note?: string;
  /** true — карточка выделяется как популярная. */
  featured?: boolean;
};

/**
 * Разовое занятие — точка отсчёта, а не абонемент. Все выгоды на странице
 * считаются относительно него, поэтому оно вынесено отдельно: поменяете
 * здесь 1100 — пересчитаются и проценты, и рубли экономии, и цена пробного.
 *
 * Источник: лицевая сторона прайс-листа, раздел «Групповые занятия».
 */
export const singleLesson = { title: "Разовое занятие", total: 1100 };

/** Занятий в неделю — из этого считаются недели в карточке абонемента. */
export const LESSONS_PER_WEEK = 2;

/**
 * Абонементы. Ни одно производное число не записано руками: цена за занятие,
 * недели, экономия и процент считаются из lessons, total и singleLesson.
 * Иначе однажды два числа разойдутся, и заметить это будет некому.
 */
export const groupPlans: GroupPlan[] = [
  { title: "4 занятия", lessons: 4, total: 3400 },
  { title: "8 занятий", lessons: 8, total: 5600, featured: true },
  { title: "12 занятий", lessons: 12, total: 8000 },
  { title: "16 занятий", lessons: 16, total: 9600, note: "Максимальная выгода" },
];

/** Цена одного занятия внутри абонемента. */
export function perLesson(plan: GroupPlan) {
  return Math.round(plan.total / plan.lessons);
}

/** true — сумма не делится нацело, цену показываем со знаком «≈». */
export function isApproximate(plan: GroupPlan) {
  return plan.total % plan.lessons !== 0;
}

/** Насколько занятие в абонементе дешевле разового, в процентах. */
export function discountPercent(plan: GroupPlan) {
  return Math.round((1 - perLesson(plan) / singleLesson.total) * 100);
}

/** Сколько рублей экономит абонемент против покупки занятий поштучно. */
export function savings(plan: GroupPlan) {
  return plan.lessons * singleLesson.total - plan.total;
}

/** На сколько недель рассчитан абонемент при двух занятиях в неделю. */
export function weeks(plan: GroupPlan) {
  return Math.round(plan.lessons / LESSONS_PER_WEEK);
}

/* ==================================================
   ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ
   ================================================== */

export type IndividualPack = { lessons: number; total: number };

export type IndividualTier = {
  /** Категория тренера. */
  category: string;
  /** Разовое занятие. */
  single: number;
  /** Абонементы: количество занятий и полная сумма. */
  packs: IndividualPack[];
};

/**
 * Цена одного занятия в абонементе — считается, а не пишется руками.
 * Раньше она стояла рядом числом: стоило поменять сумму, и два числа
 * начинали противоречить друг другу, а заметить это было некому.
 */
export function packPerLesson(pack: IndividualPack) {
  return Math.round(pack.total / pack.lessons);
}

export const individualTiers: IndividualTier[] = [
  {
    category: "Тренер",
    single: 2000,
    packs: [
      { lessons: 4, total: 7600 },
      { lessons: 8, total: 14400 },
      { lessons: 12, total: 21000 },
    ],
  },
  {
    category: "Топ-тренер",
    single: 2500,
    packs: [
      { lessons: 4, total: 9600 },
      { lessons: 8, total: 18400 },
      { lessons: 12, total: 27000 },
    ],
  },
  {
    category: "Мастер-тренер",
    single: 3000,
    packs: [
      { lessons: 4, total: 11400 },
      { lessons: 8, total: 21600 },
      { lessons: 12, total: 31200 },
    ],
  },
  {
    category: "VIP-тренер",
    single: 3500,
    packs: [
      { lessons: 4, total: 13400 },
      { lessons: 8, total: 25600 },
      { lessons: 12, total: 37200 },
    ],
  },
  {
    category: "Премиум",
    single: 4000,
    packs: [
      { lessons: 4, total: 15200 },
      { lessons: 8, total: 29600 },
      { lessons: 12, total: 42000 },
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
