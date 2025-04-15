// next-sitemap.config.js

module.exports = {
    siteUrl: 'https://trimsel.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/thank-you', '/blog', '/blockchain-development', '/portfolio', '/portfolio/ezyhelpers-case-study', '/portfolio/kariot-case-study', '/portfolio/mocial-case-study', '/portfolio/xaber-case-study', '/quality-engineering-testing'], // exclude routes if needed
  };
  