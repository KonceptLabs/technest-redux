var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import { renderers } from "./renderers.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_DnnCkchv.mjs";
import { manifest } from "./manifest_UMCOaY1C.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
var serverIslandMap = /* @__PURE__ */ new Map();
var _page0 = /* @__PURE__ */ __name(() => import("./pages/_image.astro.mjs"), "_page0");
var _page1 = /* @__PURE__ */ __name(() => import("./pages/about.astro.mjs"), "_page1");
var _page2 = /* @__PURE__ */ __name(() => import("./pages/api/submit-application.astro.mjs"), "_page2");
var _page3 = /* @__PURE__ */ __name(() => import("./pages/api/submit-contact.astro.mjs"), "_page3");
var _page4 = /* @__PURE__ */ __name(() => import("./pages/contact.astro.mjs"), "_page4");
var _page5 = /* @__PURE__ */ __name(() => import("./pages/privacy-policy.astro.mjs"), "_page5");
var _page6 = /* @__PURE__ */ __name(() => import("./pages/resources.astro.mjs"), "_page6");
var _page7 = /* @__PURE__ */ __name(() => import("./pages/smart-start.astro.mjs"), "_page7");
var _page8 = /* @__PURE__ */ __name(() => import("./pages/smart-start-form.astro.mjs"), "_page8");
var _page9 = /* @__PURE__ */ __name(() => import("./pages/terms-of-service.astro.mjs"), "_page9");
var _page10 = /* @__PURE__ */ __name(() => import("./pages/what-we-do.astro.mjs"), "_page10");
var _page11 = /* @__PURE__ */ __name(() => import("./pages/index.astro.mjs"), "_page11");
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/@astrojs+cloudflare@12.6.12_ffabe211bfe6260efae81f1ac93f8b8a/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
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
var _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: /* @__PURE__ */ __name(() => import("./noop-entrypoint.mjs"), "actions"),
  middleware: /* @__PURE__ */ __name(() => import("./_astro-internal_middleware.mjs"), "middleware")
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
//# sourceMappingURL=bundledWorker-0.48214773906578146.mjs.map
