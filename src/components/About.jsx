export default function About() {
  const tools = [
    { name: "Premiere Pro", shortcut: "Pr" },
    { name: "After Effects", shortcut: "Ae" },
    { name: "DaVinci Resolve", shortcut: "Da" },
    { name: "CapCut", shortcut: "Cc" },
  ];

  const highlights = [
    {
      title: "Quality First",
      desc: "Every frame is intentional. I obsess over the details so your content stands out.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ),
    },
    {
      title: "Fast Turnaround",
      desc: "Quick delivery without compromising on quality. I respect your timelines.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Clear Communication",
      desc: "I keep you in the loop throughout the editing process. Your vision matters.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-col animate-on-scroll">
            <div className="about__image-wrapper">
              <img
                src="/images/me.png"
                alt="Video Editor"
                className="about__image"
                style={{
                  width: "100%",
                  aspectRatio: "3 / 4",
                  objectFit: "cover",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--clr-border)",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <div className="about__image-decoration"></div>
            </div>
            <div className="about__tools">
              <span className="section-tag">Tools I Use</span>
              <div className="tools-grid">
                {tools.map((tool) => (
                  <div key={tool.name} className="tool-item">
                    <div className="tool-icon">{tool.shortcut}</div>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="about__content-col">
            <div className="section-header section-header--left animate-on-scroll">
              <span className="section-tag">About Me</span>
              <h2 className="section-title">
                The Editor Behind <span className="text-gradient">The Cuts</span>
              </h2>
            </div>
            <div className="about__text animate-on-scroll">
              <p>
                Hey there! I&apos;m a passionate video editor at the beginning of an exciting creative journey. 
                I specialize in crafting engaging reels and short-form content that make people stop scrolling.
              </p>
              <p>
                What started as a hobby quickly became my passion — turning raw clips into polished, 
                story-driven content. I love experimenting with transitions, beat-synced cuts, 
                color grading, and motion graphics to bring ideas to life.
              </p>
              <p>
                I&apos;ve had the opportunity to work with brands on their social media content, 
                and I&apos;m always looking for new projects that push my creative boundaries. 
                Whether it&apos;s a product showcase, a lifestyle reel, or an experimental edit — 
                I bring the same energy and attention to detail to every project.
              </p>
            </div>
            <div className="about__highlights animate-on-scroll">
              {highlights.map((h) => (
                <div key={h.title} className="highlight-card">
                  <div className="highlight-card__icon">{h.icon}</div>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
