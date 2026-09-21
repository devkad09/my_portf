import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <Navbar />

      <main id="main" className="relative z-10 pt-16">
        <Projects />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
