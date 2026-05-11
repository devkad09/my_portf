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

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 relative overflow-hidden">
      
      <div className="container mx-auto max-w-7xl">
        
        <div className="mb-24 text-right reveal">
          <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">Professional Path</h2>
          <h3 className="font-heading text-5xl lg:text-7xl font-black text-gradient leading-tight">
            WORK <br />
            EXPERIENCE.
          </h3>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div 
              key={i}
              className="group relative p-12 glass rounded-[3rem] border-white/5 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-3">
                  <div className="text-accent text-xs font-black tracking-widest uppercase mb-2">{exp.period}</div>
                  <h4 className="font-heading text-xl font-bold text-white/50 group-hover:text-white transition-colors uppercase tracking-wider">
                    {exp.company}
                  </h4>
                </div>

                <div className="lg:col-span-9">
                  <h3 className="font-heading text-3xl lg:text-4xl font-black text-white mb-6">
                    {exp.role}
                  </h3>
                  <p className="text-white/40 text-lg leading-relaxed font-light max-w-3xl">
                    {exp.description}
                  </p>
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

