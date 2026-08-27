import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, FileText } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import ResumeModal from "./ResumeModal";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
  { href: "#about", label: "About" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "border-b border-line bg-canvas/90 backdrop-blur-md shadow-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 sm:h-[4.25rem] w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo / Brand Name */}
          <a
            href="#top"
            className="text-[17px] font-semibold tracking-[-0.03em] text-ink hover:text-accent transition-colors duration-200"
          >
            Kelvin Atsu Djayouri
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex lg:gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => setIsResumeOpen(true)}
              className="text-[14px] font-medium text-ink-muted transition-colors duration-200 hover:text-ink flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>CV</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-ink-muted hover:text-ink hover:bg-surface border border-transparent hover:border-line transition-all duration-200 cursor-pointer"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Primary CTA */}
            <a
              href="#work-with-me"
              className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:translate-y-px bg-accent text-white hover:bg-blue-700 rounded-[14px] h-10 px-5 text-sm"
            >
              Work with Me
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-ink-muted hover:text-ink hover:bg-surface transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center text-ink rounded-lg hover:bg-surface"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-b border-line bg-canvas px-6 py-6 shadow-xl lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-ink-muted hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsResumeOpen(true);
                }}
                className="text-left text-base font-medium text-ink-muted hover:text-ink flex items-center gap-2"
              >
                <FileText className="w-4 h-4" /> View Full CV
              </button>
              <div className="pt-2">
                <a
                  href="#work-with-me"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full text-center py-3 rounded-[14px]"
                >
                  Work with Me
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* CV Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navbar;
