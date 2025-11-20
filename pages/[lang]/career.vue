<template>
  <div class="bg-pastelWhite flex flex-col h-full flex-1">
    <Content>
      <h1 class="text-2xl md:text-4xl text-center my-4 md:my-8">
        {{ t("common.join-us") }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="flex flex-col gap-4">
          <div class="white-box shadow-md p-4 rounded-md w-full">
            <div class="flex flex-col gap-2">
              <h2 class="font-medium">{{ t("career.looking-for") }}</h2>
              <p class="flex flex-col text-sm">
                <span> {{ t("career.driver") }} </span>
              </p>
            </div>
            <hr />
            <div class="flex flex-col gap-2">
              <h2 class="font-medium">{{ t("career.nature-of-work") }}</h2>
              <p class="flex flex-col text-sm">
                <span> {{ t("career.cargo-transportation") }} </span>
              </p>
            </div>
            <hr />
            <div class="flex flex-col gap-2">
              <h2 class="font-medium">{{ t("career.requirements") }}</h2>
              <p class="flex flex-col text-sm gap-2">
                <span v-html="t('career.required-experience')" />
                <span>{{ t("career.driving-license") }}</span>
                <span> {{ t("career.languages") }} </span>
              </p>
            </div>
            <hr />
            <div class="flex flex-col gap-2">
              <h2 class="font-medium">{{ t("career.candidancy") }}</h2>
              <p class="text-sm">
                <span v-html="t('career.send-cvs')" />
                <span class="font-medium">info@autrona.lt</span>
              </p>
              <p class="text-sm">
                <span>
                  <span> {{ t("career.more-info-phone") }} </span>
                  <span class="font-medium">+370 699 45118</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="h-full max-h-[600px] overflow-hidden rounded-md shadow-md">
          <NuxtImg
            class="block md:hidden"
            src="/hero/career-mobile.jpg"
            format="webp"
            quality="95"
            height="400"
            alt="Career page hero" />
          <NuxtImg
            src="/hero/career-desktop.jpg"
            class="hidden md:block h-full w-full object-cover"
            format="webp"
            quality="95"
            height="600"
            alt="Career page hero" />
        </div>
      </div>
    </Content>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
import urlJoin from "url-join";

const {t, locale} = useI18n();
const route = useRoute();
const image = useImage();
const publicUrl = "https://autrona.lt";

const pageTitle = computed(() => t("meta.career.title"));
const pageDescription = computed(() => t("meta.career.description"));

const ogLocale = computed(() => {
  return locale.value === "LT" ? "lt_LT" : locale.value === "RU" ? "ru_RU" : "en_US";
});

const careerImg = computed(() => {
  const originalUrl = `hero/career-desktop.jpg`;
  const imgUrl = image(originalUrl, {
    format: "webp",
    quality: 95,
    height: 600,
  });
  return typeof window !== "undefined"
    ? imgUrl
    : urlJoin(publicUrl, imgUrl);
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
      content: careerImg.value,
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

