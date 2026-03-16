import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { LivingRoomHero } from "./components/LivingRoomHero";
import { AboutSection } from "./components/AboutSection";
import { BlogSection } from "./components/BlogSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { FlipbookSection } from "./components/FlipbookSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <main>
        <LivingRoomHero />
        <AboutSection />
        <BlogSection />
        <ProjectsSection />
        <FlipbookSection />
      </main>
      <Footer />
    </div>
  );
}