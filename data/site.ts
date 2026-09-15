/**
 * Контакты и ссылки школы — единственное место, где они задаются.
 * Пустая строка = кнопка/строка не показывается на сайте.
 */
export const siteContacts = {
  /** Адрес зала. */
  address: "",
  /** Как добраться / ориентир (необязательно). */
  addressNote: "",
  /** Телефон в формате +7 999 123-45-67. */
  phone: "",
  /** Ссылка на Telegram: https://t.me/... */
  telegram: "",
  /** Ссылка на WhatsApp: https://wa.me/7999... */
  whatsapp: "",
  /** Ссылка на Instagram. */
  instagram: "",
  /** Ссылка на YouTube. */
  youtube: "",
  /** Почта (необязательно). */
  email: "",
};

/** Телефон без пробелов и скобок для ссылки tel: */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
