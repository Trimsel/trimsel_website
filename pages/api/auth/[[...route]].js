import { createVercelHandlers } from "netlify-cms-oauth-provider-node";

const ensureTrailingSlashRemoved = (value) =>
  value ? value.replace(/\/+$/, "") : value;

const getSiteUrl = () => {
  const envUrl = ensureTrailingSlashRemoved(
    process.env.NEXT_PUBLIC_SITE_URL?.trim()
  );

  if (envUrl) {
    return envUrl;
  }

  const port = process.env.PORT || 3000;
  return `http://localhost:${port}`;
};

const dedupe = (values) => [...new Set(values)];

const siteUrl = getSiteUrl();

const defaultOrigins = dedupe([
  siteUrl.toLowerCase(),
  "http://localhost:3000",
  "https://localhost:3000",
]);

const origin = dedupe(
  (process.env.OAUTH_ALLOWED_ORIGINS || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => ensureTrailingSlashRemoved(item).toLowerCase())
    .concat(defaultOrigins)
).filter(Boolean);

const handlers = createVercelHandlers({
  origin,
  completeUrl: `${siteUrl}/api/auth/callback`,
  adminPanelUrl: `${siteUrl}/admin/`,
  oauthProvider: "github",
  oauthClientID: process.env.GITHUB_CLIENT_ID,
  oauthClientSecret: process.env.GITHUB_CLIENT_SECRET,
  oauthScopes: process.env.OAUTH_GITHUB_SCOPES || "",
});

export default async function handler(req, res) {
  const [segment = ""] = req.query.route || [];

  if (segment === "callback") {
    return handlers.complete(req, res);
  }

  return handlers.begin(req, res);
}
