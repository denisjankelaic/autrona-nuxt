<template>
  <div class="bg-pastelWhite flex flex-col h-full flex-1">
    <Content>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="flex flex-col gap-4">
          <div class="white-box shadow-md p-4 rounded-md w-full">
            <h1 class="text-lg font-medium uppercase">
              {{ t("career.career") }}
            </h1>
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
const {t} = useI18n();

definePageMeta({
  layout: "main",
});
</script>
