<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const handleError = (error: any) => {
  error.value = null;
};

const logError = (error: any) => {
  console.error(error);
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <slot name="header">
      <Header />
    </slot>
    <NuxtErrorBoundary @error="logError">
      <main class="flex-1 w-full flex flex-col mx-auto">
        <div class="relative flex-1 flex flex-col w-full h-full min-h-[80vh]">
          <slot />
        </div>
      </main>
      <template #error="{ error }">
        <div class="flex-center flex-col gap-[30px] p-4 min-h-[50rem]">
          <h5 class="text-2xl">
            {{ t("common.error") }}
          </h5>
          <pre> {{ error }} </pre>
          <button
            class="py-3 px-20 bg-green hover:bg-darkGreen transition-colors rounded-sm text-white mt-8"
            @click="handleError(error)"
          >
            {{ t("menu.home") }}
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
    <slot name="footer">
      <Footer />
    </slot>
  </div>
</template>
