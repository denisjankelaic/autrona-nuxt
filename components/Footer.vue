<template>
  <div
    id="footer"
    class="bg-black py-4">
    <Content>
      <div class="flex flex-col gap-4">
        <NuxtLink
          to="/"
          class="block m-auto md:m-0">
          <NuxtImg
            src="/logo_transparent.png"
            class="h-8 md:h-9 object-contain brightness-0 invert"
            alt="Autrona" />
        </NuxtLink>
        <div
          class="flex w-full justify-center flex-wrap gap-4 items-center md:justify-between">
          <div
            class="flex w-full text-white max-w-96 text-sm gap-4 items-center justify-center md:justify-start">
            <NuxtLink to="/">{{ t("menu.home") }}</NuxtLink>
            <NuxtLink to="/cargo">{{ t("menu.cargo") }}</NuxtLink>
            <NuxtLink to="/contacts">{{ t("menu.contacts") }}</NuxtLink>
            <NuxtLink to="/career">{{ t("menu.career") }}</NuxtLink>
          </div>
          <div
            class="flex gap-4 items-center links md:hidden w-full justify-center">
            <a href="mailto:info@autrona.lt">
              <i
                class="fa-regular fa-envelope text-white text-lg w-6 h-6 flex-center"></i>
            </a>
            <a
              href="https://web.skype.com/share?contact=autrona"
              target="_blank">
              <i
                class="fa-brands fa-skype text-white text-lg w-6 h-6 flex-center" />
            </a>
            <a href="viber://contact?number=%2B37065095557">
              <i
                class="fa-brands fa-viber text-white text-lg w-6 h-6 flex-center" />
            </a>
            <a href="https://wa.me/%2B37065095557">
              <i
                class="fa-brands fa-whatsapp text-white text-lg w-6 h-6 flex-center" />
            </a>
          </div>
          <div class="hidden gap-4 items-center links md:flex">
            <a href="mailto:info@autrona.lt">
              <i
                class="fa-regular fa-envelope text-white text-lg w-6 h-6 flex-center"></i>
            </a>
            <a
              href="https://web.skype.com/share?contact=autrona"
              target="_blank">
              <i
                class="fa-brands fa-skype text-white text-lg w-6 h-6 flex-center" />
            </a>
            <a href="tel:%2B37065095557">
              <i
                class="fa-brands fa-viber text-white text-lg w-6 h-6 flex-center" />
            </a>
            <a href="tel:%2B37065095557">
              <i
                class="fa-brands fa-whatsapp text-white text-lg w-6 h-6 flex-center" />
            </a>
          </div>
        </div>
        <hr class="border-gray-700" />
        <div class="text-white text-xs w-full text-center md:text-end">
          {{ t("common.footer-autrona") }}
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

a.router-link-active {
  color: theme("colors.lightGreen");
}
</style>
