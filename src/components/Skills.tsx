import { useState } from "react";
import { Sparkles, Code2, Database, BookOpen, ShieldCheck, CheckCircle2 } from "lucide-react";

interface SkillItem {
  name: string;
  category: string;
  level: string;
  description: string;
  iconBg: string;
}

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Code2,
    badge: "Core Architecture",
    accent: "emerald",
    skills: [
      { name: "React 18", level: "Primary Core", desc: "Hooks, Context, Suspense, custom reactive hooks" },
      { name: "TypeScript", level: "Strict Mode", desc: "Generics, Discriminated Unions, strict type contracts" },
      { name: "Tailwind CSS", level: "Design Systems", desc: "Custom themes, tokens, responsive layouts" },
      { name: "Next.js & Vite", level: "Build Tooling", desc: "SSR/SSG, fast HMR, code splitting, asset optimization" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/await, DOM APIs, Event Loops, closures" },
      { name: "HTML5 / CSS3", level: "Semantic A11y", desc: "ARIA attributes, flexbox, CSS Grid, animations" },
    ],
  },
  {
    id: "docs",
    title: "Technical Writing & Systems",
    icon: BookOpen,
    badge: "Formgrid.dev Author",
    accent: "cyan",
    skills: [
      { name: "REST API References", level: "Headless Endpoints", desc: "Complete OpenAPI & curl/fetch endpoint specifications" },
      { name: "Component Systems", level: "Design Tokens", desc: "Reusable React UI documentation and recipes" },
      { name: "MDX & Markdown", level: "Docs Pipelines", desc: "Content architectures, workflow guides, live code tabs" },
      { name: "Lead Pipeline Docs", level: "Workflow Systems", desc: "Stage routing, automated notifications, onboarding portals" },
      { name: "Developer Onboarding", level: "Adoption Portals", desc: "Zero to first API request in under 2 minutes" },
      { name: "Technical Specifications", level: "Architecture", desc: "Clear functional requirements & engineering plans" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Integrations",
    icon: Database,
    badge: "Cloud & APIs",
    accent: "violet",
    skills: [
      { name: "Node.js & Express", level: "Server Runtimes", desc: "RESTful routers, JSON parsing, middleware security" },
      { name: "Supabase & SQL", level: "Cloud Database", desc: "Relational modeling, Row Level Security, realtime subscriptions" },
      { name: "RESTful APIs", level: "Contract Design", desc: "CORS handling, Webhooks, Formsubmit & Web3Forms pipelines" },
      { name: "MongoDB", level: "NoSQL Stores", desc: "Document schemas, Mongoose models, aggregation pipelines" },
    ],
  },
  {
    id: "quality",
    title: "Standards & Tooling",
    icon: ShieldCheck,
    badge: "Production Ready",
    accent: "emerald",
    skills: [
      { name: "WCAG 2.1 AA A11y", level: "axe DevTools", desc: "Keyboard trap elimination, ARIA landmarks, screen reader audits" },
      { name: "Core Web Vitals", level: "Sub-Second LCP", desc: "Code splitting, lazy assets, zero layout shifts (CLS)" },
      { name: "Git & GitHub", level: "Version Control", desc: "Feature branching, PR reviews, CI/CD automated workflows" },
      { name: "Figma to Code", level: "Pixel Perfection", desc: "Translating design systems into scalable React components" },
    ],
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden" aria-labelledby="skills-heading">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="section-eyebrow justify-center">
            <Sparkles className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </p>
          <h2 id="skills-heading" className="section-heading">
            Engineering tools & <span className="text-emerald-600 dark:text-emerald-400">documentation systems</span>
          </h2>
          <p className="section-copy mx-auto">
            A battle-tested technical arsenal built around React 18, TypeScript, sub-second performance, and clear developer documentation.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;

            return (
              <div
                key={cat.id}
                className="rounded-3xl glass-card p-6 sm:p-8 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-line/60 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-ink-muted">{cat.skills.length} core competencies</p>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-surface-2 border border-line text-emerald-600 dark:text-emerald-400">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.skills.map((skill) => {
                      const isHovered = activeSkill === skill.name;

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setActiveSkill(skill.name)}
                          onMouseLeave={() => setActiveSkill(null)}
                          className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-default ${
                            isHovered
                              ? "bg-emerald-500/10 border-emerald-500/50 shadow-md scale-[1.02]"
                              : "bg-surface-2/60 border-line/60 hover:border-emerald-500/30"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-xs sm:text-sm text-ink">
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-line text-emerald-600 dark:text-emerald-400 font-semibold">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-[11px] text-ink-muted mt-1 leading-snug">
                            {skill.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer validation */}
                <div className="mt-6 pt-4 border-t border-line/60 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Production standard tested & deployed</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
