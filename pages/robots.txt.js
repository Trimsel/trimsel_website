// pages/robots.txt.js
const BASE = 'https://www.trimsel.com';

function generateRobots() {
  return `User-agent: *
Allow: /
Disallow: /api/
Disallow: /thank-you
Disallow: /admin/
Disallow: /admin/config.yml

Sitemap: ${BASE}/sitemap.xml
`;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(generateRobots());
  res.end();

  return {
    props: {},
  };
}

export default function Robots() {
  return null;
}
