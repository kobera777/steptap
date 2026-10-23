import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import "./home.css";

export const metadata: Metadata = {
  // Город — в заголовке и описании: на самой странице «Екатеринбург» теперь
  // только в бегущей строке, а её поисковики не читают (aria-hidden).
  title: "Школа танцев для взрослых и детей в Екатеринбурге — STEP TAP",
  description:
    "STEP TAP — школа танцев для взрослых и детей в Екатеринбурге: бачата, дэнсхолл, латина. Можно с нуля и без пары. Малышева, 53, ТЦ «Антей».",
};

export default function Page() {
  return <HomePage />;
}
