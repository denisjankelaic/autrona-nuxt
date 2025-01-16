<template>
  <div
    id="header"
    class="header w-full flex top-0 z-[100000] shadow-md">
    <div class="hidden md:flex w-full flex-col">
      <Content>
        <div class="flex w-full justify-between py-1">
          <FormKit
            type="select"
            name="locale"
            v-model="locale"
            :options="availableLocales"
            class="hover:cursor-pointer" />
          <div class="icons flex gap-2">
            <a
              href="mailto:info@autrona.lt"
              target="_blank">
              <i class="fa-regular fa-envelope text-lg w-6 h-6 flex-center"></i>
            </a>
            <a
              href="https://web.skype.com/share?contact=autrona"
              target="_blank">
              <i class="fa-brands fa-skype text-lg w-6 h-6 flex-center"></i>
            </a>
            <a
              href="tel:%2B37065095557"
              target="_blank">
              <i class="fa-brands fa-viber text-lg w-6 h-6 flex-center"></i>
            </a>
            <a
              href="tel:%2B37065095557"
              target="_blank">
              <i class="fa-brands fa-whatsapp text-lg w-6 h-6 flex-center"></i>
            </a>
          </div>
        </div>
      </Content>
      <hr class="border-text1" />
      <Content>
        <div class="flex py-3 justify-between w-full gap-4 items-center">
          <NuxtLink to="/">
            <NuxtImg
              src="/logo_transparent.png"
              class="h-8 md:h-9 object-contain brightness-125"
              alt="Autrona" />
          </NuxtLink>

          <div
            class="flex justify-between w-full text-white max-w-[30rem] items-center">
            <NuxtLink to="/">{{ t("menu.home") }}</NuxtLink>
            <NuxtLink to="/cargo">{{ t("menu.cargo") }}</NuxtLink>

            <NuxtLink to="/contacts">{{ t("menu.contacts") }}</NuxtLink>
            <NuxtLink to="/career">{{ t("menu.career") }}</NuxtLink>
          </div>
        </div>
      </Content>
    </div>
    <div class="flex md:hidden items-center relative">
      <div
        @click="onHamburgerClick"
        class="p-4 w-12">
        <i
          class="text-white fa-solid"
          :class="{'fa-bars': !isOpen, 'fa-times': isOpen}">
        </i>
      </div>
      <NuxtLink
        to="/"
        class="mx-4">
        <NuxtImg
          src="/logo_transparent.png"
          class="h-7"
          alt="Autrona" />
      </NuxtLink>
      <div
        class="sidebar absolute top-[51px] left-0 bg-pastelWhite h-screen w-screen"
        :class="{open: isOpen, closed: !isOpen}">
        <div class="flex w-full flex-col">
          <NuxtLink to="/">{{ t("menu.home") }}</NuxtLink>
          <hr />
          <NuxtLink to="/cargo">{{ t("menu.cargo") }}</NuxtLink>
          <hr />
          <NuxtLink to="/contacts">{{ t("menu.contacts") }}</NuxtLink>
          <hr />
          <NuxtLink to="/career">{{ t("menu.career") }}</NuxtLink>
        </div>
        <div class="flex flex-col">
          <div class="p-4 mt-4 uppercase tracking-wider font-medium text-sm">
            {{ t("common.contact-us") }}:
          </div>
          <hr />
          <a
            href="mailto:info@autrona.lt"
            class="flex items-center">
            <i class="fa-regular fa-envelope text-lg w-8" />
            info@autrona.lt
          </a>
          <hr />
          <a
            href="https://web.skype.com/share?contact=autrona"
            target="_blank"
            class="flex items-center">
            <i class="fa-brands fa-skype text-lg w-8" />
            Skype
          </a>
          <hr />
          <a
            href="viber://contact?number=%2B37065095557"
            class="flex items-center">
            <i class="fa-brands fa-viber text-lg w-8" />
            Viber
          </a>
          <hr />
          <a
            href="https://wa.me/%2B37065095557"
            class="flex items-center">
            <i class="fa-brands fa-whatsapp text-lg w-8" />
            WhatsApp
          </a>
          <hr />
          <div class="lang-select flex items-center">
            <i class="fa-solid fa-language text-lg w-8 !no-underline"></i>
            <span class="mr-2"> {{ t("common.language") }}: </span>
            <FormKit
              type="select"
              name="locale"
              v-model="locale"
              :options="availableLocales" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
import lockScroll from "../utils/lockScroll";
const {t, locale, availableLocales} = useI18n();
const isOpen = ref(false);
const route = useRoute();
const onHamburgerClick = () => {
  const newValue = !isOpen.value;
  isOpen.value = newValue;
};

watch(
  route,
  () => {
    isOpen.value = false;
  },
  {
    deep: true,
  }
);

watch(
  isOpen,
  (value) => {
    if (typeof window !== "undefined") {
      lockScroll(value);
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="css" scoped>
.header {
  background: black;

  a,
  .lang-select {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-size: 0.825rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  a:hover {
    text-decoration: underline;
  }

  a.router-link-active {
    color: #489b5f;
  }

  .icons i {
    border-radius: 3px;
    padding: 0.25rem;
  }

  .icons a {
    color: white;
    height: 1.5rem;
    width: 1.5rem;
    text-decoration: none;
    border-radius: 4px;
  }

  .icons a:hover {
    color: black;
    background: white;
  }

  :deep(.formkit-select-icon) {
    color: white;
    margin-left: 0 !important;
    pointer-events: all;
    width: 1.25rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    right: 0;
  }

  :deep(.formkit-outer) {
    margin-bottom: 0;
    margin-left: 1rem;
  }

  :deep(.formkit-inner) {
    width: 2.75rem;
    box-shadow: none;
  }

  .lang-select {
    :deep(.formkit-select-icon) {
      color: black;
    }
  }

  .sidebar {
    height: calc(100vh - 51px);
    overflow-y: auto;
    overflow-x: hidden;
    transition: 0.2s cubic-bezier(0.36, -0.01, 0, 0.77);
  }
  .sidebar.closed {
    margin-left: -100vw;
  }

  .sidebar a,
  .lang-select {
    padding: 1rem;
  }

  :deep(.formkit-input) {
    padding: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    :deep(.formkit-input) {
      padding: 0.25rem;
      color: white;
      height: 1.5rem;
      font-size: 0.85rem;
      text-align: center;
      padding-right: 0;
      width: 100%;
      text-align: left;
    }
  }

  :deep(.formkit-option) {
    color: black;
    background-color: white;
  }
}
</style>
