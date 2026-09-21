import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <Navbar />

      <main id="main" className="relative z-10 pt-16">
        <About />
        <Journey />
        <CurrentlyBuilding />
        <Skills />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
