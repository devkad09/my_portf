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
  <section id="experience" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-6">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal">
        <span className="text-primary">Experience</span>
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12 reveal" />

      <div className="relative max-w-3xl mx-auto reveal">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-16 md:pl-0">
              {/* Dot */}
              <div className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                <Briefcase className="w-3.5 h-3.5 text-primary-foreground" />
              </div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:ml-0 md:text-right" : "md:pl-16 md:ml-auto md:text-left"}`}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-md group">
                  <span className="text-primary text-sm font-semibold tracking-wider">{exp.period}</span>
                  <h3 className="font-heading text-xl font-bold mt-1 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="font-medium text-foreground/80">{exp.company}</p>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
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
