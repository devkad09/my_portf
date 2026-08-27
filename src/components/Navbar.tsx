import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { GithubLogo, LinkedinLogo } from "./SocialLogos";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "why-hire", "skills", "education", "experience", "projects", "services", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-all duration-300">
      <div className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 border-slate-200 shadow-md backdrop-blur-xl dark:bg-slate-950/85 dark:border-slate-800 dark:shadow-2xl"
          : "bg-white/75 border-slate-200/80 backdrop-blur-lg dark:bg-slate-900/60 dark:border-slate-800/60"
      }`}>
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Kelvin Atsu Djayouri"
              className="w-9 h-9 rounded-xl object-cover border border-blue-500/40 shadow-sm group-hover:scale-105 transition-all"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-950" />
          </div>
          <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
            Kad<span className="text-blue-600 dark:text-blue-400">Dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/90 border border-slate-200 rounded-xl p-1 backdrop-blur-md dark:bg-slate-950/60 dark:border-slate-800/80">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/60"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 cursor-pointer"
            title={`Switch to ${theme === "light" ? "Dark" : "White"} mode`}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          <div className="hidden sm:flex items-center gap-2 border-r border-slate-200 dark:border-slate-800 pr-3">
            <a
              href="https://github.com/devkad09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/80"
              title="GitHub"
            >
              <GithubLogo className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaddev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors dark:text-slate-400 dark:hover:text-blue-400 dark:hover:bg-blue-500/10"
              title="LinkedIn"
            >
              <LinkedinLogo className="w-4 h-4" />
            </a>
          </div>

          <a href="#contact" className="hidden sm:inline-flex btn-primary text-xs py-2 px-4 rounded-xl">
            Let's Talk
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/80"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-20 inset-x-4 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl p-6 shadow-2xl space-y-3 md:hidden z-50 dark:bg-slate-950/95 dark:border-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <div className="flex gap-3">
              <a href="https://github.com/devkad09" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-900">
                <GithubLogo className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kaddev" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-600 p-2 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:text-blue-400 dark:hover:bg-slate-900">
                <LinkedinLogo className="w-5 h-5" />
              </a>
            </div>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-xs py-2 px-4">
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
