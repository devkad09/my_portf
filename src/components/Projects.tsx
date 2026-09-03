import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
  Zap,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "saas" | "ecommerce" | "web";
  categoryLabel: string;
  description: string;
  status: string;
  statusType: "live" | "dev";
  metricBadge: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: "nordhem",
    title: "Nordhem",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    description:
      "Minimalist Scandinavian fashion storefront with client-side faceted filtering, lookbook overlays, slide-out reactive cart drawer, and sub-second performance.",
    status: "In Active Dev",
    statusType: "dev",
    metricBadge: "100/100 Vitals · WCAG AA",
    image: "/nordhem.png",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://nordhem-blue.vercel.app",
    githubUrl: "https://github.com/devkad09/nordhem",
  },
  {
    id: "formflow",
    title: "FormFlow",
    category: "saas",
    categoryLabel: "Developer SaaS",
    description:
      "Modular multi-step form engine and developer lead router with Zod schema validation, accessible keyboard navigation, and direct Supabase database pipelines.",
    status: "Active SaaS Build",
    statusType: "dev",
    metricBadge: "Zod Schema · Supabase Realtime",
    image: "/formflow.png",
    technologies: ["React 18", "TypeScript", "Supabase", "Zod", "REST APIs"],
    liveUrl: "https://formflow-olive.vercel.app",
    githubUrl: "https://github.com/devkad09/formflow",
  },
  {
    id: "mcsteeze",
    title: "Mcsteeze Lounge",
    category: "web",
    categoryLabel: "Brand Portal",
    description:
      "Mobile-first hospitality platform featuring an interactive digital menu browser, reservation management with real-time notifications, and asset optimization.",
    status: "Production Live",
    statusType: "live",
    metricBadge: "Sub-Second LCP · Mobile Optimized",
    image: "/mcsteeze.png",
    technologies: ["React", "Tailwind CSS", "Responsive UI", "Vite"],
    liveUrl: "https://mcsteeze-lounge.vercel.app",
    githubUrl: "https://github.com/devkad09/mcsteeze-lounge",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "saas" | "ecommerce" | "web">("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 relative overflow-hidden scroll-mt-16"
      aria-labelledby="work-heading"
    >
      <div id="work" className="absolute -top-24" />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <p className="section-eyebrow">
              <Sparkles className="w-4 h-4" />
              <span>Selected Work</span>
            </p>
            <h2 id="work-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl">
              Proven software for{" "}
              <span className="text-slate-500 dark:text-slate-300">
                real impact
              </span>
            </h2>
            <p className="text-sm sm:text-base text-ink-muted">
              Explore interactive builds, production platforms, and scalable frontend architectures.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl glass-card self-start border-line shadow-sm">
            {[
              { id: "all", label: "All Works", count: PROJECTS.length },
              { id: "ecommerce", label: "E-Commerce", count: 1 },
              { id: "saas", label: "SaaS", count: 1 },
              { id: "web", label: "Brand Web", count: 1 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === tab.id
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md"
                    : "text-ink-muted hover:text-ink hover:bg-surface-2/60"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    filter === tab.id
                      ? "bg-white/20 dark:bg-black/20 text-current"
                      : "bg-surface-2 text-ink-muted"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Staggered Layout */}
        <div className="space-y-10 sm:space-y-12">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`grid gap-6 sm:gap-8 lg:gap-12 items-center ${
                index % 2 === 0 ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
              }`}
            >
              {/* Image Section */}
              <div
                className={`order-2 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="rounded-2xl overflow-hidden border border-line/80 bg-slate-950 shadow-lg relative group/preview">
                  {/* Chrome Header */}
                  <div className="px-3.5 py-2 bg-slate-900/95 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-slate-500" />
                      <div className="w-2 h-2 rounded-full bg-slate-400" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 truncate max-w-[140px]">
                      {project.liveUrl.replace("https://", "")}
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white"
                      title="Open deployment in new tab"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Image Frame */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block aspect-[16/8] sm:aspect-[16/9] overflow-hidden relative cursor-pointer bg-slate-900"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} live interface preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-semibold shadow-lg flex items-center gap-1">
                        <span>Live Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`order-1 space-y-3 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                {/* Header: Title + Category + Status */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                        project.statusType === "live"
                          ? "bg-white/10 text-ink border border-white/20"
                          : "bg-white/05 text-ink-muted border border-white/10"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-ink-muted">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Metric Badge */}
                <div className="px-3 py-2 rounded-xl bg-surface-2/60 border border-line/60 flex items-center gap-2 text-xs sm:text-sm">
                  <Zap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-ink font-semibold truncate">{project.metricBadge}</span>
                </div>

                {/* Tech Stack */}
                <div className="space-y-1.5">
                  <p className="text-xs font-mono uppercase text-ink-muted font-semibold tracking-wider">
                    Built with:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono text-ink-muted bg-surface-2 border border-line"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-1 flex items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2"
                  >
                    <span>View Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-surface-2 hover:bg-surface border border-line text-ink-muted hover:text-ink transition-all"
                      title="View GitHub source code"
                      aria-label="GitHub source"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
