import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['src'],
  },
  output: 'standalone',
  productionBrowserSourceMaps: true,
}

export default withNextIntl(nextConfig)
