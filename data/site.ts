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
   * Ссылка на MAX. ⚠️ ЗАПОЛНИТЬ: нужен точный адрес из приложения
   * (профиль → «Поделиться» → скопировать ссылку). Номер школы в MAX
   * тот же: +7 982 665 85 92. Как только ссылка появится здесь,
   * все кнопки «Записаться» на сайте начнут вести в MAX — см. signupChatUrl().
   */
  max: "",
  /** Ссылка на WhatsApp: https://wa.me/7999... */
  whatsapp: "",
  /** Ссылка на Instagram. */
  instagram: "https://www.instagram.com/step_tap.ekb/",
  /** Ссылка на YouTube. */
  youtube: "",
  /** Почта (необязательно). */
  email: "Steptap.ekb@gmail.com",
};

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
