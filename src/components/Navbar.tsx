import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-editorial-bg/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="font-serif text-2xl tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          KAD.
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-editorial-muted hover:text-editorial-text transition-colors text-sm tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-editorial-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" strokeWidth={1} /> : <Menu className="w-6 h-6" strokeWidth={1} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-editorial-bg z-40 flex flex-col items-center justify-center gap-8 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-serif text-3xl text-editorial-muted hover:text-editorial-text transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
