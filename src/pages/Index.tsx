import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import LevelingUp from "@/components/LevelingUp";
import Projects from "@/components/Projects";
import Playground from "@/components/Playground";
import HowIBuild from "@/components/HowIBuild";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundGrid from "@/components/BackgroundGrid";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full max-w-full bg-white text-slate-900 overflow-x-hidden overflow-x-clip selection:bg-slate-200 selection:text-slate-900">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Light Ambient Grid */}
      <BackgroundGrid />

      {/* Sticky Modern Navbar */}
      <Navbar />

      {/* Main Content */}
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <LevelingUp />
        <Projects />
        <Playground />
        <HowIBuild />
        <CurrentlyBuilding />
        <Experience />
        <Articles />
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Back to Top */}
      <BackToTop />
    </div>
  );
};

export default Index;
