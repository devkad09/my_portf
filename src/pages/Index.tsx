import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink transition-colors duration-300">
    <Navbar />

    <main id="main" className="relative z-10">
      <Hero />

      <section className="py-16 sm:py-24 relative overflow-hidden" aria-labelledby="featured-heading">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-2">
              <p className="section-eyebrow">
                <Sparkles className="w-4 h-4" />
                <span>Selected Work</span>
              </p>
              <h2 id="featured-heading" className="section-heading text-3xl sm:text-4xl">
                My Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-slate-400 transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <Projects />
        </div>
      </section>

      <Services />
      <Contact />
    </main>

    <Footer />
    <BackToTop />
  </div>
);

export default Index;
