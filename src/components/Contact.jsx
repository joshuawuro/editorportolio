export default function Contact() {
  const contactLinks = [
    {
      id: "contactEmail",
      label: "Email Me",
      value: "joshuawuro@gmail.com",
      href: "mailto:joshuawuro@gmail.com",
      target: "_self",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      id: "contactInstagram",
      label: "Instagram",
      value: "@_joshuawuro",
      href: "https://instagram.com/_joshuawuro",
      target: "_blank",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      id: "contactTiktok",
      label: "TikTok",
      value: "@joshuawuro",
      href: "https://tiktok.com/@joshuawuro",
      target: "_blank",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__card animate-on-scroll">
          <div className="contact__bg-effect"></div>
          <div className="contact__content">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">
              Have a Project in <span className="text-gradient">Mind?</span>
            </h2>
            <p className="contact__desc">
              I&apos;m always open to new opportunities and exciting projects. 
              Whether you need reels for your brand or have a creative idea — let&apos;s make it happen.
            </p>
            <div className="contact__links">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.target}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="contact__link"
                  id={link.id}
                >
                  <div className="contact__link-icon">{link.icon}</div>
                  <div>
                    <span className="contact__link-label">{link.label}</span>
                    <span className="contact__link-value">{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
