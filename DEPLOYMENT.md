# Cloudflare Pages Deployment Configuration

## Environment Variables

For proper SEO and sitemap generation, the following environment variables must be set in Cloudflare Pages **Build environment variables**:

### Required for Production

| Variable | Value | Purpose |
|----------|-------|---------|
| `VITE_SITE_URL` | `https://cullenconsults.pages.dev` | Canonical deployment origin for sitemap.xml generation and SEO metadata (no trailing slash) |
| `VITE_WEB3FORMS_ACCESS_KEY` | `3d6af070-c725-4fab-bed2-2da39460b0c1` | Public API key for contact form submissions |

## Setup Instructions

1. Go to **Cloudflare Pages → cullen-consults → Settings → Environment variables**
2. Add the variables above under **Production**
3. Redeploy (or trigger a new build)
4. Verify at:
   - https://cullenconsults.pages.dev/sitemap.xml (should contain all URLs)
   - https://cullenconsults.pages.dev/robots.txt (should reference sitemap)

## Why This Matters

- Without `VITE_SITE_URL`, Vite builds with empty sitemaps and `noindex` robots directives
- Google Search Console shows "couldn't fetch" when the sitemap is empty
- Once this is set, rebuild to generate proper sitemap and robots.txt files

## Local Development

Create a `.env` file in the project root:

```
VITE_SITE_URL=https://cullenconsults.pages.dev
VITE_WEB3FORMS_ACCESS_KEY=3d6af070-c725-4fab-bed2-2da39460b0c1
```

Then run:
```bash
pnpm build
```

The generated `dist/public/sitemap.xml` should contain all indexable URLs.
