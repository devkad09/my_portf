import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Business Analytics Dashboard",
    isFeatured: true,
    desc: "A powerful, SaaS-style admin dashboard designed to centralize business operations. It solves the problem of scattered data by providing a unified interface for tracking sales performance, monitoring user activity, and managing system settings. Features include interactive Recharts visualizations, dynamic data tables with filtering, and a responsive layout for cross-device management.",
    tech: ["React", "Recharts", "API Integration", "Tailwind CSS"],
    link: "#",
    github: "#",
    image: ""
  },
  {
    title: "E-commerce Frontend Experience",
    desc: "A premium, conversion-driven shopping interface that prioritizes user experience and performance. This project addresses the need for fast-loading, intuitive e-commerce platforms with features like a persistent cart, product filtering, and seamless checkout flows. Built with a focus on accessibility and high-fidelity design.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS"],
    link: "#",
    github: "#",
    image: ""
  },
  {
    title: "Nexus Business Landing Page",
    desc: "A high-converting landing page optimized for startups and consultancies. It focuses on lead generation and brand authority through clear messaging, modern CSS animations, and a professional aesthetic. Solves the challenge of building immediate trust with potential clients through a polished, responsive digital presence.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/devkad09/Nexus-Business-Landing-Page",
    image: ""
  }
];


const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-transparent relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">

        <div className="mb-24 text-center">
          <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">Selected Works</h2>
          <h3 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-gradient">
            PORTFOLIO.
          </h3>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 reveal`}
            >

              {/* Image Section */}
              <div className="relative w-full lg:w-3/5 group">
                <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-[16/9] overflow-hidden rounded-[3rem] glass border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                    <a href={project.github} className="p-4 glass rounded-full hover:bg-accent hover:text-black transition-all">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={project.link} className="p-4 glass rounded-full hover:bg-accent hover:text-black transition-all">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  {project.isFeatured && (
                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-black tracking-widest uppercase rounded-full">
                      Featured Project
                    </span>
                  )}
                  {project.tech.map(t => (
                    <span key={t} className="px-4 py-1 glass text-[10px] font-bold tracking-widest uppercase text-white/50 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="font-heading text-3xl lg:text-5xl font-black text-gradient leading-tight">
                  {project.title}
                </h4>
                <p className="text-white/40 text-lg leading-relaxed font-light">
                  {project.desc}
                </p>
                <div className="pt-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors group"
                  >
                    EXPLORE PROJECT <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

