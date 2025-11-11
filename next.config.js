/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    optimizeCss: true, // ✅ CSS optimization
  },

  turbopack: {
    root: __dirname,
  },

  images: {
    formats: ['image/avif', 'image/webp'], // serve modern formats automatically
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 414, 540, 768, 992, 1200, 1440],
    imageSizes: [120, 180, 240, 320, 480],
    qualities: [70, 75],
  },

  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
      {
        // Long cache for static assets in /public
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf|eot)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      { source: '/admin', destination: '/admin/index.html' },
      { source: '/admin/', destination: '/admin/index.html' },
      { source: '/config.yml', destination: '/admin/config.yml' },
    ];
  },

  async redirects() {
    return [
      { source: '/admin/config.yml', destination: '/admin/config.yml', permanent: false },
    ];
  },
};

module.exports = nextConfig;
