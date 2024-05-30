/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: false,
  i18n,
  async rewrites() {
    return [
      {
        source: '/proxy/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/:path*`,
      },
    ];
  },
}

module.exports = nextConfig