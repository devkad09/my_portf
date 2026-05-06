import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © 2026 Kelvin Atsu Djayouri. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/devkad09" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/kaddev" },
          { icon: Mail, href: "mailto:deve.kad.tech@gmail.com" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <item.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
