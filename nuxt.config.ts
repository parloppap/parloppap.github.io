// https://nuxt.com/docs/api/configuration/nuxt-config
const BASE_URL = 'https://actai-redesign.pages.dev/';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-aos'],
  runtimeConfig: {
    public: {
      baseUrl: BASE_URL,
    },
  },
  app: {
    head: {
      title: "Pimpatipan's Portfolio",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Pimpatipan's Portfolio",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: BASE_URL + 'ogimage.png',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image:src',
          content: BASE_URL + 'ogimage.png',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "Pimpatipan's Portfolio",
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: '',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },

        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: BASE_URL,
        },
      ],
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.png' },
      ],
    },
  },
  css: [
    '~/public/src/styles/main.scss', // you should add main.scss somewhere in your app
  ],
  googleFonts: {
    families: {
      Sniglet: true,
      DynaPuff: true,
      'Delius Swash Caps': true,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/public/src/styles/_mixins.scss" as *;
          `,
        },
      },
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
});