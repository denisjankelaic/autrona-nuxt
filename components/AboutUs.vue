<template>
  <Content>
    <div class="flex flex-col gap-4 mt-8 mb-16">
      <div>
        <div class="uppercase tracking-widest font-semibold text-text2 my-4">
          {{ t("about.about") }}
        </div>
        <div class="w-full relative flex gap-4 flex-col">
          <p>
            {{ t("about.about-text1") }}
          </p>
          <p>
            {{ t("about.about-text2") }}
          </p>
        </div>
      </div>
      <div>
        <div class="my-4 uppercase tracking-widest font-semibold text-text2">
          {{ t("about.our-mission") }}
        </div>
        <div class="w-full relative flex gap-4 flex-col">
          <p>
            {{ t("about.our-mission-text") }}
          </p>
        </div>
      </div>
      <div>
        <div class="my-4 uppercase tracking-widest font-semibold text-text2">
          {{ t("about.our-vision") }}
        </div>
        <div class="w-full relative flex gap-4 flex-col">
          <p>
            {{ t("about.our-vision-text1") }}
          </p>
          <p>
            {{ t("about.our-vision-text2") }}
            <b>
              {{ t("about.our-vision-text3") }}
            </b>
          </p>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <NuxtLink
          to="/contacts"
          class="py-3 px-20 bg-green hover:bg-darkGreen transition-colors rounded-sm text-white mt-8">
          {{ t("common.contact-us") }}
        </NuxtLink>
      </div>
    </div>
  </Content>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<style lang="css" scoped>
p {
  color: theme("colors.text1");
  font-weight: 300;
}
</style>
