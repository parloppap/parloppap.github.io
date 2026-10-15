// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

const BASE_URL = 'https://parloppap.github.io/';
const SITE_TITLE = "Pimpatipan's Portfolio";
const SITE_DESCRIPTION =
  'Pimpatipan Angkharuengrattana — Front-End Developer specializing in Vue.js, Nuxt.js, React and TypeScript.';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-aos',
    // nuxt-aos adds `aos` to build.transpile, which makes Nuxt exclude it from
    // Vite's dep pre-bundling, so the CommonJS build is served raw and
    // `import AOS from 'aos'` fails. Undo that so it gets pre-bundled.
    (_, nuxt) => {
      nuxt.options.build.transpile = nuxt.options.build.transpile.filter(
        (dep) => dep !== 'aos'
      );
    },
    'nuxt-swiper',
  ],
  runtimeConfig: {
    public: {
      baseUrl: BASE_URL,
    },
  },
  app: {
    head: {
      title: SITE_TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: SITE_DESCRIPTION },
        { property: 'og:title', content: SITE_TITLE },
        { property: 'og:description', content: SITE_DESCRIPTION },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: BASE_URL },
        { property: 'og:image', content: BASE_URL + 'ogimage.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: SITE_TITLE },
        { name: 'twitter:description', content: SITE_DESCRIPTION },
        { name: 'twitter:image', content: BASE_URL + 'ogimage.png' },
      ],
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  // devServer: {
  //   host: '0.0.0.0',
  // },
  css: ['animate.css', '~/assets/styles/main.css'],
  googleFonts: {
    families: {
      Quicksand: true,
      Pacifico: true,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
             @use "~/assets/styles/_mixins.scss" as *;
          `,
        },
      },
    },
    plugins: [tailwindcss()],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
});
