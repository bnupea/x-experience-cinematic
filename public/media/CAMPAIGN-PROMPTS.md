# X Experience campaign media

All imagery was created from user-supplied device references. These are campaign visualizations rather than technical product documentation. No visual asset, logo or product image from Meduse or Timeless was supplied to either generator.

## Hero keyframes

Provider: OpenAI Imagegen. References: the supplied AIO Space product views only.

Desktop prompt direction: preserve the recognizable AIO Space silhouette, transparent water cylinder, three black circular modules, controls, hose and mouthpiece; stage the complete device on a black mineral oval plinth inside a monumental near-black hospitality interior; use narrow vertical champagne light, realistic glass and anodized metal, restrained reflections, large negative space and a centered 16:9 composition. No people, smoke cloud, arbitrary branding, neon, cyberpunk styling, extra parts, redesign or watermark.

Mobile prompt direction: preserve the same exact device and all functional parts; make it the dominant 9:16 subject, fully visible and centered at roughly 70% of frame height on a black stone pedestal; use warm architectural light columns and enough lower-frame clarity for editorial copy. No people, hands, extra object, deformation, logo, text, neon or watermark.

The web-ready stills are `hero-scroll-keyframe-desktop-v1.webp` and `hero-scroll-keyframe-mobile-v1.webp`. Lossless source PNGs are archived under `.tastemaker/source-media/`.

## Hero scroll films

Provider: Higgsfield Kling 3.0 Pro. Duration: 12 seconds each. Sound: off. Separate 16:9 and 9:16 generations are used so the product remains legible rather than relying on a desktop crop. The user-designated desktop reference film is the completed Kling generation `d9c197be-e862-4d9a-876e-31516f405f7f`.

Desktop prompt:

> A single continuous twelve-second luxury product film for reversible scroll scrubbing. Preserve the exact AIO Space electronic shisha system from the start frame: the tall transparent water cylinder, three black circular modules, buttons, hose and mouthpiece must retain their geometry and proportions. No cuts, no jump transitions, no extra parts. Timeline: 0-3 seconds, the complete device slowly emerges from near-black while a narrow warm champagne rim light travels across the glass and black anodized metal. 3-6 seconds, an extremely slow controlled dolly forward reveals the bubbles and precision junctions while keeping the whole system legible. 6-9 seconds, a restrained 10-degree camera arc exposes the electronic controls and hose connection; the interior light breathes subtly, never flashing. 9-12 seconds, the camera returns to a quiet hero distance as illumination falls away and the object recedes into a deep near-black silhouette, leaving calm central negative space for a separate logo overlay. Premium hospitality campaign, cinematic black mineral interior, realistic glass, metal and rubber, subtle film grain, confident and quiet movement, tripod-stable camera, physically plausible reflections. The subject stays centered in the central 36 percent of the frame and never leaves the crop. No people, no hands, no smoke cloud, no text, no logo, no watermark, no neon, no cyberpunk, no particles, no lens flare, no spinning product, no deformation.

Mobile prompt:

> A single continuous twelve-second vertical luxury product film for reversible mobile scroll scrubbing. Preserve the exact AIO Space electronic shisha system from the portrait start frame: tall transparent water cylinder, three black circular modules, buttons, full hose and mouthpiece retain their exact geometry and proportions. The device is always the dominant subject and remains fully visible inside the 9:16 frame. No cuts, no jump transitions, no extra parts. Timeline: 0-3 seconds, the full device emerges from near-black with a narrow warm champagne rim light. 3-6 seconds, a very gentle push-in emphasises the transparent cylinder and controlled internal glow without cropping the base. 6-9 seconds, a slow vertical camera drift reveals the electronic modules and hose connection while the full silhouette remains readable. 9-12 seconds, the camera settles back to the complete device as the illumination falls away and the object becomes a near-black silhouette, leaving a calm central field for a separate logo overlay. Premium hospitality campaign, cinematic black mineral interior, realistic glass, metal and rubber, subtle film grain, stable camera, physically plausible reflections. Keep the complete product centered and occupy roughly 70 percent of frame height. No people, no hands, no smoke cloud, no text, no logo, no watermark, no neon, no cyberpunk, no particles, no lens flare, no spinning product, no deformation.

The exact X Experience identity is rendered as an accessible DOM finale over the last dark frames. This avoids asking a video model to redraw or typeset the logo. Web derivatives are H.264 at 24 fps with half-second keyframe spacing for responsive forward and reverse seeking: 1280×720 desktop and 720×1280 mobile, each under 3 MB. Raw masters remain under `.tastemaker/source-media/`.

### Reference-driven validation pass

The user-designated desktop film was also used for a second Kling 3.0 Pro pass. Because the Kling 3.0 endpoint accepts start/end images rather than a direct video role, frames at 0.4 and 11.55 seconds were extracted from that exact film and supplied as hard keyframes. Generation job: `87ea0bab-24c4-4468-b481-46c7e290eb0a`.

Prompt:

> Use the two frames extracted from the supplied reference film as hard visual anchors. Create one continuous twelve-second luxury product film built for reversible scroll scrubbing. Preserve the exact AIO Space electronic shisha system, including the tall transparent water cylinder, all black circular modules, controls, hose and mouthpiece; geometry and proportions never change. 0-3 seconds: hold the complete product in a calm architectural wide shot while a narrow champagne rim light reveals glass and black anodized metal. 3-6 seconds: perform an extremely slow linear dolly toward the cylinder and connection details, keeping the full operating system legible. 6-9 seconds: add only a restrained eight-degree lateral arc with physically plausible reflections and subtle internal bubbles; no rotation of the object. 9-12 seconds: return smoothly to the supplied dark closing frame, settling into a centered silhouette with negative space for a separate exact logo overlay. Near-black mineral hospitality interior, black stone plinth, realistic glass, metal and rubber, warm restrained bronze light, tripod-stable camera, subtle film grain. Motion must be monotonic, smooth and easy to read in either direction. No cuts, speed ramps, zoom jumps, people, hands, smoke cloud, text, logo, watermark, neon, cyberpunk, particles, lens flare, added modules, deformation or redesign.

