import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="rounded-[3rem] border border-white/10 bg-white/5 p-10 text-center shadow-[0_40px_120px_-80px_rgba(0,0,0,0.7)]">
        <div className="flex flex-col items-center gap-8">
          <a href="#hero" className="text-3xl md:text-4xl font-black tracking-tighter text-gradient group">
            KAD<span className="text-accent group-hover:text-accent-secondary transition-colors">DEV</span>
          </a>

          <p className="max-w-2xl text-white/50 text-base leading-relaxed">
            Building memorable web experiences with a bold design direction and strong frontend performance.
          </p>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["About", "Services", "Projects", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 justify-center">
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
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition hover:bg-accent hover:text-black"
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="pt-10 border-t border-white/10 w-full flex flex-col gap-4 text-[10px] uppercase tracking-[0.28em] text-white/30 md:flex-row md:justify-between md:items-center">
            <p>© 2026 KADDEV</p>
            <p>Built for ambitious digital projects</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

