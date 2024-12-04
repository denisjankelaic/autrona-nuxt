import {createI18n} from "vue-i18n";

export default defineNuxtPlugin(async ({vueApp}) => {
  const locales = ["LT", "EN", "RU"];

  const messages: any = {};

  for (const locale of locales) {
    messages[locale] = await import(`../locales/${locale}.json`);
  }

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "LT",
    messages,
  });

  vueApp.use(i18n);
});
