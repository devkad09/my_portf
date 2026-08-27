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
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-[#060913] dark:text-slate-100 transition-colors duration-200">
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
    <BackToTop />
  </div>
);

export default Index;
