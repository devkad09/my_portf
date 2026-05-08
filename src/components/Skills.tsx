const skills = [
  "HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS", 
  "Git", "GitHub", "Responsive Design", "REST APIs", "UI/UX Design", "Vite"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">My Skills</h2>
          <h3 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
            Technical <span className="text-accent">Proficiency.</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            I specialize in modern frontend technologies, focusing on creating seamless user experiences with clean, maintainable code.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="px-6 py-4 bg-background border border-border rounded-2xl flex items-center justify-center hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group"
            >
              <span className="font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
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
