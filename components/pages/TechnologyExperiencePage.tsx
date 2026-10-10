import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/copy";
import { pageCopy } from "@/content/pages";
import { SiteFrame } from "@/components/SiteFrame";

const scrollInstruction: Record<Locale, string> = {
  ru: "Прокрутка управляет светом и формой",
  en: "Scroll controls light and form",
  "zh-cn": "滚动控制光线与形态",
};

export function TechnologyExperiencePage({ locale }: { locale: Locale }) {
  const content = pageCopy[locale];

  return (
    <SiteFrame className="inner-page technology-page" locale={locale}>
      <section className="technology-story" data-technology-story data-hero aria-label={content.technology.eyebrow}>
        <div className="technology-story-stage">
          <div className="technology-story-media">
            <Image
              className="technology-story-poster technology-story-poster-desktop"
              src="/media/technology-heat-poster-v1.webp"
              fill
              priority
              sizes="100vw"
              alt=""
            />
            <Image
              className="technology-story-poster technology-story-poster-mobile"
              src="/media/technology-heat-mobile-v1.webp"
              fill
              priority
              sizes="100vw"
              alt="AIO Space"
            />
            <video muted playsInline preload="metadata" poster="/media/technology-heat-poster-v1.webp" data-technology-scroll-video aria-hidden="true">
              <source media="(min-width: 901px)" src="/media/technology-heat-kling-v1.mp4" type="video/mp4" />
            </video>
            <div className="technology-story-shade" />
          </div>

          <header className="technology-story-heading">
            <p>{content.technology.eyebrow}</p>
          </header>

          <div className="technology-story-panels">
            <article className="technology-story-panel" data-technology-panel>
              <h1>{content.technology.title}</h1>
              <span>{content.technology.lead}</span>
              <small>00 / 03</small>
            </article>
            {content.technology.notes.map((note, index) => (
              <article className="technology-story-panel" data-technology-panel key={note.label}>
                <p>{note.label}</p>
                <h2>{note.title}</h2>
                <span>{note.text}</span>
                <small>{String(index + 1).padStart(2, "0")} / 03</small>
              </article>
            ))}
          </div>

          <div className="technology-story-progress" aria-hidden="true">
            <span>00</span>
            <i><b data-technology-progress /></i>
            <span>03</span>
          </div>
          <p className="technology-story-instruction">{scrollInstruction[locale]}</p>
        </div>
      </section>

      <section className="technology-principle">
        <div className="technology-principle-copy">
          <p className="section-index" data-reveal>{content.technology.principleLabel}</p>
          <h2 data-reveal>{content.technology.principleTitle}</h2>
          <p data-reveal>{content.technology.principleBody}</p>
        </div>
        <div className="technology-principle-media focus-center" data-mask>
          <Image src="/media/aio-space-campaign-v3.webp" fill sizes="(max-width: 900px) 100vw, 55vw" alt="AIO Space" />
        </div>
      </section>

      <section className="technology-document">
        <p className="section-index" data-reveal>{content.technology.documentLabel}</p>
        <p data-reveal>{content.technology.documentBody}</p>
      </section>

      <Link className="technology-object" href={`/${locale}/collection/aio-space`} data-cursor="VIEW">
        <Image src="/media/aio-space-campaign-v3.webp" fill sizes="100vw" alt="AIO Space" />
        <div />
        <p>{content.common.view}</p>
        <h2>AIO Space</h2>
        <span aria-hidden="true">↗</span>
      </Link>

      <section className="page-route-close">
        <h2 data-reveal>{content.technology.closing}</h2>
        <Link href={`/${locale}/contact`} data-cursor="OPEN" data-reveal>
          {content.common.discuss}<span aria-hidden="true">↗</span>
        </Link>
      </section>
    </SiteFrame>
  );
}
