globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate } from './astro/server_CUol773d.mjs';
/* empty css                         */

const $$PillarsSection = createComponent(($$result, $$props, $$slots) => {
  const pillars = [
    {
      icon: "/icon-tech-works.svg",
      label: "Bespoke Services"
    },
    {
      icon: "/icon-personalized.svg",
      label: "People-centric"
    },
    {
      icon: "/icon-security-privacy.svg",
      label: "Privacy Focused"
    },
    {
      icon: "/icon-service-excellence.svg",
      label: "Service Excellence"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="pillars-section" data-astro-cid-nsimjeus> <div class="pillars-container" data-astro-cid-nsimjeus> ${pillars.map((pillar) => renderTemplate`<div class="pillar-item" data-astro-cid-nsimjeus> <div class="pillar-icon" data-astro-cid-nsimjeus> <img${addAttribute(pillar.icon, "src")}${addAttribute(pillar.label, "alt")} data-astro-cid-nsimjeus> </div> <p class="pillar-label" data-astro-cid-nsimjeus>${pillar.label}</p> </div>`)} </div> </section> `;
}, "C:/TechNest/Website GitHub/src/components/PillarsSection.astro", void 0);

export { $$PillarsSection as $ };
