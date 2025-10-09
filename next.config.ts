import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'standalone',
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig
