import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-background">
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="flex items-center gap-2">
          <img 
            src="/assets/logo.png" 
            alt="KadDev Logo" 
            className="h-10 w-auto object-contain"
          />
        </div>
        <p className="text-muted-foreground text-sm">
          Built with React & Tailwind CSS. © 2026 Kelvin Atsu Djayouri.
        </p>
      </div>
      
      <div className="flex items-center gap-6">
        {[
          { icon: Github, href: "https://github.com/devkad09", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/kaddev", label: "LinkedIn" },
          { icon: Mail, href: "mailto:deve.kad.tech@gmail.com", label: "Email" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-all hover:scale-110"
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