The pass preserved product geometry but produced less camera range and a stronger blue illumination than the current production film. It is archived as `.tastemaker/source-media/hero-scroll-kling-desktop-v2-reference-raw.mp4` with its contact sheet; it is intentionally not shipped.

## Product stills

- `new-emotions-campaign-v2.webp`
- `anima-campaign-v2.webp`
- `aio-space-campaign-v3.webp`
- `aio-welcome-campaign-v3.webp`
- `mr-smoke-campaign-v3.webp`
- `lipstick-campaign-v3.webp`
- `porsche-campaign-v3.webp`
- `waterfall-campaign-v2.webp`

Shared direction: preserve the supplied device silhouette, proportions, functional parts, hose and characteristic illumination; replace the original restaurant or phone-screen setting with a near-black graphite studio, reflective stone floor, restrained atmospheric depth and one champagne-gold rim light. Landscape 16:9, complete object, no people, unrelated furniture, invented branding, watermark, extra device, neon environment or redesign.

The New Emotions, Anima and Waterfall compositions intentionally reserve right-side negative space. Mobile CSS uses individual focal points so the complete object remains visible in portrait view.

## Scroll-history film

Provider: Higgsfield Kling 3.0 Pro. Duration: 8 seconds. Format: 1920 × 1080 H.264, silent. The web derivative uses half-second keyframe spacing for responsive forward and reverse seeking.

Direction: preserve the supplied Anima identity; begin with the complete object in restrained darkness, move through slow macro views of bronze, heater and illuminated glass, then settle on the full silhouette. Continuous precise camera motion, no people, text, logos, fast cuts, flicker or redesign. The source master is archived in `.tastemaker/source-media/` and is not shipped to the browser.

The earlier supplied `hero.mp4` is retained in the repository as source history but is not referenced by the current hero.

## Hospitality spaces campaign

Provider: OpenAI Imagegen. References: supplied AIO Space device views only. Outputs: `spaces-ritual-desktop-v1.webp` and `spaces-ritual-mobile-v1.webp`; lossless masters are archived under `.tastemaker/source-media/`.

Direction: preserve the complete AIO Space geometry, transparent illuminated cylinder, black circular modules, controls, hose and mouthpiece; place it as the dominant object in a private high-hospitality lounge after dark. Use black stone, warm champagne architectural light, distant city bokeh and restrained reflections. The 16:9 frame reserves editorial negative space; the separate 9:16 frame keeps the entire device large and legible on mobile. No people, hands, text, logos, extra modules, neon, cyberpunk styling, smoke cloud, deformation or watermark.

The accompanying desktop scroll film was generated with Higgsfield Kling 3.0 Pro, generation job `a85a48b9-2349-4a29-8c81-28aa99cfd3af`. It is one continuous eight-second architecture reveal: a near-black private interior resolves into a monolithic hospitality station through a slow, stable one-axis camera movement and restrained warm light. The web derivative is `spaces-architecture-kling-v1.mp4` (1280×720, 24 fps, H.264, silent, frequent keyframes, under 0.75 MB); mobile deliberately uses the portrait still rather than downloading and cropping the desktop film.

## Technology campaign

Provider: OpenAI Imagegen and Higgsfield Kling 3.0 Pro. The portrait still `technology-heat-mobile-v1.webp` preserves the AIO Space device as a full, centered 9:16 object against a near-black technical field, with restrained amber heat cues and enough dark space for sequential copy.

The desktop scroll film `technology-heat-kling-v1.mp4` was generated under job `f5f69b4f-95ca-4d10-8537-848641663803`. Direction: begin on physically plausible machined rings and controlled amber heat, then pull back slowly into a centered sculptural system; one continuous stable shot, no people, text, logo, open flame, sparks, neon, arbitrary parts or claims presented as engineering documentation. The shipped derivative is 1280×720, 24 fps, H.264, silent, frequent-keyframe and approximately 1.2 MB. The raw master and contact sheet remain under `.tastemaker/`.

Both films are conceptual campaign visualizations, not technical schematics or proof of specifications. Product and brand text remains accessible HTML layered independently of generated media.

### Electric heater product still

Provider: OpenAI Imagegen. Output: `electric-heater-cinematic-v1.webp` (1024 × 1536 source composition, optimized WebP approximately 42 KB). Reference: the autonomous electric heater product photograph extracted from page 7 of the supplied Nu Air presentation.

Prompt direction: create an original cinematic luxury product photograph while preserving the reference device's cylindrical silhouette, top cooling fins, turquoise-blue light seam, square button, circular display area and brushed-metal control dial. Keep the complete device upright against a near-black graphite studio field with restrained rim light and generous negative space. No charcoal, ignition, fire, ash, traditional bowl, heat manager, hoses, people, extra controls, text, logos, watermark, neon environment or product redesign.

## Delivery optimization

All scroll-scrubbed derivatives use short keyframe intervals for responsive forward and reverse seeking. Browser seek writes are capped near 30fps to match the 24fps source cadence while interpolation remains frame-driven. Later-page films use `preload="none"` and begin loading only near the viewport; hidden or offscreen media is paused. Desktop-only films use media-qualified sources so touch layouts do not request them. The largest legacy masters and superseded public encodes are retained recoverably under `.tastemaker/source-media/retired-public-v1/` and are not shipped in `public/`.
