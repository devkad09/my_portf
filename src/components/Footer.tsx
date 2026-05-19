import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-24 overflow-hidden">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-[3rem] border-white/10 p-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-4">
            <a href="#hero" className="text-3xl font-black tracking-tighter text-white">
              KAD<span className="text-accent">DEV</span>
            </a>
            <p className="text-white/60 text-base leading-relaxed">
              Building polished, performance-focused web products for ambitious teams and founders.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-end">
            <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-white/60">
              {["About", "Services", "Projects", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-white">
                  {link}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/devkad09" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kaddev" },
                { icon: Mail, href: "mailto:deve.kad.tech@gmail.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-accent hover:text-black"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider" />

        <div className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.28em] text-white/30 sm:flex-row sm:justify-between">
          <p>© 2026 KADDEV</p>
          <p>Crafting frontend experiences for the next wave of digital products.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

