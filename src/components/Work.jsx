"use client";

import { useState, useRef } from "react";

const PROJECTS = [
  {
    id: 1,
    category: "client",
    badge: "Client Work",
    title: "Motor Insurance Commercial",
    desc: "Professional commercial showcase reel featuring dynamic cuts, sound design, and typography overlays.",
    tags: ["Transitions", "Commercial", "Captioning"],
    videoUrl: "https://inaftktvcuzljjbkebme.supabase.co/storage/v1/object/sign/portfolio-videos/motor-insurance-commercial.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDk0M2VmOC0xOTQzLTRhNDEtYWE5OS03YmEzY2Y4MmM1MDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8tdmlkZW9zL21vdG9yLWluc3VyYW5jZS1jb21tZXJjaWFsLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODI5MTI3ODUsImV4cCI6MTgxNDQ0ODc4NX0.9jv8vwrCoNb_COFdmcB31gTpKogiIAX8JeHUIZg6npY",
    thumbnailUrl: null,
  },
  {
    id: 2,
    category: "client",
    badge: "Client Work",
    title: "Travel Insurance Promo",
    desc: "Scenic campaign highlight reel with trendy beat-synced editing, color matching, and engaging pacing.",
    tags: ["Beat Sync", "Promo", "Color Matching"],
    videoUrl: "https://inaftktvcuzljjbkebme.supabase.co/storage/v1/object/sign/portfolio-videos/travel-insurance-promo.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDk0M2VmOC0xOTQzLTRhNDEtYWE5OS03YmEzY2Y4MmM1MDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8tdmlkZW9zL3RyYXZlbC1pbnN1cmFuY2UtcHJvbW8ubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkxMjgwNCwiZXhwIjoxODE0NDQ4ODA0fQ.2NoK4u0tPLPBGcdEGgrKgP0F_GEHpJBShORoOb59yhU",
    thumbnailUrl: null,
  },
  {
    id: 3,
    category: "client",
    badge: "Client Work",
    title: "Short-Form Creative Edit",
    desc: "High-retention social media reel using fast cuts, VFX assets, and modern kinetic captions.",
    tags: ["Short-Form", "Reels", "Sound Design"],
    videoUrl: "https://inaftktvcuzljjbkebme.supabase.co/storage/v1/object/sign/portfolio-videos/creative-short-form.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDk0M2VmOC0xOTQzLTRhNDEtYWE5OS03YmEzY2Y4MmM1MDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8tdmlkZW9zL2NyZWF0aXZlLXNob3J0LWZvcm0ubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkxMjY2OCwiZXhwIjoxODE0NDQ4NjY4fQ.CfT2KtoqOd22Rc-eDbArKMfQB4Pp9aMIjUXwiXwp4AI",
    thumbnailUrl: null,
  },
  {
    id: 4,
    category: "personal",
    badge: "Personal",
    title: "Cinematic Reel Edit",
    desc: "A highly dynamic personal showcase edit demonstrating advanced timing, speed ramping, and motion graphics.",
    tags: ["Speed Ramps", "Color Grading", "VFX"],
    videoUrl: "https://inaftktvcuzljjbkebme.supabase.co/storage/v1/object/sign/portfolio-videos/cinematic-reel-edit.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDk0M2VmOC0xOTQzLTRhNDEtYWE5OS03YmEzY2Y4MmM1MDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8tdmlkZW9zL2NpbmVtYXRpYy1yZWVsLWVkaXQubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkxMjc2MiwiZXhwIjoxODE0NDQ4NzYyfQ.MFff1vCs89hhwVHkUDFMVHk8nJj5J3Jh4z5IoZ5O_SQ",
    thumbnailUrl: null,
  },
  {
    id: 5,
    category: "personal",
    badge: "Personal",
    title: "Short Story Reading Visuals",
    desc: "Atmospheric visual edit designed to accompany and highlight spoken-word and narrative readings.",
    tags: ["Sound Design", "Mood Edit", "Typography"],
    videoUrl: "https://inaftktvcuzljjbkebme.supabase.co/storage/v1/object/sign/portfolio-videos/narrative-reading-visuals.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDk0M2VmOC0xOTQzLTRhNDEtYWE5OS03YmEzY2Y4MmM1MDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8tdmlkZW9zL25hcnJhdGl2ZS1yZWFkaW5nLXZpc3VhbHMubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjkxMjY5MiwiZXhwIjoxODE0NDQ4NjkyfQ.iE5tu0n0S6xsfYj6wiSfiFYB9V6uC_7qbrALwvq0yZw",
    thumbnailUrl: null,
  }
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCardIds, setVisibleCardIds] = useState(PROJECTS.map(p => p.id));
  const [activeMedia, setActiveMedia] = useState(null);
  const cardRefs = useRef({});

  // Handle tilt effect on hover
  const handleMouseMove = (e, id) => {
    const card = cardRefs.current[id];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (id) => {
    const card = cardRefs.current[id];
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  };

  // Filter logic with animation delay
  const handleFilterClick = (filter) => {
    if (filter === activeFilter) return;
    setActiveFilter(filter);

    const matching = PROJECTS.filter(p => filter === "all" || p.category === filter);
    const nonMatching = PROJECTS.filter(p => filter !== "all" && p.category !== filter);

    // 1. Instantly start fading out non-matching cards
    nonMatching.forEach(p => {
      const card = cardRefs.current[p.id];
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
      }
    });

    // 2. After transition out completes, hide them from display and show the matching ones
    setTimeout(() => {
      setVisibleCardIds(matching.map(p => p.id));

      // 3. Stagger show matching cards
      matching.forEach((p, index) => {
        const card = cardRefs.current[p.id];
        if (card) {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 80);
        }
      });
    }, 300);
  };

  const handlePlayClick = (project) => {
    if (project.videoUrl) {
      setActiveMedia({ type: "video", url: project.videoUrl, title: project.title });
    }
  };

  return (
    <>
      <section className="work" id="work">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="section-desc">
              A collection of reels and short-form content I've crafted for brands and personal passion projects.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="work__filters animate-on-scroll">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => handleFilterClick("all")}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${activeFilter === "client" ? "active" : ""}`}
              onClick={() => handleFilterClick("client")}
            >
              Client Work
            </button>
            <button
              className={`filter-btn ${activeFilter === "personal" ? "active" : ""}`}
              onClick={() => handleFilterClick("personal")}
            >
              Personal
            </button>
          </div>

          {/* Projects Grid */}
          <div className="work__grid">
            {PROJECTS.map((project) => {
              const isVisible = visibleCardIds.includes(project.id);
              const isInteractive = !!project.videoUrl;

              return (
                <div
                  key={project.id}
                  ref={(el) => (cardRefs.current[project.id] = el)}
                  className={`project-card animate-on-scroll ${isVisible ? "" : "hidden"}`}
                  data-category={project.category}
                  onMouseMove={(e) => handleMouseMove(e, project.id)}
                  onMouseLeave={() => handleMouseLeave(project.id)}
                  style={{
                    transition: "var(--transition-base), opacity 0.4s ease, transform 0.4s ease",
                  }}
                >
                  <div className="project-card__media">
                    <div className="project-card__thumbnail">
                      {project.videoUrl ? (
                        <video
                          src={project.videoUrl}
                          preload="metadata"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      ) : (
                        <div className="project-card__placeholder">
                          <div className="placeholder-icon">
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                          </div>
                          <span>Reel Preview Placeholder</span>
                        </div>
                      )}
                    </div>
                    {isInteractive && (
                      <div className="project-card__overlay" onClick={() => handlePlayClick(project)}>
                        <button className="play-btn" aria-label={`Play ${project.title}`}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </button>
                      </div>
                    )}
                    <span
                      className={`project-card__badge ${
                        project.category === "personal" ? "project-card__badge--personal" : ""
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>
                  <div className="project-card__info">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__desc">{project.desc}</p>
                    <div className="project-card__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox / Video Modal */}
      {activeMedia && (
        <div className="media-modal" onClick={() => setActiveMedia(null)}>
          <div className="media-modal__close" onClick={() => setActiveMedia(null)}>
            &times;
          </div>
          <div className="media-modal__content" onClick={(e) => e.stopPropagation()}>
            <video src={activeMedia.url} controls autoPlay className="media-modal__video" />
            <h4 className="media-modal__title">{activeMedia.title}</h4>
          </div>
        </div>
      )}
    </>
  );
}
