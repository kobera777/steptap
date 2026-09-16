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
  { href: "/gallery", label: "ГАЛЕРЕЯ" },
  { href: "/#contacts", label: "КОНТАКТЫ" },
];

/** Куда ведёт кнопка «Записаться» по всему сайту. */
export const signupHref = "/#trial";
