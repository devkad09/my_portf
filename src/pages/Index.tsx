import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import Writing from "@/components/Writing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink transition-colors duration-300">
    <Navbar />

    <main id="main" className="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Services />
      <Process />
      <Writing />
      <Contact />
    </main>

    <Footer />
    <BackToTop />
  </div>
);

export default Index;
