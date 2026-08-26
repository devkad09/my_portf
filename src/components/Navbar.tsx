import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GithubLogo, LinkedinLogo, GmailLogo } from "./SocialLogos";

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
          ? "bg-slate-950/85 backdrop-blur-xl border-slate-800 shadow-2xl shadow-black/50"
          : "bg-slate-900/60 backdrop-blur-lg border-slate-800/60"
      }`}>
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Kelvin Atsu Djayouri"
              className="w-9 h-9 rounded-xl object-cover border border-blue-500/40 shadow-md shadow-blue-500/20 group-hover:scale-105 group-hover:border-blue-400 transition-all"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
          </div>
          <span className="font-bold text-lg text-white tracking-tight">
            Kad<span className="text-blue-400">Dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-950/60 border border-slate-800/80 rounded-xl p-1 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 border-r border-slate-800 pr-3">
            <a
              href="https://github.com/devkad09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              title="GitHub"
            >
              <GithubLogo className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaddev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
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
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-20 inset-x-4 bg-slate-950/95 backdrop-blur-2xl border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-3 md:hidden animate-fade-in z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
            <div className="flex gap-3">
              <a href="https://github.com/devkad09" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-900">
                <GithubLogo className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kaddev" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 p-2 rounded-lg hover:bg-slate-900">
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
