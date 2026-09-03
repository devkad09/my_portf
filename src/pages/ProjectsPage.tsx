import { useState } from "react";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Sparkles } from "lucide-react";

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink transition-colors duration-300">
      <Navbar />

      <main id="main" className="relative z-10">
        {/* Page Header */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-4">
              <p className="section-eyebrow">
                <Sparkles className="w-4 h-4" />
                <span>Portfolio & Case Studies</span>
              </p>
              <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl">
                Featured Work
              </h1>
              <p className="text-lg text-ink-muted max-w-2xl">
                Explore a selection of web applications, SaaS platforms, and technical documentation systems I've built with React 18, TypeScript, and modern tooling.
              </p>
            </div>
          </div>
        </section>

        <Projects />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ProjectsPage;
