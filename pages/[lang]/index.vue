<template>
  <div class="flex flex-col h-full flex-1">
    <div class="p-8 lg:p-16 w-full bg-black">
      <Content>
        <div class="flex justify-center w-full">
          <div
            class="w-full flex items-center justify-center gap-2 text-lightGreen max-w-96">
            <hr class="w-full border-lightGreen" />
            <h2 class="uppercase italic">{{ t("home.experience") }}</h2>
            <hr class="w-full border-lightGreen" />
          </div>
        </div>
        <div class="pt-8 flex flex-col justify-center items-center">
          <h1 class="text-4xl text-white font-light text-center">
            {{ t("home.slogan1") }}
          </h1>
          <h1 class="text-4xl text-white font-light text-center">
            {{ t("home.slogan2") }}
          </h1>
          <div>
            <button
              class="text-gray-300 bg-transparent p-4 text-sm flex items-center hover:[&>a]:underline">
              <NuxtLink :to="localePath('/contacts')">
                {{ t("common.contact-us") }}
              </NuxtLink>
              <i
                class="fa-solid fa-chevron-right text-lightGreen text-xs ml-2"></i>
            </button>
          </div>
        </div>
      </Content>
    </div>
    <div
      class="w-full h-auto bg-black flex justify-center items-end max-w-[1440px] mx-auto z-10">
      <NuxtImg
        class="block md:hidden"
        src="/hero/hero-mobile.jpg"
        format="webp"
        height="450"
        alt="Home page hero" />
      <NuxtImg
        class="hidden md:block w-full"
        src="/hero/hero-desktop.jpg"
        format="webp"
        height="450"
        alt="Home page hero" />
    </div>
    <div class="bg-white pb-16 -mt-[85px] pt-[100px] flex-1">
      <Services />
      <AboutUs />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
import urlJoin from "url-join";

const {t, locale} = useI18n();
const route = useRoute();
const { localePath } = useLocalePath();
const image = useImage();
const publicUrl = "https://autrona.lt";

const pageTitle = computed(() => t("meta.home.title"));
const pageDescription = computed(() => t("meta.home.description"));

const ogLocale = computed(() => {
  return locale.value === "LT" ? "lt_LT" : locale.value === "RU" ? "ru_RU" : "en_US";
});

const heroUrl = computed(() => {
  const originalUrl = `hero/hero-mobile.jpg`;
  return image(originalUrl, {
    format: "webp",
    quality: 75,
    height: 800,
  });
});

const metaImg = computed(() => {
  return typeof window !== "undefined"
    ? heroUrl.value
    : urlJoin(publicUrl, heroUrl.value);
});

const metaUrl = computed(() => urlJoin(publicUrl, route.path));

useHead(() => ({
  title: pageTitle.value,
  meta: [
    {
      name: "description",
      content: pageDescription.value,
    },
    {
      property: "og:title",
      content: pageTitle.value,
    },
    {
      property: "og:description",
      content: pageDescription.value,
    },
    {
      property: "og:url",
      content: metaUrl.value,
    },
    {
      property: "og:image",
      content: metaImg.value,
    },
    {
      property: "og:locale",
      content: ogLocale.value,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: metaUrl.value,
    },
  ],
}));

definePageMeta({
  layout: "main",
});
</script>

<style lang="css" scoped>
.hero-img {
  height: 100%;
  background-size: contain;
  width: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
}

p {
  color: theme("colors.text1");
  font-weight: 300;
}
</style>

