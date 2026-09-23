import type { ReactNode } from "react";
import { signupChatUrl } from "@/data/site";

/**
 * Кнопка «Записаться» — одна на весь сайт.
 *
 * Сейчас ведёт в чат школы (MAX, а пока его ссылки нет — Telegram; см.
 * signupChatUrl в data/site.ts). Когда появится своя форма записи, менять
 * нужно будет только этот файл, а не двадцать кнопок по страницам.
 */
export function SignupLink({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <a
      id={id}
      className={className}
      href={signupChatUrl()}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
