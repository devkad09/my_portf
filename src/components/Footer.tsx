import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-16 border-t border-slate-100">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono font-black text-base tracking-tight text-slate-900">
                KAD<span className="text-blue-600">.</span>DEV
              </span>
              <span className="font-mono text-xs text-slate-400">/</span>
              <span className="font-mono text-xs text-slate-700 font-semibold">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="font-mono text-xs text-slate-500">
              {PERSONAL_INFO.positioning}
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-600 hover:text-slate-900 transition-colors p-2"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer ml-2"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-slate-500">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="text-slate-600 font-medium">Built by Kelvin 🇬🇭</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
