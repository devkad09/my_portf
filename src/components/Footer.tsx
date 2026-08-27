import { useState } from "react";
import { Github, Linkedin, Mail, Check, Sparkles, ArrowUp } from "lucide-react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("deve.kad.tech@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line/60 bg-surface/80 backdrop-blur-md py-14 relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pb-10 border-b border-line/60">
          {/* Brand & Title */}
          <div className="space-y-1">
            <a
              href="#top"
              className="font-display font-bold text-lg text-ink hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                K
              </div>
              <span>Kelvin Atsu Djayouri</span>
            </a>
            <p className="text-xs font-mono text-ink-muted">
              Frontend Developer & Technical Writer @ Formgrid.dev
            </p>
          </div>

          {/* Social Links & Email Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/devkad09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-surface-2 border border-line text-ink-muted hover:text-ink hover:border-emerald-500/40 transition-all block"
              aria-label="GitHub"
              title="GitHub @devkad09"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/kaddev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-surface-2 border border-line text-ink-muted hover:text-ink hover:border-emerald-500/40 transition-all block"
              aria-label="LinkedIn"
              title="LinkedIn @kaddev"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={handleEmailClick}
              className="p-2.5 rounded-xl bg-surface-2 border border-line text-ink-muted hover:text-ink hover:border-emerald-500/40 transition-all block relative cursor-pointer"
              aria-label="Copy Email"
              title="Click to copy deve.kad.tech@gmail.com"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Mail className="w-4 h-4" />}
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-surface-2 border border-line text-ink-muted hover:text-ink hover:border-emerald-500/40 transition-all block cursor-pointer ml-2"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-emerald-500" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <p>© {new Date().getFullYear()} Kelvin Atsu Djayouri. Built with React 18, TypeScript & Tailwind CSS.</p>
          <div className="flex items-center gap-2 text-emerald-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Core Web Vitals • axe DevTools Cleared</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
