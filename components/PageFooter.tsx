import Image from "next/image";
import type { PresentationContent } from "@/content/presentation";

export function PageFooter({ content }: { content: PresentationContent }) {
  return (
    <footer className="page-footer">
      <div className="footer-presence page-grid">
        <p className="footer-eyebrow">{content.footer.eyebrow}</p>
        <a className="footer-presence-link" href="#contact">
          {content.footer.title}
        </a>
      </div>

      <div className="footer-rail">
        <a className="footer-brand" href="#top" aria-label="X Experience">
          <Image src="/media/brand-x-mark.png" width={478} height={430} alt="" />
          <span>
            <strong translate="no">{content.brand.name}</strong>
            <small translate="no">{content.brand.descriptor}</small>
          </span>
        </a>

        <nav className="footer-links" aria-label="Footer">
          <a href="#collection">{content.footer.collection}</a>
          <a href="#contact">{content.footer.contact}</a>
        </nav>

        <p className="footer-legal">{content.footer.legal}</p>
        <p className="footer-copyright">© 2026</p>
      </div>
    </footer>
  );
}
