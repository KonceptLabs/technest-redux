# Astro + Cloudflare Pages Migration Guide

## Prerequisites
- Node.js 22.12.0 or higher
- Cloudflare account with Pages project created
- Git repository connected to Cloudflare Pages

## Step 1: Update Dependencies

Run the following commands to remove Vercel adapter and install Cloudflare adapter:

```bash
npm uninstall @astrojs/vercel @vercel/analytics
npm install @astrojs/cloudflare
```

or with pnpm:

```bash
pnpm remove @astrojs/vercel @vercel/analytics
pnpm add @astrojs/cloudflare
```

## Step 2: Configuration Files Updated

The following files have been automatically updated:

- **astro.config.mjs** - Now imports and uses `@astrojs/cloudflare` adapter
- **package.json** - Dependencies swapped from Vercel to Cloudflare
- **src/env.d.ts** - Added Cloudflare runtime types for environment variable access

## Step 3: Environment Variables

Update your Cloudflare Pages environment variables in your project settings:

- `ZAPIER_WEBHOOK_URL` - Your Smart Start nomination webhook
- `ZAPIER_WEBHOOK_CONTACT_US` - Your contact form webhook

These can be set in:
1. Cloudflare Dashboard > Pages > Your Project > Settings > Environment Variables
2. Or in `wrangler.toml` for local development

## Step 4: API Route Compatibility

Your existing API routes are already compatible with Cloudflare Pages:

- ✅ `src/pages/api/submit-application.ts` - Compatible with Web Fetch API
- ✅ `src/pages/api/submit-contact.ts` - Compatible with Web Fetch API

Both routes use standard Web Request/Response interfaces that work seamlessly with Cloudflare Workers.

## Step 5: Local Development

For local development with Cloudflare Pages, create a `wrangler.toml` file:

```toml
name = "technest-redux"
type = "javascript"
account_id = "YOUR_ACCOUNT_ID"
workers_dev = true

[env.development]
vars = { ENVIRONMENT = "development", ZAPIER_WEBHOOK_URL = "YOUR_WEBHOOK_URL", ZAPIER_WEBHOOK_CONTACT_US = "YOUR_CONTACT_WEBHOOK_URL" }

[env.production]
vars = { ENVIRONMENT = "production", ZAPIER_WEBHOOK_URL = "YOUR_WEBHOOK_URL", ZAPIER_WEBHOOK_CONTACT_US = "YOUR_CONTACT_WEBHOOK_URL" }
```

## Step 6: Build and Deploy

```bash
# Build for production
npm run build

# Preview locally
npm run preview

# Deploy to Cloudflare Pages
# Push to your repository branch connected to Cloudflare Pages, or use Wrangler:
npx wrangler pages deploy dist
```

## Differences from Vercel

- **Request headers** - Cloudflare uses `cf-connecting-ip` for client IP (your code already handles this)
- **Environment variables** - Available via `import.meta.env` (no changes needed)
- **Analytics** - Replace `@vercel/analytics` with Cloudflare's native Web Analytics (optional)
- **KV Storage** - Available via `Astro.locals.runtime.env` if you enable it

Your project is fully compatible and ready to deploy to Cloudflare Pages!
