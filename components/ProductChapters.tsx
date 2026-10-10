import Image from "next/image";
import type { ProductProfile } from "@/content/products";

type ProductChaptersProps = {
  label: string;
  product: ProductProfile;
};

export function ProductChapters({ label, product }: ProductChaptersProps) {
  return (
    <section id="product-story" className={`product-chapters focus-${product.focus}`} data-product-story>
      <div className="product-chapters-stage">
        <div className="product-chapters-media" aria-hidden="true">
          <div className="product-chapters-layer is-silhouette" data-product-story-media>
            <Image className="product-chapters-image-desktop" src={product.campaignImage} fill sizes="100vw" alt="" />
            <Image className="product-chapters-image-mobile" src={product.portraitImage} fill sizes="100vw" alt="" />
          </div>
          <div className="product-chapters-layer is-detail" data-product-story-media>
            <Image className="product-chapters-image-desktop" src={product.portraitImage} fill sizes="100vw" alt="" />
            <Image className="product-chapters-image-mobile" src={product.portraitImage} fill sizes="100vw" alt="" />
          </div>
          <div className="product-chapters-layer is-signature" data-product-story-media>
            <Image className="product-chapters-image-desktop" src={product.signatureImage} fill sizes="100vw" alt="" />
            <Image className="product-chapters-image-mobile" src={product.signatureImage} fill sizes="100vw" alt="" />
          </div>
        </div>

        <div className="product-chapters-shade" />

        <header className="product-chapters-header">
          <p>{label}</p>
          <span>{String(product.position).padStart(2, "0")} / 08</span>
        </header>

        <div className="product-chapters-copy">
          {product.facets.map((facet) => (
            <article key={facet.label} data-product-story-panel>
              <p>{facet.label}</p>
              <h2>{facet.title}</h2>
              <span>{facet.text}</span>
            </article>
          ))}
        </div>

        <div className="product-chapters-progress" aria-hidden="true">
          <span />
          <i data-product-story-progress />
        </div>
      </div>
    </section>
  );
}
