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
  { href: "/schedule", label: "РАСПИСАНИЕ" },
  { href: "/prices", label: "ЦЕНЫ" },
  { href: "/gallery", label: "ГАЛЕРЕЯ" },
  { href: "/#contacts", label: "КОНТАКТЫ" },
];

/** Пункт меню главной: может иметь вложенный список. #якорь — раздел на самой главной. */
export type HomeNavItem = NavItem & { children?: NavItem[] };

/** Меню главной страницы (у неё своя шапка с выпадающими списками). */
export const homeNav: HomeNavItem[] = [
  { href: "/about", label: "О ШКОЛЕ" },
  {
    href: "/directions",
    label: "НАПРАВЛЕНИЯ",
    children: [
      { href: "/directions#bachata", label: "Бачата" },
      { href: "/directions", label: "Все направления →" },
    ],
  },
  {
    href: "#classes",
    label: "ЗАНЯТИЯ",
    children: [
      { href: "#levels", label: "Групповые занятия" },
      { href: "/prices#individual", label: "Индивидуальные занятия" },
      { href: signupChatUrl(), label: "Записаться на пробное" },
    ],
  },
  { href: "/schedule", label: "РАСПИСАНИЕ" },
  { href: "/prices", label: "ЦЕНЫ" },
  { href: "/gallery", label: "ГАЛЕРЕЯ" },
  { href: "/prices#rental", label: "АРЕНДА" },
  { href: "#contacts", label: "КОНТАКТЫ" },
];
