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
      { source: "/signup", destination: "/#contacts", permanent: false },
      { source: "/contacts", destination: "/#contacts", permanent: false },
      { source: "/events", destination: "/schedule#events", permanent: false },
    ];
  },
};

export default nextConfig;
