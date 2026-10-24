"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { publicLocales, type Locale } from "@/content/copy";
import { interfaceLabels, localeLabels, type PresentationContent } from "@/content/presentation";

type NavProps = {
  locale: Locale;
  brand: PresentationContent["brand"];
  navItems: PresentationContent["nav"];
};

export function Nav({ locale, brand, navItems }: NavProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const labels = interfaceLabels[locale];

  const closeMenu = () => {
    menuRef.current?.removeAttribute("open");
    document.documentElement.classList.remove("menu-open");
  };

  useEffect(() => {
    const closeAtDesktop = () => {
      if (window.innerWidth > 900) closeMenu();
    };

    window.addEventListener("resize", closeAtDesktop, { passive: true });
    return () => {
      window.removeEventListener("resize", closeAtDesktop);
      document.documentElement.classList.remove("menu-open");
    };
  }, []);

  return (
    <header className="site-nav" data-nav>
      <a className="brand" href="#top" aria-label="X Experience" data-magnetic>
        <Image src="/media/x-mark.svg" width={388} height={266} alt="" priority />
        <span translate="no">{brand.name}</span>
      </a>

      <nav className="desktop-nav" aria-label={labels.navigation}>
        {navItems.map((item) => (
          <a href={item.href} key={item.href} data-magnetic>{item.label}</a>
        ))}
      </nav>

      <div className="nav-tools">
        <nav className="locale-switch" aria-label="Language">
          {publicLocales.map((item) => (
            <a
              href={`/${item}/`}
              key={item}
              lang={item === "zh-cn" ? "zh-CN" : item}
              hrefLang={item === "zh-cn" ? "zh-CN" : item}
              aria-current={item === locale ? "page" : undefined}
              data-magnetic
            >
              {localeLabels[item]}
            </a>
          ))}
        </nav>

        <details
          className="mobile-menu"
          ref={menuRef}
          onToggle={(event) => document.documentElement.classList.toggle("menu-open", event.currentTarget.open)}
        >
          <summary aria-label={labels.openMenu}>
            <span className="menu-label">{labels.menu}</span>
            <span className="menu-icon" aria-hidden="true"><i /><i /></span>
          </summary>
          <div className="mobile-menu-panel">
            <div className="mobile-menu-head">
              <a className="mobile-menu-brand" href="#top" onClick={closeMenu} aria-label="X Experience">
                <Image src="/media/x-mark.svg" width={388} height={266} alt="" />
                <span translate="no">{brand.name}</span>
              </a>
            </div>

            <nav className="mobile-primary-nav" aria-label={labels.navigation}>
              {navItems.map((item, index) => (
                <a href={item.href} key={item.href} onClick={closeMenu}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              ))}
            </nav>

            <nav className="mobile-locale-switch" aria-label="Language">
              {publicLocales.map((item) => (
                <a
                  href={`/${item}/`}
                  key={item}
                  lang={item === "zh-cn" ? "zh-CN" : item}
                  hrefLang={item === "zh-cn" ? "zh-CN" : item}
                  aria-current={item === locale ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {localeLabels[item]}
                </a>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
