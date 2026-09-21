import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import GithubSection from "@/components/GithubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-white text-slate-900 selection:bg-slate-200 selection:text-slate-900">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main id="main" className="relative z-10">
        <Hero />
        <Projects />
        <CurrentlyBuilding />
        <About />
        <Journey />
        <Skills />
        <GithubSection />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default Index;
