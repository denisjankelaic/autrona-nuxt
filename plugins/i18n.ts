import {createI18n} from "vue-i18n";

export default defineNuxtPlugin(async ({vueApp}) => {
  const locales = ["LT", "EN", "RU"];

  const messages: any = {};

  for (const locale of locales) {
    messages[locale] = await import(`../locales/${locale}.json`);
  }

  const route = useRoute();
  const pathSegments = route.path.split("/").filter(Boolean);
  const firstSegment = pathSegments[0]?.toUpperCase();
  const detectedLocale = locales.includes(firstSegment) ? firstSegment : "LT";

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: detectedLocale,
    fallbackLocale: "LT",
    messages,
  });

  vueApp.use(i18n);

  const updateLocaleFromRoute = () => {
    const segments = route.path.split("/").filter(Boolean);
    const segment = segments[0]?.toUpperCase();
    if (locales.includes(segment) && i18n.global.locale.value !== segment) {
      i18n.global.locale.value = segment;
    }
  };

  updateLocaleFromRoute();
  watch(
    () => route.path,
    () => {
      updateLocaleFromRoute();
    }
  );

  return {
    provide: {
      i18n,
    },
  };
});

