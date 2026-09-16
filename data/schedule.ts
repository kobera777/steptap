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
