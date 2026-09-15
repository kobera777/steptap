import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
