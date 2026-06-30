"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger animation for work grid items
          const grid = entry.target.closest(".work__grid");
          const delay = grid
            ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100
            : 0;

          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    // Initial load animations for hero elements
    const heroElements = document.querySelectorAll(".hero .animate-on-scroll");
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, 300 + index * 150);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
