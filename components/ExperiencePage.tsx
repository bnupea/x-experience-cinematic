import type { Locale } from "@/content/copy";
import { presentations } from "@/content/presentation";
import { Hero } from "./Hero";
import { Preloader } from "./Preloader";
import { SceneDeck } from "./SceneDeck";
import { SiteFrame } from "./SiteFrame";

export function ExperiencePage({ locale }: { locale: Locale }) {
  const content = presentations[locale];

  return (
    <>
      <Preloader brand={content.brand} />
      <SiteFrame className="home-page" locale={locale} skipTarget="#concept">
        <Hero content={content} />
        <SceneDeck content={content} />
      </SiteFrame>
    </>
  );
}
