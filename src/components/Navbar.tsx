import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "education", "experience", "projects", "services", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={`fixed inset-x-0 z-50 flex flex-col items-center transition-all duration-500 ${scrolled ? "top-3" : "top-5"}`}>
      <div className={`nav-pill flex w-[94%] max-w-5xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${scrolled ? "shadow-[0_8px_40px_-8px_rgba(139,92,246,0.25)]" : ""}`}>
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-lg group-hover:shadow-violet-500/40 transition-shadow duration-300">
            <span className="text-white text-[10px] font-black">K</span>
          </div>
          <span className="font-heading font-bold text-base text-white tracking-tight">
            KAD<span className="grad-violet-cyan">DEV</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-violet-500/15 text-violet-300"
                    : "text-[#8892a4] hover:text-white hover:bg-white/05"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/devkad09"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-[#8892a4] transition hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/kaddev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-[#8892a4] transition hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#contact" className="hidden sm:inline-flex btn-primary text-xs py-2.5 px-5">
            Hire me
          </a>
          <button
            className="lg:hidden h-9 w-9 flex items-center justify-center rounded-xl border border-white/10 text-[#8892a4] hover:text-white transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="nav-pill mt-2 w-[94%] max-w-5xl rounded-2xl p-4 shadow-[0_20px_60px_-10px_rgba(139,92,246,0.2)] lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-[#8892a4] transition hover:bg-violet-500/10 hover:text-violet-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-white/05 flex items-center gap-2">
            <a href="https://github.com/devkad09" target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-xs text-[#8892a4] hover:text-white hover:border-white/20 transition">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/kaddev" target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-xs text-[#8892a4] hover:text-white hover:border-white/20 transition">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)}
              className="flex-1 btn-primary text-xs py-2.5 justify-center">
              Hire me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
