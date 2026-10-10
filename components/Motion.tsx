"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { Locale } from "@/content/copy";
import { htmlLang } from "@/content/routing";

export function Motion({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = htmlLang(locale);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const animations: gsap.core.Animation[] = [];
    const animatedElements = new Set<HTMLElement>();
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("[data-autoplay-video]"));

    const remember = <T extends gsap.core.Animation>(animation: T) => {
      animations.push(animation);
      return animation;
    };

    if (reducedMotion) {
      document.documentElement.classList.add("reduced-motion");
      videos.forEach((video) => video.pause());
    }

    const heroMedia = document.querySelector<HTMLElement>("[data-hero-media]");
    const heroPoster = document.querySelector<HTMLElement>("[data-hero-poster]");
    const heroVideo = document.querySelector<HTMLVideoElement>("[data-hero-video]");
    const nav = document.querySelector<HTMLElement>("[data-nav]");

    const intro = reducedMotion
      ? null
      : remember(
          gsap.timeline({ paused: Boolean(document.querySelector("[data-site-preloader]")) })
            .fromTo(heroMedia, { autoAlpha: 0, scale: 1.025 }, { autoAlpha: 1, scale: 1, duration: 1.45, ease: "power4.out" })
            .fromTo(nav, { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.88")
        );

    const revealIntro = () => {
      intro?.play(0);
      if (!reducedMotion && heroVideo) {
        void heroVideo.play().then(() => {
          if (heroPoster) remember(gsap.to(heroPoster, { autoAlpha: 0, duration: 0.8, ease: "power2.out" }));
        }).catch(() => undefined);
      }
    };

    if (intro?.paused()) window.addEventListener("x:experience-ready", revealIntro, { once: true });
    else revealIntro();

    const callbacks = new Map<Element, () => void>();
    const observer = !reducedMotion && "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            callbacks.get(entry.target)?.();
            callbacks.delete(entry.target);
            observer?.unobserve(entry.target);
          });
        }, { threshold: 0.09, rootMargin: "0px 0px -7%" })
      : null;

    const observeOnce = (element: Element, callback: () => void) => {
      if (!observer) return;
      callbacks.set(element, callback);
      observer.observe(element);
    };

    const statement = document.querySelector<HTMLElement>("[data-home-statement]");
    const statementWords = Array.from(document.querySelectorAll<HTMLElement>("[data-statement-word]"));
    const statementBody = document.querySelector<HTMLElement>("[data-statement-body]");

    if (observer && statement && statementWords.length) {
      statementWords.forEach((word) => animatedElements.add(word));
      if (statementBody) animatedElements.add(statementBody);
      gsap.set(statementWords, { autoAlpha: 0.12, yPercent: 26 });
      if (statementBody) gsap.set(statementBody, { autoAlpha: 0, y: 24 });
      observeOnce(statement, () => {
        remember(gsap.to(statementWords, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1.05,
          stagger: 0.055,
          ease: "power4.out",
        }));
        if (statementBody) {
          remember(gsap.to(statementBody, { autoAlpha: 1, y: 0, duration: 0.95, delay: 0.26, ease: "power4.out" }));
        }
      });
    }

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      if (!observer || element.hasAttribute("data-statement-word") || element === statementBody) return;
      animatedElements.add(element);
      gsap.set(element, { autoAlpha: 0, y: 24 });
      observeOnce(element, () => {
        remember(gsap.to(element, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power4.out" }));
      });
    });

    document.querySelectorAll<HTMLElement>("[data-mask]").forEach((mask) => {
      if (!observer) return;
      const media = mask.querySelector<HTMLElement>("img, video");
      animatedElements.add(mask);
      gsap.set(mask, { clipPath: "inset(10% 0 10% 0)" });
      if (media) {
        animatedElements.add(media);
        gsap.set(media, { scale: 1.055 });
      }
      observeOnce(mask, () => {
        remember(gsap.to(mask, { clipPath: "inset(0% 0 0% 0)", duration: 1.25, ease: "power4.out" }));
        if (media) remember(gsap.to(media, { scale: 1, duration: 1.65, ease: "power3.out" }));
      });
    });

    document.querySelectorAll<HTMLElement>("[data-catalogue-media]").forEach((media, index) => {
      if (!observer) return;
      const object = media.querySelector<HTMLElement>("[data-catalogue-object]");
      const trigger = media.closest<HTMLElement>(".catalogue-chapter") ?? media;
      animatedElements.add(media);
      gsap.set(media, { clipPath: "inset(100% 0 0 0)" });
      if (object) {
        animatedElements.add(object);
        gsap.set(object, { scale: 1.075 });
      }
      observeOnce(trigger, () => {
        remember(gsap.to(media, {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.15,
          delay: (index % 3) * 0.055,
          ease: "power4.out",
        }));
        if (object) remember(gsap.to(object, { scale: 1, duration: 1.55, ease: "power3.out" }));
      });
    });

    let navFrame = 0;
    const updateNav = () => {
      navFrame = 0;
      nav?.classList.toggle("is-scrolled", window.scrollY > 48);
    };
    const requestNavUpdate = () => {
      if (!navFrame) navFrame = requestAnimationFrame(updateNav);
    };
    updateNav();
    window.addEventListener("scroll", requestNavUpdate, { passive: true });

    const visibleVideos = new Set<HTMLVideoElement>();
    const videoObserver = "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const video = entry.target as HTMLVideoElement;
            if (entry.isIntersecting) visibleVideos.add(video);
            else visibleVideos.delete(video);

            if (!reducedMotion && entry.isIntersecting && !document.hidden) void video.play().catch(() => undefined);
            else video.pause();
          });
        }, { threshold: 0.08, rootMargin: "8% 0px" })
      : null;
    videos.forEach((video) => videoObserver?.observe(video));

    const syncVisibility = () => {
      videos.forEach((video) => {
        if (reducedMotion || document.hidden || !visibleVideos.has(video)) video.pause();
        else void video.play().catch(() => undefined);
      });
    };
    document.addEventListener("visibilitychange", syncVisibility);

    const magneticCleanup: Array<() => void> = [];
    if (finePointer && !reducedMotion) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((element) => {
        const moveX = gsap.quickTo(element, "x", { duration: 0.32, ease: "power3.out" });
        const moveY = gsap.quickTo(element, "y", { duration: 0.32, ease: "power3.out" });
        const onMove = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          moveX(((event.clientX - rect.left) / rect.width - 0.5) * 8);
          moveY(((event.clientY - rect.top) / rect.height - 0.5) * 8);
        };
        const onLeave = () => {
          moveX(0);
          moveY(0);
        };
        element.addEventListener("pointermove", onMove);
        element.addEventListener("pointerleave", onLeave);
        magneticCleanup.push(() => {
          element.removeEventListener("pointermove", onMove);
          element.removeEventListener("pointerleave", onLeave);
          gsap.set(element, { clearProps: "transform" });
        });
      });
    }

    return () => {
      window.removeEventListener("x:experience-ready", revealIntro);
      window.removeEventListener("scroll", requestNavUpdate);
      document.removeEventListener("visibilitychange", syncVisibility);
      cancelAnimationFrame(navFrame);
      observer?.disconnect();
      videoObserver?.disconnect();
      magneticCleanup.forEach((cleanup) => cleanup());
      animations.forEach((animation) => animation.kill());
      if (animatedElements.size) {
        gsap.set(Array.from(animatedElements), { clearProps: "opacity,visibility,transform,clipPath" });
      }
      document.documentElement.classList.remove("reduced-motion");
    };
  }, [locale]);

  return null;
}

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let frame = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.17;
      currentY += (targetY - currentY) * 0.17;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) frame = requestAnimationFrame(render);
      else frame = 0;
    };

    const requestRender = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("is-visible");
      const interactive = (event.target as Element | null)?.closest("a, button, summary, [data-cursor-label]");
      cursor.classList.toggle("is-interactive", Boolean(interactive));
      const label = interactive?.getAttribute("data-cursor-label") ?? "";
      const text = cursor.querySelector<HTMLElement>("span");
      if (text) text.textContent = label;
      requestRender();
    };

    const onDown = () => cursor.classList.add("is-pressed");
    const onUp = () => cursor.classList.remove("is-pressed");
    const onLeave = () => cursor.classList.remove("is-visible");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} aria-hidden="true"><span /></div>;
}
