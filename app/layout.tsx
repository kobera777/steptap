import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { siteName, siteUrl } from "@/data/site";
import "./styles/tokens.css";
import "./styles/base.css";
import "./motion.css";
import { LiquidGlassFilter, MotionEffects } from "@/components/motion/MotionEffects";

/* Шрифты скачиваются при сборке и отдаются с нашего домена (без запросов к Google).
   Веса — те же, что раньше запрашивал @import. В CSS семейства названы напрямую
   ("DM Sans", "Manrope" — см. styles/tokens.css); className с .variable нужен,
   чтобы @font-face попали в сборку. adjustFontFallback: false Turbopack игнорирует,
   поэтому переменные --font-dm-sans / --font-manrope в CSS не используем. */
const dmSans = DM_Sans({
  subsets: ["latin"], // у DM Sans нет кириллицы: русский текст в теле идёт Arial
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-dm-sans",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
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
    <html lang="ru" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>
        <LiquidGlassFilter />
        {children}
        <MotionEffects />
      </body>
    </html>
  );
}
