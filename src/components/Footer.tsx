import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/devkad09", label: "GitHub", gradient: "from-gray-600 to-gray-800" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kaddev", label: "LinkedIn", gradient: "from-blue-500 to-cyan-500" },
  { icon: Mail, href: "mailto:deve.kad.tech@gmail.com", label: "Email", gradient: "from-violet-500 to-purple-600" },
];

const Footer = () => (
  <footer className="pb-8 px-4 sm:px-6 overflow-hidden relative">
    <div className="glow-violet w-[400px] h-[300px] left-1/2 -translate-x-1/2 bottom-0 opacity-15 absolute pointer-events-none" />

    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      <div className="line-sep mb-12" />

      <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.5fr_1fr_auto] items-start">
        {/* Brand */}
        <div className="space-y-4">
          <a href="#hero" className="flex items-center gap-2 group w-fit">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-black">K</span>
            </div>
            <span className="font-heading font-bold text-lg text-white">
              KAD<span className="grad-violet-cyan">DEV</span>
            </span>
          </a>
          <p className="text-sm text-[#8892a4] leading-relaxed max-w-xs">
            Building beautiful, performance-focused web experiences for ambitious teams and founders worldwide.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-medium text-emerald-400">Open to opportunities</span>
          </div>
        </div>

        {/* Nav links */}
        <nav>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8892a4] mb-4">Navigation</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#8892a4] hover:text-white transition-colors duration-200 flex items-center gap-1 group"
              >
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            ))}
          </div>
        </nav>

        {/* Socials */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8892a4] mb-4">Connect</p>
          <div className="flex flex-row lg:flex-col gap-3">
            {socials.map(({ icon: Icon, href, label, gradient }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`flex items-center gap-3 rounded-xl border border-white/08 px-4 py-2.5 text-sm text-[#8892a4] hover:text-white transition-all duration-200 hover:border-white/15 group`}
              >
                <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="hidden sm:block">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-white/05 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] font-medium text-[#8892a4]">© 2026 KADDEV · All rights reserved</p>
        <p className="text-[11px] text-[#8892a4]">
          Crafted with{" "}
          <span className="text-violet-400">React</span> +{" "}
          <span className="text-cyan-400">TypeScript</span> ·{" "}
          <span className="grad-violet-cyan font-semibold">Built to impress</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
