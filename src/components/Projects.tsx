import { useState } from "react";
import { ExternalLink, Github, ArrowRight, X, CheckCircle2, Globe, Sparkles } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  accent: string;
  isFlagship?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "nordhem",
    title: "Nordhem — Minimalist Apparel & E-Commerce",
    category: "E-Commerce / React",
    tags: ["React", "TypeScript", "Tailwind CSS", "E-Commerce", "UI/UX"],
    description:
      "Minimalist Scandinavian fashion label and storefront with curated lookbooks, faceted catalog filtering, and reactive cart management.",
    longDescription:
      "Nordhem is an elevated Scandinavian apparel storefront crafted with quiet tailoring aesthetics and smooth user interactions. Built with React and TypeScript, it features responsive product browsing, lookbook curation, dynamic cart drawer management, and sub-second page loads.",
    features: [
      "Curated editorial lookbooks & responsive product catalog",
      "Reactive shopping cart drawer with instant state recalculation",
      "Minimalist Scandinavian typography and fluid layout design",
      "Fast client-side routing and optimized asset delivery",
    ],
    githubUrl: "https://github.com/devkad09/nordhem",
    liveUrl: "https://nordhem-blue.vercel.app",
    accent: "blue",
    isFlagship: true,
  },
  {
    id: "formflow",
    title: "FormFlow — Developer Form Engine",
    category: "Developer Tools",
    tags: ["TypeScript", "React", "Supabase", "A11y"],
    description:
      "Multi-step form engine with schema validation, accessible keyboard navigation, and automated Web3Forms/Supabase data routing.",
    longDescription:
      "FormFlow streamlines form creation for developer teams by providing pre-built accessible form components with Zod schema validation.",
    features: [
      "Zod-powered schema validation and error handling",
      "Accessible keyboard navigation and WCAG 2.1 compliance",
      "Direct Supabase database integration",
      "Customizable field architectures for fast dev onboarding",
    ],
    githubUrl: "https://github.com/devkad09/formflow",
    liveUrl: "https://formflow-olive.vercel.app",
    accent: "cyan",
  },
  {
    id: "mcsteeze",
    title: "Mcsteeze Lounge — Brand Portal & Site",
    category: "Web App",
    tags: ["React", "Tailwind CSS", "Responsive"],
    description:
      "Hospitality & brand showcase platform featuring interactive menus, reservation forms, and sleek responsive design.",
    longDescription:
      "Custom web experience for Mcsteeze Lounge built to drive reservations, showcase events, and provide a polished mobile-first menu browser.",
    features: [
      "Interactive digital menu browser",
      "Reservation form integration with real-time notifications",
      "Optimized assets for fast mobile load times",
      "Clean UI component design aligned with brand identity",
    ],
    githubUrl: "https://github.com/devkad09/mcsteeze-lounge",
    liveUrl: "https://mcsteeze-lounge.vercel.app",
    accent: "indigo",
  },
];

const CATEGORIES = ["All", "React", "TypeScript", "Tailwind CSS", "E-Commerce", "Developer Tools"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    return p.tags.includes(filter) || p.category.includes(filter);
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center space-y-4">
          <p className="section-eyebrow justify-center">
            Featured Projects
          </p>
          <h2 className="section-heading">
            Production apps & <span className="text-blue-400">developer tools</span>
          </h2>
          <p className="section-copy mx-auto max-w-xl text-base sm:text-lg">
            Explore live applications, technical documentation systems, and open-source repositories.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:bg-slate-950/60 dark:text-slate-400 dark:border-slate-800/80 dark:hover:bg-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => {
            const isFlagship = project.isFlagship && filter === "All";

            return (
              <div
                key={project.id}
                className={`bento-card flex flex-col justify-between space-y-6 group ${
                  isFlagship ? "md:col-span-2 border-blue-200 bg-blue-50/20 dark:border-blue-900/60 dark:bg-slate-900/80" : ""
                }`}
              >
                <div className="space-y-4">
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800/50">
                        {project.category}
                      </span>
                      {isFlagship && (
                        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800/50">
                          <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Flagship Project
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl border border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm dark:border-blue-800/50 dark:bg-blue-950/60 dark:text-blue-400"
                          title="Live Demo"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400 dark:hover:text-white"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Browser Mockup Window for Flagship */}
                  {isFlagship && project.liveUrl && (
                    <div className="browser-window my-3">
                      <div className="browser-header">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 bg-white px-3 py-1 rounded-md border border-slate-200 dark:text-slate-400 dark:bg-slate-950 dark:border-slate-800/80">
                          <Globe className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                          <span>https://nordhem-blue.vercel.app</span>
                        </div>
                        <div className="w-8" />
                      </div>
                    </div>
                  )}

                  <h3
                    className="font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer dark:text-white dark:group-hover:text-blue-300"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature checkmarks */}
                  <div className={`space-y-2 pt-1 ${isFlagship ? "grid sm:grid-cols-2 gap-2 space-y-0" : ""}`}>
                    {project.features.slice(0, isFlagship ? 4 : 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((t) => (
                      <span key={t} className="tag-gray">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions Row */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm cursor-pointer dark:hover:bg-blue-500"
                      >
                        Live Demo <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:text-white"
                    >
                      GitHub <Github className="w-3 h-3" />
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Tech Specs <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Quick View Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-white border border-slate-200 max-w-2xl w-full rounded-3xl p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto dark:bg-slate-900 dark:border-slate-700/80">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 cursor-pointer dark:bg-slate-800 dark:text-slate-400 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800/50">
                {selectedProject.category}
              </span>
              <h3 className="font-bold text-2xl text-slate-900 dark:text-white mt-3">{selectedProject.title}</h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedProject.longDescription}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Key Features & Architecture:</h4>
              <div className="space-y-2">
                {selectedProject.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 dark:bg-slate-950/60 dark:border-slate-800 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs py-2.5 px-5"
                  >
                    <Globe className="w-4 h-4" /> Launch Live Application
                  </a>
                )}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-xs py-2.5 px-5"
                >
                  <Github className="w-4 h-4" /> View GitHub Repo
                </a>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
