import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--bg)" }}>
    {/* Global background dot-grid */}
    <div className="dot-grid fixed inset-0 opacity-30 pointer-events-none z-0" />

    <Navbar />

    <main className="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </main>

    <Footer />
    <ScrollReveal />
  </div>
);

export default Index;
