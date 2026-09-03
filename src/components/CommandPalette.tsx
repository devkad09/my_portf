import { useState, useEffect } from "react";
import {
  Search,
  FolderGit2,
  FileText,
  Mail,
  Sun,
  Moon,
  ExternalLink,
  Code2,
  Sparkles,
  X,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

const CommandPalette = ({ isOpen, onClose, onOpenResume }: CommandPaletteProps) => {
  const [query, setQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

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

  const actions = [
    {
      id: "projects",
      category: "Navigation",
      title: "View Projects & Case Studies",
      shortcut: "G P",
      icon: FolderGit2,
      action: () => {
        onClose();
        window.location.hash = "projects";
      },
    },
    {
      id: "nordhem",
      category: "Projects",
      title: "Nordhem — Scandinavian E-Commerce",
      shortcut: "Live",
      icon: ExternalLink,
      action: () => {
        window.open("https://nordhem-blue.vercel.app", "_blank");
        onClose();
      },
    },
    {
      id: "formflow",
      category: "Projects",
      title: "FormFlow — Multi-Step Form Engine",
      shortcut: "SaaS",
      icon: ExternalLink,
      action: () => {
        window.open("https://formflow-olive.vercel.app", "_blank");
        onClose();
      },
    },
    {
      id: "mcsteeze",
      category: "Projects",
      title: "Mcsteeze Lounge — Brand Portal",
      shortcut: "Live",
      icon: ExternalLink,
      action: () => {
        window.open("https://mcsteeze-lounge.vercel.app", "_blank");
        onClose();
      },
    },
    {
      id: "about",
      category: "Navigation",
      title: "About Kelvin Atsu Djayouri",
      shortcut: "G A",
      icon: Code2,
      action: () => {
        onClose();
        window.location.hash = "about";
      },
    },
    {
      id: "experience",
      category: "Navigation",
      title: "Experience & Timeline",
      shortcut: "G E",
      icon: Sparkles,
      action: () => {
        onClose();
        window.location.hash = "experience";
      },
    },
    {
      id: "writing",
      category: "Navigation",
      title: "Technical Writing & Publications",
      shortcut: "G W",
      icon: FileText,
      action: () => {
        onClose();
        window.location.hash = "writing";
      },
    },
    {
      id: "contact",
      category: "Navigation",
      title: "Start a Project Consultation",
      shortcut: "G C",
      icon: Mail,
      action: () => {
        onClose();
        window.location.hash = "work-with-me";
      },
    },
    {
      id: "resume",
      category: "Actions",
      title: "View Full Interactive CV / Resume",
      shortcut: "CV",
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: "copy-email",
      category: "Actions",
      title: "Copy Email (deve.kad.tech@gmail.com)",
      shortcut: "Copy",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText("deve.kad.tech@gmail.com");
        onClose();
      },
    },
    {
      id: "theme",
      category: "Settings",
      title: `Toggle Theme (Current: ${theme === "dark" ? "Dark" : "Light"})`,
      shortcut: "Theme",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl glass-panel border-indigo-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_30px_rgba(99,102,241,0.15)] overflow-hidden animate-in zoom-in-95 duration-200 bg-slate-950 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section..."
            className="flex-1 bg-transparent text-sm text-white focus:outline-none font-mono placeholder:text-slate-500"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
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
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left hover:bg-indigo-500/10 hover:border hover:border-indigo-500/30 border border-transparent transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                        {item.title}
                      </p>
                      <p className="text-[10px] font-mono text-slate-500 group-hover:text-indigo-400/80">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-400 group-hover:text-indigo-400">
                    {item.shortcut}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-slate-900/90 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>Navigation: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">↓</kbd></span>
            <span>Select: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">↵</kbd></span>
          </div>
          <div>
            <span>Close: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">Esc</kbd></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
