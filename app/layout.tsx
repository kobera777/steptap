import type { Metadata } from "next";
import { siteName, siteUrl } from "@/data/site";
import "./styles/tokens.css";
import "./styles/base.css";
import "./motion.css";
import { LiquidGlassFilter, MotionEffects } from "@/components/motion/MotionEffects";

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
    <html lang="ru">
      <body>
        <LiquidGlassFilter />
        {children}
        <MotionEffects />
      </body>
    </html>
  );
}
