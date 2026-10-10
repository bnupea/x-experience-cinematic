import type { ReactNode } from "react";
import type { Locale } from "@/content/copy";
import { htmlLang } from "@/content/routing";
import { presentations } from "@/content/presentation";
import { Cursor, Motion } from "./Motion";
import { Nav } from "./Nav";
import { PageFooter } from "./PageFooter";

type SiteFrameProps = {
  children: ReactNode;
  className?: string;
  locale: Locale;
  skipTarget?: string;
};

export function SiteFrame({ children, className = "", locale, skipTarget = "#main-content" }: SiteFrameProps) {
  const content = presentations[locale];

  return (
    <>
      <a className="skip-link" href={skipTarget}>{content.concept.label}</a>
      <Nav locale={locale} brand={content.brand} navItems={content.nav} />
      <main id="main-content" className={className} lang={htmlLang(locale)}>
        {children}
      </main>
      <PageFooter content={content} />
      <Cursor />
      <Motion locale={locale} />
    </>
  );
}
