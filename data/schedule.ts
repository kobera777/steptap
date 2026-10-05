/**
 * Расписание: уровни, занятия, дни и сетка времени.
 * Добавить занятие = добавить объект в `classes`.
 *
 * ВНИМАНИЕ: названия уровней здесь («1.0 СТАРТ … 5.0 ПРОФИ») не совпадают
 * с уровнями на главной (data/home.ts → homeLevels). Стоит выбрать одну систему.
 */

export type Level = "zero" | "continuing" | "advanced" | "pro" | "profi" | "special";

export type ClassItem = {
  id: number;
  day: number;
  start: string;
  end: string;
  title: string;
  teacher: string;
  level: Level;
};

export const levelInfo: Record<
  Level,
  {
    label: string;
    description: string;
    className: string;
  }
> = {
  zero: {
    label: "1.0 СТАРТ",
    description: "без опыта",
    className: "schedule-card-zero",
  },

  continuing: {
    label: "2.0 ОСНОВА",
    description: "Есть опыт от 8 месяцев",
    className: "schedule-card-continuing",
  },

  advanced: {
    label: "3.0 РАЗВИТИЕ",
    description: "Есть опыт от 1.5года",
    className: "schedule-card-intermediate",
  },

  pro: {
    label: "4.0 МАСТЕРСТВО",
    description: "Закрытые группы",
    className: "schedule-card-pro",
  },

  profi: {
    label: "5.0 ПРОФИ",
    description: "Закрытая группа",
    className: "schedule-card-profi",
  },

  special: {
    label: "Специальные занятия",
    description: "Мастер-классы,  мужской стил",
    className: "schedule-card-special",
  },
};

export const classes: ClassItem[] = [
  {
    id: 1,
    day: 1,
    start: "19:00",
    end: "20:00",
    title: "Парная Бачата",
    teacher: "Гио и Ада",
    level: "zero",
  },
  {
    id: 2,
    day: 1,
    start: "19:00",
    end: "20:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "zero",
  },
  {
    id: 3,
    day: 1,
    start: "20:00",
    end: "21:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "advanced",
  },
  {
    id: 18,
    day: 1,
    start: "21:00",
    end: "22:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "profi",
  },
  {
    id: 4,
    day: 2,
    start: "19:00",
    end: "20:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "continuing",
  },
  {
    id: 5,
    day: 2,
    start: "20:00",
    end: "21:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "advanced",
  },
  {
    id: 6,
    day: 2,
    start: "21:00",
    end: "22:00",
    title: "Парная Бачата",
    teacher: "Закрытая группа",
    level: "pro",
  },
  {
    id: 7,
    day: 3,
    start: "19:00",
    end: "20:00",
    title: "Парная Бачата",
    teacher: "Гио и Ада",
    level: "zero",
  },
  {
    id: 8,
    day: 3,
    start: "19:00",
    end: "20:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "zero",
  },
  {
    id: 9,
    day: 3,
    start: "20:00",
    end: "21:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "advanced",
  },
  {
    id: 19,
    day: 3,
    start: "21:00",
    end: "22:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "profi",
  },
  {
    id: 10,
    day: 4,
    start: "19:00",
    end: "20:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "continuing",
  },
  {
    id: 11,
    day: 4,
    start: "20:00",
    end: "21:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "advanced",
  },
  {
    id: 12,
    day: 4,
    start: "21:00",
    end: "22:00",
    title: "Парная Бачата",
    teacher: "Закрытая группа",
    level: "pro",
  },
  {
    id: 16,
    day: 2,
    start: "22:00",
    end: "23:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "profi",
  },
  {
    id: 17,
    day: 4,
    start: "22:00",
    end: "23:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "profi",
  },
  {
    id: 13,
    day: 5,
    start: "19:00",
    end: "21:00",
    title: "Мужской стиль",
    teacher: "Гио",
    level: "special",
  },
  {
    id: 14,
    day: 6,
    start: "14:00",
    end: "16:00",
    title: "Курс Бачазук Леди",
    teacher: "Ада",
    level: "special",
  },
  {
    id: 15,
    day: 7,
    start: "14:00",
    end: "16:00",
    title: "Бачата Леди",
    teacher: "Ада",
    level: "advanced",
  },
];

