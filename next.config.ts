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
      // Аренда переехала на свою страницу — старые ссылки ведут туда.
      { source: "/prices/rental", destination: "/rental", permanent: false },
      { source: "/signup", destination: "/contacts", permanent: false },
      { source: "/events", destination: "/schedule#events", permanent: false },
      // Демо-альбомов галереи больше нет — старые ссылки ведут в галерею.
      { source: "/gallery/:album", destination: "/gallery", permanent: false },
      // Отдельных страниц стилей больше нет — их старые адреса
      // (/directions/lady, /directions/bachata/lady…) ведут на «Направления».
      // Только имена стилей, а не всё подряд: в public/directions лежат фото
      // карточек, и общее правило /directions/:path+ уводило их на страницу.
      {
        source: "/directions/:style(bachata|lady|men|experimental|dancehall|latina)",
        destination: "/directions",
        permanent: false,
      },
      {
        source: "/directions/bachata/:style",
        destination: "/directions",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
