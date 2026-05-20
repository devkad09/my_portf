import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const featuredProject = {
  title: "CareerTracker — Enterprise Job Search & Application Suite",
  desc: "An all-in-one job application suite and productivity dashboard designed to optimize the modern job search. Integrates real-time listings via third-party APIs, tracks progress through a drag-and-drop Kanban workflow, and utilizes persistent local state and robust filtering to keep candidate pipelines organized.",
  tech: ["React", "JavaScript", "Context API", "REST API", "Tailwind CSS"],
  link: "#",
  github: "#",
  image: "/job_board_tracker.png"
};

const otherProjects = [
  {
    title: "Aurora — Premium E-Commerce Storefront",
    desc: "A premium, business-ready e-commerce experience featuring smooth faceted search, lightning-fast product filtering, and a seamless sliding shopping cart. Optimized for Core Web Vitals with advanced UI/UX micro-interactions, responsive grid layouts, and high-fidelity product displays.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Context API"],
    link: "#",
    github: "#",
    image: "/ecommerce_app.png"
  },
  {
    title: "Connect Analytics — SaaS Data Visualization Dashboard",
    desc: "A high-fidelity social media SaaS dashboard designed to track, analyze, and visualize multi-platform engagement metrics. Features responsive line and doughnut charts, post performance audits, and high-density statistical cards presented in an elegant glassmorphism layout.",
    tech: ["React", "JavaScript", "Recharts", "Tailwind CSS"],
    link: "#",
    github: "#",
    image: "/social_analytics.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-20 text-center reveal">
          <p className="section-title text-sm">Selected works</p>
          <h2 className="section-heading text-2xl sm:text-3xl">Projects with purpose.</h2>
          <p className="section-copy mx-auto mt-6 max-w-2xl text-sm">
            High-impact digital products built with polished UI, strong performance, and thoughtful user experiences.
          </p>
        </div>

        <div className="mb-24 md:mb-32 reveal">
          <div className="group grid gap-10 lg:grid-cols-[0.55fr_0.45fr] items-center">
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_35px_100px_-60px_rgba(0,0,0,0.6)] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute left-6 bottom-6 flex items-center gap-3">
                <a
                  href={featuredProject.github}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-accent hover:text-black border border-white/10"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={featuredProject.link}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-accent hover:text-black border border-white/10"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-6 lg:pl-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="rounded-full border border-accent bg-accent/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-accent">
                  Featured project
                </span>
                {featuredProject.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-white/70">
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                {featuredProject.title}
              </h4>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light">
                {featuredProject.desc}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href={featuredProject.link}
                  className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:text-accent"
                >
                  Live Demo <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={featuredProject.github}
                  className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/60 transition hover:text-accent"
                >
                  GitHub <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 reveal">
          {otherProjects.map((project) => (
            <div key={project.title} className="group flex flex-col space-y-6">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_25px_80px_-50px_rgba(0,0,0,0.6)] aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute left-6 bottom-6 flex items-center gap-3">
                  <a
                    href={project.github}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-accent hover:text-black border border-white/10"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href={project.link}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-accent hover:text-black border border-white/10"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex flex-wrap items-center gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.25em] text-white/60">
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="font-heading text-base sm:text-lg font-black text-white leading-snug">
                  {project.title}
                </h4>
                <p className="text-white/50 text-[10px] sm:text-xs leading-relaxed font-light min-h-[4.5rem]">
                  {project.desc}
                </p>

                <div className="flex items-center gap-5 pt-1">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-white transition hover:text-accent"
                  >
                    Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-white/60 transition hover:text-accent"
                  >
                    GitHub <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


