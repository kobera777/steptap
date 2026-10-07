import { HomeHeader } from "./HomeHeader";

/**
 * Шапка внутренних страниц. По просьбе владельца она такая же, как на
 * главной (чёрная, с логотипом-картинкой), чтобы при переходе между
 * страницами сайт не выглядел как другой. Вся логика — в HomeHeader.
 */
export function SiteHeader() {
  return <HomeHeader />;
}
