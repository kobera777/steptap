import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Качества, которые разрешено запрашивать через <Image quality={...}>.
    qualities: [75, 90],
  },
  async redirects() {
    // Страниц /signup и /events нет — ведём на готовые разделы,
    // чтобы ни одна старая ссылка не отдавала 404.
    return [
      // Прямая ссылка /feedback на анонимный опрос; в меню и карте сайта её нет.
      {
        source: "/feedback",
        destination: "https://step-tap-feedback.vercel.app/",
        permanent: false,
      },
      // Аренда переехала на свою страницу — старые ссылки ведут туда.
      { source: "/prices/rental", destination: "/rental", permanent: false },
      { source: "/signup", destination: "/contacts", permanent: false },
      { source: "/events", destination: "/schedule#events", permanent: false },
      // Старые адреса направлений (до страниц стилей) — на список направлений.
      {
        source: "/directions/bachata/:style",
        destination: "/directions",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
