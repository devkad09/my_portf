import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const DevToIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 5.52-1.8 5.68z" />
  </svg>
);
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Hire Me", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 z-50 transition-all duration-700 ${isScrolled ? 'top-3 md:top-4' : 'top-4 md:top-6'} mx-auto w-[96%] sm:w-[92%] max-w-5xl px-3 sm:px-0`}>
      <div className="glass-dark rounded-full px-3 sm:px-5 py-3 flex items-center justify-between gap-2 sm:gap-4 border border-white/10 backdrop-blur-xl shadow-[0_35px_120px_-60px_rgba(0,0,0,0.8)]">
        <a href="#hero" className="text-base sm:text-lg md:text-xl font-black tracking-tighter text-gradient group whitespace-nowrap">
          KAD<span className="text-accent group-hover:text-accent-secondary transition-colors">DEV</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.filter(link => link.name !== "Hire Me").map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <a href="https://github.com/devkad09" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/in/kaddev" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="https://dev.to/kaddev" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors"><DevToIcon className="w-4 h-4" /></a>
          </div>

          <button
            id="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full border border-white/10 transition-all duration-500 overflow-hidden flex-shrink-0"
            style={{
              background: theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(34, 211, 238, 0.14)',
            }}
          >
            <span
              className="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 shadow-md"
              style={{
                left: theme === 'dark' ? '2px' : 'calc(100% - 26px)',
                background: theme === 'dark' ? '#1e293b' : '#fff',
              }}
            >
              {theme === 'dark'
                ? <Moon className="w-3.5 h-3.5 text-sky-300" />
                : <Sun className="w-3.5 h-3.5 text-amber-500" />}
            </span>
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full mt-2 sm:mt-4 left-0 right-0 glass-dark rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 border border-white/10 md:hidden">
          <div className="flex flex-col gap-2 sm:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-all duration-500 py-2 px-3 rounded-lg ${link.name === "Hire Me"
                  ? "text-base sm:text-lg px-6 py-3 glass rounded-full text-center text-accent font-black mt-2 sm:mt-4 min-h-[44px] flex items-center justify-center"
                  : "text-base sm:text-lg font-medium text-white/70 hover:text-white"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
