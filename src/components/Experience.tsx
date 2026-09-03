import { ExternalLink, Sparkles, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  badge: string;
  location: string;
  period: string;
  problem: string;
  outcome: string;
  technologies: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Technical Writer & Documentation Engineer",
    company: "Formgrid.dev",
    companyUrl: "https://formgrid.dev",
    badge: "API Specs & Developer Adoption",
    location: "Remote",
    period: "2024 – Present",
    problem:
      "Engineering teams and external developers needed clear, interactive OpenAPI documentation, component recipes, and end-to-end integration workflows to rapidly implement headless form endpoints without ambiguity.",
    outcome:
      "Authored REST API endpoint specifications, code examples in TypeScript/cURL, automated webhook routing guides, and interactive developer onboarding documentation that cut adoption friction.",
    technologies: ["REST APIs", "OpenAPI", "MDX", "TypeScript", "Component Guides", "Lead Pipelines"],
  },
  {
    role: "Frontend Developer",
    company: "Freelance & Client Engineering",
    badge: "9+ Shipped Projects",
    location: "Remote Global",
    period: "2023 – Present",
    problem:
      "Founders and businesses needed responsive, accessible, high-performance web applications that convert visitors into customers without slow page loads or mobile layout bugs.",
    outcome:
      "Shipped 9+ responsive web projects including 3 production SaaS analytics dashboards. Achieved sub-second load times via code splitting and lazy loading, and built WCAG 2.1 AA compliant components tested with axe DevTools.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "REST APIs", "WCAG 2.1 AA", "Figma", "Core Web Vitals"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="section-eyebrow justify-center">
            <Sparkles className="w-4 h-4" />
            <span>Proven Track Record</span>
          </p>
          <h2 id="experience-heading" className="section-heading">
            Engineering experience &{" "}
            <span className="text-slate-500 dark:text-slate-300">
              measurable impact
            </span>
          </h2>
          <p className="section-copy mx-auto">
            Real roles defined by business outcomes, architecture decisions, and software shipped to production.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="rounded-3xl glass-card p-6 sm:p-8 lg:p-10 border-white/10 hover:border-white/25 transition-all duration-300 shadow-xl"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line/60">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-white/10 text-ink border border-white/15">
                      {exp.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-ink-muted">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-ink hover:text-white transition-colors flex items-center gap-1"
                      >
                        <span>{exp.company}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="font-semibold text-ink">{exp.company}</span>
                    )}
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-surface-2 border border-line text-xs font-mono text-ink-muted self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Problem vs Outcome */}
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-2/60 border border-line/60">
                  <p className="text-xs font-mono uppercase font-bold text-ink tracking-wider">
                    The Challenge & Need:
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {exp.problem}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-surface-2/60 border border-line/60">
                  <p className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                    Business Outcome & Delivery:
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {exp.outcome}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-5 border-t border-line/60 flex flex-wrap gap-2">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-xl text-xs font-mono text-ink-muted bg-surface-2/80 border border-line hover:border-white/30 hover:text-ink transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
