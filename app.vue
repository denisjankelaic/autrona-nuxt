<template>
  <Html :lang="locale">
    <Body
      class="antialiased duration-300 transition-colors dark:text-gray-200 bg-black">
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
import "@unocss/reset/tailwind-compat.css";
import urlJoin from "url-join";
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n();
const image = useImage();
const route = useRoute();
const favicon = useFavicon();

const heroUrl = computed(() => {
  let originalUrl = `hero/cargo-side.jpg`;

  return image(originalUrl, {
    format: "webp",
    quality: 75,
    height: 800,
  });
});

const faviconUlr = computed(() => {
  let originalUrl = `hero/fav.png`;

  return image(originalUrl, {
    format: "ico",
    quality: 100,
    height: 32,
  });
});

favicon.value = faviconUlr.value;

const publicUrl = "https://autrona.lt";

const metaImg = computed(() => {
  return typeof window !== "undefined"
    ? heroUrl.value
    : urlJoin(publicUrl, heroUrl.value);
});

const metaUrl = computed(() => urlJoin(publicUrl, route.path));

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

<style lang="css"></style>
