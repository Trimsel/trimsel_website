// pages/sitemap.xml.js
const BASE = 'https://www.trimsel.com';

function generateSiteMap() {
  const routes = [
    '', // homepage
    '/aboutus',
    '/contact-us',

    // Services
    '/mobile-app-development-chennai',
    '/devops-consulting-services',
    '/cloud-consulting-services',
    '/digital-marketing-company-chennai',
    '/web-development-company-chennai',
    '/ai-development-company',

    // Portfolio
    '/portfolio',
    '/portfolio/ezyhelpers-case-study',
    '/portfolio/kariot-case-study',
    '/portfolio/mocial-case-study',
    '/portfolio/xaber-case-study',

    // Blog
    '/blog',
    '/blog/how-mobile-apps-grow-business',
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${routes
       .map((path) => {
         const loc = path === '' ? `${BASE}/` : `${BASE}${path}`;
         return `
       <url>
         <loc>${loc}</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>${path === '' ? 1.0 : 0.8}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}