import { useState } from "react";
import { Github, Linkedin, Mail, Check, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-14 relative z-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="space-y-1">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-display font-bold text-lg text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                K
              </div>
              <span>{PERSONAL_INFO.name}</span>
            </a>
            <p className="text-xs font-mono text-slate-500">
              Frontend Developer • Growing into Full-Stack Development
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-600" aria-label="Footer Navigation">
            <a href="#about" className="hover:text-slate-900 transition-colors min-h-[32px] flex items-center py-1">About</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors min-h-[32px] flex items-center py-1">Skills</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors min-h-[32px] flex items-center py-1">Projects</a>
            <a href="#playground" className="hover:text-slate-900 transition-colors min-h-[32px] flex items-center py-1">Playground</a>
            <a href="#experience" className="hover:text-slate-900 transition-colors min-h-[32px] flex items-center py-1">Experience</a>
            <a href="#writing" className="hover:text-slate-900 transition-colors min-h-[32px] flex items-center py-1">Writing</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors min-h-[32px] flex items-center py-1">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleEmailClick}
              className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Copy Email"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-slate-600 hover:text-slate-900 transition-colors cursor-pointer ml-1"
              title="Scroll to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Available for Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
