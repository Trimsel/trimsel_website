/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizeCss: true, // ✅ CSS optimization
  },

  images: {
    formats: ['image/avif', 'image/webp'], // serve modern formats automatically
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        // Long cache for static assets in /public
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf|eot)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;