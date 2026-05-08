import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nexus Business Landing Page",
    desc: "A high-converting, responsive landing page for a startup consultancy, featuring modern CSS animations and a clean, professional aesthetic.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
    image: "/Users/kad/.gemini/antigravity/brain/f34c4e03-d7f0-4239-8e06-5c7eb8602303/business_landing_page_1778276856267.png"
  },
  {
    title: "Quantum Analytics Dashboard",
    desc: "A sophisticated admin dashboard with real-time API integration, data visualization with Chart.js, and a sleek dark mode interface.",
    tech: ["React", "TypeScript", "Recharts", "REST API"],
    link: "#",
    github: "#",
    image: "/Users/kad/.gemini/antigravity/brain/f34c4e03-d7f0-4239-8e06-5c7eb8602303/react_dashboard_api_1778276886215.png"
  },
  {
    title: "Aethel Luxury E-commerce",
    desc: "A premium e-commerce UI experience with a focus on minimalist design, smooth transitions, and a seamless shopping flow.",
    tech: ["Next.js", "Tailwind CSS", "Redux Toolkit"],
    link: "#",
    github: "#",
    image: "/Users/kad/.gemini/antigravity/brain/f34c4e03-d7f0-4239-8e06-5c7eb8602303/ecommerce_ui_experience_1778277096047.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-fade-up">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">Portfolio</h2>
            <h3 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground">
              Selected <span className="text-accent">Projects.</span>
            </h3>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
            A curated collection of digital experiences built with precision and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
                key={project.title} 
                className="group bg-secondary/30 border border-border rounded-[2.5rem] overflow-hidden hover:border-accent/50 transition-all duration-500 flex flex-col animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
            >
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-background rounded-full hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.link} className="p-3 bg-background rounded-full hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-background text-xs font-semibold text-muted-foreground rounded-full border border-border">
                        {t}
                    </span>
                  ))}
                </div>
                <h4 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="mt-auto">
                    <a 
                        href={project.link}
                        className="inline-flex items-center gap-2 text-foreground font-bold text-sm uppercase tracking-wider hover:text-accent transition-colors"
                    >
                        Live Demo <ArrowUpRight className="w-4 h-4" />
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
