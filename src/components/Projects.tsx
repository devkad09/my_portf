import { useState } from "react";
import { ExternalLink, Github, ArrowRight, X, CheckCircle2, Globe } from "lucide-react";

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
}

const PROJECTS: Project[] = [
  {
    id: "aurora",
    title: "Aurora E-Commerce Documentation & Storefront",
    category: "React / E-Commerce",
    tags: ["React", "TypeScript", "Tailwind CSS", "Technical Specs"],
    description:
      "Modern e-commerce platform with instant client-side faceted product filtering, reactive cart drawer, and complete API/component specifications.",
    longDescription:
      "Aurora E-Commerce combines a fast frontend shopping interface with clean developer component specs. Built with React and TypeScript, it features real-time search, price range filtering, category pills, and a slide-out cart drawer.",
    features: [
      "Instant faceted filtering across categories and price ranges",
      "Slide-out shopping cart with real-time state calculation",
      "Fully documented component props and state management patterns",
      "Responsive design with sub-second page transitions",
    ],
    githubUrl: "https://github.com/devkad09/aurora--ecommerce",
    liveUrl: "https://aurora--ecommerce.vercel.app",
    accent: "blue",
  },
  {
    id: "connect-analytics",
    title: "Connect Analytics — SaaS Dashboard & Docs",
    category: "SaaS / Analytics",
    tags: ["React", "Recharts", "TypeScript", "Vercel"],
    description:
      "Social media analytics SaaS dashboard featuring interactive metric graphs, engagement tracking, and developer API references.",
    longDescription:
      "Connect Analytics gives creators and agencies real-time insights into campaign performance, follower growth, and engagement rates through dynamic Recharts visualizations.",
    features: [
      "Interactive data visualizations powered by Recharts",
      "Real-time social media metrics dashboard",
      "Clean API reference documentation for endpoint integration",
      "Deploys seamlessly on Vercel CDN",
    ],
    githubUrl: "https://github.com/devkad09/dev-server",
    liveUrl: "https://dev-server.vercel.app",
    accent: "indigo",
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
    ],
    githubUrl: "https://github.com/devkad09/formflow",
    liveUrl: "https://formflow-olive.vercel.app",
    accent: "blue",
  },
  {
    id: "mcsteeze",
    title: "Mcsteeze Lounge — Brand Portal & Site",
    category: "Web App",
    tags: ["React", "Tailwind CSS", "Responsive"],
    description:
      "Hospitality & brand showcase platform featuring interactive menus, reservation forms, and sleek responsive design.",
    longDescription:
      "Custom web experience for Mcsteeze Lounge built to drive reservations and showcase events.",
    features: [
      "Interactive digital menu browser",
      "Reservation form integration with real-time notifications",
      "Optimized assets for fast mobile load times",
    ],
    githubUrl: "https://github.com/devkad09/mcsteeze-lounge",
    liveUrl: "https://mcsteeze-lounge.vercel.app",
    accent: "indigo",
  },
];

const CATEGORIES = ["All", "React", "TypeScript", "Tailwind CSS", "SaaS"];

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
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <p className="section-eyebrow justify-center">
            Featured Projects
          </p>
          <h2 className="section-heading">
            Developer tools & <span className="grad-violet-cyan">featured applications</span>
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
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                filter === cat
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-slate-950/60 text-slate-400 border border-slate-800/80 hover:bg-slate-900 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/90 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-950/70 text-blue-300 border border-blue-800/50">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl border border-blue-800/50 bg-blue-950/60 text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                        title="Live Application Demo"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3
                  className="font-bold text-xl text-white group-hover:text-blue-300 transition-colors cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Feature checkmarks */}
                <div className="space-y-2 pt-2">
                  {project.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
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
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm"
                    >
                      Live Demo <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-950/60 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    GitHub <Github className="w-3 h-3" />
                  </a>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  Specs <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Quick View Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700/80 max-w-2xl w-full rounded-3xl p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-950/70 text-blue-300 border border-blue-800/50">
                {selectedProject.category}
              </span>
              <h3 className="font-bold text-2xl text-white mt-3">{selectedProject.title}</h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.longDescription}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Features & Architecture:</h4>
              <div className="space-y-2">
                {selectedProject.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-medium text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
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
                className="text-xs font-semibold text-slate-400 hover:text-white"
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
