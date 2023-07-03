// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-headlessui",
    ["@storyblok/nuxt", {accessToken: process.env.STORYBLOK_TOKEN}]
  ]
})
