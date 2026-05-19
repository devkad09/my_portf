import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 z-50 transition duration-500 ${isScrolled ? "top-2 border-b border-white/10 backdrop-blur-xl py-3" : "top-4 py-4"}`}>
      <div className="mx-auto flex w-[96%] max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <a href="#hero" className="font-heading text-lg font-black tracking-tighter text-white">
          KAD<span className="text-accent">DEV</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 transition hover:text-white">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/devkad09" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-white/60 transition hover:text-white hover:border-accent hover:bg-accent/10">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/kaddev" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-white/60 transition hover:text-white hover:border-accent hover:bg-accent/10">
            <Linkedin className="h-4 w-4" />
          </a>
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mx-auto mt-3 w-[96%] max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_120px_-70px_rgba(0,0,0,0.7)] backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:text-white hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
