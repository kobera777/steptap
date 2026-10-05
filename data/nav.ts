import { danceStyles, styleHref } from "@/data/directions";
import { signupChatUrl } from "@/data/site";

/**
 * Меню сайта — единственное место, где оно задаётся.
 * Отсюда берут пункты общая шапка (SiteHeader), подвал (SiteFooter) и sitemap.
 */
export type NavItem = {
  href: string;
  label: string;
};

/** Главное меню страниц (все, кроме главной — у неё своя шапка). */
export const mainNav: NavItem[] = [
  { href: "/", label: "ГЛАВНАЯ" },
  { href: "/about", label: "О ШКОЛЕ" },
  { href: "/directions", label: "НАПРАВЛЕНИЯ" },
  { href: "/classes", label: "ЗАНЯТИЯ" },
  { href: "/schedule", label: "РАСПИСАНИЕ" },
  { href: "/prices", label: "ЦЕНЫ" },
  { href: "/gallery", label: "ГАЛЕРЕЯ" },
  { href: "/rental", label: "АРЕНДА" },
  { href: "/contacts", label: "КОНТАКТЫ" },
];

/** Пункт меню главной: может иметь вложенный список. */
export type HomeNavItem = NavItem & { children?: NavItem[] };

/** Меню главной страницы (у неё своя шапка с выпадающими списками). */
export const homeNav: HomeNavItem[] = [
  { href: "/about", label: "О ШКОЛЕ" },
  {
    href: "/directions",
    label: "НАПРАВЛЕНИЯ",
    children: [
      ...danceStyles.map((style) => ({ href: styleHref(style), label: style.short })),
      { href: "/directions", label: "Все направления →" },
    ],
  },
  {
    href: "/classes",
    label: "ЗАНЯТИЯ",
    children: [
      { href: "/classes", label: "Форматы и уровни" },
      { href: "/prices#individual", label: "Индивидуальные занятия" },
      { href: signupChatUrl(), label: "Записаться на первое занятие" },
    ],
  },
  { href: "/schedule", label: "РАСПИСАНИЕ" },
  { href: "/prices", label: "ЦЕНЫ" },
  { href: "/gallery", label: "ГАЛЕРЕЯ" },
  { href: "/rental", label: "АРЕНДА" },
  { href: "/contacts", label: "КОНТАКТЫ" },
];
