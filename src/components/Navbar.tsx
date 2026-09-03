import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X, FileText, Sparkles, Send, Search } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import ResumeModal from "./ResumeModal";
import CommandPalette from "./CommandPalette";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6 pointer-events-none">
        <div className="mx-auto max-w-6xl pointer-events-auto">
          <div
            className={`flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 rounded-2xl sm:rounded-full transition-all duration-300 ${
              isScrolled
                ? "glass-panel shadow-2xl shadow-black/50 border-white/15 bg-slate-950/90 dark:bg-slate-950/95"
                : "glass-panel border-white/10 dark:border-white/05 bg-surface/80"
            }`}
          >
            {/* Brand / Logo */}
            <a
              href="#top"
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-all">
                K
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm sm:text-base text-ink tracking-tight flex items-center gap-1.5">
                  KAD
                  <span className="hidden xs:inline-block font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-white/10 text-slate-700 dark:text-slate-300 font-semibold border border-white/15">
                    v2.6
                  </span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface-2/60 border border-line/60 backdrop-blur-md"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-ink-muted transition-all duration-200 hover:text-ink hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Command Palette Trigger Button (⌘K) */}
              <button
                type="button"
                onClick={() => setIsCommandOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-line bg-surface-2/60 hover:bg-surface text-ink-muted hover:text-ink hover:border-white/30 transition-all cursor-pointer"
                title="Open Command Palette (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden md:inline text-[11px]">Search</span>
                <kbd className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface border border-line text-ink font-semibold">
                  ⌘K
                </kbd>
              </button>

              {/* CV Modal Trigger */}
              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-line bg-surface/80 hover:bg-surface text-ink-muted hover:text-ink transition-all cursor-pointer"
                title="View interactive CV"
              >
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>CV</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-full text-ink-muted hover:text-ink bg-surface-2/60 hover:bg-surface border border-line/60 transition-all cursor-pointer"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-900" />
                )}
              </button>

              {/* Primary Consultation CTA */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 shadow-md transition-all cursor-pointer border border-white/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Build</span>
              </Link>

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
            <div className="mt-2 rounded-2xl glass-panel p-5 shadow-2xl border-white/10 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200 bg-slate-950/95">
              <nav className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCommandOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl text-sm font-mono text-slate-200 bg-white/05 border border-white/10 flex items-center justify-between text-left"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-slate-400" />
                    <span>Command Palette</span>
                  </span>
                  <span className="text-xs text-slate-400">⌘K</span>
                </button>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface-2/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsResumeOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface-2/80 text-left flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>View Full CV</span>
                </button>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-primary w-full text-center py-3 rounded-xl text-sm inline-flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Work with Me</span>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Global Modals */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </>
  );
};

export default Navbar;
