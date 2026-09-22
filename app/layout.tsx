import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { siteName, siteUrl } from "@/data/site";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/ui.css";
import "./motion.css";
import { LiquidGlassFilter, MotionEffects } from "@/components/motion/MotionEffects";

/* Единственный шрифт сайта. Скачивается при сборке и отдаётся с нашего домена
   (без запросов к Google). Переменное начертание: один файл на подмножество
   покрывает все веса 200–800, поэтому список weight не нужен.

   Раньше тело набиралось DM Sans, у которого НЕТ кириллицы, — весь русский текст
   рендерился системным Arial, а веса 800+ подделывались браузером. Подробнее
   в комментарии в app/styles/tokens.css.

   В CSS семейство названо напрямую ("Manrope" — см. styles/tokens.css); className
   с .variable нужен, чтобы @font-face попали в сборку. adjustFontFallback: false
   Turbopack игнорирует, поэтому переменную --font-manrope в CSS не используем. */
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — школа танца`,
    template: `%s — ${siteName}`,
  },
  description:
    "Школа танца STEP TAP: бачата и другие направления, группы с нуля, вечеринки и мастер-классы.",
  openGraph: {
    type: "website",
    siteName,
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>
        <LiquidGlassFilter />
        {children}
        <MotionEffects />
      </body>
    </html>
  );
}
