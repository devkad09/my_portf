const experiences = [
  {
    company: "Formgrid.dev",
    role: "Frontend Engineer",
    period: "2026 — Present",
    description: "Defining technical documentation standards and building modular interface components for developer-centric tools. Emphasizing clean architecture and scalable design systems.",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "2023 — Present",
    description: "Collaborated directly with clients to develop responsive, user-centric web applications. Focused on translating brand identities into high-fidelity digital experiences.",
  },
];

const Experience = () => (
  <section id="experience" className="py-24 px-6 md:px-12 bg-editorial-bg">
    <div className="container mx-auto max-w-4xl">
      
      <div className="text-center mb-20">
        <h2 className="font-serif text-4xl sm:text-5xl text-editorial-text mb-4">
          Professional<br />
          <span className="italic text-editorial-accent">Journey.</span>
        </h2>
        <div className="w-12 h-[1px] bg-editorial-accent mx-auto" />
      </div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group">
            
            <div className="md:col-span-3">
              <span className="text-sm font-serif italic text-editorial-accent">{exp.period}</span>
            </div>
            
            <div className="md:col-span-9 relative">
              {/* Subtle line connection */}
              <div className="hidden md:block absolute -left-12 top-2 bottom-[-4rem] w-[1px] bg-editorial-border group-last:hidden" />
              <div className="hidden md:block absolute -left-[3.2rem] top-2 w-2 h-2 rounded-full border border-editorial-accent bg-editorial-bg" />

              <h3 className="font-serif text-2xl text-editorial-text mb-1">{exp.role}</h3>
              <p className="text-sm uppercase tracking-widest text-editorial-muted mb-4">{exp.company}</p>
              <p className="text-editorial-text/80 text-balance leading-relaxed">
                {exp.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Experience;
