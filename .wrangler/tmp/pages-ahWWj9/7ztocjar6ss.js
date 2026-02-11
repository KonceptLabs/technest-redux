// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/apple-icon.png",
    "/background-shapes-blue.png",
    "/background-shapes.png",
    "/favicon.ico",
    "/favicon.svg",
    "/icon-dark-32x32.png",
    "/icon-light-32x32.png",
    "/icon-personalized.svg",
    "/icon-security-privacy.svg",
    "/icon-service-excellence.svg",
    "/icon-tech-works.svg",
    "/icon.svg",
    "/placeholder-logo.png",
    "/placeholder-logo.svg",
    "/placeholder-user.jpg",
    "/placeholder.jpg",
    "/placeholder.svg",
    "/technest-logo-icon-white.svg",
    "/technest-logo.svg",
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.JPG",
    "/images/hero-4.jpg",
    "/images/smart-start-about-image.jpg",
    "/images/smart-start-cta-couple.jpg",
    "/images/smart-start-cta-lady.jpg",
    "/images/smart-start-header.jpg",
    "/images/smart-start-logo-white.png",
    "/images/smart-start-logo.png",
    "/images/smart-start-section.jpg",
    "/images/tablet-smart-home.jpg",
    "/images/what-we-do-home.jpg",
    "/images/who-we-serve-1.jpg",
    "/images/who-we-serve-2.jpg",
    "/images/who-we-serve-3.jpg"
  ]
};

// node_modules/.pnpm/wrangler@4.64.0_@cloudflare+workers-types@4.20260210.0/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "C:\\TechNest\\Website GitHub\\.wrangler\\tmp\\pages-ahWWj9\\bundledWorker-0.48214773906578146.mjs";
import { isRoutingRuleMatch } from "C:\\TechNest\\Website GitHub\\node_modules\\.pnpm\\wrangler@4.64.0_@cloudflare+workers-types@4.20260210.0\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "C:\\TechNest\\Website GitHub\\.wrangler\\tmp\\pages-ahWWj9\\bundledWorker-0.48214773906578146.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=7ztocjar6ss.js.map
