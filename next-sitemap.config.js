// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://www.trimsel.com',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: [
      '/thank-you',
      '/blockchain-development',
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: [
            '/thank-you',
            '/blockchain-development',
          ],
        },
      ],
      additionalSitemaps: [
        'https://www.trimsel.com/sitemap.xml',
      ],
    },
  };
  