const skills = [
  "HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", 
  "Node.js", "Express", "MongoDB", "Firebase", "Redux",
  "Git", "GitHub", "Responsive Design", "REST APIs", "Next.js", "Vite"
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24 reveal">
          <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">Core Competencies</h2>
          <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Tools, stacks, and frameworks I use every day.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {skills.map((skill, i) => (
            <div
              key={skill}
              className="glass rounded-[2rem] border border-white/10 p-6 text-center transition-transform duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <p className="text-base font-bold uppercase tracking-[0.2em] text-white">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

