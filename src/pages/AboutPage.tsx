import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import LevelingUp from "@/components/LevelingUp";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navbar />

      <main id="main" className="relative z-10 pt-12">
        <About />
        <Skills />
        <LevelingUp />
        <Experience />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AboutPage;
