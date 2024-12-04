// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";
import ViteComponents from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineNuxtConfig({
  devtools: {enabled: true},

  app: {
    head: {
      title: "Autrona",
      link: [{rel: "icon", type: "image/*", href: "/favicon.svg"}],
    },
    pageTransition: {name: "page", mode: "out-in"},
    layoutTransition: {name: "layout", mode: "out-in"},
  },

  modules: [
    "@unocss/nuxt",
    "unplugin-icons/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/fonts",
    "@formkit/nuxt",
    "@nuxtjs/leaflet",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  css: [
    "~/assets/styles/animations/_page-transitions.css",
    "~/assets/styles/styles.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
  ],
  vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: "",
          }),
        ],
        dts: true,
      }),
    ],
  },

  fonts: {
    families: [
      {
        name: "Roboto",
        provider: "google",
        weights: [300, 400, 500, 600],
      },
      {
        name: "Montseratt",
        provider: "google",
        weights: [300, 400, 500, 600],
      },
    ],

    defaults: {
      styles: ["normal"],
    },
  },

  site: {
    url: "https://autrona-nuxt.vercel.app/",
    name: "Autrona",
  },
  compatibilityDate: "2024-11-26",
  content: {
    documentDriven: true,
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
});
