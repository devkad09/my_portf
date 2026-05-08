import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="font-heading text-2xl font-bold tracking-tighter cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Kad<span className="text-accent group-hover:text-foreground transition-colors">Dev</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-muted-foreground hover:text-foreground transition-all text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => handleClick("#contact")}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-background z-40 flex flex-col items-center justify-center gap-8 animate-fade-in lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-heading text-3xl font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => handleClick("#contact")}
            className="mt-4 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
