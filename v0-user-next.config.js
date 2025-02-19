/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru", "kz"],
    defaultLocale: "en",
  },
  // Add any other Next.js config options here
}

module.exports = nextConfig

