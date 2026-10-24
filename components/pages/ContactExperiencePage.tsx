import Image from "next/image";
import type { Locale } from "@/content/copy";
import { copy } from "@/content/copy";
import { Contact } from "@/components/Contact";
import { SiteFrame } from "@/components/SiteFrame";

export function ContactExperiencePage({ locale }: { locale: Locale }) {
  const content = copy[locale];

  return (
    <SiteFrame className="inner-page contact-page" locale={locale} skipTarget="#contact">
      <section className="contact-page-hero" data-hero>
        <Image src="/media/x-mark.svg" width={388} height={266} sizes="28vw" alt="" priority />
        <p>{content.finale.eyebrow}</p>
        <h1>{content.finale.title}</h1>
        <span>{content.finale.body}</span>
      </section>
      <Contact copy={content.finale} regions={content.proof.regions} />
    </SiteFrame>
  );
}
