/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = nextConfig 