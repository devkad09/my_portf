const skills = [
  "HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", 
  "Git", "GitHub", "Responsive Design", "REST APIs", "Next.js", "Vite"
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="text-center mb-24 reveal">
          <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">The Toolkit</h2>
          <h3 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-gradient leading-tight">
            TECHNICAL <br />
            ARSENAL.
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto reveal">
          {skills.map((skill, i) => (
            <div 
              key={skill} 
              className="px-6 py-3 md:px-8 md:py-4 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="font-bold text-sm tracking-widest text-white/40 group-hover:text-white transition-colors uppercase">
                {skill}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

