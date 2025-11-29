// pages/sitemap.xml.js
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const BASE = "https://www.trimsel.com";

const staticRoutes = [
  { path: "/", lastmod: "2025-11-07" },
  { path: "/aboutus", lastmod: "2025-11-08" },
  { path: "/contact-us", lastmod: "2025-11-08" },
  { path: "/mobile-app-development-chennai", lastmod: "2025-11-08" },
  { path: "/devops-consulting-services", lastmod: "2025-11-08" },
  { path: "/cloud-consulting-services", lastmod: "2025-11-08" },
  { path: "/digital-marketing-company-chennai", lastmod: "2025-11-08" },
  { path: "/web-development-company-chennai", lastmod: "2025-11-08" },
  { path: "/ai-development-company", lastmod: "2025-11-08" },
  { path: "/portfolio", lastmod: "2025-10-12" },
  { path: "/portfolio/ezyhelpers-case-study", lastmod: "2025-11-05" },
  { path: "/portfolio/kariot-case-study", lastmod: "2025-11-05" },
  { path: "/portfolio/mocial-case-study", lastmod: "2025-11-05" },
  { path: "/portfolio/xaber-case-study", lastmod: "2025-11-05" },
  { path: "/blog", lastmod: "2025-11-03" },
];

const toISODate = (value) => {
  if (!value) return null;
  if (value instanceof Date) return value.toISOString().split("T")[0];
  if (typeof value === "string") {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.valueOf())) {
      return parsed.toISOString().split("T")[0];
    }
  }
  return null;
};

const getPostRoutes = () => {
  const postsDir = path.join(process.cwd(), "posts");
  if (!fs.existsSync(postsDir)) return [];

  // Pull post slugs + dates from Markdown so sitemap stays in sync with new publishes
  return fs
    .readdirSync(postsDir)
    .filter((file) => /\.mdx?$/.test(file))
    .map((filename) => {
      const fullPath = path.join(postsDir, filename);
      const slug = filename.replace(/\.mdx?$/, "");
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(fileContent);

      const lastmod =
        toISODate(data?.date) ||
        fs.statSync(fullPath).mtime.toISOString().split("T")[0];

      return { path: `/blog/${slug}`, lastmod };
    });
};

function generateSiteMap() {
  const postRoutes = getPostRoutes();
  const routes = [...staticRoutes, ...postRoutes];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${routes
       .map(({ path: routePath, lastmod }) => {
         const loc = routePath === "/" ? `${BASE}/` : `${BASE}${routePath}`;
         return `
       <url>
         <loc>${loc}</loc>
         <lastmod>${lastmod || staticRoutes[0].lastmod}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>${routePath === "/" ? 1.0 : 0.8}</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
