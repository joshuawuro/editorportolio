import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Video Editor Portfolio | Creative Reel Editing",
  description:
    "Professional video editor specializing in reels and short-form content for brands and personal projects. View my portfolio of stunning visual stories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable}`}
        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
      >
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}

