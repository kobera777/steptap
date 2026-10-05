import type { ReactNode } from "react";
import { signupChatUrl } from "@/data/site";

/**
 * Кнопка «Записаться» — одна на весь сайт.
 *
 * Ведёт в чат школы в MAX (см. signupChatUrl в data/site.ts). Когда появится
 * своя форма записи, менять нужно будет только этот файл, а не двадцать
 * кнопок по страницам.
 *
 * ariaLabel — что именно услышит человек с экранным диктором, когда текст
 * кнопки сам по себе непонятен (например, карточка занятия в расписании).
 */
export function SignupLink({
  className,
  children,
  id,
  ariaLabel,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      id={id}
      className={className}
      href={signupChatUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
