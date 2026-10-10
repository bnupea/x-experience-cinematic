import type { PresentationContent } from "@/content/presentation";
import { HeroFilm } from "./HeroFilm";

type HeroProps = {
  content: PresentationContent;
};

export function Hero({ content }: HeroProps) {
  const statementWords = content.concept.title.split(/\s+/);

  return (
    <>
      <section className="hero hero-home-v2" id="top" data-home-hero aria-label="X Experience">
        <div className="hero-stage">
          <HeroFilm brand={content.brand} />
        </div>
      </section>

      <section className="hero-statement" id="concept" data-home-statement aria-labelledby="concept-title">
        <div className="hero-statement-stage page-grid">
          <p className="section-label statement-label" data-reveal>{content.concept.label}</p>
          <h1 id="concept-title">
            <span className="sr-only">{content.concept.title}</span>
            <span className="statement-words" aria-hidden="true">
              {statementWords.map((word, index) => (
                <span data-statement-word key={`${word}-${index}`}>{word}</span>
              ))}
            </span>
          </h1>
          <p className="hero-statement-body" data-statement-body>{content.concept.body}</p>
        </div>
      </section>
    </>
  );
}
