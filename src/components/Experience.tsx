const experiences = [
  {
    company: "Formgrid.dev",
    role: "Frontend Engineer",
    period: "2026 — Present",
    description: "Building modern interface components and documentation systems for developer tools with a focus on scalable design, accessibility, and clarity.",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "2023 — Present",
    description: "Partnering with founders and brands to build responsive, user-focused web applications that reflect strong visual direction and reliable performance.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-20 reveal">
          <p className="section-title">Professional path</p>
          <h2 className="section-heading">Experience shaped by product-first engineering.</h2>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="glass-panel group overflow-hidden rounded-[3rem] p-8 md:p-12 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="grid gap-6 lg:grid-cols-[0.3fr_0.7fr] items-start">
                <div className="space-y-5">
                  <span className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.32em] text-accent">
                    {exp.period}
                  </span>
                  <h4 className="text-lg font-black uppercase tracking-[0.2em] text-white">{exp.company}</h4>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4">{exp.role}</h3>
                  <p className="text-white/65 leading-relaxed text-base">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

