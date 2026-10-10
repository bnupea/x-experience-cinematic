import Image from "next/image";
import Link from "next/link";
import { copy as siteCopy, type Locale } from "@/content/copy";
import { pageCopy } from "@/content/pages";
import type { ProductProfile } from "@/content/products";
import { HistoryScene } from "@/components/HistoryScene";
import { ProductChapters } from "@/components/ProductChapters";
import { SiteFrame } from "@/components/SiteFrame";

type ProductDetailPageProps = {
  locale: Locale;
  product: ProductProfile;
  products: ProductProfile[];
};

export function ProductDetailPage({ locale, product, products }: ProductDetailPageProps) {
  const content = pageCopy[locale];
  const total = String(products.length).padStart(2, "0");
  const index = (position: number) => `${String(position).padStart(2, "0")} / ${total}`;
  const currentIndex = products.findIndex((item) => item.slug === product.slug);
  const otherProducts = products.filter((item) => item.slug !== product.slug);
  const nextProduct = products[(currentIndex + 1) % products.length];

  return (
    <SiteFrame className={`inner-page product-page product-${product.slug}`} locale={locale}>
      <section className={`product-hero focus-${product.focus}`} data-hero>
        <Image className="product-hero-desktop" src={product.campaignImage} fill priority sizes="100vw" alt={product.name} />
        <Image className="product-hero-mobile" src={product.signatureImage} fill priority sizes="100vw" alt={product.name} />
        <div className="product-hero-shade" />
        <div className="product-hero-meta">
          <p>{content.product.objectLabel}</p>
          <span>{index(product.position)}</span>
        </div>
        <div className="product-hero-title">
          <p>{product.eyebrow}</p>
          <h1>{product.name}</h1>
          <span>{product.description}</span>
        </div>
        <Link className="product-back" href={`/${locale}/collection`} data-cursor="BACK">
          <span aria-hidden="true">←</span>{content.common.back}
        </Link>
      </section>

      <section className="product-opening">
        <div className="product-opening-media" data-mask>
          <Image src={product.portraitImage} fill sizes="(max-width: 900px) 100vw, 48vw" alt={product.name} />
        </div>
        <div className="product-opening-copy">
          <p className="section-index" data-reveal>{content.product.character}</p>
          <p className="product-archetype" data-reveal>{product.archetype}</p>
          <h2 data-reveal>{product.storyTitle}</h2>
          <p data-reveal>{product.story}</p>
        </div>
        <blockquote data-reveal>{product.statement}</blockquote>
      </section>

      {product.slug === "anima-designer" ? <HistoryScene copy={siteCopy[locale].history} /> : null}

      <ProductChapters label={content.product.anatomy} product={product} />

      <section className="product-role">
        <div className="product-role-heading">
          <p className="section-index" data-reveal>{content.product.role}</p>
          <h2 data-reveal>{product.role}</h2>
        </div>
        <div className="product-contexts">
          <p>{content.product.contexts}</p>
          {product.contexts.map((context, position) => (
            <span key={context} data-reveal>
              <i>{String(position + 1).padStart(2, "0")}</i>{context}
            </span>
          ))}
        </div>
      </section>

      <section className="product-essence">
        <div className="product-essence-heading">
          <p className="section-index" data-reveal>{content.product.essence}</p>
          <h2 data-reveal>{product.name}</h2>
          <span data-reveal>{product.eyebrow}</span>
        </div>
        <dl className="product-essence-rows">
          {content.product.essenceRows.map((label, position) => (
            <div key={label} data-reveal>
              <dt>
                <i aria-hidden="true">{String(position + 1).padStart(2, "0")}</i>
                {label}
              </dt>
              <dd>{product.essence[position]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="product-specification">
        <div className="product-specification-media" data-mask>
          <Image src={product.signatureImage} fill sizes="(max-width: 900px) 100vw, 62vw" alt="" />
        </div>
        <div className="product-specification-shade" />
        <div className="product-specification-copy">
          <p className="section-index" data-reveal>X Experience / {product.name}</p>
          <h2 data-reveal>{content.product.personalisation}</h2>
          <p data-reveal>{product.personalisation}</p>
          <div className="product-specification-note" data-reveal>
            <p>{content.product.specification}</p>
            <span>{content.product.specificationBody}</span>
          </div>
          <Link href={`/${locale}/contact`} data-cursor="OPEN" data-reveal>
            {content.product.request}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="product-cross" aria-labelledby="product-cross-title">
        <header className="product-cross-header">
          <p data-reveal>{content.product.crossIndex}</p>
          <span data-reveal>{content.collection.count}</span>
        </header>

        <div className="product-cross-grid">
          <div className="product-cross-cta">
            <h2 id="product-cross-title" data-reveal>
              {content.product.crossQuestion.replace("{name}", product.name)}
            </h2>
            <Link href={`/${locale}/contact`} data-cursor="OPEN" data-reveal>
              {content.common.discuss}<span aria-hidden="true">↗</span>
            </Link>
            <Link className="product-cross-index" href={`/${locale}/collection`} data-cursor="VIEW" data-reveal>
              {content.common.collection}<span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="product-cross-track">
            {otherProducts.map((item) => (
              <Link
                className={`product-cross-object focus-${item.focus}`}
                href={`/${locale}/collection/${item.slug}`}
                key={item.slug}
                data-cursor="VIEW"
              >
                <Image src={item.signatureImage} fill sizes="(max-width: 900px) 50vw, 25vw" alt="" />
                <div />
                <p>{item.slug === nextProduct.slug ? content.common.next : content.product.objectLabel}</p>
                <h3>{item.name}</h3>
                <span>{index(item.position)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
