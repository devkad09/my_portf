import Navbar from "@/components/Navbar";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Sparkles } from "lucide-react";

const WritingPage = () => {
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
                <span>Technical Writing & Guides</span>
              </p>
              <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl">
                Articles & Documentation
              </h1>
              <p className="text-lg text-ink-muted max-w-2xl">
                Deep dives into web performance, accessibility, API design, and frontend architecture. Written for developers who care about craftsmanship.
              </p>
            </div>
          </div>
        </section>

        <Writing />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default WritingPage;
