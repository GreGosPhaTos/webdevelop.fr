/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom'
  }
}

module.exports = nextConfig
