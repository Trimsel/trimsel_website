// pages/sitemap.xml.js
const BASE = "https://www.trimsel.com";

const lastModMap = {
  "": "2025-11-07",
  "/aboutus": "2025-11-08",
  "/contact-us": "2025-11-08",
  "/mobile-app-development-chennai": "2025-11-08",
  "/devops-consulting-services": "2025-11-08",
  "/cloud-consulting-services": "2025-11-08",
  "/digital-marketing-company-chennai": "2025-11-08",
  "/web-development-company-chennai": "2025-11-08",
  "/ai-development-company": "2025-11-08",
  "/portfolio": "2025-10-12",
  "/portfolio/ezyhelpers-case-study": "2025-11-05",
  "/portfolio/kariot-case-study": "2025-11-05",
  "/portfolio/mocial-case-study": "2025-11-05",
  "/portfolio/xaber-case-study": "2025-11-05",
  "/blog": "2025-11-03",
  "/blog/how-mobile-apps-grow-business": "2025-11-08",
};

function generateSiteMap() {
  const routes = Object.keys(lastModMap);

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${routes
       .map((path) => {
         const loc = path === '' ? `${BASE}/` : `${BASE}${path}`;
         return `
       <url>
         <loc>${loc}</loc>
         <lastmod>${lastModMap[path] || lastModMap[""]}</lastmod>
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
