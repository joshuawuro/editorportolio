"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [stats, setStats] = useState({ projects: 0, brands: 0, passion: 0 });
  const statsRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);

  // Parallax effect on gradient orbs
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (orb1Ref.current) orb1Ref.current.style.transform = `translateY(${scrolled * 0.15}px)`;
      if (orb2Ref.current) orb2Ref.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      if (orb3Ref.current) orb3Ref.current.style.transform = `translateY(${scrolled * 0.45}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Count-up animation
  useEffect(() => {
    let hasCounted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCounted) {
            hasCounted = true;
            animateCountUp();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    const animateCountUp = () => {
      const targets = { projects: 5, brands: 3, passion: 100 };
      const duration = 2000;
      const start = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

        setStats({
          projects: Math.floor(targets.projects * eased),
          brands: Math.floor(targets.brands * eased),
          passion: Math.floor(targets.passion * eased),
        });

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setStats(targets);
        }
      };

      requestAnimationFrame(update);
    };

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScrollClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__grain"></div>
        <div ref={orb1Ref} className="hero__gradient-orb hero__gradient-orb--1"></div>
        <div ref={orb2Ref} className="hero__gradient-orb hero__gradient-orb--2"></div>
        <div ref={orb3Ref} className="hero__gradient-orb hero__gradient-orb--3"></div>
      </div>
      <div className="hero__content">
        <div className="hero__badge animate-on-scroll">
          <span className="badge-dot"></span>
          Available for freelance projects
        </div>
        <h1 className="hero__title animate-on-scroll">
          <span className="hero__title-line">I Turn Raw</span>
          <span className="hero__title-line hero__title-line--accent">Footage</span>
          <span className="hero__title-line">Into Stories</span>
        </h1>
        <p className="hero__subtitle animate-on-scroll">
          Video editor crafting scroll-stopping reels & short-form content 
          that captivate audiences and elevate brands.
        </p>
        <div className="hero__actions animate-on-scroll">
          <a href="#work" className="btn btn--primary" onClick={(e) => handleScrollClick(e, "#work")}>
            <span>View My Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a href="#about" className="btn btn--ghost" onClick={(e) => handleScrollClick(e, "#about")}>
            Learn More
          </a>
        </div>
        <div ref={statsRef} className="hero__stats animate-on-scroll">
          <div className="stat">
            <span className="stat__number">{stats.projects}</span>
            <span className="stat__plus">+</span>
            <span className="stat__label">Projects Completed</span>
          </div>
          <div className="stat__divider"></div>
          <div className="stat">
            <span className="stat__number">{stats.brands}</span>
            <span className="stat__label">Brand Collaborations</span>
          </div>
          <div className="stat__divider"></div>
          <div className="stat">
            <span className="stat__number">{stats.passion}</span>
            <span className="stat__plus">%</span>
            <span className="stat__label">Passion & Dedication</span>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
