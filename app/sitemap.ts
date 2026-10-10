import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["en", "zh-cn"].map((locale) => ({
    url: `https://xhookahstore.com/${locale}/`,
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: {
        en: "https://xhookahstore.com/en/",
        "zh-CN": "https://xhookahstore.com/zh-cn/",
      },
    },
  }));
}
