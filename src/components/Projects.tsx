import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Smart Invoice & Client Dashboard",
    isFeatured: true,
    desc: "A web-based invoicing and client management system designed for freelancers and small businesses. Users can create invoices, track payments, and manage clients through a clean and responsive dashboard interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
    github: "#",
    image: "./invoice.png"
  },
  {
    title: "Real-Time Task Management App",
    desc: "A collaborative task management application that allows teams to create, assign, and track tasks in real-time. Features include drag-and-drop task organization, real-time updates, and integration with popular communication tools.",
    tech: ["React", "Firebase", "Redux"],
    link: "#",
    github: "#",
    image: "./dashboard.png"
  },
  {
    title: "AI Resume & Portfolio Builder",
    desc: "An AI-powered resume and portfolio builder that helps users create professional resumes and portfolios with ease. The application uses natural language processing to suggest improvements and optimize content for job applications.",
    tech: ["React", "Node.js", "Express", "OpenAI API"],
    link: "#",
    github: "#",
    image: "./ai-resume.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">

        <div className="mb-24 text-center reveal">
          <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">Selected Works</h2>
          <h3 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
            Projects with purpose.
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-white/50 text-lg leading-relaxed">
            High-impact digital products built with polished UI, strong performance, and thoughtful brand experiences.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group grid gap-10 ${index % 2 === 0 ? 'lg:grid-cols-[0.55fr_0.45fr]' : 'lg:grid-cols-[0.45fr_0.55fr]'} items-center reveal`}
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_35px_100px_-60px_rgba(0,0,0,0.6)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute left-6 bottom-6 flex items-center gap-3">
                  <a href={project.github} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent hover:text-black">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent hover:text-black">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  {project.isFeatured && (
                    <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                      Featured
                    </span>
                  )}
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="font-heading text-3xl lg:text-5xl font-black text-gradient leading-tight">
                  {project.title}
                </h4>
                <p className="text-white/50 text-lg leading-relaxed font-light">
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:text-accent"
                >
                  View case study <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

