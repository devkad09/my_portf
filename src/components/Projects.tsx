import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Layers,
  Activity,
  ArrowRight,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "saas" | "ecommerce" | "web";
  categoryLabel: string;
  subtitle: string;
  status: string;
  statusType: "live" | "dev";
  problem: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
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
    categoryLabel: "E-Commerce Storefront",
    subtitle: "Personal Project · Minimalist Scandinavian Apparel & Storefront",
    status: "In Active Development",
    statusType: "dev",
    problem:
      "Fashion and apparel brands need a lightweight, hyper-fast e-commerce shopping experience with instant category filtering, curated lookbooks, and zero page reloads on mobile connections.",
    solution:
      "Building a minimalist storefront with client-side faceted filtering, lookbook overlays, slide-out reactive cart drawer with real-time state recalculation, and clean typography.",
    outcome:
      "Targeting 100/100 Core Web Vitals, sub-second load times via code splitting, and WCAG 2.1 AA keyboard accessibility with active prototype deployed on Vercel.",
    metrics: [
      { label: "Performance Score", value: "100/100" },
      { label: "CLS Layout Shift", value: "0 ms" },
      { label: "Accessibility", value: "WCAG AA" },
    ],
    image: "/nordhem.png",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "A11y", "UI/UX"],
    liveUrl: "https://nordhem-blue.vercel.app",
    githubUrl: "https://github.com/devkad09/nordhem",
  },
  {
    id: "formflow",
    title: "FormFlow",
    category: "saas",
    categoryLabel: "Developer SaaS Platform",
    subtitle: "Developer Multi-Step Form Engine & Lead Router",
    status: "Active SaaS Build",
    statusType: "dev",
    problem:
      "Developer teams needed a streamlined, accessible way to create multi-step forms with schema validation, custom field architectures, and database persistence without building complex backend pipelines.",
    solution:
      "Developing a modular form engine with Zod schema validation, accessible keyboard navigation, WCAG 2.1 compliance, and direct Web3Forms/Supabase data routing.",
    outcome:
      "Iterating on dynamic validation rules, live preview generation, and exportable React form components with sub-2s setup.",
    metrics: [
      { label: "Validation Engine", value: "Zod Schema" },
      { label: "Data Pipeline", value: "Supabase" },
      { label: "Form Setup Time", value: "< 2 mins" },
    ],
    image: "/formflow.png",
    technologies: ["React 18", "TypeScript", "Supabase", "Zod", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://formflow-olive.vercel.app",
    githubUrl: "https://github.com/devkad09/formflow",
  },
  {
    id: "mcsteeze",
    title: "Mcsteeze Lounge",
    category: "web",
    categoryLabel: "Hospitality Brand Portal",
    subtitle: "Hospitality Brand Portal & Digital Menu Experience",
    status: "Production Live",
    statusType: "live",
    problem:
      "Hospitality businesses needed a modern, mobile-first brand portal with interactive digital menu browsing, reservation management, and fast mobile asset delivery.",
    solution:
      "Designed a custom responsive web experience featuring an interactive digital menu browser, reservation form with real-time notifications, and high-performance asset optimization.",
    outcome:
      "Streamlined table bookings, increased mobile customer engagement, and achieved sub-second load times across all mobile screen sizes.",
    metrics: [
      { label: "Mobile Optimization", value: "100%" },
      { label: "Asset Delivery", value: "Sub-Second" },
      { label: "Reservations", value: "Real-time" },
    ],
    image: "/mcsteeze.png",
    technologies: ["React", "Tailwind CSS", "Responsive Design", "UI/UX", "Vite"],
    liveUrl: "https://mcsteeze-lounge.vercel.app",
    githubUrl: "https://github.com/devkad09/mcsteeze-lounge",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "saas" | "ecommerce" | "web">("all");
  const [activeTabs, setActiveTabs] = useState<Record<string, "overview" | "solution" | "metrics">>({
    nordhem: "overview",
    formflow: "overview",
    mcsteeze: "overview",
  });

  const setTab = (projectId: string, tab: "overview" | "solution" | "metrics") => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative overflow-hidden scroll-mt-16"
      aria-labelledby="work-heading"
    >
      <div id="work" className="absolute -top-24" />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-2xl">
            <p className="section-eyebrow">
              <Sparkles className="w-4 h-4" />
              <span>Selected Work & Case Studies</span>
            </p>
            <h2 id="work-heading" className="section-heading">
              Proven software engineered for{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                real impact
              </span>
            </h2>
            <p className="section-copy">
              Explore interactive builds, production platforms, and scalable frontend architectures.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-card self-start border-line shadow-sm">
            {[
              { id: "all", label: "All Works", count: PROJECTS.length },
              { id: "ecommerce", label: "E-Commerce", count: 1 },
              { id: "saas", label: "SaaS & Tools", count: 1 },
              { id: "web", label: "Brand Web", count: 1 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === tab.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                    : "text-ink-muted hover:text-ink hover:bg-surface-2/60"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    filter === tab.id
                      ? "bg-indigo-700/50 text-indigo-100"
                      : "bg-surface-2 text-ink-muted"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project) => {
            const currentTab = activeTabs[project.id] || "overview";

            return (
              <article
                key={project.id}
                className="group relative rounded-3xl glass-card border-indigo-500/20 hover:border-indigo-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                {/* Top Row: Category + Status Badge + Live Link */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-line/60">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        {project.categoryLabel}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold ${
                          project.statusType === "live"
                            ? "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30"
                            : "bg-violet-500/15 text-violet-600 dark:text-violet-400 border border-violet-500/30"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-ink-muted hover:text-indigo-500 flex items-center gap-1 transition-colors"
                      title="Open deployment"
                    >
                      <span className="hidden sm:inline">Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted mt-1 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Interactive Mac Browser Preview Mockup */}
                  <div className="rounded-2xl overflow-hidden border border-line/80 bg-slate-950 shadow-xl relative group/preview">
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <div className="px-3 py-0.5 rounded-md bg-slate-950/80 border border-white/05 font-mono text-[10px] text-slate-400 truncate max-w-[200px]">
                        {project.liveUrl.replace("https://", "")}
                      </div>
                      <div className="w-4" />
                    </div>

                    {/* Screenshot Frame with Hover Action */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="block aspect-[16/9.5] overflow-hidden relative cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} live interface preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-xl flex items-center gap-1.5">
                          <span>Open Live Site</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* Key Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-2.5 rounded-xl bg-surface-2/60 border border-line/60 text-center space-y-0.5"
                      >
                        <p className="text-[10px] font-mono text-ink-muted uppercase">
                          {metric.label}
                        </p>
                        <p className="font-display font-bold text-xs sm:text-sm text-indigo-600 dark:text-indigo-400">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Tab Switcher (Overview vs Architecture vs Results) */}
                  <div className="pt-2">
                    <div className="flex items-center gap-1 p-1 rounded-xl bg-surface-2/80 border border-line/60 text-xs font-medium">
                      <button
                        type="button"
                        onClick={() => setTab(project.id, "overview")}
                        className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                          currentTab === "overview"
                            ? "bg-surface text-ink font-semibold shadow-sm"
                            : "text-ink-muted hover:text-ink"
                        }`}
                      >
                        The Problem
                      </button>
                      <button
                        type="button"
                        onClick={() => setTab(project.id, "solution")}
                        className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                          currentTab === "solution"
                            ? "bg-surface text-ink font-semibold shadow-sm"
                            : "text-ink-muted hover:text-ink"
                        }`}
                      >
                        Solution
                      </button>
                      <button
                        type="button"
                        onClick={() => setTab(project.id, "metrics")}
                        className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                          currentTab === "metrics"
                            ? "bg-surface text-ink font-semibold shadow-sm"
                            : "text-ink-muted hover:text-ink"
                        }`}
                      >
                        Outcome
                      </button>
                    </div>

                    {/* Tab Content Box */}
                    <div className="mt-3 p-4 rounded-2xl bg-surface-2/40 border border-line/60 min-h-[90px] flex items-center">
                      {currentTab === "overview" && (
                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed animate-in fade-in duration-200">
                          <strong className="text-ink font-semibold">Need: </strong>
                          {project.problem}
                        </p>
                      )}
                      {currentTab === "solution" && (
                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed animate-in fade-in duration-200">
                          <strong className="text-ink font-semibold">Engineering: </strong>
                          {project.solution}
                        </p>
                      )}
                      {currentTab === "metrics" && (
                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed animate-in fade-in duration-200">
                          <strong className="text-ink font-semibold">Impact: </strong>
                          {project.outcome}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Tech Stack & Action CTA Dock */}
                <div className="mt-6 pt-5 border-t border-line/60 space-y-4">
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono text-ink-muted bg-surface border border-line"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary h-10 px-4 rounded-xl text-xs font-semibold flex items-center gap-1.5 flex-1 justify-center"
                    >
                      <span>Explore Live Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary h-10 px-4 rounded-xl text-xs font-semibold flex items-center gap-1.5"
                        title="View GitHub repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}

          {/* Interactive Bento Tile: Have a custom product build? */}
          {filter === "all" && (
            <div className="rounded-3xl glass-card border-dashed border-indigo-500/30 hover:border-indigo-500/50 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-indigo-500/5 via-transparent to-surface-2/30 shadow-xl transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-line/60">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    Next Engagement
                  </span>
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5" /> Q1/Q2 Openings
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                    Have a vision for your next product?
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    I partner with startups, agencies, and technical founders to build sub-second React applications, accessible design systems, and developer-grade documentation.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="p-3.5 rounded-2xl bg-surface-2/60 border border-line/60 flex items-center gap-3 text-xs text-ink-muted">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span>Sub-second load times & 100/100 Core Web Vitals standard</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-surface-2/60 border border-line/60 flex items-center gap-3 text-xs text-ink-muted">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span>WCAG 2.1 AA accessible component architecture tested with axe DevTools</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-surface-2/60 border border-line/60 flex items-center gap-3 text-xs text-ink-muted">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span>Turnkey technical writing & developer portal documentation</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-line/60">
                <a
                  href="#work-with-me"
                  className="btn-primary w-full h-11 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
                >
                  <span>Start a Project Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
