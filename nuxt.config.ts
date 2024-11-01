// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/test-utils',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'S-Grid',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      stylistic: true, // <---
    },
  },
})
