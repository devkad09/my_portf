import { useState, useMemo } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Pulse",
    desc: "A high-performance landing page with complex CSS animations and zero JS runtime.",
    tech: ["Native CSS", "HTML5", "CSS Grid"],
    category: "Landing Page",
    image: "/assets/pulse.png",
    link: "https://pluse-landing.vercel.app/",
    featured: true,
  },
  {
    title: "McSteeze Lounge",
    desc: "A luxury hospitality website featuring a sophisticated dark-themed aesthetic and direct WhatsApp integration.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    category: "Web App",
    image: "/assets/mcsteeze.png",
    link: "https://mcsteeze-lounge.vercel.app/",
    featured: true,
  },
];

const ALL = "All";

const Projects = () => {
  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return [ALL, ...cats];
  }, []);

  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-32 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Selected <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A collection of projects where I push the boundaries of what's possible on the web.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "glass border-white/10 hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`reveal bento-card group flex flex-col ${
                project.featured ? "md:col-span-2 lg:col-span-8" : "md:col-span-1 lg:col-span-4"
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-full glass border-white/10 text-white hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm font-bold group/btn"
                >
                  View Live Site 
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
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
