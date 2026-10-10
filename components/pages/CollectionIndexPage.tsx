import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/copy";
import { pageCopy } from "@/content/pages";
import { getProductProfiles } from "@/content/products";
import { SiteFrame } from "@/components/SiteFrame";

export function CollectionIndexPage({ locale }: { locale: Locale }) {
  const content = pageCopy[locale];
  const products = getProductProfiles(locale);

  return (
    <SiteFrame className="inner-page collection-page" locale={locale}>
      <section className="inner-hero collection-hero" data-hero>
        <div className="inner-hero-media">
          <Image
            src="/media/collection-stage.webp"
            fill
            priority
            sizes="100vw"
            alt="X Experience collection"
          />
          <div className="inner-hero-shade" />
        </div>
        <p className="inner-hero-eyebrow">{content.collection.eyebrow}</p>
        <div className="inner-hero-title page-grid">
          <h1>{content.collection.title}</h1>
          <p>{content.collection.lead}</p>
        </div>
        <span className="inner-hero-counter">{content.collection.count}</span>
      </section>

      <section className="catalogue" aria-label={content.collection.title}>
        <header className="catalogue-header">
          <p data-reveal>{content.collection.count}</p>
          <span data-reveal>{content.collection.eyebrow}</span>
        </header>

        <div className="catalogue-grid">
          {products.map((product) => (
            <Link
              className={`catalogue-tile focus-${product.focus}`}
              href={`/${locale}/collection/${product.slug}`}
              key={product.slug}
              data-cursor="VIEW"
            >
              <div className="catalogue-tile-media" data-mask>
                <Image
                  src={product.signatureImage}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  alt={product.name}
                />
                <div className="catalogue-tile-shade" />
              </div>
              <span className="catalogue-tile-index">
                {String(product.position).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
              </span>
              <div className="catalogue-tile-caption">
                <p>{product.eyebrow}</p>
                <h2>{product.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="editorial-close">
        <p data-reveal>{content.collection.closingBody}</p>
        <h2 data-reveal>{content.collection.closing}</h2>
        <Link href={`/${locale}/contact`} data-cursor="OPEN" data-reveal>
          {content.common.discuss}<span aria-hidden="true">↗</span>
        </Link>
      </section>
    </SiteFrame>
  );
}
