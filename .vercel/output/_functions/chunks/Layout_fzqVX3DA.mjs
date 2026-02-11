import { e as createComponent, m as maybeRenderHead, r as renderTemplate, g as addAttribute, h as createAstro, n as renderHead, k as renderComponent, o as renderSlot } from './astro/server_Bofzg8wA.mjs';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const navItems = [
    { label: "What We Do", href: "/what-we-do" },
    { label: "About Us", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Smart Start", href: "/smart-start" }
  ];
  const currentPath = new URL(Astro2.request.url).pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="navbar" data-astro-cid-pux6a34n> <div class="nav-container" data-astro-cid-pux6a34n> <a href="/" class="logo" data-astro-cid-pux6a34n> <img src="/technest-logo.svg" alt="TechNest" class="logo-image" data-astro-cid-pux6a34n> </a> <ul class="nav-menu" data-astro-cid-pux6a34n> ${navItems.map((item) => renderTemplate`<li class="nav-item" data-astro-cid-pux6a34n> ${item.label === "Resources" ? renderTemplate`<span class="nav-link nav-link-disabled" title="Coming Soon" data-astro-cid-pux6a34n> ${item.label} </span>` : renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`nav-link ${currentPath === item.href ? "active" : ""}`, "class")} data-astro-cid-pux6a34n> ${item.label} </a>`} </li>`)} </ul> <a href="/contact" class="lets-chat-button" data-astro-cid-pux6a34n>Let's Chat</a> </div> </nav> `;
}, "C:/TechNest/Website GitHub/src/components/Navigation.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="TechNest - Innovative technology solutions for modern businesses"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;500;600;700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>TechNest - Smart Technology Solutions</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navigation", $$Navigation, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/TechNest/Website GitHub/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
