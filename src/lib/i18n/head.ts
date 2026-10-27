import type { Locale } from "./locale";

type PageMeta = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  type?: "website" | "profile" | "article";
};

/** Localized meta tags for a page's `head()`. */
export function pageMeta(locale: Locale, meta: PageMeta) {
  return [
    { title: meta.title },
    { name: "description", content: meta.description },
    { property: "og:title", content: meta.ogTitle ?? meta.title },
    { property: "og:description", content: meta.ogDescription ?? meta.description },
    { property: "og:type", content: meta.type ?? "website" },
    { property: "og:locale", content: locale === "ar" ? "ar_SA" : "en_US" },
    { property: "og:locale:alternate", content: locale === "ar" ? "en_US" : "ar_SA" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
