import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperiencePage } from "@/components/ExperiencePage";
import { isLocale, localeStaticParams } from "@/content/routing";

export function generateStaticParams() {
  return localeStaticParams();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const title = locale === "zh-cn" ? "X Experience | 高端水烟服务与设备系列" : "X Experience | Premium Shisha Service & Collection";
  const description = locale === "zh-cn"
    ? "面向酒店、餐厅、屋顶空间与酒廊的高端水烟服务、电子加热技术及特色设备系列。"
    : "Explore X Experience premium shisha service, electronic heating technology and a distinctive device collection for hotels, rooftops, bars and lounges.";
  const path = `/${locale}/`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { en: "/en/", "zh-CN": "/zh-cn/", "x-default": "/en/" },
    },
    openGraph: {
      type: "website",
      siteName: "X Experience",
      title,
      description,
      url: path,
      locale: locale === "zh-cn" ? "zh_CN" : "en_US",
      alternateLocale: locale === "zh-cn" ? ["en_US"] : ["zh_CN"],
      images: [{ url: "/media/hero-main-poster.webp", width: 848, height: 464, alt: "X Experience premium shisha collection" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/media/hero-main-poster.webp"] },
  };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ExperiencePage locale={locale} />;
}
