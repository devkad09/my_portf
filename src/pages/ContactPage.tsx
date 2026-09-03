import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink transition-colors duration-300">
      <Navbar />

      <main id="main" className="relative z-10">
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;
