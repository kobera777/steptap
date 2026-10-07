import { firstLessonWithPlan, rub } from "@/data/prices";
import { siteContacts } from "@/data/site";

/**
 * Тексты главной страницы — из прототипа владельца, обращение на «ты».
 * Меняйте здесь — компоненты подхватят сами.
 * Вопросы «Перед первым занятием» общие с другими страницами: data/directions.ts.
 */

export const homeHero = {
  kicker: "ШКОЛА ТАНЦЕВ ДЛЯ ВЗРОСЛЫХ · ЕКАТЕРИНБУРГ",
  title: ["ТАНЦЫ,", "НА КОТОРЫЕ", "ХОЧЕТСЯ", "ВОЗВРАЩАТЬСЯ."],
};

/**
 * Бегущая строка под hero: не украшение, а ответы на то, что останавливает
 * взрослого перед записью — сколько стоит, можно ли без пары и с нуля, где.
 * accent — часть фразы, которая выделяется розовым. Цена и адрес берутся
 * из data/prices.ts и data/site.ts, чтобы строка не расходилась с сайтом.
 */
export type MarqueeItem = { text: string; accent?: string };

const street = siteContacts.address.replace(/^г\.\s*[^,]+,\s*ул\.\s*/, "");
const mall = siteContacts.addressNote.split(",")[0];

export const marqueeItems: MarqueeItem[] = [
  { text: "ПЕРВОЕ ЗАНЯТИЕ —", accent: `${rub(firstLessonWithPlan())} С АБОНЕМЕНТОМ` },
  { text: "МОЖНО БЕЗ ПАРЫ" },
  { text: "МОЖНО С НУЛЯ" },
  { text: "БАЧАТА · ДЭНСХОЛЛ · ЛАТИНА" },
  { text: "ЗАНЯТИЕ — 1 ЧАС" },
  { text: `${street} · ${mall}` },
];
