interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  problem: string;
  outcome: string;
  technologies: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Technical Writer",
    company: "Formgrid.dev",
    companyUrl: "https://formgrid.dev",
    location: "Remote",
    period: "2026 – Present",
    problem:
      "Developers integrating Formgrid's headless HTML endpoints (/api/f/:id) and multi-step forms needed clear API references, Next.js code examples, and structured lead pipeline documentation to onboard without confusion.",
    outcome:
      "Authored the complete REST API documentation suite, built reusable UI component libraries, and documented the AI Lead Pipeline (New → Contacted → Converted). Streamlined developer setup times to under two minutes across 400+ registered users.",
    technologies: ["REST API References", "React Component Systems", "Markdown/MDX", "Design Systems", "Webhooks", "Lead Pipelines"],
  },
  {
    role: "Frontend Developer",
    company: "Freelance / Client Projects",
    location: "Remote",
    period: "2023 – Present",
    problem:
      "Founders and businesses needed responsive, accessible, high-performance web applications that convert visitors into customers without slow page loads or mobile layout bugs.",
    outcome:
      "Shipped 20+ responsive web projects including 3 production SaaS analytics dashboards. Achieved sub-second load times via code splitting and lazy loading, and built WCAG 2.1 AA compliant components tested with axe DevTools.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "REST APIs", "WCAG 2.1 AA", "Figma", "Core Web Vitals"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-surface" aria-labelledby="experience-heading">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="section-eyebrow">Experience</p>
          <h2 id="experience-heading" className="section-heading">
            Impact over job titles
          </h2>
          <p className="section-copy">
            Roles framed by the problem solved and the business outcome, not a stack dump.
          </p>
        </div>

        {/* Experience Case Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="rounded-[24px] border border-line bg-canvas p-8 sm:p-10 shadow-soft"
            >
              {/* Header row */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-base sm:text-lg text-ink-muted">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-ink hover:text-accent underline underline-offset-4 decoration-line transition-colors"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <span className="font-medium text-ink">{exp.company}</span>
                    )}
                    <span className="text-ink-muted/50"> · </span>
                    {exp.location}
                  </p>
                </div>

                <p className="text-sm font-medium text-ink-muted font-mono">
                  {exp.period}
                </p>
              </div>

              {/* Problem vs Outcome Grid */}
              <dl className="mt-8 grid gap-6 lg:grid-cols-2">
                <div>
                  <dt className="text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
                    Problem solved
                  </dt>
                  <dd className="mt-2.5 text-[16px] sm:text-[17px] leading-[1.65] text-ink-muted">
                    {exp.problem}
                  </dd>
                </div>

                <div>
                  <dt className="text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
                    Business outcome & Delivery
                  </dt>
                  <dd className="mt-2.5 text-[16px] sm:text-[17px] leading-[1.65] text-ink-muted">
                    {exp.outcome}
                  </dd>
                </div>
              </dl>

              {/* Technologies / Competencies List */}
              <ul
                className="mt-7 flex flex-wrap gap-2 border-t border-line/60 pt-6"
                aria-label={`Technologies used at ${exp.company}`}
              >
                {exp.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-surface px-3.5 py-1 text-xs sm:text-sm text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
