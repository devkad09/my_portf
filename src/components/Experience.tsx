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
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 reveal">
          <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">Professional Path</h2>
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight">
            Experience shaped by product-first engineering.
          </h3>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-12 shadow-[0_25px_80px_-50px_rgba(0,0,0,0.7)] reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="grid gap-4 md:gap-8 lg:grid-cols-[0.3fr_0.7fr] items-start">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.32em] text-accent">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-black uppercase tracking-[0.2em] text-white">{exp.company}</h4>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-4">{exp.role}</h3>
                  <p className="text-white/50 leading-relaxed text-lg">{exp.description}</p>
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

