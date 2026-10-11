import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { siteName, siteUrl } from "@/data/site";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/ui.css";
import "./motion.css";
import { MotionEffects } from "@/components/motion/MotionEffects";

/* Официальный шрифт школы — Montserrat, начертания 500 и 600 (см. guía
   tipográfica владельца и комментарий в app/styles/tokens.css). Скачивается при
   сборке и отдаётся с нашего домена, без запросов к Google.

   В CSS семейство названо напрямую ("Montserrat" — см. styles/tokens.css);
   className с .variable нужен, чтобы @font-face попали в сборку. */
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-montserrat",
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
    <html lang="ru" className={montserrat.variable}>
      <body>
        {children}
        <MotionEffects />
      </body>
    </html>
  );
}
