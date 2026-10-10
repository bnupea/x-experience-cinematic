"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { PresentationContent } from "@/content/presentation";

let initialExperienceReady = false;

const wait = (duration: number) => new Promise<void>((resolve) => window.setTimeout(resolve, duration));
const PRELOADER_TOTAL_DURATION = 3000;
const PRELOADER_EXIT_DURATION = 790;

function waitForMedia(
  element: HTMLImageElement | HTMLVideoElement | null,
  eventName: "load" | "loadedmetadata",
  isReady: () => boolean,
) {
  if (!element || isReady()) return Promise.resolve();

  return new Promise<void>((resolve) => {
    let timeout = 0;
    const finish = () => {
      window.clearTimeout(timeout);
      element.removeEventListener(eventName, finish);
      element.removeEventListener("error", finish);
      resolve();
    };

    element.addEventListener(eventName, finish, { once: true });
    element.addEventListener("error", finish, { once: true });
    timeout = window.setTimeout(finish, 2400);
  });
}

export function Preloader({ brand }: { brand: PresentationContent["brand"] }) {
  const [visible, setVisible] = useState(!initialExperienceReady);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (initialExperienceReady) {
      setVisible(false);
      return;
    }

    let cancelled = false;
    let finalized = false;
    let exitTimer = 0;
    let finishTimer = 0;
    const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const documentReadyAt = navigationEntry?.domContentLoadedEventEnd;
    const startedAt = documentReadyAt && documentReadyAt > 0 ? documentReadyAt : performance.now();
    const root = document.documentElement;
    const previousOverflow = document.body.style.overflow;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    root.classList.add("site-loading");
    document.body.style.overflow = "hidden";
    document.body.setAttribute("aria-busy", "true");

    const poster = document.querySelector<HTMLImageElement>("[data-hero-poster] img");
    const video = document.querySelector<HTMLVideoElement>("[data-hero-video]");
    const fonts = document.fonts?.ready.then(() => undefined) ?? Promise.resolve();
    const tasks = [
      waitForMedia(poster, "load", () => Boolean(poster?.complete && poster.naturalWidth)),
      waitForMedia(video, "loadedmetadata", () => Boolean(video && video.readyState >= 1)),
      Promise.race([fonts, wait(2400)]),
    ];

    let completed = 0;
    const tracked = tasks.map((task) => task.finally(() => {
      completed += 1;
      if (!cancelled && !finalized) setProgress(Math.round((completed / tasks.length) * 94));
    }));

    const minimumReadyTime = reducedMotion
      ? 80
      : PRELOADER_TOTAL_DURATION - PRELOADER_EXIT_DURATION;

    Promise.race([Promise.allSettled(tracked), wait(minimumReadyTime)]).then(async () => {
      await wait(Math.max(0, minimumReadyTime - (performance.now() - startedAt)));
      if (cancelled) return;

      finalized = true;
      setProgress(100);
      exitTimer = window.setTimeout(() => {
        if (cancelled) return;
        setLeaving(true);
        window.dispatchEvent(new CustomEvent("x:experience-ready"));
      }, reducedMotion ? 10 : 90);

      finishTimer = window.setTimeout(() => {
        if (cancelled) return;
        initialExperienceReady = true;
        root.classList.remove("site-loading");
        document.body.style.overflow = previousOverflow;
        document.body.removeAttribute("aria-busy");
        setVisible(false);
      }, reducedMotion ? 70 : PRELOADER_EXIT_DURATION);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
      root.classList.remove("site-loading");
      document.body.style.overflow = previousOverflow;
      document.body.removeAttribute("aria-busy");
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className={`site-preloader${leaving ? " is-leaving" : ""}`}
        data-site-preloader
        role="status"
        aria-live="polite"
        aria-label="X Experience"
      >
        <div className="preloader-brand">
          <Image src="/media/brand-x-mark.png" width={478} height={430} alt="" priority />
          <strong translate="no">{brand.name}</strong>
          <span translate="no">{brand.descriptor}</span>
        </div>
        <div className="preloader-progress" aria-hidden="true">
          <i><b style={{ transform: `scaleX(${progress / 100})` }} /></i>
          <output>{String(progress).padStart(2, "0")}</output>
        </div>
      </div>
      <noscript><style>{`.site-preloader{display:none!important}`}</style></noscript>
    </>
  );
}
