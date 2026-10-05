import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactsSection } from "@/components/sections/ContactsSection";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "STEP TAP — Екатеринбург, ул. Малышева, 53, ТЦ «Антей», 4 этаж. Телефон, MAX, Telegram и карта.",
};

export default function ContactsPage() {
  return (
    <main>
      <SiteHeader />
      <ContactsSection />
      <SiteFooter />
    </main>
  );
}
