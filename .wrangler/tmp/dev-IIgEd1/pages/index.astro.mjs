globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, l as renderScript, k as renderComponent } from '../chunks/astro/server_CUol773d.mjs';
import { $ as $$Layout } from '../chunks/Layout_DpqAxhnu.mjs';
/* empty css                                 */
import { $ as $$PillarsSection } from '../chunks/PillarsSection_-dZjssge.mjs';
import { $ as $$Footer } from '../chunks/Footer_CPfulkAN.mjs';
export { renderers } from '../renderers.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    {
      title: "UPGRADE YOUR HOME TO QUIET LUXURY",
      description: "Discreet, reliable smart technology that blends into your life and works without effort.",
      buttonText: "Learn More",
      buttonHref: "/what-we-do",
      image: "/images/hero-1.jpg"
    },
    {
      title: "MODERN COMFORT MADE SIMPLE",
      description: "Easy to use technology that helps you feel secure at home and connected to the people you love.",
      buttonText: "Learn More",
      buttonHref: "/what-we-do",
      image: "/images/hero-2.jpg"
    },
    {
      title: "SMART TECH THAT WORKS AS HARD AS YOU DO",
      description: "Simple, reliable solutions that improve security, save time and keep your business running smoothly.",
      buttonText: "Learn More",
      buttonHref: "/what-we-do",
      image: "/images/hero-3.jpg"
    },
    {
      title: "SUPPORT THAT HELPS YOU STAY INDEPENDENT",
      description: "Safety, accessibility and monitoring solutions that adapt to your needs and help you live confidently at home.",
      buttonText: "Learn More",
      buttonHref: "/what-we-do",
      image: "/images/hero-4.jpg"
    }
  ];
  let currentSlide = 0;
  return renderTemplate`${maybeRenderHead()}<section class="carousel-hero" data-astro-cid-nlow4r3u> <div class="carousel-container" data-astro-cid-nlow4r3u> ${slides.map((slide, index) => renderTemplate`<div${addAttribute(`carousel-slide ${index === currentSlide ? "active" : ""}`, "class")}${addAttribute(index, "data-index")} data-astro-cid-nlow4r3u> <div class="slide-image" data-astro-cid-nlow4r3u> <img${addAttribute(slide.image, "src")}${addAttribute(slide.title, "alt")} data-astro-cid-nlow4r3u> </div> <div class="slide-content" data-astro-cid-nlow4r3u> <h2 data-astro-cid-nlow4r3u>${slide.title}</h2> <p data-astro-cid-nlow4r3u>${slide.description}</p> <a${addAttribute(slide.buttonHref, "href")} class="btn btn-primary" data-astro-cid-nlow4r3u>${slide.buttonText}</a> </div> </div>`)} </div> <div class="carousel-controls" data-astro-cid-nlow4r3u> <button class="carousel-btn prev" aria-label="Previous slide" data-astro-cid-nlow4r3u>❮</button> <div class="carousel-dots" data-astro-cid-nlow4r3u> ${slides.map((_, index) => renderTemplate`<button${addAttribute(`dot ${index === currentSlide ? "active" : ""}`, "class")}${addAttribute(`Go to slide ${index + 1}`, "aria-label")}${addAttribute(index, "data-index")} data-astro-cid-nlow4r3u></button>`)} </div> <button class="carousel-btn next" aria-label="Next slide" data-astro-cid-nlow4r3u>❯</button> </div> </section> ${renderScript($$result, "C:/TechNest/Website GitHub/src/components/HeroSection.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/TechNest/Website GitHub/src/components/HeroSection.astro", void 0);

const $$WhatWeDoSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="what-we-do" data-astro-cid-bwyb34ae> <div class="what-we-do-container" data-astro-cid-bwyb34ae> <div class="what-we-do-content" data-astro-cid-bwyb34ae> <h2 data-astro-cid-bwyb34ae>WHAT WE DO</h2> <p data-astro-cid-bwyb34ae>
TechNest helps people feel more comfortable, secure and connected in their homes and small businesses. We take the stress out of choosing, installing and maintaining smart technology by doing the work properly, explaining things clearly and making sure everything fits your life.
</p> <p data-astro-cid-bwyb34ae>
We bring together the right products, tidy wiring, clean setups and dependable support so your technology feels natural rather than overwhelming. Whether you want a safer home, a smoother workday or a space that simply works without constant troubleshooting, we make the process simple from the first visit to the final handover.
</p> <p data-astro-cid-bwyb34ae>
Our goal is to help you enjoy the benefits of modern technology without the confusion or complications. You get clear advice, friendly service and a setup that works the way it should every day.
</p> </div> <div class="what-we-do-image" data-astro-cid-bwyb34ae> <img src="/images/what-we-do-home.jpg" alt="Happy family in front of their home" data-astro-cid-bwyb34ae> </div> </div> </section> `;
}, "C:/TechNest/Website GitHub/src/components/WhatWeDoSection.astro", void 0);

