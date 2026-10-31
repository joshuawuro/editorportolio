"use client";

import { useEffect, useState } from "react";

export default function ScrollAnimations() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Calculate reading scroll progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(Math.max(currentProgress, 0), 100));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. IntersectionObserver for reveal effects
    const observerOptions = {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Compute stagger delay for grid items
          let delay = 0;
          if (el.dataset.delay) {
            delay = parseInt(el.dataset.delay, 10);
          } else {
            const parentGrid = el.closest(".work__grid, .tools-grid, .about__highlights");
            if (parentGrid) {
              const siblings = Array.from(parentGrid.children).filter(
                (child) => !child.classList.contains("hidden")
              );
              const idx = siblings.indexOf(el);
              if (idx !== -1) {
                delay = idx * 90;
              }
            }
          }

          setTimeout(() => {
            el.classList.add("visible");
          }, delay);

          observer.unobserve(el);
        }
      });
    }, observerOptions);

    const observeAll = () => {
      const targets = document.querySelectorAll(
        ".animate-on-scroll:not(.visible), .animate-fade-left:not(.visible), .animate-fade-right:not(.visible), .animate-scale-up:not(.visible)"
      );
      targets.forEach((el) => observer.observe(el));
    };

    observeAll();

    // 3. Initial Hero load stagger
    const heroElements = document.querySelectorAll(".hero .animate-on-scroll");
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, 200 + index * 120);
    });

    // 4. Watch for filter changes in work grid
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    const workGrid = document.querySelector(".work__grid");
    if (workGrid) {
      mutationObserver.observe(workGrid, {
        childList: true,
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${scrollProgress}%` }}
      aria-hidden="true"
    />
  );
}
