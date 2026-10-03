import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Качества, которые разрешено запрашивать через <Image quality={...}>.
    qualities: [75, 90],
  },
  async redirects() {
    // Страниц /signup, /contacts и /events пока нет — ведём на готовые разделы,
    // чтобы ни одна кнопка сайта не отдавала 404.
    return [
      // Прямая ссылка /опрос на анонимный опрос; в меню и карте сайта её нет.
      // Для сопоставления маршрута Next.js нужен URL-кодированный путь.
      {
        source: "/%D0%BE%D0%BF%D1%80%D0%BE%D1%81",
        destination: "https://step-tap-feedback.vercel.app/",
        permanent: false,
      },
      // Аренда переехала на свою страницу — старые ссылки ведут туда.
      { source: "/prices/rental", destination: "/rental", permanent: false },
      { source: "/signup", destination: "/#contacts", permanent: false },
      { source: "/contacts", destination: "/#contacts", permanent: false },
      { source: "/events", destination: "/schedule#events", permanent: false },
      // Карточки направлений: своих страниц пока нет, сами карточки ведут на
      // цены. Редиректы оставлены для старых ссылок и ведут туда же.
      {
        source: "/directions/bachata/:style",
        destination: "/prices#group",
        permanent: false,
      },
      { source: "/directions/dancehall", destination: "/prices#group", permanent: false },
      { source: "/directions/latina", destination: "/prices#group", permanent: false },
    ];
  },
};

export default nextConfig;
