import { useState } from "react";

// ── Vector Skill Logos (Optimized & Responsive) ───────────────────────────

const ReactIcon = () => (
  <svg className="w-8 h-8 transition-transform duration-700 group-hover:rotate-[360deg]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const TSIcon = () => (
  <svg className="w-8 h-8 rounded-lg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="16" fill="#3178C6"/>
    <path d="M68 62.5H60V37.5H48V30.5H72V37.5H60V62.5H68Z" fill="white"/>
    <path d="M44.5 45.5C44.5 41.5 41.5 39.5 37 39.5C32.5 39.5 29.5 41.5 29.5 45.5C29.5 50.5 44.5 50.5 44.5 56.5C44.5 60.5 41 62.5 37 62.5C32 62.5 28.5 59.5 28.5 55.5H35.5C35.5 57 37 58 39 58C40.5 58 41.5 57.5 41.5 56.5C41.5 52.5 26.5 52.5 26.5 46.5C26.5 42.5 30 39.5 36.5 39.5C41.5 39.5 44.5 42.5 44.5 46.5H44.5Z" fill="white"/>
  </svg>
);

const HTMLIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 21.75L3.375 3h17.25l1.875 18.75L12 24.5l-10.5-2.75z" fill="#E34F26"/>
    <path d="M12 22.188l8.313-2.188L18.688 4.688H12v17.5z" fill="#EF652A"/>
    <path d="M12 9.438h5.313L17 12.875H12V9.437zM12 16.25l-0.038.01-3.6-1.013-.225-2.613H6.075l.45 5.063L12 19.125V16.25z" fill="#EBEBEB"/>
    <path d="M12 9.438V4.688h8.625l-.263 2.625H12v2.125zM12 12.875h5v3.375l-5 1.375V12.875z" fill="#FFFFFF"/>
  </svg>
);

const CSSIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 21.75L3.375 3h17.25l1.875 18.75L12 24.5l-10.5-2.75z" fill="#1572B6"/>
    <path d="M12 22.188l8.313-2.188L18.688 4.688H12v17.5z" fill="#33A9DC"/>
    <path d="M12 9.438H6.563l-.225-2.625H12v2.625zm0 6.812l-3.6-1.013-.225-2.612H6.075l.45 5.062L12 19.125V16.25z" fill="#EBEBEB"/>
    <path d="M12 4.688h8.625l-.263 2.625H12v-2.625zm0 8.187h5v3.375l-5 1.375V12.875z" fill="#FFFFFF"/>
  </svg>
);

const JSIcon = () => (
  <svg className="w-8 h-8 rounded-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
    <path d="M12.9 14.5c.3.8.9 1.4 1.8 1.4 1 0 1.5-.5 1.5-1.5v-6.9h2.1v6.9c0 2.2-1.3 3.4-3.6 3.4-2.1 0-3.3-1.1-3.8-2.3l2-.9zm-6.2 1c.5.8 1.1 1.4 2.1 1.4.9 0 1.5-.4 1.5-1.1 0-.8-.7-1.1-1.8-1.6-1.7-.7-3.1-1.3-3.1-3.3 0-1.8 1.4-3.2 3.5-3.2 1.8 0 3 1 3.5 2.3l-1.9.9c-.3-.7-.9-1.2-1.6-1.2-.8 0-1.2.4-1.2.9 0 .6.4.9 1.4 1.3 1.9.8 3.5 1.4 3.5 3.6 0 2.1-1.6 3.4-3.8 3.4-2.4 0-3.9-1.2-4.4-2.8l2-.9z" fill="#000000"/>
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.026 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.537 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.976 12 6.001 12z" fill="#38BDF8"/>
  </svg>
);

const NodeIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L2 6.8v10.4L12 23l10-5.8V6.8L12 1zm8.3 15.2L12 21.1 3.7 16.2V7.8L12 2.9l8.3 4.9v8.4z" fill="#339933"/>
    <path d="M12 5.5l-6 3.5v7l6 3.5 6-3.5v-7l-6-3.5zm4.2 9.7l-4.2 2.4-4.2-2.4V9.8l4.2-2.4 4.2 2.4v5.4z" fill="#339933" opacity="0.5"/>
    <circle cx="12" cy="12" r="2.5" fill="#339933"/>
  </svg>
);

const ExpressIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#1e293b" className="transition-colors group-hover:fill-accent"/>
    <text x="3.5" y="15.5" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold" fontSize="9" letterSpacing="-0.5">EX</text>
    <path d="M18 8L14 12L18 16M13 12H9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MongoIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5C12 1.5 6.5 7.5 6.5 12c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-4.5-5.5-10.5-5.5-10.5zm.7 15.3c-.4.4-1 .4-1.4 0-1.8-1.8-2.3-4.5-2.3-4.8 0-.4.3-.7.7-.7.1 0 .2 0 .2.1.1 0 .5 2.1 1.9 3.5l.2.2.2-.2c1.4-1.4 1.8-3.5 1.9-3.5.1-.1.2-.1.2-.1.4 0 .7.3.7.7 0 .3-.5 3-2.3 4.8z" fill="#47A248"/>
    <path d="M12 1.5v21" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const FirebaseIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89 15.75L12 1.7c.1-.2.4-.2.5 0l2.23 3.85-8.84 10.2z" fill="#FFC107"/>
    <path d="M16.63 8.35L20.1 14.3c.2.3.1.7-.2.8L12 19.3l4.63-10.95z" fill="#FF3D00"/>
    <path d="M12 19.3L3.89 15.75c-.3-.1-.4-.5-.2-.7L12 1.7v17.6z" fill="#F4B400"/>
  </svg>
);

const ReduxIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3 5.7c-.5-.9-1.4-1.4-2.4-1.4-.6 0-1.2.2-1.7.5L8.7 8.3C7.2 9.2 6.2 10.8 6.2 12.5s1 3.3 2.5 4.2l5.5 3.5c.5.3 1.1.5 1.7.5 1 0 1.9-.5 2.4-1.4.7-1.3.4-3-.9-3.8l-4.1-2.5 4.1-2.5c1.3-.8 1.6-2.5.9-3.8z" fill="#764ABC"/>
  </svg>
);

const NextjsIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" fill="transparent"/>
    <path d="M17 17L9.25 7.25V16.25H8.25V6.75H9.75L15.85 14.3V6.75H17.25V17H17Z" fill="currentColor"/>
  </svg>
);

const ViteIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.1 2.2L12.5 21.6 2.9 2.2h19.2z" fill="url(#viteGradient)"/>
    <path d="M19.8 1.5L12 17.1 4.2 1.5h15.6z" fill="#BD34FE"/>
    <path d="M12.5 6L11 11h3.5L11.5 18l5-8.5H13l1-3.5z" fill="#FFD600"/>
    <defs>
      <linearGradient id="viteGradient" x1="2.9" y1="2.2" x2="22.1" y2="2.2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF"/>
        <stop offset="1" stopColor="#BD34FE"/>
      </linearGradient>
    </defs>
  </svg>
);

const GitIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3 11.2L12.8.7c-.9-.9-2.5-.9-3.4 0L.7 9.4c-.9.9-.9 2.5 0 3.4l10.5 10.5c.9.9 2.5.9 3.4 0l8.7-8.7c.9-.9.9-2.5 0-3.4z" fill="#F05032"/>
    <path d="M18.889 11.979a1.644 1.644 0 00-.776-1.4v-2.61a1.646 1.646 0 10-1.396 0v2.603a1.643 1.643 0 00-.819 1.407c0 .605.328 1.13.818 1.417l-1.838 1.838a1.645 1.645 0 10.987.987l1.832-1.832a1.643 1.643 0 001.192.007c.488-.287.818-.81.818-1.417z" fill="white"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
  </svg>
);

const ResponsiveIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <rect x="17" y="11" width="5" height="7" rx="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

const RestIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="none"/>
    <path d="M3 5V19c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="none"/>
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3"/>
    <path d="M12 9v6" strokeWidth="1.5"/>
  </svg>
);

// ── Skills Categories Definition ──────────────────────────────────────────

