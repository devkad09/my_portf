import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Search, ArrowUpRight } from "lucide-react";
import CommandPalette from "./CommandPalette";

const NAV_ITEMS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#playground", label: "Playground" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "contact",
        "writing",
        "experience",
        "playground",
        "projects",
        "skills",
        "about",
        "top",
      ];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        if (section === "top") {
          if (window.scrollY < 250) {
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

  // Global Cmd+K trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
          const navOffset = 76;
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
      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden pointer-events-auto animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="fixed inset-x-0 top-3 z-50 px-2.5 sm:px-6 pointer-events-none">
        <div className="mx-auto max-w-6xl pointer-events-auto">
          <div
            className={`flex h-14 sm:h-16 items-center justify-between px-3 sm:px-6 rounded-2xl transition-all duration-200 ${
              isScrolled
                ? "bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm"
                : "bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs"
            }`}
          >
            {/* Brand / Logo */}
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, "#top")}
              className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-0.5"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-[#2563eb] transition-colors shrink-0">
                K
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm sm:text-base text-slate-900 tracking-tight flex items-center gap-1.5">
                  KadDev
                  <span className="hidden xxs:inline-block font-mono text-[10px] uppercase px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                    Frontend
                  </span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with Blue Active Indicator */}
            <nav
              className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 border border-slate-200/80"
              aria-label="Primary"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer min-h-[32px] flex items-center ${
                      isActive
                        ? "bg-white text-[#2563eb] font-semibold shadow-xs border border-blue-100"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Command Palette Trigger Button (⌘K) */}
              <button
                type="button"
                onClick={() => setIsCommandOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all cursor-pointer min-h-[40px]"
                title="Search (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden md:inline text-[11px]">Search</span>
                <kbd className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white border border-slate-200 text-slate-700 font-semibold">
                  ⌘K
                </kbd>
              </button>

              {/* Direct Connect CTA (Min 44px touch target) */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-3 sm:px-4 min-h-[40px] sm:min-h-[44px] rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white transition-colors shadow-xs cursor-pointer"
              >
                <span>Let's Talk</span>
              </a>

              {/* Mobile Hamburger Toggle (Min 44x44px touch area) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-slate-700 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Scroll Lock & Touch Friendly Items */}
        {mobileMenuOpen && (
          <div className="lg:hidden mx-auto max-w-6xl mt-2 pointer-events-auto animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-3 max-h-[calc(100vh-5.5rem)] overflow-y-auto">
              <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? "bg-blue-50 text-blue-700 font-semibold border border-blue-200"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-mono opacity-40">#</span>
                    </a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex-1 min-h-[44px] py-2.5 rounded-xl bg-[#2563eb] text-white text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <span>Get In Touch</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCommandOpen(true);
                  }}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700"
                  title="Search (⌘K)"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Command Palette */}
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </>
  );
};

export default Navbar;
