# Design QA — X Experience

Date: 2026-09-08  
Primary route: `http://localhost:3000/en`  
Secondary route: `http://localhost:3000/zh-cn`

## Reference and implementation evidence

- Partnership heading reference: `C:/Users/USER/AppData/Local/Temp/codex-clipboard-bcbcee7c-2743-4406-8b75-678c77bb62ea.png`
- Partnership ledger reference: `C:/Users/USER/AppData/Local/Temp/codex-clipboard-597c6918-0629-4ad2-8fe3-dabf1f62f665.png`
- Footer reference: `C:/Users/USER/AppData/Local/Temp/codex-clipboard-7d0765c8-49f5-4dfc-91bd-33f06c2c30ab.png`
- Full implementation: `.tastemaker/qa-full-en-reduced-motion.png`
- Combined comparisons, reference left and implementation right:
  - `.tastemaker/qa-compare-partners-heading.png`
  - `.tastemaker/qa-compare-partners-ledger.png`
  - `.tastemaker/qa-compare-footer.png`

## Visual review

- The partnership introduction retains the supplied asymmetrical editorial hierarchy: small hospitality label, oversized serif statement, large negative space, and no card container.
- The collaboration ledger retains indexed rows, serif country names, compact venue lists, and thin full-width separators. Eight requested regions and their supplied venues are present.
- The footer preserves the supplied architectural gesture as the English-only `WE CREATE PRESENCE.`, adapted to the existing wine-dark palette.
- Contact intentionally differs from the logo reference according to the latest request: no contact logo, no form, direct channels only.

## Responsive and functional review

- Checked at 320×568, 390×844, 430×932, 768×1024, 1366×768, 1440×900, and 1920×1080.
- No horizontal overflow, broken images, sticky sections, framework overlays, or browser console errors.
- `COLLECTION` fits at 320px and all mobile editorial headings remain within the viewport.
- English is primary; Simplified Chinese remains available and functional.
- The former Russian phone number is absent; the Chinese number is present.
- WeChat QR is absent before activation. The button opens a native modal; Escape/backdrop close, document lock, and focus restoration work.
- Mobile menu exposes all six section links plus EN/中文, closes after selection, and lands below the fixed header.
- Next.js production build, TypeScript, anti-slop scan, and reduced-motion path pass.
- Motion audit has no high-severity findings; remaining medium notes are intentional cinematic media/reveal timings.

final result: passed

---

## Update QA — station replacement and inline WeChat

Date: 2026-09-12  
Route: `http://127.0.0.1:3000/en`  
State: station panel and contact section at rest; no modal state exists.

### Source and implementation evidence

- Source visual truth: `C:/Users/USER/AppData/Local/Temp/codex-clipboard-c788dd13-8f0a-436b-bc24-43af6a28151d.png` (`1672x941`, source density).
- Desktop station implementation: `tmp/qa-station-desktop.png` (`806x793`, 1440x900 CSS viewport, device scale factor 1).
- Mobile station implementation: `tmp/qa-station-mobile.png` (`390x776`, 390x844 CSS viewport, device scale factor 1).
- Desktop contact implementation: `tmp/qa-contact-desktop.png` (`1440x979`, 1440x900 CSS viewport, device scale factor 1).
- Mobile contact implementation: `tmp/qa-contact-mobile.png` (`390x1034`, 390x844 CSS viewport, device scale factor 1).
- Combined visual comparison: `tmp/qa-station-comparison.png` (`1600x800`). The source is normalized to `800x450` on the left; the rendered station region is normalized within an `800x800` field on the right.

### Findings

- No actionable P0/P1/P2 differences remain. The supplied station image is used directly, stays sharp, and retains its warm black/gold/red palette. The taller rendered crop is intentional: it follows the existing station-panel composition while keeping the branded counter and upper display visible.
- WeChat is now a visible inline contact block. The account label and QR remain legible on desktop and mobile, and there is no trigger, dialog, backdrop, or hidden modal state.
- Typography remains on the existing Cormorant Garamond/Manrope system with the established hierarchy, weights, tracking, and wrapping.
- Spacing and layout rhythm remain aligned with the existing 12-column desktop grid and single-column mobile flow. No horizontal overflow is present.
- Colors continue to use the existing wine-dark, warm white, and gold tokens. The QR uses a white quiet zone for scan contrast.
- Copy and contact data are unchanged; only the former modal action has been replaced with direct inline presentation.

### Comparison history

- Earlier state: the previous station artwork was shown, and WeChat required activating a modal.
- Fixes: replaced `public/media/station.webp` with the supplied visual; replaced `WechatModal` with the server-rendered `WechatContact`; removed modal state, dialog CSS, backdrop, close control, scroll lock, and modal cursor override.
- Post-fix evidence: both station and contact captures render without broken images, framework error overlays, console errors, or horizontal overflow. Automated checks report `modalCount: 0` and `qrVisible: true` at both viewports.

### Focused-region review

- The station region was compared against the supplied source in `tmp/qa-station-comparison.png`.
- The contact region was checked separately because the QR requirement is behavioral/layout-specific and is not represented in the station source image.

### Implementation checklist

- [x] Replace station artwork everywhere the shared asset is used.
- [x] Display WeChat QR directly in the contact section.
- [x] Remove modal interaction and modal-only styling.
- [x] Verify desktop/mobile layout, image loading, overflow, and runtime errors.
- [x] Pass Next.js production build and TypeScript checks.

final result: passed
