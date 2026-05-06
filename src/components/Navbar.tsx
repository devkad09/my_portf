import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`floating-nav ${scrolled ? "top-4" : "top-8"} ${isOpen ? "w-[94%] rounded-3xl" : ""}`}>
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex items-center gap-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 pl-2 pr-4 border-r border-white/10 group"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/30 group-hover:border-primary transition-all duration-300">
                <img src="/assets/profile.jpg" alt="KAD" className="w-full h-full object-cover" />
              </div>
              <span className="font-heading font-bold text-primary hidden sm:block">KAD.</span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`nav-link-capsule ${
                    active === link.href.slice(1) ? "active" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 pl-2 border-l border-white/10">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#contact");
              }}
              className="hidden md:block px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Get In Touch
            </a>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
                <span className={`block h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 w-5" : "w-5"}`} />
                <span className={`block h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : "w-3"}`} />
                <span className={`block h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 w-5" : "w-5"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] mt-6 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col gap-1 p-2 border-t border-white/10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`w-full text-left px-5 py-4 rounded-2xl transition-all ${
                  active === link.href.slice(1) ? "bg-primary/10 text-primary font-bold" : "text-muted-foreground hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="p-2 mt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#contact");
                }}
                className="md:hidden flex items-center justify-center w-full px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
