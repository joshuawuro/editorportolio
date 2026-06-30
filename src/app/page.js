import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import ColorGrade from "@/components/ColorGrade";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <ColorGrade />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
