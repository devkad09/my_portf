import Navbar from "@/components/Navbar";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Sparkles } from "lucide-react";

const WritingPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink transition-colors duration-300">
      <Navbar />

      <main id="main" className="relative z-10">
        <Articles />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default WritingPage;
