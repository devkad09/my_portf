import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Formgrid.dev",
    role: "Frontend Engineer",
    period: "2026 — PRESENT",
    description: "Defining technical documentation standards and building modular interface components for developer-centric tools.",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "2023 — present",
    description: "Developed responsive and user-friendly web applications for various clients using React, TypeScript, and Tailwind CSS.",
  },
];

const Experience = () => (
  <section id="experience" className="py-32 relative overflow-hidden bg-background">
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-20 reveal">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
          Career <span className="text-primary">Journey</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          My professional milestones and contributions in the tech ecosystem.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto reveal">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 md:pl-0">
              {/* Dot */}
              <div className="absolute left-[-2px] md:left-1/2 md:-translate-x-1/2 top-0 w-9 h-9 rounded-full glass border-white/20 flex items-center justify-center z-10 shadow-xl shadow-primary/10">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              </div>

              <div className={`md:w-[45%] ${index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}`}>
                <div className="bento-card group p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
                    {exp.period}
                  </span>
                  <h3 className="font-heading text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="font-bold text-foreground/60 mb-4">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
