import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/copy";
import { pageCopy } from "@/content/pages";
import { SiteFrame } from "@/components/SiteFrame";

export function SystemExperiencePage({ locale }: { locale: Locale }) {
  const content = pageCopy[locale];

  return (
    <SiteFrame className="inner-page system-page" locale={locale}>
      <section className="inner-hero system-hero" data-hero>
        <div className="inner-hero-media station-glow">
          <Image src="/media/station.webp" fill priority sizes="100vw" alt="X Experience signature station" />
          <div className="inner-hero-shade" />
        </div>
        <p className="inner-hero-eyebrow">{content.system.eyebrow}</p>
        <div className="inner-hero-title page-grid">
          <h1>{content.system.title}</h1>
          <p>{content.system.lead}</p>
        </div>
      </section>

      <section className="system-statement">
        <p className="section-index" data-reveal>{content.system.processLabel}</p>
        <h2 data-reveal>{content.system.statement}</h2>
      </section>

      <section className="system-process">
        <div className="system-process-visual" data-mask>
          <div className="sticky-media-inner">
            <Image src="/media/people-service-v2.webp" fill sizes="(max-width: 900px) 100vw, 48vw" alt="X Experience service team" />
          </div>
          <p>{content.system.processLabel}</p>
        </div>
        <div className="system-process-list">
          {content.system.steps.map((step) => (
            <article key={step.label} data-reveal>
              <p>{step.label}</p>
              <h2>{step.title}</h2>
              <span>{step.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="system-scope">
        <div className="system-scope-heading">
          <p className="section-index" data-reveal>X Experience / Scope</p>
          <h2 data-reveal>{content.system.scopeTitle}</h2>
        </div>
        <div className="system-scope-list">
          {content.system.scope.map((item, index) => (
            <p key={item} data-reveal><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>
          ))}
        </div>
      </section>

      <section className="page-route-close">
        <h2 data-reveal>{content.system.closing}</h2>
        <Link href={`/${locale}/contact`} data-cursor="OPEN" data-reveal>
          {content.common.discuss}<span aria-hidden="true">↗</span>
        </Link>
      </section>
    </SiteFrame>
  );
}
