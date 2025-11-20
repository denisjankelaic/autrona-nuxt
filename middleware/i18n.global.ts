export default defineNuxtRouteMiddleware((to, from) => {
  const supportedLocales = ["LT", "EN", "RU"];
  const localeMap: Record<string, string> = {
    lt: "LT",
    en: "EN",
    ru: "RU",
  };

  const pathSegments = to.path.split("/").filter(Boolean);
  const firstSegment = pathSegments[0]?.toLowerCase();
  const detectedLocale = localeMap[firstSegment];

  if (!detectedLocale) {
    const defaultLocale = "LT";
    const localePath = defaultLocale.toLowerCase();
    const pathWithoutLang = to.path;
    
    if (pathWithoutLang !== `/${localePath}` && pathWithoutLang !== "/") {
      return navigateTo(`/${localePath}${pathWithoutLang}`);
    } else if (pathWithoutLang === "/") {
      return navigateTo(`/${localePath}`);
    }
  }
});

