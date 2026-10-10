import { publicLocales, type Locale } from "./copy";

export const sectionRoutes = ["system", "technology", "collection", "spaces", "contact"] as const;

export function isLocale(value: string): value is Locale {
  return publicLocales.includes(value as (typeof publicLocales)[number]);
}

export function localeStaticParams() {
  return publicLocales.map((locale) => ({ locale }));
}

export function htmlLang(locale: Locale) {
  return locale === "zh-cn" ? "zh-CN" : locale;
}
