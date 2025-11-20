export const useLocalePath = () => {
  let route: ReturnType<typeof useRoute> | null = null;
  try {
    route = useRoute();
  } catch {
  }

  const getCurrentLang = (): string => {
    if (route?.path) {
      const pathSegments = route.path.split("/").filter(Boolean);
      const firstSegment = pathSegments[0]?.toUpperCase();
      
      if (["LT", "EN", "RU"].includes(firstSegment)) {
        return firstSegment.toLowerCase();
      }
    }
    
    try {
      const { locale } = useI18n();
      if (locale?.value) {
        return locale.value.toLowerCase();
      }
    } catch {
    }
    
    return "lt";
  };

  const getPathWithoutLang = (path: string): string => {
    if (!path) return "/";
    
    const segments = path.split("/").filter(Boolean);
    const firstSegment = segments[0]?.toLowerCase();
    
    if (["lt", "en", "ru"].includes(firstSegment)) {
      const rest = segments.slice(1).join("/");
      return rest ? `/${rest}` : "/";
    }
    
    return path.startsWith("/") ? path : `/${path}`;
  };

  const localePath = (path: string, targetLocale?: string): string => {
    try {
      const lang = targetLocale?.toLowerCase() || getCurrentLang();
      const cleanPath = getPathWithoutLang(path);
      const normalizedPath = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
      const finalPath = normalizedPath === "/" ? "" : normalizedPath.replace(/\/$/, "");
      
      return `/${lang}${finalPath}`;
    } catch (error) {
      console.warn('localePath error:', error);
      return path.startsWith("/") ? path : `/${path}`;
    }
  };

  const switchLocale = async (newLocale: string) => {
    try {
      const currentRoute = route || useRoute();
      if (!currentRoute?.path) return;
      
      const currentPath = getPathWithoutLang(currentRoute.path);
      const newPath = localePath(currentPath, newLocale);
      if (newPath !== currentRoute.path) {
        await navigateTo(newPath);
      }
    } catch (error) {
      console.warn('switchLocale error:', error);
    }
  };

  return {
    localePath: localePath || ((path: string) => path),
    switchLocale: switchLocale || (async () => {}),
    getCurrentLang: getCurrentLang || (() => "lt"),
    getPathWithoutLang: getPathWithoutLang || ((path: string) => path),
  };
}

