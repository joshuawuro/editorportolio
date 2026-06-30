"use client";

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
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
          <p className="footer__copy">&copy; 2026 joshuawuro. Crafted with passion.</p>
          <div className="footer__socials">
            <a
              href="https://instagram.com/_joshuawuro"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@joshuawuro"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
              </svg>
            </a>
            <a
              href="https://twitter.com/joshuawuro"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
