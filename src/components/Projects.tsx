import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nexus Business Landing Page",
    desc: "A high-converting, responsive landing page for a startup consultancy, featuring modern CSS animations and a clean, professional aesthetic.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "",
    github: "https://github.com/devkad09/Nexus-Business-Landing-Page",
    image: "/assets/pulse.png"
  },
  {
    title: "Quantum Analytics Dashboard",
    desc: "A sophisticated admin dashboard with real-time API integration, data visualization with Chart.js, and a sleek dark mode interface.",
    tech: ["React", "TypeScript", "Recharts", "REST API"],
    link: "#",
    github: "#",
    image: "/assets/project1.png"
  },
  {
    title: "Aethel Luxury E-commerce",
    desc: "A premium e-commerce UI experience with a focus on minimalist design, smooth transitions, and a seamless shopping flow.",
    tech: ["Next.js", "Tailwind CSS", "Redux Toolkit"],
    link: "#",
    github: "#",
    image: "/assets/mcsteeze.png"
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
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
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
                <div className="flex flex-wrap gap-2">
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

