import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      
      <div className="flex flex-col items-center text-center gap-12">
        <a href="/" className="text-3xl md:text-4xl font-black tracking-tighter text-gradient group">
          KAD<span className="text-accent group-hover:text-accent-secondary transition-colors">DEV</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
          {["About", "Services", "Projects", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-8">
          {[
            { icon: Github, href: "https://github.com/devkad09" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/kaddev" },
            { icon: Twitter, href: "#" },
            { icon: Mail, href: "#" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-accent hover:text-black transition-all duration-500"
            >
              <item.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">
            © 2026 KADDEV. All rights reserved.
          </p>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">
            Crafted with passion.
          </p>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;