const categories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React", color: "#61DAFB", glowColor: "rgba(97, 218, 251, 0.12)", icon: <ReactIcon /> },
      { name: "TypeScript", color: "#3178C6", glowColor: "rgba(49, 120, 198, 0.12)", icon: <TSIcon /> },
      { name: "Next.js", color: "#64748B", glowColor: "rgba(100, 116, 139, 0.12)", icon: <NextjsIcon /> },
      { name: "Tailwind CSS", color: "#38BDF8", glowColor: "rgba(56, 189, 248, 0.12)", icon: <TailwindIcon /> },
      { name: "JavaScript", color: "#F7DF1E", glowColor: "rgba(247, 223, 30, 0.08)", icon: <JSIcon /> },
      { name: "Redux", color: "#764ABC", glowColor: "rgba(118, 74, 188, 0.12)", icon: <ReduxIcon /> },
      { name: "HTML5", color: "#E34F26", glowColor: "rgba(227, 79, 38, 0.12)", icon: <HTMLIcon /> },
      { name: "CSS3", color: "#1572B6", glowColor: "rgba(21, 114, 182, 0.12)", icon: <CSSIcon /> },
      { name: "Vite", color: "#FFC212", glowColor: "rgba(255, 194, 18, 0.08)", icon: <ViteIcon /> }
    ]
  },
  {
    name: "Backend & Systems",
    skills: [
      { name: "Node.js", color: "#339933", glowColor: "rgba(51, 153, 51, 0.12)", icon: <NodeIcon /> },
      { name: "Express", color: "#a855f7", glowColor: "rgba(168, 85, 247, 0.12)", icon: <ExpressIcon /> },
      { name: "MongoDB", color: "#47A248", glowColor: "rgba(71, 162, 72, 0.12)", icon: <MongoIcon /> },
      { name: "Firebase", color: "#FFCA28", glowColor: "rgba(255, 202, 40, 0.1)", icon: <FirebaseIcon /> },
      { name: "REST APIs", color: "#10B981", glowColor: "rgba(16, 185, 129, 0.12)", icon: <RestIcon /> }
    ]
  },
  {
    name: "Workflow & Operations",
    skills: [
      { name: "Git", color: "#F05032", glowColor: "rgba(240, 80, 50, 0.12)", icon: <GitIcon /> },
      { name: "GitHub", color: "#f43f5e", glowColor: "rgba(244, 63, 94, 0.12)", icon: <GithubIcon /> },
      { name: "Responsive Design", color: "#3B82F6", glowColor: "rgba(59, 130, 246, 0.12)", icon: <ResponsiveIcon /> }
    ]
  }
];

// ── Skills Component ──────────────────────────────────────────────────────

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background glow blobbing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">Core Competencies</h2>
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight">
            Tools, stacks, and frameworks I use every day.
          </h3>
        </div>

        {/* 3-Column Categorized Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal">
          {categories.map((category, catIdx) => (
            <div
              key={category.name}
              className="glass rounded-[2.5rem] border border-white/10 p-6 sm:p-8 flex flex-col space-y-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20"
              style={{ transitionDelay: `${catIdx * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">
                  {category.name}
                </h4>
                <span className="text-[9px] font-black uppercase text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full tracking-[0.1em]">
                  {category.skills.length} Tools
                </span>
              </div>

              {/* Skills Nested Sub-grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIdx) => {
                  const isHovered = hoveredSkill === skill.name;
                  const customStyle = isHovered
                    ? {
                        borderColor: skill.color,
                        backgroundColor: skill.glowColor,
                        boxShadow: `0 12px 30px -10px ${skill.glowColor}`,
                        transform: "translateY(-3px) scale(1.02)"
                      }
                    : {};

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 text-center transition-all duration-300 cursor-default select-none"
                      style={{
                        ...customStyle,
                        transitionDelay: `${skillIdx * 20}ms`
                      }}
                    >
                      {/* Logo Icon Container */}
                      <div className="h-10 w-10 flex items-center justify-center mb-3 text-white/80 group-hover:text-white transition-colors duration-300">
                        {skill.icon}
                      </div>

                      {/* Tech Label */}
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;


