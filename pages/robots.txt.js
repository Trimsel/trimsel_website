// pages/robots.txt.js
const BASE = 'https://www.trimsel.com';

function generateRobots() {
  return `User-agent: *
Allow: /
Disallow: /_next/
Disallow: /api/
Disallow: /thank-you
Disallow: /blockchain-development
Disallow: /quality-engineering-testing

Host: ${BASE}
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
