import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "nordhem",
    title: "Nordhem",
    subtitle: "Scandinavian Minimalist E-Commerce & Lookbook",
    problem:
      "Fashion and apparel brands needed a lightweight, hyper-fast e-commerce shopping experience with instant category filtering, interactive lookbooks, and zero page reloads on mobile connections.",
    solution:
      "Engineered a high-performance storefront with client-side faceted filtering, lookbook overlays, slide-out reactive cart drawer, and clean Scandinavian typography.",
    outcome:
      "Achieved 100/100 Core Web Vitals score, sub-second load times via code splitting, and WCAG 2.1 AA compliant keyboard navigation.",
    image: "/nordhem.png",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "State Management", "WCAG 2.1 AA"],
    liveUrl: "https://nordhem-blue.vercel.app",
    githubUrl: "https://github.com/devkad09",
  },
  {
    id: "formflow",
    title: "FormFlow Studio",
    subtitle: "Dynamic Multi-Step Form & Workflow Engine",
    problem:
      "Teams needed custom interactive multi-step forms with live preview validation, conditional logic, and database persistence without building custom backend code from scratch.",
    solution:
      "Engineered an intuitive drag-and-drop form canvas with real-time schema generation, conditional field branching, and instant embed code export.",
    outcome:
      "Streamlined form creation workflows with instant live preview, validation rules, and exportable React form components.",
    image: "/formflow.png",
    technologies: ["React 18", "TypeScript", "Context API", "Tailwind CSS"],
    liveUrl: "https://form-flow-one.vercel.app/",
    githubUrl: "https://github.com/devkad09/FormFlow",
  },
  {
    id: "pulse",
    title: "Pulse SaaS Dashboard",
    subtitle: "Real-Time SaaS Analytics & KPI Visualization",
    problem:
      "SaaS product managers required actionable analytics, retention cohort heatmaps, and revenue tracking without enterprise software clutter.",
    solution:
      "Built a data-dense, accessible analytics interface featuring reactive time-series charts (Recharts), conversion funnels, and filterable transaction tables.",
    outcome:
      "Delivered responsive data visualization across mobile, tablet, and 4K displays with under 400ms rendering performance.",
    image: "/pulse.png",
    technologies: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    liveUrl: "https://pulse-landing-three.vercel.app/",
    githubUrl: "https://github.com/devkad09/pulse-landing",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-24 sm:py-32 bg-surface" aria-labelledby="work-heading">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="section-eyebrow">Selected work</p>
          <h2 id="work-heading" className="section-heading">
            Products designed for real use
          </h2>
          <p className="section-copy">
            Featured projects developed from concept to deployment. Each began with a concrete problem and shipped with a measurable outcome.
          </p>
        </div>

        {/* Project Case Studies List */}
        <div className="space-y-24 lg:space-y-32">
          {PROJECTS.map((project, index) => {
            const isImageFirst = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
              >
                {/* Visual / Screenshot Showcase */}
                <div className={isImageFirst ? "lg:order-1" : "lg:order-2"}>
                  <div className="overflow-hidden rounded-[24px] lg:rounded-[28px] border border-line bg-canvas shadow-card group">
                    <div className="aspect-[16/10] w-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center relative overflow-hidden">
                      <div className="p-8 text-center space-y-3 w-full">
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent/10 text-accent border border-accent/20">
                          {project.title}
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
                          {project.subtitle}
                        </h4>
                        <p className="text-xs text-ink-muted font-mono">
                          Live Production Deployment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Structured Narrative: Problem, Solution, Outcome */}
                <div className={`max-w-xl ${isImageFirst ? "lg:order-2" : "lg:order-1"}`}>
                  <h3 className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-[-0.03em] text-ink">
                    {project.title}
                  </h3>

                  <dl className="mt-7 space-y-6">
                    <div>
                      <dt className="text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
                        Problem
                      </dt>
                      <dd className="mt-2 text-base sm:text-lg leading-[1.65] text-ink-muted">
                        {project.problem}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
                        Solution
                      </dt>
                      <dd className="mt-2 text-base sm:text-lg leading-[1.65] text-ink-muted">
                        {project.solution}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
                        Business outcome
                      </dt>
                      <dd className="mt-2 text-base sm:text-lg leading-[1.65] text-ink-muted">
                        {project.outcome}
                      </dd>
                    </div>
                  </dl>

                  {/* Technology Pills */}
                  <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line bg-canvas px-3.5 py-1.5 text-xs sm:text-sm text-ink-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Links */}
                  <div className="mt-9 flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary h-12 px-6 rounded-[14px] text-sm"
                    >
                      Visit Project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 font-medium border border-line bg-canvas text-ink-muted hover:text-ink hover:border-zinc-400 h-12 px-5 rounded-[14px] text-sm transition-all"
                      >
                        <Github className="h-4 w-4" />
                        <span>Source</span>
                      </a>
                    )}
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
