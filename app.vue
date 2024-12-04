<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import "@unocss/reset/tailwind-compat.css";
import urlJoin from "url-join";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const image = useImage();
const route = useRoute();

const heroUrl = computed(() => {
  let originalUrl = `hero/cargo-side.jpg`;

  return image(originalUrl, {
    format: "webp",
    quality: 75,
    height: 800,
  });
});

//TODO: Change to actual url.
const publicUrl = "www.autrona-nuxt.vercel.app";

const metaImg = computed(() => {
  return typeof window !== "undefined"
    ? heroUrl.value
    : urlJoin(publicUrl, heroUrl.value);
});

const metaUrl = computed(() => urlJoin(publicUrl, route.path, "/"));

const meta = [
  {
    name: "og:title",
    content: t("meta.title"),
  },
  {
    name: "og:url",
    content: publicUrl,
  },
  {
    name: "og:image",
    content: metaImg.value,
  },
  {
    name: "og:image:secure_url",
    content: metaImg.value,
  },
  {
    name: "og:type",
    content: "website",
  },
];

useHead(() => ({
  title: t("meta.title"),
  titleTemplate: (title) => {
    return `${title} | Autrona.lt`;
  },
  meta: [...meta],
  link: [
    {
      rel: "canonical",
      href: metaUrl.value,
    },
  ],
}));
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
</style>
