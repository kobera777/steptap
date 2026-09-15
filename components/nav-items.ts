export const navItems = [
  { href: "/", label: "ГЛАВНАЯ" },
  { href: "/about", label: "О ШКОЛЕ" },
  { href: "/directions", label: "НАПРАВЛЕНИЯ" },
  { href: "/schedule", label: "РАСПИСАНИЕ" },
  { href: "/gallery", label: "ГАЛЕРЕЯ" },
  { href: "/contacts", label: "КОНТАКТЫ" },
] as const;

export type NavHref = (typeof navItems)[number]["href"];
