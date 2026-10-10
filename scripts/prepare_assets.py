from __future__ import annotations

from pathlib import Path
from PIL import Image

ROOT = Path(r"C:\Users\USER\OneDrive\Documents\калик")
PUBLIC = ROOT / "x-experience-cinematic" / "public" / "media"
PUBLIC.mkdir(parents=True, exist_ok=True)


def save_webp(source: Path, target: str, max_edge: int = 1800, quality: int = 86) -> None:
    with Image.open(source) as image:
        image = image.convert("RGB")
        image.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)
        image.save(PUBLIC / target, "WEBP", quality=quality, method=6)


logo_source = ROOT / "photo_2026-09-04_15-29-15.jpg"
with Image.open(logo_source).convert("RGBA") as logo:
    # Crop the supplied X mark, then key out the near-black phone screenshot background.
    mark = logo.crop((310, 900, 880, 1510))
    pixels = []
    for r, g, b, a in mark.getdata():
        alpha = 0 if max(r, g, b) < 30 else min(255, max(0, (max(r, g, b) - 25) * 6))
        pixels.append((r, g, b, alpha))
    mark.putdata(pixels)
    mark.thumbnail((512, 512), Image.Resampling.LANCZOS)
    mark.save(PUBLIC / "brand-x.png")

photo_map = {
    "photo_2026-09-04_15-27-48.jpg": "anima.webp",
    "photo_2026-09-04_15-27-52.jpg": "aio-space.webp",
    "photo_2026-09-04_15-27-57.jpg": "aio-welcome.webp",
    "photo_2026-09-04_15-28-00.jpg": "new-emotions.webp",
    "photo_2026-09-04_15-28-54.jpg": "lipstick.webp",
    "photo_2026-09-04_15-28-57.jpg": "mr-smoke.webp",
    "photo_2026-09-04_15-29-01.jpg": "porsche.webp",
    "photo_2026-09-06_20-45-40.jpg": "waterfall-gold.webp",
    "photo_2026-09-06_20-47-22.jpg": "waterfall-lit.webp",
    "rooftop_station.png": "station.webp",
    "uniform.png": "people.webp",
}
for source, target in photo_map.items():
    save_webp(ROOT / source, target)

generated = Path(r"C:\Users\USER\.codex\generated_images\01a07767-cdba-7521-948a-27592eaac63c\exec-943e4251-66fe-4e52-b313-bce60d872304.png")
save_webp(generated, "collection-stage.webp", max_edge=2400, quality=90)
print("Prepared image assets in", PUBLIC)
