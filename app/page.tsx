import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import "./home.css";

export const metadata: Metadata = {
  title: "Бачата — школа танца STEP TAP",
  description:
    "Парные занятия бачатой для взрослых в школе танца STEP TAP: группы с нуля, пробный урок, вечеринки и мастер-классы.",
};

export default function Page() {
  return <HomePage />;
}
