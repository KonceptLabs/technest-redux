import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C-A0ncKC.mjs';
import { manifest } from './manifest_C1CufkGn.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/submit-application.astro.mjs');
const _page3 = () => import('./pages/api/submit-contact.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/privacy-policy.astro.mjs');
const _page6 = () => import('./pages/resources.astro.mjs');
const _page7 = () => import('./pages/smart-start.astro.mjs');
const _page8 = () => import('./pages/smart-start-form.astro.mjs');
const _page9 = () => import('./pages/terms-of-service.astro.mjs');
const _page10 = () => import('./pages/what-we-do.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.17.1_@types+node@25_1d63ea676e1fb009a12e81bf63910f1e/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/submit-application.ts", _page2],
    ["src/pages/api/submit-contact.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/privacy-policy.astro", _page5],
    ["src/pages/resources.astro", _page6],
    ["src/pages/smart-start.astro", _page7],
    ["src/pages/smart-start-form.astro", _page8],
    ["src/pages/terms-of-service.astro", _page9],
    ["src/pages/what-we-do.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "565e4b5e-e997-4247-874b-bc1c5859f99f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
