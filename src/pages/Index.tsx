import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyHire from "@/components/WhyHire";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden bg-[#060913] text-slate-100">
    {/* Global ambient background lighting */}
    <div className="dot-grid fixed inset-0 opacity-40 pointer-events-none z-0" />
    <div className="glow-orb glow-blue w-[700px] h-[700px] -top-48 -left-48" />
    <div className="glow-orb glow-purple w-[600px] h-[600px] top-[35%] -right-48" />
    <div className="glow-orb glow-cyan w-[650px] h-[650px] bottom-[20%] -left-48" />

    <Navbar />

    <main className="relative z-10">
      <Hero />
      <About />
      <WhyHire />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </main>

    <Footer />
  </div>
);

export default Index;
