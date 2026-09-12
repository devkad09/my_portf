import { useState, useEffect } from "react";
import {
  Search,
  FolderGit2,
  FileText,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  X,
  FlaskConical,
  Hammer,
  Github,
  Layers,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette = ({ isOpen, onClose }: CommandPaletteProps) => {
  const [query, setQuery] = useState("");

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToSection = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 76;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  const actions = [
    {
      id: "projects",
      category: "Navigation",
      title: "Featured Projects & Case Studies",
      shortcut: "Projects",
      icon: FolderGit2,
      action: () => scrollToSection("projects"),
    },
    {
      id: "playground",
      category: "Navigation",
      title: "Frontend Playground (Interactive Labs)",
      shortcut: "Labs",
      icon: FlaskConical,
      action: () => scrollToSection("playground"),
    },
    {
      id: "skills",
      category: "Navigation",
      title: "Technical Stack & Confirmed Technologies",
      shortcut: "Skills",
      icon: Layers,
      action: () => scrollToSection("skills"),
    },
    {
      id: "currently-building",
      category: "Navigation",
      title: "Currently Building Sprint Tracker",
      shortcut: "Building",
      icon: Hammer,
      action: () => scrollToSection("currently-building"),
    },
    {
      id: "about",
      category: "Navigation",
      title: "About Kelvin Atsu Djayouri",
      shortcut: "About",
      icon: Code2,
      action: () => scrollToSection("about"),
    },
    {
      id: "experience",
      category: "Navigation",
      title: "Experience & Education Timeline",
      shortcut: "Timeline",
      icon: Sparkles,
      action: () => scrollToSection("experience"),
    },
    {
      id: "writing",
      category: "Navigation",
      title: "Technical Writing & Articles",
      shortcut: "Articles",
      icon: FileText,
      action: () => scrollToSection("writing"),
    },
    {
      id: "contact",
      category: "Navigation",
      title: "Let's Build It — Contact Form",
      shortcut: "Contact",
      icon: Mail,
      action: () => scrollToSection("contact"),
    },
    {
      id: "nordhem",
      category: "Projects",
      title: "Nordhem — Scandinavian Furniture E-Commerce",
      shortcut: "Live Demo",
      icon: ExternalLink,
      action: () => {
        window.open("https://nordhem-blue.vercel.app", "_blank");
        onClose();
      },
    },
    {
      id: "formflow",
      category: "Projects",
      title: "FormFlow — Multi-Step SaaS Onboarding Engine",
      shortcut: "Live Demo",
      icon: ExternalLink,
      action: () => {
        window.open("https://formflow-olive.vercel.app", "_blank");
        onClose();
      },
    },
    {
      id: "mcsteeze",
      category: "Projects",
      title: "Mcsteeze Lounge — Restaurant Experience Portal",
      shortcut: "Live Demo",
      icon: ExternalLink,
      action: () => {
        window.open("https://mcsteeze-lounge.vercel.app", "_blank");
        onClose();
      },
    },
    {
      id: "copy-email",
      category: "Actions",
      title: "Copy Email Address (deve.kad.tech@gmail.com)",
      shortcut: "Copy",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText("deve.kad.tech@gmail.com");
        onClose();
      },
    },
    {
      id: "github",
      category: "External",
      title: "GitHub Profile (@devkad09)",
      shortcut: "Profile",
      icon: Github,
      action: () => {
        window.open("https://github.com/devkad09", "_blank");
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a section, project, or quick command..."
            className="flex-1 bg-transparent text-sm text-slate-900 focus:outline-none font-sans placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            title="Close command palette (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="text-center py-8 text-xs font-mono text-slate-500">
              No matching commands or actions found.
            </div>
          ) : (
            filteredActions.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left hover:bg-blue-50/70 border border-transparent hover:border-blue-100 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 group-hover:text-blue-600 group-hover:bg-white group-hover:border-blue-200 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                        {item.title}
                      </p>
                      <p className="text-[10px] font-mono text-slate-400 group-hover:text-slate-600">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 group-hover:bg-white group-hover:text-blue-700 group-hover:border-blue-200">
                    {item.shortcut}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>Quick search: <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-[10px]">⌘K</kbd></span>
          </div>
          <div>
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-[10px]">Esc</kbd> to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
