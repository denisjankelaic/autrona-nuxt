<template>
  <div class="bg-pastelWhite flex flex-col h-full flex-1">
    <Content>
      <div class="my-6 mb-12">
        <div class="white-box shadow-md !flex-row flex-wrap gap-8 mb-4">
          <div
            v-for="(contact, index) in clevel"
            class="contact"
            :key="index">
            <h1 class="text-xs font-medium uppercase">
              {{ contact.job }}
            </h1>
            <h1 class="font-semibold mb-4">{{ contact.name }}</h1>
            <p class="flex gap-2 text-sm">
              <span class="font-medium">{{ t("common.phone") }}</span>
              <span> {{ contact.phone }}</span>
            </p>
            <p class="flex gap-2 text-sm">
              <span class="font-medium">{{ t("common.email") }}</span>
              <span> {{ contact.email }} </span>
            </p>
          </div>
        </div>
        <div
          class="white-box shadow-md !flex-row flex-wrap gap-8 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-4 my-4">
          <div
            v-for="(manager, index) in managers"
            :key="index">
            <h1 class="text-xs font-medium uppercase">
              {{ manager.job }}
            </h1>
            <h1 class="font-semibold mb-4">{{ manager.name }}</h1>
            <p class="flex gap-2 text-sm">
              <span class="font-medium">{{ t("common.phone") }}</span>
              <span> {{ manager.phone }} </span>
            </p>
            <p class="flex gap-2 text-sm">
              <span class="font-medium">{{ t("common.email") }}</span>
              <span> {{ manager.email }} </span>
            </p>
          </div>
        </div>
        <div class="flex gap-4 flex-col md:flex-row">
          <div
            class="w-full h-[300px] white-box shadow-md rounded-md !p-0 overflow-hidden">
            <LMap
              ref="map"
              :zoom="zoom"
              :center="[54.41543, 24.00727]"
              :use-global-leaflet="false">
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                layer-type="base"
                name="OpenStreetMap" />
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
import {useI18n} from "vue-i18n";
const {t} = useI18n();
const zoom = ref(15);

definePageMeta({
  layout: "main",
});

const clevel = [
  {
    job: t("contacts.director"),
    name: "Rimas Žukauskas",
    phone: "+370 699 45118",
    email: "rimas@autrona.lt",
  },
  {
    job: t("contacts.personnel-specialist"),
    name: "Jurgita Užemeckienė",
    phone: "+370 655 22727",
    email: "jurgita@autrona.lt",
  },
];

const managers = [
  {
    job: t("contacts.transport-manager"),
    name: "Justas Žukauskas",
    phone: "+370 650 95557",
    email: "justas@autrona.lt",
  },
  {
    job: t("contacts.transport-manager-w"),
    name: "Paulina Tamulionyte",
    phone: "+370 669 69206",
    email: "paulina@autrona.lt",
  },
  {
    job: t("contacts.transport-manager-w"),
    name: "Laura Rimienė",
    phone: "+370 640 19939",
    email: "laura@autrona.lt",
  },
  {
    job: t("contacts.transport-manager"),
    name: "Vitalijus Žilvys",
    phone: "+370 652 06054",
    email: "vitalijus@autrona.lt",
  },
];
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
