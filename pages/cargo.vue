<template>
  <div class="bg-white pb-16 flex flex-col h-full flex-1">
    <div class="bg-black">
      <div class="max-w-[1440px] m-auto mt-12">
        <NuxtImg
          class="w-full min-h-[150px] object-cover"
          src="/hero/cargo-side.jpg"
          format="webp"
          quality="98"
          height="500"
          alt="Cargo page hero" />
      </div>
    </div>
    <div class="bg-white lg:-mt-[32px] pt-8 lg:pt-[52px] flex-1">
      <Content>
        <div class="flex flex-col gap-8">
          <h1 class="text-2xl md:text-4xl font-light text-center uppercase">
            {{ t("menu.cargo") }}
          </h1>
          <div class="flex flex-col gap-4">
            <div
              class="uppercase tracking-widest font-semibold text-text2 md:my-4">
              {{ t("cargo.basis-title") }}
            </div>
            <div class="w-full relative flex gap-4 flex-col">
              <p>
                {{ t("cargo.basis-text1") }}
              </p>
              <p>
                {{ t("cargo.basis-text2") }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 my-4">
            <div class="card shadow-md">
              <span class="title"> {{ t("cargo.years-number") }} </span>
              <span class="subtitle">
                {{ t("cargo.years-title") }}
              </span>
            </div>
            <div class="card shadow-md">
              <span class="title">{{ t("cargo.partners-number") }}</span>
              <span class="subtitle">
                {{ t("cargo.partners-title") }}
              </span>
            </div>
            <div class="card shadow-md">
              <span class="title"> {{ t("cargo.tons-number") }}</span>
              <span class="subtitle"> {{ t("cargo.tons-title") }}</span>
            </div>
          </div>
          <div>
            <div
              class="uppercase tracking-widest font-semibold text-text2 my-4">
              {{ t("cargo.priorities") }}
            </div>
            <div class="w-full relative flex gap-4 flex-col">
              <p>
                <b> {{ t("cargo.quality") }} </b>
                {{ t("cargo.quality-text") }}
              </p>
              <p>
                <b> {{ t("cargo.flexibility") }} </b>
                {{ t("cargo.flexibility-text") }}
              </p>
            </div>
          </div>
          <div>
            <div
              class="uppercase tracking-widest font-semibold text-text2 my-4">
              {{ t("cargo.trailer-title") }}
            </div>
            <div class="w-full relative flex gap-2 flex-col">
              <p>{{ t("cargo.trailer-measurements") }}</p>
              <p>{{ t("cargo.trailer-max-size") }}</p>
              <p>{{ t("cargo.trailer-max-weight") }}</p>
              <p>{{ t("cargo.trailer-max-pallets") }}</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div
              class="uppercase tracking-widest font-semibold text-text2 my-4">
              {{ t("cargo.security-equipment") }}
            </div>
            <div class="w-full relative flex gap-2 flex-col">
              <p>{{ t("cargo.security-belts") }}</p>
              <p>{{ t("cargo.security-corners") }}</p>
              <p>{{ t("cargo.security-aluminium-boards") }}</p>
              <p>{{ t("cargo.security-cross-boards") }}</p>
              <p>{{ t("cargo.security-mats") }}</p>
            </div>
          </div>
          <h1 class="text-2xl text-center uppercase">
            {{ t("cargo.main-countries") }}
          </h1>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-4 my-4">
            <div class="card shadow-md p-2">
              <div
                class="flag shadow-sm"
                v-html="LT"></div>
              <span class="subtitle"> {{ t("cargo.lithuania") }} </span>
            </div>
            <div class="card shadow-md p-2">
              <div
                class="flag shadow-sm"
                v-html="DE" />
              <span class="subtitle"> {{ t("cargo.germany") }} </span>
            </div>
            <div class="card shadow-md p-2">
              <div
                class="flag shadow-sm"
                v-html="IT"></div>
              <span class="subtitle"> {{ t("cargo.italy") }} </span>
            </div>
            <div class="card shadow-md p-2">
              <div
                class="flag shadow-sm"
                v-html="CZ"></div>
              <span class="subtitle"> {{ t("cargo.czechia") }} </span>
            </div>
          </div>
        </div>
      </Content>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
import {DE, LT, IT, CZ} from "country-flag-icons/string/3x2";

const {t} = useI18n();
definePageMeta({
  layout: "main",
});
</script>

<style lang="css" scoped>
.card {
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
}

.card .title {
  font-size: 4rem;
  font-weight: 300;
  color: theme("colors.green");
  line-height: 1;
}

.flag {
  border-radius: 4px;
  overflow: hidden;
}

.flag :deep(svg) {
  height: 3rem;
  border-radius: 4px;
}

p {
  color: theme("colors.text1");
  font-weight: 300;
}
</style>
