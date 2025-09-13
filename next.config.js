/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizeCss: true,
    // Optional (Next 13.5+): helps tree-shake large libs
    // optimizePackageImports: ['react-bootstrap', 'lodash'],
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    // Send appropriately sized images to devices
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200],
    imageSizes:  [16, 24, 32, 48, 64, 96, 128],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      // Long cache for static assets in /public (images, icons)
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // Long cache for self-hosted fonts (if you place them under /public/fonts)
      {
        source: '/fonts/:all*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

module.exports = nextConfig;
