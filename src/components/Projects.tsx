import { useState, useMemo } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "A modern admin dashboard for managing products, orders, and analytics with interactive charts and responsive layouts.",
    tech: ["React", "Tailwind CSS", "Chart.js"],
    category: "Web App",
  },
  {
    title: "Weather App",
    desc: "Real-time weather application with location-based forecasts, animated backgrounds, and a clean minimalist UI.",
    tech: ["JavaScript", "REST API", "CSS3"],
    category: "Web App",
  },
  {
    title: "Portfolio Template",
    desc: "A reusable, fully responsive portfolio template with dark mode support, smooth animations, and SEO optimization.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "UI/UX",
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
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8 reveal" />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="reveal group rounded-xl bg-card border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 flex flex-col animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Github className="w-4 h-4" /> Code
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
