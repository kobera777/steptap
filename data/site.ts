/** Название и слоган — используются в шапке, подвале и метаданных. */
export const siteName = "STEP TAP";
export const siteTagline = "[ ТАНЦЕВАЛЬНАЯ ШКОЛА ]";
/** Адрес сайта в интернете (для sitemap и open graph). */
export const siteUrl = "https://steptap.vercel.app";

/**
 * Контакты и ссылки школы — единственное место, где они задаются.
 * Пустая строка = кнопка/строка не показывается на сайте.
 */
export const siteContacts = {
  /** Адрес зала. */
  address: "г. Екатеринбург, ул. Малышева, 53",
  /** Как добраться / ориентир (необязательно). */
  addressNote: "ТЦ «Антей», 4 этаж",
  /** Телефон в формате +7 999 123-45-67. */
  phone: "+7 982 665-85-92",
  /** Ссылка на Telegram: https://t.me/... */
  telegram: "https://t.me/step_tap",
  /**
   * Ссылка на чат школы в MAX. Именно сюда ведут все кнопки «Записаться»
   * на сайте — см. signupChatUrl(). Номер тот же, что и телефон.
   */
  max: "https://max.ru/u/f9LHodD0cOLRNFY4514OSp15vyITEeRIkL3QBEuaVEdeCz0XNEMtZEf9QzE",
  /** Ссылка на WhatsApp: https://wa.me/7999... */
  whatsapp: "",
  /** Ссылка на Instagram. */
  instagram: "https://www.instagram.com/step_tap.ekb/",
  /** Ссылка на YouTube. */
  youtube: "",
  /** Почта (необязательно). */
  email: "Steptap.ekb@gmail.com",
  /**
   * Карточка школы в Яндекс.Картах. Из неё собираются и карта в разделе
   * «Контакты», и кнопка «Как добраться».
   */
  yandexOrgId: "55431166106",
  yandexOrgSlug: "steptap",
  /** Координаты входа (широта, долгота) — по карточке школы в Яндекс.Картах. */
  lat: "56.836402",
  lon: "60.615503",
};

/**
 * Адрес виджета Яндекс.Карт с карточкой школы (ключ и аккаунт не нужны).
 * ll и z обязательны: без них виджет открывается на всей стране.
 */
export function yandexMapEmbedUrl() {
  const { yandexOrgSlug, yandexOrgId, lat, lon } = siteContacts;
  const view = `ll=${lon}%2C${lat}&z=17`;
  return `https://yandex.ru/map-widget/v1/org/${yandexOrgSlug}/${yandexOrgId}/?${view}`;
}

/** Карточка школы на самих Яндекс.Картах — «Как добраться». */
export function yandexMapPageUrl() {
  const { yandexOrgSlug, yandexOrgId } = siteContacts;
  return `https://yandex.ru/maps/org/${yandexOrgSlug}/${yandexOrgId}/`;
}

/** Соцсети, у которых есть свой значок — см. components/ui/SocialIcon.tsx. */
export type SocialKey = "max" | "telegram" | "instagram" | "whatsapp" | "youtube";

/** Порядок показа: сначала то, куда чаще всего пишут. */
const socialOrder: { key: SocialKey; label: string }[] = [
  { key: "max", label: "MAX" },
  { key: "telegram", label: "Telegram" },
  { key: "instagram", label: "Instagram" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "youtube", label: "YouTube" },
];

/**
 * Заполненные соцсети — один список и для подвала, и для раздела «Контакты».
 * Незаполненные (пустая строка в siteContacts) просто не показываются.
 */
export function socialLinks() {
  return socialOrder
    .map((item) => ({ ...item, href: siteContacts[item.key] }))
    .filter((item) => item.href);
}

/** Реквизиты — показываются в подвале сайта. */
export const siteLegal = {
  entity: "ИП Коберидзе Гиорги",
  inn: "667021912816",
  ogrnip: "325665800218601",
};

/**
 * Куда ведут кнопки «Записаться» по всему сайту.
 * Приоритет: MAX → Telegram. Пока ссылки на MAX нет, пишем в Telegram.
 */
export function signupChatUrl() {
  return siteContacts.max || siteContacts.telegram;
}

/** Телефон без пробелов и скобок для ссылки tel: */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
