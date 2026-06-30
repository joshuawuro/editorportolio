"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function Header() {
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active nav link tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 200;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`header ${isScrolled ? "scrolled" : ""}`}
        id="header"
        ref={headerRef}
      >
        <nav className="nav">
          <a
            href="#"
            className="nav__logo"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <span className="logo-icon">▶</span>
            <span className="logo-text">
              JOSHUA<span className="logo-accent">WURO</span>
            </span>
          </a>
          <ul className="nav__links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav__link ${activeSection === item.href.slice(1) ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="nav__cta"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Let&apos;s Work Together
          </a>
          <button
            className={`nav__toggle ${isMobileMenuOpen ? "active" : ""}`}
            ref={toggleRef}
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-menu__links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="mobile-menu__link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
