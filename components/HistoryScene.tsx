import type { SiteCopy } from "@/content/copy";

export function HistoryScene({ copy }: { copy: SiteCopy["history"] }) {
  return (
    <section className="history" id="history" data-history aria-label={copy.eyebrow}>
      <div className="history-stage">
        <video
          className="history-film"
          muted
          playsInline
          preload="metadata"
          poster="/media/scroll-history-poster-v2.jpg"
          data-scroll-video
          aria-label="Anima material and form study"
        >
          <source src="/media/scroll-history-kling-v3-web.mp4" type="video/mp4" />
        </video>
        <div className="history-shade" />

        <div className="history-heading">
          <span>02</span>
          <p>{copy.eyebrow}</p>
        </div>

        <div className="history-panels">
          {copy.steps.map((step, index) => (
            <article className="history-panel" data-history-panel key={step.label}>
              <p>{step.label}</p>
              <h2>{step.title}</h2>
              <span>{step.text}</span>
              <small>{String(index + 1).padStart(2, "0")} / {String(copy.steps.length).padStart(2, "0")}</small>
            </article>
          ))}
        </div>

        <div className="history-progress" aria-hidden="true">
          <span />
          <i data-history-progress />
          <span />
        </div>
        <p className="history-instruction">{copy.instruction}</p>
      </div>
    </section>
  );
}
