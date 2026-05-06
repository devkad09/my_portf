import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Git & GitHub", level: 82 },
  { name: "Responsive Design", level: 92 },
  { name: "UI/UX Basics", level: 75 },
];

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <div 
              key={skill.name} 
              className="reveal bento-card group p-6 flex flex-col justify-between"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="font-heading font-bold text-lg group-hover:text-primary transition-colors">{skill.name}</span>
                  <span className="text-primary text-xs font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: visible ? `${skill.level}%` : "0%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
