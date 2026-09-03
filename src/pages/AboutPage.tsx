import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink transition-colors duration-300">
      <Navbar />

      <main id="main" className="relative z-10">
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AboutPage;
