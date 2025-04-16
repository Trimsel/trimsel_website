/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizeCss: true, // ✅ This enables CSS optimization
  },
}

module.exports = nextConfig;
