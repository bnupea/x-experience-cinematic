"use client";

import Image from "next/image";
import { useState } from "react";
import type { PresentationContent } from "@/content/presentation";

const BRAND_REVEAL_AT = 10.65;

type HeroFilmProps = {
  brand: PresentationContent["brand"];
};

export function HeroFilm({ brand }: HeroFilmProps) {
  const [brandVisible, setBrandVisible] = useState(false);

  const syncBrand = (video: HTMLVideoElement) => {
    setBrandVisible(video.currentTime >= BRAND_REVEAL_AT);
  };

  return (
    <div className="hero-v2-media" data-hero-media>
      <div className="hero-v2-poster" data-hero-poster aria-hidden="true">
        <Image src="/media/hero-main-poster.webp" fill priority sizes="100vw" alt="" />
      </div>

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/hero-main-poster.webp"
        aria-label="X Experience"
        data-autoplay-video
        data-hero-video
        onLoadedMetadata={(event) => syncBrand(event.currentTarget)}
        onTimeUpdate={(event) => syncBrand(event.currentTarget)}
      >
        <source src="/media/hero-x-experience-v2.mp4" type="video/mp4" />
      </video>

      <div className="hero-v2-shade" aria-hidden="true" />

      <div className={`hero-brand-reveal${brandVisible ? " is-visible" : ""}`} aria-hidden={!brandVisible}>
        <Image src="/media/x-mark.svg" width={388} height={266} priority alt="" />
        <strong translate="no">{brand.name}</strong>
        <span translate="no">{brand.descriptor}</span>
      </div>
    </div>
  );
}
