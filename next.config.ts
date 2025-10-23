import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // output: 'export', // Тимчасово відключено для розробки
  images: {
    unoptimized: true,
  },
  // Налаштування для 404 сторінки
  trailingSlash: false,
  // Додаткові налаштування для статичного експорту
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    distDir: 'out',
  }),
};

export default nextConfig
