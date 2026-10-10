import Image from "next/image";
import type { PresentationContent } from "@/content/presentation";
import { Collection } from "./Collection";
import { WechatContact } from "./WechatContact";

export function SceneDeck({ content }: { content: PresentationContent }) {
  const team = content.system.items[1];

  return (
    <>
      <section className="operations" id="system" aria-labelledby="system-title">
        <header className="operations-heading page-grid">
          <p className="section-label" data-reveal>{content.system.label}</p>
          <h2 id="system-title" data-reveal>{content.system.title}</h2>
        </header>

        <div className="service-showcase">
          <article className="station-panel" aria-labelledby="station-title">
            <div className="service-media station-glow" data-mask>
              <Image
                src="/media/station.webp"
                fill
                sizes="(max-width: 760px) 100vw, 58vw"
                alt={content.station.title}
                loading="lazy"
              />
            </div>
            <div className="service-shade" aria-hidden="true" />
            <div className="station-copy">
              <p className="section-label" data-reveal>{content.station.label}</p>
              <h3 id="station-title" data-reveal>{content.station.title}</h3>
              <p data-reveal>{content.station.body}</p>
              <ul data-reveal>
                {content.station.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </article>

          <article className="team-panel" id="team" aria-labelledby="team-title">
            <div className="service-media" data-mask>
              <Image
                src="/media/people-service-v2.webp"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
                alt={team.title}
                loading="lazy"
              />
            </div>
            <div className="service-shade" aria-hidden="true" />
            <div className="team-copy">
              <span className="team-index" data-reveal>{team.number}</span>
              <h3 id="team-title" data-reveal>{team.title}</h3>
              <p data-reveal>{team.body}</p>
            </div>
          </article>
        </div>

        <div className="operations-list page-grid" aria-label={content.system.label}>
          {content.system.items.map((item) => (
            <article key={item.number} data-reveal>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="technology-section" id="technology" aria-labelledby="technology-title">
        <div className="technology-layout page-grid">
          <header className="technology-heading">
            <p className="section-label" data-reveal>{content.technology.label}</p>
            <h2 id="technology-title" data-reveal>{content.technology.title}</h2>
            <p data-reveal>{content.technology.body}</p>
          </header>

          <div className="technology-device" data-mask>
            <Image
              src="/media/electric-heater-cinematic-v1.webp"
              width={1024}
              height={1536}
              sizes="(max-width: 760px) 100vw, 48vw"
              alt={content.technology.title}
              loading="lazy"
            />
            <strong aria-hidden="true">220°C<br />315°C</strong>
          </div>

          <div className="technology-notes">
            {content.technology.notes.map((note, index) => (
              <article key={note.title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Collection content={content} />

      <section className="bear-interlude" aria-labelledby="bear-interlude-title">
        <header className="bear-interlude-copy">
          <p className="section-label" data-reveal>{content.bear.label}</p>
          <h2 id="bear-interlude-title" aria-label={content.bear.title.join(" ")} data-reveal>
            {content.bear.title.map((line) => <span key={line} aria-hidden="true">{line}</span>)}
          </h2>
        </header>
        <figure className="bear-interlude-frame" data-mask>
          <Image
            src="/media/hospitality-bear-electric-v1.webp"
            width={1122}
            height={1402}
            sizes="(max-width: 900px) 100vw, 62vw"
            alt=""
            loading="lazy"
          />
        </figure>
      </section>

      <section className="menu-section" aria-labelledby="menu-title">
        <div className="menu-layout page-grid">
          <div className="menu-heading">
            <p className="section-label" data-reveal>{content.menu.label}</p>
            <h2 id="menu-title" data-reveal>{content.menu.title}</h2>
            <p data-reveal>{content.menu.body}</p>
          </div>
          <div className="menu-levels">
            {content.menu.levels.map((level) => (
              <article key={level.title} data-reveal>
                <h3>{level.title}</h3>
                <p>{level.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pilot-section" id="pilot" aria-labelledby="pilot-title">
        <div className="pilot-layout page-grid">
          <p className="section-label" data-reveal>{content.pilot.label}</p>
          <h2 id="pilot-title" data-reveal>{content.pilot.title}</h2>
          <div className="pilot-steps">
            {content.pilot.steps.map((step) => (
              <article key={step.number} data-reveal>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          <p className="pilot-body" data-reveal>{content.pilot.body}</p>
        </div>
      </section>

      <section className="partners-section" id="partners" aria-labelledby="partners-title">
        <header className="partners-heading page-grid">
          <p className="section-label" data-reveal>{content.partners.label}</p>
          <h2 id="partners-title" data-reveal>{content.partners.title}</h2>
        </header>

        <ol className="partners-ledger page-grid">
          {content.partners.groups.map((group, index) => (
            <li className="partner-row" key={group.region} data-reveal>
              <span className="partner-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.region}</h3>
              <p className="partner-venues">
                {group.venues.map((venue) => <span key={venue}>{venue}</span>)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-layout page-grid">
          <header className="contact-copy" data-reveal>
            <p className="section-label">{content.contact.label}</p>
            <h2 id="contact-title">{content.contact.title}</h2>
          </header>

          <div className="contact-channels" data-reveal>
            <p className="contact-direct-title">{content.contact.directTitle}</p>
            <address>
              <a href={`tel:${content.contact.chinaPhoneHref}`}>{content.contact.chinaPhone}</a>
              <a href={content.contact.websiteHref} target="_blank" rel="noreferrer">{content.contact.website}</a>
              <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
            </address>
            <WechatContact
              label={content.contact.wechat}
              account={content.contact.wechatId}
              qr={content.contact.wechatQr}
            />
          </div>
        </div>
      </section>
    </>
  );
}
