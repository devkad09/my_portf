import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "saas" | "ecommerce" | "web";
  subtitle: string;
  status: string;
  statusColor: string;
  problem: string;
  solution: string;
  outcome: string;
  vitals: string;
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
    subtitle: "Personal Project · Minimalist Scandinavian Apparel & E-Commerce",
    status: "In Active Development",
    statusColor: "emerald",
    problem:
      "Fashion and apparel brands need a lightweight, hyper-fast e-commerce shopping experience with instant category filtering, curated lookbooks, and zero page reloads on mobile connections.",
    solution:
      "Building a minimalist storefront with client-side faceted filtering, lookbook overlays, slide-out reactive cart drawer with real-time state recalculation, and clean typography.",
    outcome:
      "Currently in active development with a working prototype live on Vercel, targeting 100/100 Core Web Vitals, sub-second load times, and WCAG 2.1 AA keyboard accessibility.",
    vitals: "In Progress • 100/100 Vitals Target",
    image: "/nordhem.png",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "E-Commerce", "UI/UX", "Vite"],
    liveUrl: "https://nordhem-blue.vercel.app",
    githubUrl: "https://github.com/devkad09/nordhem",
  },
  {
    id: "formflow",
    title: "FormFlow",
    category: "saas",
    subtitle: "Developer Multi-Step Form Engine & Lead Router",
    status: "Active SaaS Build",
    statusColor: "emerald",
    problem:
      "Developer teams needed a streamlined, accessible way to create multi-step forms with schema validation, custom field architectures, and database persistence without building complex backend pipelines.",
    solution:
      "Developing a modular form engine with Zod schema validation, accessible keyboard navigation, WCAG 2.1 compliance, and direct Web3Forms/Supabase data routing.",
    outcome:
      "Actively iterating on dynamic validation rules, live preview generation, and exportable React form components with sub-2s setup.",
    vitals: "Zod Schema • Supabase Realtime",
    image: "/formflow.png",
    technologies: ["React 18", "TypeScript", "Supabase", "Zod", "A11y", "Tailwind CSS"],
    liveUrl: "https://formflow-olive.vercel.app",
    githubUrl: "https://github.com/devkad09/formflow",
  },
  {
    id: "mcsteeze",
    title: "Mcsteeze Lounge",
    category: "web",
    subtitle: "Hospitality Brand Portal & Digital Menu Experience",
    status: "Production Live",
    statusColor: "emerald",
    problem:
      "Hospitality businesses needed a modern, mobile-first brand portal with interactive digital menu browsing, reservation management, and fast mobile asset delivery.",
    solution:
      "Designed a custom responsive web experience featuring an interactive digital menu browser, reservation form with real-time notifications, and high-performance asset optimization.",
    outcome:
      "Streamlined table bookings, increased mobile customer engagement, and achieved fast load times across all mobile screen sizes.",
    vitals: "Mobile First • Instant Reservation UI",
    image: "/mcsteeze.png",
    technologies: ["React", "Tailwind CSS", "Responsive Design", "UI/UX", "Vite"],
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
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden scroll-mt-16" aria-labelledby="work-heading">
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
              Proven software engineered for <span className="text-emerald-600 dark:text-emerald-400">real impact</span>
            </h2>
            <p className="section-copy">
              Featured applications and systems built from architectural blueprint to live cloud deployment.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl glass-card self-start border-line">
            {[
              { id: "all", label: "All Projects" },
              { id: "saas", label: "SaaS & Tools" },
              { id: "ecommerce", label: "E-Commerce" },
              { id: "web", label: "Brand Web" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-ink-muted hover:text-ink hover:bg-surface-2/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-16 lg:space-y-20">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.id}
                className="relative rounded-3xl glass-card p-6 sm:p-8 lg:p-10 border-emerald-500/20 overflow-hidden group hover:border-emerald-500/40 transition-all duration-300 shadow-xl"
              >

                <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Visual Preview / Browser Mockup (6 cols) */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
                      {/* Simulated Browser Bar */}
                      <div className="px-4 py-2.5 bg-slate-900 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <div className="px-3 py-0.5 rounded-md bg-slate-950/80 border border-white/05 font-mono text-[10px] text-slate-400 truncate max-w-[200px]">
                          {project.liveUrl.replace("https://", "")}
                        </div>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-white"
                          title="Open in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Screenshot with Hover Scale */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="block aspect-[16/10] overflow-hidden relative group/img cursor-pointer"
                      >
                        <img
                          src={project.image}
                          alt={`${project.title} interface preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                          <span className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold shadow-lg flex items-center gap-1.5">
                            <span>Open Live Deployment</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                      </a>
                    </div>

                    {/* Vitals Badge */}
                    <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono text-ink-muted">
                      <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                        <Zap className="w-3.5 h-3.5" /> {project.vitals}
                      </span>
                      <span className="text-[11px] opacity-70">Core Web Vitals Pass</span>
                    </div>
                  </div>

                  {/* Project Details (6 cols) */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                          {project.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Structured Problem & Solution Matrix */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-surface-2/60 border border-line/60">
                        <p className="text-[11px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                          Problem
                        </p>
                        <p className="mt-1 text-xs sm:text-sm text-ink-muted leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-2/60 border border-line/60">
                        <p className="text-[11px] font-mono uppercase font-bold text-teal-600 dark:text-teal-400 tracking-wider">
                          Engineering Solution
                        </p>
                        <p className="mt-1 text-xs sm:text-sm text-ink-muted leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-2/60 border border-line/60">
                        <p className="text-[11px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                          Measurable Outcome
                        </p>
                        <p className="mt-1 text-xs sm:text-sm text-ink-muted leading-relaxed">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Tech Badges */}
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

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary h-11 px-5 rounded-xl text-xs font-semibold"
                      >
                        <span>Visit Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary h-11 px-4 rounded-xl text-xs font-semibold"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