export const days = [
  "ПОНЕДЕЛЬНИК",
  "ВТОРНИК",
  "СРЕДА",
  "ЧЕТВЕРГ",
  "ПЯТНИЦА",
  "СУББОТА",
  "ВОСКРЕСЕНЬЕ",
];

/** Короткие названия — для вкладок дня и шапки месяца. */
export const daysShort = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

/** «по понедельникам» — для фраз вида «группы для новичков по понедельникам». */
export const daysDative = [
  "понедельникам",
  "вторникам",
  "средам",
  "четвергам",
  "пятницам",
  "субботам",
  "воскресеньям",
];

export const monthNames = [
  "ЯНВАРЬ",
  "ФЕВРАЛЬ",
  "МАРТ",
  "АПРЕЛЬ",
  "МАЙ",
  "ИЮНЬ",
  "ИЮЛЬ",
  "АВГУСТ",
  "СЕНТЯБРЬ",
  "ОКТЯБРЬ",
  "НОЯБРЬ",
  "ДЕКАБРЬ",
];

/** «12 октября» — для заголовка дня, открытого из календаря месяца. */
export const monthNamesGenitive = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

/** «02 СЕН» — в списке ближайших событий. */
export const monthShort = [
  "ЯНВ",
  "ФЕВ",
  "МАР",
  "АПР",
  "МАЙ",
  "ИЮН",
  "ИЮЛ",
  "АВГ",
  "СЕН",
  "ОКТ",
  "НОЯ",
  "ДЕК",
];

/**
 * События и мастер-классы. Дата — ГГГГ-ММ-ДД.
 * Прошедшие на сайте не показываются: устаревшее событие на странице
 * подрывает доверие сильнее, чем пустой раздел. Если ближайших событий
 * нет, раздел «Ближайшие события» скрывается целиком.
 */
export type ScheduleEvent = { date: string; title: string; note: string };

export const events: ScheduleEvent[] = [
  { date: "2026-09-02", title: "Бесплатные открытые уроки", note: "19:00" },
  { date: "2026-09-05", title: "Старт курса Бачазук Леди", note: "Ада" },
  {
    date: "2026-09-12",
    title: "День рождения Зарины / МК Бачата Леди + вечеринка",
    note: "Событие STEP TAP",
  },
];

/** «понедельникам и средам», «понедельникам, средам и пятницам». */
function joinRu(words: string[]) {
  if (words.length <= 1) return words.join("");
  return `${words.slice(0, -1).join(", ")} и ${words[words.length - 1]}`;
}

/**
 * Когда приходить новичку — собирается из самого расписания (уровень zero),
 * а не пишется руками: поменяется время группы — поменяется и фраза.
 * Возвращает строки вида «по понедельникам и средам в 19:00».
 */
export function beginnerSlots() {
  const byTime = new Map<string, Set<number>>();
  for (const item of classes) {
    if (item.level !== "zero") continue;
    if (!byTime.has(item.start)) byTime.set(item.start, new Set());
    byTime.get(item.start)!.add(item.day);
  }
  return [...byTime.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([time, set]) => {
      const list = [...set].sort((a, b) => a - b).map((d) => daysDative[d - 1]);
      return `по ${joinRu(list)} в ${time}`;
    });
}

/** Какие направления есть у новичков: «Парная Бачата и Бачата Леди». */
export function beginnerTitles() {
  const titles = [
    ...new Set(classes.filter((c) => c.level === "zero").map((c) => c.title)),
  ];
  return joinRu(titles);
}

export const timeRows = [
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

/**
 * Преподаватели и что они ведут — собирается из расписания, руками не
 * пишется: появится новое занятие — обновится и раздел «Команда».
 * «Закрытая группа» в поле teacher — не человек, её пропускаем.
 */
export function teachers() {
  const map = new Map<string, Set<string>>();
  for (const item of classes) {
    for (const name of item.teacher.split(" и ")) {
      if (name === "Закрытая группа") continue;
      if (!map.has(name)) map.set(name, new Set());
      map.get(name)!.add(item.title);
    }
  }
  return [...map.entries()].map(([name, titles]) => ({ name, titles: [...titles] }));
}
