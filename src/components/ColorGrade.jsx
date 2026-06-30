"use client";

export default function ColorGrade() {
  return (
    <section className="color-grade" id="color-grade">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">Color Grading</span>
          <h2 className="section-title">
            From S-Log to <span className="text-gradient">Final Grade</span>
          </h2>
          <p className="section-desc">
            An illustrative breakdown showcasing the conversion from flat camera profiles (S-Log Raw) to high-fidelity, color-graded cinematic storytelling.
          </p>
        </div>

        <div className="color-grade__container">
          {/* Left Callout: Graded */}
          <div className="color-grade__callout color-grade__callout--left animate-on-scroll">
            <div className="callout__content">
              <h3>Color Graded</h3>
              <p>
                Dynamic contrast adjustment, warm skin-tone balancing, rich shadow detail preservation, and stylized highlight correction for high-impact commercial and cinematic appeal.
              </p>
            </div>
            <div className="callout__line"></div>
            <div className="callout__dot"></div>
          </div>

          {/* Centered Image */}
          <div className="color-grade__image-wrapper animate-on-scroll">
            <img
              src="/images/before and after.jpg"
              alt="Before and After Color Grading Showcase"
            />
          </div>

          {/* Right Callout: Raw */}
          <div className="color-grade__callout color-grade__callout--right animate-on-scroll">
            <div className="callout__content">
              <h3>S-Log & Rec.709 Raw</h3>
              <p>
                Flat-profile camera log capture, preserving raw highlight headroom and deep dynamic shadow details for ultimate grading flexibility in post-production.
              </p>
            </div>
            <div className="callout__line"></div>
            <div className="callout__dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
