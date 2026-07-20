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
      <div className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border bg-white/90 backdrop-blur-md px-6 py-3.5 transition-all duration-300 ${
        scrolled ? "border-[#cbd5e1] shadow-lg shadow-slate-900/05" : "border-[#e2e8f0]"
      }`}>
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-[#2563eb] flex items-center justify-center text-white font-bold text-xs shadow-md shadow-blue-500/20 group-hover:bg-[#1d4ed8] transition-colors">
            K
          </div>
          <span className="font-bold text-lg text-[#0f172a] tracking-tight">
            Kad<span className="text-[#2563eb]">Dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#2563eb] text-white shadow-sm"
                    : "text-[#475569] hover:text-[#0f172a] hover:bg-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 border-r border-[#e2e8f0] pr-3">
            <a
              href="https://github.com/devkad09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-colors"
              title="GitHub"
            >
              <GithubLogo className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaddev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-colors"
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
            className="md:hidden p-2 rounded-xl text-[#334155] hover:bg-[#f1f5f9]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-20 inset-x-4 bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-2xl space-y-3 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#334155] hover:bg-[#f8fafc] hover:text-[#2563eb]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#e2e8f0] flex justify-between items-center">
            <div className="flex gap-3">
              <a href="https://github.com/devkad09" target="_blank" rel="noreferrer"><GithubLogo className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/kaddev" target="_blank" rel="noreferrer"><LinkedinLogo className="w-5 h-5" /></a>
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
