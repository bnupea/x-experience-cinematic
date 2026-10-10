import type { PresentationContent } from "@/content/presentation";

export function Collection({ content }: { content: PresentationContent }) {
  return (
    <section className="collection-index collection-cinema" id="collection" aria-labelledby="collection-title">
      <header className="collection-header page-grid">
        <p className="section-label" data-reveal>{content.collection.label}</p>
        <h2 id="collection-title" data-reveal>{content.collection.label}</h2>
      </header>

      <div className="catalogue-scroll">
        {content.collection.products.map((product, index) => (
          <article
            className={`catalogue-chapter is-focus-${product.focus ?? "center"}${index >= 6 ? " is-wide" : ""}`}
            key={product.name}
            aria-label={`${product.name}. ${product.label}`}
          >
            <div className="catalogue-stage">
              <picture className="catalogue-media" data-catalogue-media>
                <source media="(max-width: 720px)" srcSet={product.mobileImage} />
                <img
                  src={product.desktopImage}
                  width="1600"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                  alt={product.name}
                  data-catalogue-object
                />
              </picture>
              <div className="catalogue-shade" aria-hidden="true" />
              <p className="catalogue-eyebrow">{product.label}</p>
              <h3>{product.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
