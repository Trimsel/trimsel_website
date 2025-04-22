// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://www.trimsel.com',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: [
      '/thank-you',
      '/blog',
      '/blockchain-development',
      '/portfolio',
      '/portfolio/ezyhelpers-case-study',
      '/portfolio/kariot-case-study',
      '/portfolio/mocial-case-study',
      '/portfolio/xaber-case-study',
      '/quality-engineering-testing'
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: [
            '/thank-you',
            '/blog',
            '/blockchain-development',
            '/portfolio',
            '/portfolio/ezyhelpers-case-study',
            '/portfolio/kariot-case-study',
            '/portfolio/mocial-case-study',
            '/portfolio/xaber-case-study',
            '/quality-engineering-testing'
          ],
        },
      ],
      additionalSitemaps: [
        'https://www.trimsel.com/sitemap.xml',
      ],
    },
  };
  