import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  // Додаткові налаштування для статичного експорту
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

export default nextConfig
