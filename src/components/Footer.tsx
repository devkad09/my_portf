import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
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
                className="text-ink-muted transition-colors hover:text-ink p-1.5 rounded-lg hover:bg-surface"
                aria-label="GitHub"
              >
                <Github className="w-[18px] h-[18px]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kaddev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted transition-colors hover:text-ink p-1.5 rounded-lg hover:bg-surface"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
            </li>
            <li>
              <a
                href="mailto:deve.kad.tech@gmail.com"
                className="text-ink-muted transition-colors hover:text-ink p-1.5 rounded-lg hover:bg-surface"
                aria-label="Email"
              >
                <Mail className="w-[18px] h-[18px]" />
              </a>
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
