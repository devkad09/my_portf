import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Pulse",
    desc: "A high-performance landing page with complex CSS animations and zero JS runtime.",
    category: "01 / Development",
    link: "https://pluse-landing.vercel.app/",
    year: "2026"
  },
  {
    title: "McSteeze",
    desc: "A luxury hospitality website featuring a sophisticated aesthetic and direct integration.",
    category: "02 / Web App",
    link: "https://mcsteeze-lounge.vercel.app/",
    year: "2025"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-editorial-text">
            Selected<br />
            <span className="italic text-editorial-accent">Works.</span>
          </h2>
          <p className="text-editorial-muted max-w-sm text-balance">
            A curated collection of recent digital experiences and interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {projects.map((project, i) => (
            <div key={project.title} className={`group flex flex-col ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
              
              {/* Image Placeholder (Editorial style) */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/5] bg-editorial-white border border-editorial-border overflow-hidden mb-8">
                <div className="absolute inset-0 bg-editorial-text/5 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-editorial-muted/30 font-serif text-8xl italic select-none">
                  {i + 1}
                </div>
                {/* Custom hover cursor/link icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-editorial-text text-editorial-white flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>

              {/* Meta */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs uppercase tracking-widest text-editorial-accent">
                  {project.category}
                </span>
                <span className="text-xs text-editorial-muted">
                  {project.year}
                </span>
              </div>

              {/* Title & Desc */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                <h3 className="font-serif text-3xl text-editorial-text mb-3 group-hover:text-editorial-accent transition-colors">
                  {project.title}
                </h3>
              </a>
              <p className="text-editorial-muted text-balance">
                {project.desc}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
