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
              <NuxtLink to="/contacts">
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
const {t} = useI18n();

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
