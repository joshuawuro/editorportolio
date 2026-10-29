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
    videoUrl: "/videos/motor-insurance-commercial.mp4",
    thumbnailUrl: null,
  },
  {
    id: 2,
    category: "client",
    badge: "Client Work",
    title: "Cargo & Marine Insurance",
    desc: "Comprehensive coverage showcase emphasizing trust, logistics, and visual storytelling.",
    tags: ["Marine & Cargo", "Commercial", "Color Grading"],
    videoUrl: "/videos/cargo-and-marine-insurance.mp4",
    thumbnailUrl: null,
  },
  {
    id: 3,
    category: "client",
    badge: "Client Work",
    title: "Cargo Cover Motion Promo",
    desc: "High-retention social reel with kinetic typography, beat-synced pacing, and motion graphics.",
    tags: ["Short-Form", "Motion Graphics", "Beat Sync"],
    videoUrl: "/videos/cargo-cover-promo.mp4",
    thumbnailUrl: null,
  },
  {
    id: 4,
    category: "personal",
    badge: "Personal",
    title: "Breast Cancer Awareness",
    desc: "Impactful awareness campaign visual featuring emotive pacing, delicate color grading, and clean overlays.",
    tags: ["Awareness", "Color Grading", "Storytelling"],
    videoUrl: "/videos/breast-cancer-awareness.mp4",
    thumbnailUrl: null,
  },
  {
    id: 5,
    category: "personal",
    badge: "Personal",
    title: "Holiday Celebration Reel",
    desc: "Atmospheric holiday seasonal edit capturing warm visuals, peaceful transitions, and ambient soundscapes.",
    tags: ["Seasonal", "Sound Design", "Mood Edit"],
    videoUrl: "/videos/holiday-celebration-promo.mp4",
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
                          src={`${project.videoUrl}#t=0.001`}
                          preload="metadata"
                          muted
                          playsInline
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
            <video src={activeMedia.url} controls autoPlay playsInline className="media-modal__video" />
            <h4 className="media-modal__title">{activeMedia.title}</h4>
          </div>
        </div>
      )}
    </>
  );
}
