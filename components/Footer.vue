<template>
  <div
    id="footer"
    class="bg-black py-4">
    <Content>
      <div class="flex justify-between flex-wrap gap-4">
        <div class="flex w-full text-white max-w-96 text-sm gap-4 items-center">
          <NuxtLink to="/">{{ t("menu.home") }}</NuxtLink>
          <NuxtLink to="/">Krovinių gabenimas</NuxtLink>
          <NuxtLink to="/contacts">{{ t("menu.contacts") }}</NuxtLink>
          <NuxtLink to="/career">{{ t("menu.career") }}</NuxtLink>
        </div>
        <div class="flex gap-4 items-center">
          <NuxtLink to="mailto:info@autrona.lt">
            <i
              class="fa-regular fa-envelope text-white text-lg w-6 h-6 flex-center"></i>
          </NuxtLink>
          <a
            href="https://web.skype.com/share?contact=autrona"
            target="_blank">
            <i
              class="fa-brands fa-skype text-white text-lg w-6 h-6 flex-center"></i>
          </a>
          <div class="text-white text-xs">{{ t("common.footer-autrona") }}</div>
        </div>
      </div>
    </Content>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<style lang="css" scoped>
a {
  font-size: 0.75rem;
  line-height: 1;
}
</style>
