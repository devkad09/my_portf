import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <div className="min-h-screen bg-background">
    <ReadingProgress />
    <Navbar />
    <Hero />
    <div className="reveal">
      <About />
    </div>
    <div className="reveal">
      <Skills />
    </div>
    <div className="reveal">
      <Services />
    </div>
    <div className="reveal">
      <Projects />
    </div>
    <div className="reveal">
      <Contact />
    </div>
    <Footer />
    <BackToTop />
    <ScrollReveal />
  </div>
);

export default Index;
