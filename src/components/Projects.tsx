import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const featuredProject = {
  title: "CareerTracker — Enterprise Job Search Suite",
  desc: "An all-in-one job application productivity dashboard. Integrates real-time listings via REST APIs, tracks progress through a drag-and-drop Kanban workflow, and uses persistent state with robust filtering to keep candidate pipelines organized.",
  tech: ["React", "JavaScript", "Context API", "REST API", "Tailwind CSS"],
  link: "#",
  github: "https://github.com/devkad09",
  image: "/job_board_tracker.png",
  accent: "violet",
};

const otherProjects = [
  {
    title: "Aurora — Premium E-Commerce Storefront",
    desc: "A business-ready e-commerce experience featuring smooth faceted search, lightning-fast product filtering, and a seamless sliding cart. Optimized for Core Web Vitals with advanced micro-interactions.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Context API"],
    link: "#",
    github: "https://github.com/devkad09",
    image: "/ecommerce_app.png",
    accent: "cyan",
  },
  {
    title: "Connect Analytics — SaaS Data Visualization",
    desc: "A high-fidelity social media SaaS dashboard tracking multi-platform engagement metrics. Features responsive charts, post performance audits, and a glassmorphism layout.",
    tech: ["React", "JavaScript", "Recharts", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/devkad09",
    image: "/social_analytics.png",
    accent: "emerald",
  },
];

const tagStyle: Record<string, string> = {
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-300",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
};

const Projects = () => (
  <section id="projects" className="py-24 md:py-36 px-4 sm:px-6 overflow-hidden relative">
    <div className="glow-violet w-[500px] h-[500px] right-0 top-1/4 opacity-15 absolute pointer-events-none" />

    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="mb-16 reveal">
        <p className="section-eyebrow mb-4">
          <span className="w-5 h-px bg-violet-400 rounded-full" />
          Selected works
        </p>
        <h2 className="section-heading max-w-xl">
          Projects that drive{" "}
          <span className="grad-violet-cyan">real results</span>
        </h2>
        <p className="section-copy max-w-xl mt-4">
          From concept to deployment — here are a few products I'm most proud of.
        </p>
      </div>

      {/* Featured project */}
      <div className="mb-16 reveal">
        <div className="group glass card-border rounded-2xl overflow-hidden grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080b14] opacity-0 lg:opacity-60" />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/90 via-[#080b14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div className="flex gap-3">
                <a href={featuredProject.github} target="_blank" rel="noopener noreferrer"
                  className="h-11 w-11 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-violet-500/30 transition-all duration-200">
                  <Github className="w-5 h-5" />
                </a>
                <a href={featuredProject.link}
                  className="h-11 w-11 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-cyan-500/30 transition-all duration-200">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="p-8 md:p-10 flex flex-col justify-center space-y-6">
            <div>
              <span className={`tag border ${tagStyle.violet} mb-4 inline-flex`}>⭐ Featured project</span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white leading-snug">
                {featuredProject.title}
              </h3>
              <p className="section-copy text-sm mt-4 leading-relaxed">{featuredProject.desc}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {featuredProject.tech.map((t) => (
                <span key={t} className="tag-gray">{t}</span>
              ))}
            </div>

            <div className="flex items-center gap-5 pt-2">
              <a href={featuredProject.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-violet-400 transition-colors duration-200">
                Live demo <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8892a4] hover:text-cyan-400 transition-colors duration-200">
                GitHub <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Other projects grid */}
      <div className="grid md:grid-cols-2 gap-6 reveal">
        {otherProjects.map((project) => (
          <div
            key={project.title}
            className="group glass card-border rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[16/9]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/90 via-[#080b14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-violet-500/30 transition-all duration-200">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={project.link}
                    className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-cyan-500/30 transition-all duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col flex-1 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag-gray">{t}</span>
                ))}
              </div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-white leading-snug group-hover:text-violet-300 transition-colors duration-300">
                {project.title}
              </h4>
              <p className="section-copy text-xs flex-1">{project.desc}</p>
              <div className="flex items-center gap-4 pt-2 border-t border-white/05">
                <a href={project.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-violet-400 transition-colors duration-200">
                  Live demo <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8892a4] hover:text-cyan-400 transition-colors duration-200">
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

export default Projects;
