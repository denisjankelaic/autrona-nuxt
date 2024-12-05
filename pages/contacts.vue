<template>
  <div class="bg-pastelWhite">
    <Content>
      <div class="my-6 mb-12">
        <div class="white-box shadow-md !flex-row flex-wrap gap-8 mb-4">
          <div class="contact">
            <h1 class="text-xs font-medium uppercase">
              {{ t("contacts.director") }}
            </h1>
            <h1 class="font-medium mb-4">Rimas Žukauskas</h1>
            <p class="flex flex-col text-sm">
              <span>{{ t("common.phone") }} +370 699 45118</span>
              <span>{{ t("common.email") }} rimas@autrona.lt </span>
            </p>
          </div>
          <div class="contact">
            <h1 class="text-xs font-medium uppercase">
              {{ t("contacts.personnel-specialist") }}
            </h1>
            <h1 class="font-medium mb-4">Jurgita Užemeckienė</h1>
            <p class="flex flex-col text-sm">
              <span>{{ t("common.phone") }} +370 655 22727</span>
              <span>{{ t("common.email") }} jurgita@autrona.lt </span>
            </p>
          </div>
        </div>
        <div class="white-box shadow-md !flex-row flex-wrap gap-8 mb-4">
          <div class="contact">
            <h1 class="text-xs font-medium uppercase">
              {{ t("contacts.transport-manager") }}
            </h1>
            <h1 class="font-medium mb-4">Justas Žukauskas</h1>
            <p class="flex flex-col text-sm">
              <span>{{ t("common.phone") }} +370 650 95557</span>
              <span>{{ t("common.email") }} justas@autrona.lt </span>
            </p>
          </div>
          <div class="contact">
            <h1 class="text-xs font-medium uppercase">
              {{ t("contacts.transport-manager-w") }}
            </h1>
            <h1 class="font-medium mb-4">Paulina Tamulionyte</h1>
            <p class="flex flex-col text-sm">
              <span>{{ t("common.phone") }} +370 669 69206</span>
              <span>{{ t("common.email") }} paulina@autrona.lt </span>
            </p>
          </div>
          <div class="contact">
            <h1 class="text-xs font-medium uppercase">
              {{ t("contacts.transport-manager-w") }}
            </h1>
            <h1 class="font-medium mb-4">Laura Rimienė</h1>
            <p class="flex flex-col text-sm">
              <span>{{ t("common.phone") }} +370 640 19939</span>
              <span>{{ t("common.email") }} laura@autrona.lt </span>
            </p>
          </div>
        </div>
        <div class="flex gap-4 flex-col md:flex-row">
          <div
            class="w-full h-[300px] white-box shadow-md rounded-md !p-0 overflow-hidden"
          >
            <LMap
              ref="map"
              :zoom="zoom"
              :center="[54.41543, 24.00727]"
              :use-global-leaflet="false"
            >
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                layer-type="base"
                name="OpenStreetMap"
              />
              <LMarker :lat-lng="[54.41543, 24.00727]" />
            </LMap>
          </div>
        </div>
        <div class="flex gap-4 mt-4 flex-col md:flex-row">
          <div class="white-box shadow-md p-4 rounded-md w-full md:w-1/2">
            <h1 class="font-medium">{{ t("contacts.correspondence") }}</h1>
            <p class="flex flex-col text-sm">
              <span>UAB "Autrona"</span>
              <span>Naujoji g. 29A,</span>
              <span>LT-62175 Alytus, {{ t("common.lithuania") }}</span>
            </p>
          </div>
          <div class="white-box shadow-md p-4 rounded-md w-full md:w-1/2">
            <h1 class="font-medium">
              {{ t("contacts.registration-address") }}
            </h1>
            <p class="flex flex-col text-sm">
              <span>UAB "Autrona"</span>
              <span>Jurgiškių g. 14-5,</span>
              <span class="mb-4">
                LT-63141 Alytus, {{ t("common.lithuania") }}
              </span>
              <span
                ><b>{{ t("contacts.company-code") }} </b> 249970870</span
              >
              <span
                ><b>{{ t("contacts.vat-code") }}</b> LT499708716</span
              >
              <span
                ><b>{{ t("common.phone-full") }}</b> +370 315 77614</span
              >
              <span
                ><b>{{ t("common.fax") }}</b> +370 315 77269</span
              >
              <span
                ><b>{{ t("common.email-full") }}</b>
                info@autrona.lt
              </span>
            </p>
          </div>
        </div>
      </div>
    </Content>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const zoom = ref(15);

definePageMeta({
  layout: "main",
});
</script>

<style lang="css" scoped>
:deep(.formkit-label) {
  font-weight: 400;
}

:deep(.formkit-wrapper button) {
  background-color: theme("colors.green");
}

.contact {
  min-width: 250px;
}
</style>
