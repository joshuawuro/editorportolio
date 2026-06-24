# Next.js Video Editor Portfolio

A modern, high-performance portfolio application built on Next.js (App Router) and vanilla CSS, featuring 3D perspective hover cards, mouse glow lights, section scroll tracking, and viewport counter animations.

---

## Assets Configuration Guide

### 1. Adding Your Media
We have created two specific directories in the `public/` directory for your assets:
- **Profile & Design Images**: Store them in `/public/images/`
- **Video Reels & Clips**: Store them in `/public/videos/`

### 2. How to Add Your Picture
1. Drop your photo (e.g. `profile.jpg`) into `public/images/`.
2. Open `src/components/About.jsx`.
3. Locate the profile picture placeholder section (around line 46):
   ```jsx
   <div className="about__image-placeholder" id="aboutImage">
     <div className="about__image-icon">...</div>
     <span>Your Photo</span>
   </div>
   ```
4. Replace that placeholder `div` with an optimized Next.js `Image` or HTML `img` tag pointing to `/images/profile.jpg`:
   ```jsx
   <img 
     src="/images/profile.jpg" 
     alt="Profile Photo" 
     className="about__image" 
     style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} 
   />
   ```

### 3. How to Add Your Video Reels
1. Place your video files (e.g., `reel1.mp4`, `reel2.mp4`) into `public/videos/`.
2. Drop thumbnail images (e.g., `thumb1.jpg`) into `public/images/`.
3. Open `src/components/Work.jsx`.
4. In the `PROJECTS` array at the top of the file, add your asset paths (e.g., `videoUrl` and `thumbnailUrl` attributes):
   ```javascript
   const PROJECTS = [
     {
       id: 1,
       category: "client",
       badge: "Client Work",
       title: "Brand Reel #1",
       desc: "Product showcase reel with dynamic transitions and color grading for a commercial brand.",
       tags: ["Color Grading", "Motion Graphics", "Reels"],
       videoUrl: "/videos/reel1.mp4",
       thumbnailUrl: "/images/thumb1.jpg"
     },
     ...
   ];
   ```
5. You can render these dynamically in the project card loop inside `Work.jsx`.

---

## Getting Started

First, run the development server:

```bash
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
# editorportolio
