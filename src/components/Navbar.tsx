import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Github, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_ITEMS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["contact", "stack", "journey", "about", "work", "top"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        if (section === "top") {
          if (window.scrollY < 200) {
            setActiveSection("top");
            break;
          }
        } else {
          const el = document.getElementById(section);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = href.replace("#", "");
      if (targetId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navOffset,
            behavior: "smooth",
          });
        }
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-40 md:hidden transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-8 pt-3 sm:pt-4 pointer-events-none">
        <div className="mx-auto max-w-5xl pointer-events-auto">
          <div
            className={`flex h-14 sm:h-15 items-center justify-between px-4 sm:px-6 rounded-2xl transition-all duration-200 border ${
              isScrolled
                ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm"
                : "bg-white/90 backdrop-blur-md border-slate-200/70 shadow-2xs"
            }`}
          >
            {/* Left Brand: KAD.DEV */}
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, "#top")}
              className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-lg py-1"
              aria-label="KAD.DEV - Home"
            >
              <span className="font-mono font-bold text-sm tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                KAD<span className="text-blue-600">.</span>DEV
              </span>
              <span className="hidden xxs:inline-flex items-center gap-1 font-mono text-[10px] text-slate-500 border-l border-slate-200 pl-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available</span>
              </span>
            </a>

            {/* Desktop Navigation Links: Work, About, Journey, Stack, Contact */}
            <nav
              className="hidden md:flex items-center gap-1 text-xs font-mono"
              aria-label="Primary"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      isActive
                        ? "text-slate-900 font-bold bg-slate-100"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: GitHub button & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 min-h-[36px] rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 transition-colors cursor-pointer shadow-2xs"
                title="View GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-mono font-bold px-3 py-1.5 min-h-[36px] rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Hamburger Toggle (Min 44x44px touch area) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mx-auto max-w-5xl mt-2 pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-3">
              <nav className="flex flex-col gap-1 font-mono text-sm" aria-label="Mobile Navigation">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-4 py-2.5 rounded-xl transition-colors flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? "bg-slate-100 text-slate-900 font-bold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-slate-400">/{item.label.toLowerCase()}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full min-h-[44px] py-2.5 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <span>LET’S BUILD SOMETHING</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-mono text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
