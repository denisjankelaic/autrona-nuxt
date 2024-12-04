<template>
  <div>
    <NuxtLayout name="main">
      <div class="bg-white mb-16">
        <NuxtImg
          class="w-full"
          src="/hero/cargo-side.jpg"
          format="webp"
          quality="97" />
        <Content>
          <div class="flex flex-col gap-8">
            <h1 class="text-4xl font-light text-center uppercase">
              Krovinių gabenimas
            </h1>
            <div class="flex flex-col gap-4">
              <div
                class="uppercase tracking-widest font-semibold text-text2 my-4">
                Veiklos pagrindas
              </div>
              <div class="w-full relative flex gap-4 flex-col">
                <p>
                  Tarptautinis standartinių, supakuotų, nepavojingų,
                  nekontroliuojamos temperatūros, pilnų FTL krovinių pervežimas
                  tentinėmis puspriekabėmis.
                </p>
                <p>
                  Sekimo realiuoju laiku sistemos leidžia stebėti mūsų siuntas,
                  o duomenų analizė optimizuoja maršrutus, mažina išlaidas ir
                  gerina aplinkos tvarumą.
                </p>
              </div>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 my-4">
              <div class="card shadow-md">
                <span class="title"> +25 </span>
                <span class="subtitle"> Metų patirties </span>
              </div>
              <div class="card shadow-md">
                <span class="title">+20</span>
                <span class="subtitle"> Ištikimų partnerių </span>
              </div>
              <div class="card shadow-md">
                <span class="title"> +15000</span>
                <span class="subtitle">
                  Tonų per metus pristatomų krovinių</span
                >
              </div>
            </div>
            <div>
              <div
                class="uppercase tracking-widest font-semibold text-text2 my-4">
                Prioritetai
              </div>
              <div class="w-full relative flex gap-4 flex-col">
                <p>
                  <b> Kokybė </b>
                  - krovinius gabename saugiai, užsakymus vykdome laiku,
                  informaciją teikiame greitai
                </p>
                <p>
                  <b> Lankstumas </b>
                  - dideli pajėgumai, ilgalaikiai susitarimai ir vienetiniai
                  gabenimai rinkos kainomis
                </p>
              </div>
            </div>
            <div>
              <div
                class="uppercase tracking-widest font-semibold text-text2 my-4">
                XL/Multilock tentinės puspriekabės
              </div>
              <div class="w-full relative flex gap-4 flex-col">
                <p>13.62 m x 2.48 m x 2.70 m (ilgis / plotis / aukštis)</p>
                <p>92 m³ maksimalus krovinio dydis</p>
                <p>25 t naudingoji apkrova</p>
                <p>34 europadėklų vietos</p>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div
                class="uppercase tracking-widest font-semibold text-text2 my-4">
                Krovinių tvirtinimas specialia įranga
              </div>
              <div class="w-full relative flex gap-4 flex-col">
                <p>20 diržų (2500 DaN)</p>
                <p>40 kampų</p>
                <p>32 šoninės aliumininės lentos</p>
                <p>2 skersinės tvirtinimo lentos</p>
                <p>Neslystantys kilimėliai</p>
              </div>
            </div>
            <h1 class="text-2xl text-center uppercase">
              Pagrindinės maršrutų šalys
            </h1>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-4 my-4">
              <div class="card shadow-md p-2">
                <div
                  class="flag shadow-sm"
                  v-html="LT"></div>
                <span class="subtitle"> Lietuva </span>
              </div>
              <div class="card shadow-md p-2">
                <div
                  class="flag shadow-sm"
                  v-html="DE" />
                <span class="subtitle"> Vokietija </span>
              </div>
              <div class="card shadow-md p-2">
                <div
                  class="flag shadow-sm"
                  v-html="IT"></div>
                <span class="subtitle"> Italija </span>
              </div>
              <div class="card shadow-md p-2">
                <div
                  class="flag shadow-sm"
                  v-html="CZ"></div>
                <span class="subtitle"> Čekija </span>
              </div>
            </div>
          </div>
        </Content>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
import {DE, LT, IT, CZ} from "country-flag-icons/string/3x2";

const {t} = useI18n();
</script>

<style lang="css" scoped>
.card {
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
}

.card .title {
  font-size: 4rem;
  font-weight: 300;
  color: theme("colors.green");
  line-height: 1;
}

.flag {
  border-radius: 4px;
  overflow: hidden;
}

.flag :deep(svg) {
  height: 3rem;
  border-radius: 4px;
  border: 1px solid black;
}

p {
  color: theme("colors.text1");
  font-weight: 300;
}
</style>
