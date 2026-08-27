import { useState } from "react";
import { Github, Linkedin, Mail, Check } from "lucide-react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    // Copy to clipboard
    navigator.clipboard.writeText("deve.kad.tech@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);

    // Also attempt mailto
    window.location.href = "mailto:deve.kad.tech@gmail.com";
  };

  return (
    <footer className="border-t border-line bg-canvas py-14">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          {/* Brand */}
          <a
            href="#top"
            className="text-base font-semibold tracking-[-0.03em] text-ink hover:text-accent transition-colors"
          >
            Kelvin Atsu Djayouri
          </a>

          {/* Navigation Links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-2">
              {[
                { href: "#work", label: "Work" },
                { href: "#services", label: "Services" },
                { href: "#process", label: "Process" },
                { href: "#experience", label: "Experience" },
                { href: "#education", label: "Education" },
                { href: "#writing", label: "Writing" },
                { href: "#about", label: "About" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[14px] text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="https://github.com/devkad09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted transition-colors hover:text-ink p-1.5 rounded-lg hover:bg-surface block"
                aria-label="GitHub"
                title="GitHub @devkad09"
              >
                <Github className="w-[18px] h-[18px]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kaddev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted transition-colors hover:text-ink p-1.5 rounded-lg hover:bg-surface block"
                aria-label="LinkedIn"
                title="LinkedIn @kaddev"
              >
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
            </li>
            <li className="relative">
              <button
                onClick={handleEmailClick}
                className="text-ink-muted transition-colors hover:text-ink p-1.5 rounded-lg hover:bg-surface block cursor-pointer"
                aria-label="Email Kelvin"
                title="Email: deve.kad.tech@gmail.com (Click to copy & mail)"
              >
                {copied ? <Check className="w-[18px] h-[18px] text-emerald-500" /> : <Mail className="w-[18px] h-[18px]" />}
              </button>

              {copied && (
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-ink text-canvas text-[11px] font-medium px-2 py-1 rounded-md shadow-md whitespace-nowrap">
                  Copied email!
                </span>
              )}
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-sm text-ink-muted">
          © {new Date().getFullYear()} Kelvin Atsu Djayouri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
