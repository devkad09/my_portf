import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <Navbar />

      <main id="main" className="relative z-10 pt-16">
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
