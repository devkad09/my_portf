import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  status?: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: "nordhem",
    title: "Nordhem",
    subtitle: "Minimalist Scandinavian Apparel & E-Commerce",
    status: "Live Deployment",
    problem:
      "Fashion and apparel brands needed a lightweight, hyper-fast e-commerce shopping experience with instant category filtering, curated lookbooks, and zero page reloads on mobile connections.",
    solution:
      "Engineered a minimalist storefront with client-side faceted filtering, lookbook overlays, slide-out reactive cart drawer with real-time state recalculation, and clean typography.",
    outcome:
      "Achieved 100/100 Core Web Vitals score, sub-second load times via code splitting, and WCAG 2.1 AA compliant keyboard navigation.",
    image: "/nordhem.png",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "E-Commerce", "UI/UX"],
    liveUrl: "https://nordhem-blue.vercel.app",
    githubUrl: "https://github.com/devkad09/nordhem",
  },
  {
    id: "formflow",
    title: "FormFlow",
    subtitle: "Developer Multi-Step Form Engine & Data Router",
    status: "In Active Development",
    problem:
      "Developer teams needed a streamlined, accessible way to create multi-step forms with schema validation, custom field architectures, and database persistence without building backend pipelines from scratch.",
    solution:
      "Developing a modular form engine with Zod schema validation, accessible keyboard navigation, WCAG 2.1 compliance, and direct Web3Forms/Supabase data routing.",
    outcome:
      "Actively iterating on dynamic validation rules, live preview generation, and exportable React form components.",
    image: "/formflow.png",
    technologies: ["React", "TypeScript", "Supabase", "Zod", "A11y"],
    liveUrl: "https://formflow-olive.vercel.app",
    githubUrl: "https://github.com/devkad09/formflow",
  },
  {
    id: "mcsteeze",
    title: "Mcsteeze Lounge",
    subtitle: "Hospitality Brand Portal & Digital Menu Experience",
    status: "Live Deployment",
    problem:
      "Hospitality businesses needed a modern, mobile-first brand portal with interactive digital menu browsing, reservation management, and fast mobile asset delivery.",
    solution:
      "Designed a custom responsive web experience featuring an interactive digital menu browser, reservation form with real-time notifications, and high-performance asset optimization.",
    outcome:
      "Streamlined table bookings, increased mobile customer engagement, and achieved fast load times across all mobile screen sizes.",
    image: "/mcsteeze.png",
    technologies: ["React", "Tailwind CSS", "Responsive Design", "UI/UX"],
    liveUrl: "https://mcsteeze-lounge.vercel.app",
    githubUrl: "https://github.com/devkad09/mcsteeze-lounge",
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
            Featured applications and tools developed from concept to deployment. Each began with a concrete problem and shipped with a measurable outcome.
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
                  <div className="overflow-hidden rounded-[24px] lg:rounded-[28px] border border-line bg-canvas shadow-card group transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 relative cursor-pointer"
                      title={`Visit ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} live interface preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>

                {/* Structured Narrative: Problem, Solution, Outcome */}
                <div className={`max-w-xl ${isImageFirst ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-[-0.03em] text-ink">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold font-mono ${
                          project.status === "In Active Development"
                            ? "bg-amber-500/10 text-amber-600 border border-amber-500/20 dark:text-amber-400"
                            : "bg-accent/10 text-accent border border-accent/20"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-ink-muted mt-1 font-mono">
                    {project.subtitle}
                  </p>

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
