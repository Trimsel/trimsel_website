/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizeCss: true, // ✅ CSS optimization
  },

  images: {
    formats: ['image/avif', 'image/webp'], // serve modern formats automatically
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 414, 540, 768, 992, 1200, 1440],
    imageSizes: [120, 180, 240, 320, 480],
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
