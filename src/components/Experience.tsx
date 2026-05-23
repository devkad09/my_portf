const experiences = [
  {
    company: "Formgrid.dev",
    role: "Frontend Engineer",
    period: "2026 — Present",
    type: "Full-time",
    description:
      "Building modern interface components and documentation systems for developer tools. Focused on scalable design, accessibility, and clarity — shipping clean, reusable component libraries used by developers worldwide.",
    highlights: ["Component Libraries", "Design Systems", "Accessibility", "Docs"],
    accent: "violet",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "2023 — Present",
    type: "Contract",
    description:
      "Partnering with founders and brands to build responsive, user-focused web applications. Delivering products that reflect strong visual direction and reliable performance across every project.",
    highlights: ["React Apps", "UI/UX", "Responsive Design", "Performance"],
    accent: "cyan",
  },
];

const accentMap: Record<string, { dot: string; border: string; tag: string; text: string }> = {
  violet: { dot: "bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]", border: "border-violet-500/30", tag: "border-violet-500/30 bg-violet-500/10 text-violet-300", text: "text-violet-300" },
  cyan: { dot: "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]", border: "border-cyan-500/30", tag: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300", text: "text-cyan-300" },
};

const Experience = () => (
  <section id="experience" className="py-24 md:py-36 px-4 sm:px-6 overflow-hidden relative">
    <div className="glow-emerald w-[400px] h-[400px] -right-40 bottom-0 opacity-20 absolute pointer-events-none" />

    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="mb-16 reveal">
        <p className="section-eyebrow mb-4">
          <span className="w-5 h-px bg-violet-400 rounded-full" />
          Professional path
        </p>
        <h2 className="section-heading max-w-xl">
          Experience shaped by{" "}
          <span className="grad-violet-cyan">product-first</span>{" "}
          engineering
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 space-y-6 reveal">
        {/* Vertical line */}
        <div className="timeline-line absolute left-3 top-3 bottom-3" />

        {experiences.map((exp, i) => {
          const a = accentMap[exp.accent];
          return (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className={`timeline-dot absolute -left-[21px] top-7 ${a.dot}`} />

              {/* Card */}
              <div className={`glass card-border rounded-2xl p-7 md:p-9 transition-all duration-300 hover:border-opacity-60`}>
                <div className="grid gap-6 md:grid-cols-[0.35fr_0.65fr] items-start">
                  {/* Left — company & period */}
                  <div className="space-y-3">
                    <span className={`inline-flex tag border ${a.tag}`}>{exp.period}</span>
                    <div>
                      <h4 className="font-heading font-bold text-white text-lg">{exp.company}</h4>
                      <span className={`text-[11px] font-semibold uppercase tracking-widest ${a.text}`}>{exp.type}</span>
                    </div>
                  </div>

                  {/* Right — role & desc */}
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3">{exp.role}</h3>
                    <p className="section-copy text-sm leading-relaxed mb-5">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span key={h} className="tag-gray">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;
