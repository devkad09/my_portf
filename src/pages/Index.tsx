import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <>
    <ReadingProgress />
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Education />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    <BackToTop />
    <ScrollReveal />
  </>
);

export default Index;
