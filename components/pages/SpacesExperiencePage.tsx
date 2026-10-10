import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/copy";
import { pageCopy } from "@/content/pages";
import { SiteFrame } from "@/components/SiteFrame";

const storyInstruction: Record<Locale, string> = {
  ru: "Прокрутка меняет контекст",
  en: "Scroll changes the context",
  "zh-cn": "滚动切换场景",
};

export function SpacesExperiencePage({ locale }: { locale: Locale }) {
  const content = pageCopy[locale];

  return (
    <SiteFrame className="inner-page spaces-page" locale={locale}>
      <section className="inner-hero spaces-hero" data-hero>
        <div className="inner-hero-media">
          <Image src="/media/people-service-v2.webp" fill priority sizes="100vw" alt="X Experience hospitality service" />
          <div className="inner-hero-shade" />
        </div>
        <p className="inner-hero-eyebrow">{content.spaces.eyebrow}</p>
        <div className="inner-hero-title page-grid">
          <h1>{content.spaces.title}</h1>
          <p>{content.spaces.lead}</p>
        </div>
      </section>

      <section className="spaces-story" data-spaces-story aria-label={content.spaces.eyebrow}>
        <div className="spaces-story-stage">
          <div className="spaces-story-media">
            <Image
              className="spaces-story-poster spaces-story-poster-desktop"
              src="/media/spaces-architecture-poster-v1.webp"
              fill
              sizes="100vw"
              alt="AIO Space in a private hospitality interior"
            />
            <Image
              className="spaces-story-poster spaces-story-poster-mobile"
              src="/media/spaces-ritual-mobile-v1.webp"
              fill
              sizes="100vw"
              alt="AIO Space in a private hospitality interior"
            />
            <video
              muted
              playsInline
              preload="metadata"
              poster="/media/spaces-architecture-poster-v1.webp"
              data-spaces-scroll-video
              aria-hidden="true"
            >
              <source media="(min-width: 901px)" src="/media/spaces-architecture-kling-v1.mp4" type="video/mp4" />
            </video>
            <div className="spaces-story-shade" />
          </div>

          <header className="spaces-story-heading">
            <p>{content.spaces.eyebrow}</p>
          </header>

          <div className="spaces-story-panels">
            {content.spaces.contexts.map((context, index) => (
              <article className="spaces-story-panel" data-spaces-panel key={context.label}>
                <p>{context.label}</p>
                <h2>{context.title}</h2>
                <span>{context.text}</span>
                <small>{String(index + 1).padStart(2, "0")} / {String(content.spaces.contexts.length).padStart(2, "0")}</small>
              </article>
            ))}
          </div>

          <div className="spaces-story-progress" aria-hidden="true">
            <span>01</span>
            <i><b data-spaces-progress /></i>
            <span>04</span>
          </div>
          <p className="spaces-story-instruction">{storyInstruction[locale]}</p>
        </div>
      </section>

      <section className="spaces-editorial" aria-label={content.spaces.stationLabel}>
        <p className="section-index" data-reveal>{content.spaces.stationLabel} / {content.spaces.peopleLabel}</p>
        <h2 data-reveal>
          <span>{content.spaces.stationTitle}</span>
          <span>{content.spaces.peopleTitle}</span>
        </h2>
        <Link href={`/${locale}/collection/aio-space`} data-cursor="VIEW" data-reveal>
          {content.common.view}<span aria-hidden="true">↗</span>
        </Link>
      </section>

      <Link className="spaces-object-bridge" href={`/${locale}/collection/aio-space`} data-cursor="VIEW">
        <Image
          className="spaces-object-bridge-desktop"
          src="/media/spaces-ritual-desktop-v1.webp"
          fill
          sizes="100vw"
          alt="AIO Space"
        />
        <Image
          className="spaces-object-bridge-mobile"
          src="/media/spaces-ritual-mobile-v1.webp"
          fill
          sizes="100vw"
          alt="AIO Space"
        />
        <div />
        <p>{content.common.view}</p>
        <h2>AIO Space</h2>
        <span aria-hidden="true">↗</span>
      </Link>

      <section className="space-feature">
        <div className="space-feature-media station-glow" data-mask>
          <Image src="/media/station.webp" fill sizes="(max-width: 900px) 100vw, 56vw" alt="X Experience signature station" />
        </div>
        <div className="space-feature-copy">
          <p className="section-index" data-reveal>{content.spaces.stationLabel}</p>
          <h2 data-reveal>{content.spaces.stationTitle}</h2>
          <p data-reveal>{content.spaces.stationBody}</p>
        </div>
      </section>

      <section className="space-feature space-feature-people">
        <div className="space-feature-media" data-mask>
          <Image src="/media/people-service-v2.webp" fill sizes="(max-width: 900px) 100vw, 56vw" alt="X Experience team" />
        </div>
        <div className="space-feature-copy">
          <p className="section-index" data-reveal>{content.spaces.peopleLabel}</p>
          <h2 data-reveal>{content.spaces.peopleTitle}</h2>
          <p data-reveal>{content.spaces.peopleBody}</p>
        </div>
      </section>

      <section className="page-route-close">
        <h2 data-reveal>{content.spaces.closing}</h2>
        <Link href={`/${locale}/contact`} data-cursor="OPEN" data-reveal>
          {content.common.discuss}<span aria-hidden="true">↗</span>
        </Link>
      </section>
    </SiteFrame>
  );
}
