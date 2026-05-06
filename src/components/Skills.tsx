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
    <section id="skills" className="py-24 bg-card/50">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12 reveal" />

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <div key={skill.name} className="reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="text-primary text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent skill-bar-fill"
                  style={{ width: visible ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