const $$WhoWeServeSection = createComponent(($$result, $$props, $$slots) => {
  const serveItems = [
    {
      image: "/images/who-we-serve-1.jpg",
      description: "We support older residents who value safety and peace of mind, and help people who are upgrading their spaces for visiting relatives, as well as those who want support staying independent for longer."
    },
    {
      image: "/images/who-we-serve-2.jpg",
      description: "We work with busy professionals who want their homes to run smoothly, families who want simple solutions that fit their lifestyle."
    },
    {
      image: "/images/who-we-serve-3.jpg",
      description: "We provide local entrepreneurs and small business owners with dependable networks, clear security and smart systems that help their operations run without unnecessary cost or complexity."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="who-we-serve" data-astro-cid-hbki2x6x> <div class="who-we-serve-container" data-astro-cid-hbki2x6x> <h2 class="who-we-serve-title" data-astro-cid-hbki2x6x>WHO WE SERVE</h2> <div class="serve-grid" data-astro-cid-hbki2x6x> ${serveItems.map((item) => renderTemplate`<div class="serve-item" data-astro-cid-hbki2x6x> <div class="serve-line" data-astro-cid-hbki2x6x></div> <div class="serve-image" data-astro-cid-hbki2x6x> <img${addAttribute(item.image, "src")} alt="Customer segment" data-astro-cid-hbki2x6x> </div> <p class="serve-description" data-astro-cid-hbki2x6x>${item.description}</p> </div>`)} </div> </div> </section> `;
}, "C:/TechNest/Website GitHub/src/components/WhoWeServeSection.astro", void 0);

const $$SmartStartSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="smart-start" data-astro-cid-xigjce2k> <div class="smart-start-container" data-astro-cid-xigjce2k> <div class="smart-start-image-wrapper" data-astro-cid-xigjce2k> <div class="smart-start-frame" data-astro-cid-xigjce2k></div> <img src="/images/smart-start-section.jpg" alt="Smart Start - Community support program" data-astro-cid-xigjce2k> </div> <div class="smart-start-content" data-astro-cid-xigjce2k> <div class="smart-start-logo" data-astro-cid-xigjce2k> <img src="/images/smart-start-logo.png" alt="Smart Start Logo" data-astro-cid-xigjce2k> </div> <div class="smart-start-text" data-astro-cid-xigjce2k> <p data-astro-cid-xigjce2k>Smart Start is our way of supporting the community we live in and helping more people enjoy technology that feels simple, reliable and easy to trust every day.</p> <p data-astro-cid-xigjce2k>Each month we choose one local household or small business to receive a complimentary smart technology upgrade that makes everyday life a little easier, safer or more enjoyable.</p> <p data-astro-cid-xigjce2k>Anyone can enter.</p> </div> <a href="/smart-start" class="btn btn-primary" data-astro-cid-xigjce2k>Enter or Nominate</a> </div> </div> </section> `;
}, "C:/TechNest/Website GitHub/src/components/SmartStartSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "WhatWeDoSection", $$WhatWeDoSection, {})} ${renderComponent($$result2, "PillarsSection", $$PillarsSection, {})} ${renderComponent($$result2, "WhoWeServeSection", $$WhoWeServeSection, {})} ${renderComponent($$result2, "SmartStartSection", $$SmartStartSection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/TechNest/Website GitHub/src/pages/index.astro", void 0);

const $$file = "C:/TechNest/Website GitHub/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
