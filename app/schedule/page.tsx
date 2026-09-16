import type { Metadata } from "next";
import { SchedulePage } from "@/components/pages/SchedulePage";
import "./schedule.css";

export const metadata: Metadata = {
  title: "Расписание",
  description:
    "Расписание занятий школы танца STEP TAP: группы по уровням, преподаватели, время и события недели.",
};

export default function Page() {
  return <SchedulePage />;
}
