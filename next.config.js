/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
