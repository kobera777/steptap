import type { Metadata } from "next";
import "./styles/tokens.css";
import "./styles/base.css";
import "./motion.css";
import { LiquidGlassFilter, MotionEffects } from "@/components/motion/MotionEffects";

export const metadata: Metadata = {
  title: "STEP TAP — школа танца",
  description: "Школа танца STEP TAP.",
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
