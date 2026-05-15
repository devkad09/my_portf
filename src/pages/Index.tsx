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
  <div className="relative min-h-screen text-white overflow-x-hidden">
    {/* Background System */}
    <div className="ambient-bg" />
    <div className="ambient-blob top-[10%] -left-[10%]" />
    <div className="ambient-blob top-[60%] -right-[10%]" />
    
    <Navbar />
    
    <main>
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

