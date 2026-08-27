import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, FileText, Sparkles, Send } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import ResumeModal from "./ResumeModal";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#writing", label: "Writing" },
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
      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6 pointer-events-none">
        <div className="mx-auto max-w-6xl pointer-events-auto">
          <div
            className={`flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 rounded-2xl sm:rounded-full transition-all duration-300 ${
              isScrolled
                ? "glass-panel shadow-xl shadow-black/5 dark:shadow-black/40 border-emerald-500/20"
                : "glass-panel border-white/10 dark:border-white/05 bg-surface/60"
            }`}
          >
            {/* Brand / Logo */}
            <a
              href="#top"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                K
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm sm:text-base text-ink tracking-tight flex items-center gap-1.5">
                  Kelvin Atsu
                  <span className="hidden xs:inline-block font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                    v2.6
                  </span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface-2/60 border border-line/60 backdrop-blur-md" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-ink-muted transition-all duration-200 hover:text-ink hover:bg-surface"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* CV Modal Trigger */}
              <button
                onClick={() => setIsResumeOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-line bg-surface/80 hover:bg-surface text-ink-muted hover:text-ink transition-all cursor-pointer"
                title="View interactive CV"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-500" />
                <span>CV</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-ink-muted hover:text-ink bg-surface-2/60 hover:bg-surface border border-line/60 transition-all cursor-pointer"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                ) : (
                  <Moon className="w-4 h-4 text-emerald-600" />
                )}
              </button>

              {/* Primary Consultation CTA */}
              <a
                href="#work-with-me"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Build</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex h-9 w-9 items-center justify-center text-ink rounded-xl bg-surface-2/60 border border-line/60"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="mt-2 rounded-2xl glass-panel p-5 shadow-2xl border-emerald-500/20 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface-2/80 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsResumeOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface-2/80 text-left flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>View Full CV</span>
                </button>
                <div className="pt-2">
                  <a
                    href="#work-with-me"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-primary w-full text-center py-3 rounded-xl text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Work with Me</span>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* CV Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navbar;
