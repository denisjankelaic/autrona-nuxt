<template>
  <Html :lang="htmlLang">
    <Body
      class="antialiased duration-300 transition-colors dark:text-gray-200 bg-black">
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
import "@unocss/reset/tailwind-compat.css";
import urlJoin from "url-join";
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n();
const image = useImage();
const route = useRoute();
const favicon = useFavicon();

const htmlLang = computed(() => {
  const localeMap: Record<string, string> = {
    LT: "lt",
    EN: "en",
    RU: "ru",
  };
  return localeMap[locale.value] || "lt";
});

const heroUrl = computed(() => {
  let originalUrl = `hero/hero-mobile.jpg`;

  return image(originalUrl, {
    format: "webp",
    quality: 75,
    height: 800,
  });
});

const faviconUlr = computed(() => {
  let originalUrl = `hero/fav.png`;

  return image(originalUrl, {
    format: "ico",
    quality: 100,
    height: 32,
  });
});

favicon.value = faviconUlr.value;

const publicUrl = "https://autrona.lt";

const metaImg = computed(() => {
  return typeof window !== "undefined"
    ? heroUrl.value
    : urlJoin(publicUrl, heroUrl.value);
});

const metaUrl = computed(() => urlJoin(publicUrl, route.path));

const metaDescription = computed(() => t("about.about-text1"));

const meta = computed(() => [
  {
    name: "description",
    content: metaDescription.value,
  },
  {
    property: "og:title",
    content: t("meta.title"),
  },
  {
    property: "og:description",
    content: metaDescription.value,
  },
  {
    property: "og:url",
    content: metaUrl.value,
  },
  {
    property: "og:image",
    content: metaImg.value,
  },
  {
    property: "og:image:secure_url",
    content: metaImg.value,
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:site_name",
    content: "Autrona",
  },
  {
    property: "og:locale",
    content: locale.value === "LT" ? "lt_LT" : locale.value === "RU" ? "ru_RU" : "en_US",
  },
]);

const structuredData = computed(() => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Autrona",
  legalName: "UAB Autrona",
  url: publicUrl,
  logo: urlJoin(publicUrl, "/logo_transparent.png"),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+370-315-77614",
    contactType: "customer service",
    email: "info@autrona.lt",
    areaServed: ["LT", "EU", "CIS"],
    availableLanguage: ["Lithuanian", "English", "Russian"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Naujoji g. 29A",
    addressLocality: "Alytus",
    postalCode: "LT-62175",
    addressCountry: "LT",
  },
  sameAs: [],
}));

const hreflangLinks = computed(() => {
  const locales = ["LT", "EN", "RU"];
  const localeMap: Record<string, string> = {
    LT: "lt",
    EN: "en",
    RU: "ru",
  };
  
  const pathSegments = route.path.split("/").filter(Boolean);
  const firstSegment = pathSegments[0]?.toLowerCase();
  const isLangInPath = ["lt", "en", "ru"].includes(firstSegment);
  const pathWithoutLang = isLangInPath 
    ? "/" + pathSegments.slice(1).join("/") 
    : route.path;
  
  const links = locales.map((loc) => ({
    rel: "alternate",
    hreflang: localeMap[loc] || loc.toLowerCase(),
    href: urlJoin(publicUrl, `/${localeMap[loc]}${pathWithoutLang === "/" ? "" : pathWithoutLang}`),
  }));
  
  links.push({
    rel: "alternate",
    hreflang: "x-default",
    href: urlJoin(publicUrl, `/lt${pathWithoutLang === "/" ? "" : pathWithoutLang}`),
  });
  
  return links;
});

useHead(() => ({
  title: t("meta.title"),
  titleTemplate: (title) => {
    return `${title} | Autrona.lt`;
  },
  meta: [...meta.value],
  link: [
    {
      rel: "canonical",
      href: metaUrl.value,
    },
    ...hreflangLinks.value,
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(structuredData.value),
    },
  ],
}));
</script>

<style lang="css"></style>
