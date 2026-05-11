import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <div className="relative min-h-screen text-white overflow-x-hidden">
    {/* Background System */}
    <div className="ambient-bg" />
    <div className="ambient-blob top-[10%] -left-[10%] animate-pulse-slow" />
    <div className="ambient-blob top-[60%] -right-[10%] animate-float" style={{ animationDelay: '2s' }} />
    
    <Navbar />
    
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Services />
      <Projects />
      <Contact />
    </main>

    <Footer />
    
    <ScrollReveal />
  </div>
);

export default Index;

