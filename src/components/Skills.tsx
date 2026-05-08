const skillCategories = [
  {
    title: "Core Technologies",
    items: ["React", "TypeScript", "JavaScript (ES6+)"]
  },
  {
    title: "Styling & UI",
    items: ["Tailwind CSS", "CSS Modules", "Framer Motion"]
  },
  {
    title: "Architecture",
    items: ["Next.js", "State Management", "API Integration"]
  },
  {
    title: "Practices",
    items: ["Responsive Design", "Accessibility (a11y)", "Git / Version Control"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-editorial-white border-y border-editorial-border">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl sm:text-5xl text-editorial-text mb-6">
              Technical<br />
              <span className="italic text-editorial-accent">Expertise.</span>
            </h2>
            <p className="text-editorial-muted text-balance">
              A curated toolkit focused on modern paradigms, type safety, and exceptional user experiences.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xs uppercase tracking-widest text-editorial-accent mb-6 border-b border-editorial-border pb-3">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map(item => (
                    <li key={item} className="font-serif text-xl text-editorial-text">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
