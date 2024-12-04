<template>
  <div>
    <NuxtLayout name="main">
      <div class="p-8 lg:p-16 w-full bg-black">
        <Content>
          <div class="flex justify-center w-full">
            <div
              class="w-full flex items-center justify-center gap-2 text-green max-w-96">
              <hr class="w-full border-green" />
              <h2 class="uppercase italic">{{ t("home.experience") }}</h2>
              <hr class="w-full border-green" />
            </div>
          </div>
          <div class="py-8 flex flex-col justify-center items-center">
            <h1 class="text-4xl text-white font-light text-center">
              {{ t("home.slogan1") }}
            </h1>
            <h1 class="text-4xl text-white font-light text-center">
              {{ t("home.slogan2") }}
            </h1>
            <div>
              <button
                class="text-gray-500 bg-transparent mt-4 text-sm flex items-center">
                <NuxtLink to="/contacts">
                  {{ t("common.contact-us") }}
                </NuxtLink>
                <i
                  class="fa-solid fa-chevron-right text-green text-xs ml-2"></i>
              </button>
            </div>
          </div>
        </Content>
      </div>
      <div class="w-full h-auto bg-black flex justify-center items-end">
        <NuxtImg
          class="block md:hidden"
          src="/hero/hero-mobile.jpg"
          format="webp"
          quality="95" />
        <NuxtImg
          class="hidden md:block w-full"
          src="/hero/hero-desktop.png"
          format="webp"
          quality="97" />
      </div>
      <div class="bg-white py-16">
        <Services />
        <AboutUs />
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();

definePageMeta({
  layoutTransition: true,
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
