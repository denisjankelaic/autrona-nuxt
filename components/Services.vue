<template>
  <Content>
    <div class="my-4 mb-16">
      <h2 class="text-3xl text-center my-4 mb-8">
        {{ t("services.we-offer") }}
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 my-4"
      >
        <div class="card shadow-md">
          <i class="fa-solid fa-trophy" />
          <span class="title"> {{ t("services.experience") }} </span>
          <span class="subtitle"> {{ t("services.experience-text") }} </span>
        </div>
        <div class="card shadow-md">
          <i class="fa-solid fa-shield" />
          <span class="title"> {{ t("services.safety") }}</span>
          <span class="subtitle"> {{ t("services.safety-text") }} </span>
        </div>
        <div class="card shadow-md">
          <i class="fa-solid fa-pen-clip" />
          <span class="title"> {{ t("services.documentation") }}</span>
          <span class="subtitle"> {{ t("services.documentation-text") }}</span>
        </div>
        <div class="card shadow-md">
          <i class="fa-solid fa-map-location-dot" />
          <span class="title">{{ t("services.tracking") }}</span>
          <span class="subtitle"> {{ t("services.tracking-text") }} </span>
        </div>
        <div class="card shadow-md">
          <i class="fa-solid fa-truck-fast" />
          <span class="title">{{ t("services.speed") }} </span>
          <span class="subtitle">
            {{ t("services.speed-text") }}
          </span>
        </div>
        <div class="card shadow-md">
          <i class="fa-solid fa-user-tie" />
          <span class="title">{{ t("services.qualification") }} </span>
          <span class="subtitle">{{ t("services.qualification-text") }}</span>
        </div>
      </div>
    </div>
  </Content>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
