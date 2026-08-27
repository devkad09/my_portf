import { useState } from "react";

/* ── Icons (inline SVG) ── */
const ReactIcon = () => (
  <svg className="w-7 h-7" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TSIcon = () => (
  <svg className="w-7 h-7 rounded-md" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="16" fill="#3178C6" />
    <path d="M68 62.5H60V37.5H48V30.5H72V37.5H60V62.5H68Z" fill="white" />
    <path d="M44.5 45.5C44.5 41.5 41.5 39.5 37 39.5C32.5 39.5 29.5 41.5 29.5 45.5C29.5 50.5 44.5 50.5 44.5 56.5C44.5 60.5 41 62.5 37 62.5C32 62.5 28.5 59.5 28.5 55.5H35.5C35.5 57 37 58 39 58C40.5 58 41.5 57.5 41.5 56.5C41.5 52.5 26.5 52.5 26.5 46.5C26.5 42.5 30 39.5 36.5 39.5C41.5 39.5 44.5 42.5 44.5 46.5H44.5Z" fill="white" />
  </svg>
);

const NextjsIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#000" stroke="rgba(255,255,255,0.15)" />
    <path d="M17 17L9.25 7.25V16.25H8.25V6.75H9.75L15.85 14.3V6.75H17.25V17H17Z" fill="white" />
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.026 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.537 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.976 12 6.001 12z" fill="#38BDF8" />
  </svg>
);

const JSIcon = () => (
  <svg className="w-7 h-7 rounded-md" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="3" fill="#F7DF1E" />
    <path d="M12.9 14.5c.3.8.9 1.4 1.8 1.4 1 0 1.5-.5 1.5-1.5v-6.9h2.1v6.9c0 2.2-1.3 3.4-3.6 3.4-2.1 0-3.3-1.1-3.8-2.3l2-.9zm-6.2 1c.5.8 1.1 1.4 2.1 1.4.9 0 1.5-.4 1.5-1.1 0-.8-.7-1.1-1.8-1.6-1.7-.7-3.1-1.3-3.1-3.3 0-1.8 1.4-3.2 3.5-3.2 1.8 0 3 1 3.5 2.3l-1.9.9c-.3-.7-.9-1.2-1.6-1.2-.8 0-1.2.4-1.2.9 0 .6.4.9 1.4 1.3 1.9.8 3.5 1.4 3.5 3.6 0 2.1-1.6 3.4-3.8 3.4-2.4 0-3.9-1.2-4.4-2.8l2-.9z" fill="#000" />
  </svg>
);

const NodeIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3l7 4v8l-7 4-7-4V9l7-4z" fill="#339933" opacity="0.3" />
    <path d="M12 5l7 4v8l-7 4-7-4V9l7-4z" stroke="#339933" strokeWidth="1" fill="none" />
    <circle cx="12" cy="12" r="3" fill="#339933" />
  </svg>
);

const MongoIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <path d="M12 1.5C12 1.5 6.5 7.5 6.5 12c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-4.5-5.5-10.5-5.5-10.5z" fill="#47A248" />
    <path d="M12 1.5v21" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const FirebaseIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <path d="M3.89 15.75L12 1.7c.1-.2.4-.2.5 0l2.23 3.85-8.84 10.2z" fill="#FFC107" />
    <path d="M16.63 8.35L20.1 14.3c.2.3.1.7-.2.8L12 19.3l4.63-10.95z" fill="#FF3D00" />
    <path d="M12 19.3L3.89 15.75c-.3-.1-.4-.5-.2-.7L12 1.7v17.6z" fill="#F4B400" />
  </svg>
);

const GitIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <path d="M23.3 11.2L12.8.7c-.9-.9-2.5-.9-3.4 0L.7 9.4c-.9.9-.9 2.5 0 3.4l10.5 10.5c.9.9 2.5.9 3.4 0l8.7-8.7c.9-.9.9-2.5 0-3.4z" fill="#F05032" />
    <path d="M18.889 11.979a1.644 1.644 0 00-.776-1.4v-2.61a1.646 1.646 0 10-1.396 0v2.603a1.643 1.643 0 00-.819 1.407c0 .605.328 1.13.818 1.417l-1.838 1.838a1.645 1.645 0 10.987.987l1.832-1.832a1.643 1.643 0 001.192.007c.488-.287.818-.81.818-1.417z" fill="white" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ReduxIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <path d="M18.3 5.7c-.5-.9-1.4-1.4-2.4-1.4-.6 0-1.2.2-1.7.5L8.7 8.3C7.2 9.2 6.2 10.8 6.2 12.5s1 3.3 2.5 4.2l5.5 3.5c.5.3 1.1.5 1.7.5 1 0 1.9-.5 2.4-1.4.7-1.3.4-3-.9-3.8l-4.1-2.5 4.1-2.5c1.3-.8 1.6-2.5.9-3.8z" fill="#764ABC" />
  </svg>
);

const ExpressIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#1e293b" />
    <text x="3.5" y="15.5" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold" fontSize="9" letterSpacing="-0.5">EX</text>
    <path d="M18 8L14 12L18 16M13 12H9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ViteIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <path d="M22.1 2.2L12.5 21.6 2.9 2.2h19.2z" fill="#41D1FF" />
    <path d="M19.8 1.5L12 17.1 4.2 1.5h15.6z" fill="#BD34FE" />
    <path d="M12.5 6L11 11h3.5L11.5 18l5-8.5H13l1-3.5z" fill="#FFD600" />
  </svg>
);

const HTMLIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <path d="M1.5 21.75L3.375 3h17.25l1.875 18.75L12 24.5l-10.5-2.75z" fill="#E34F26" />
    <path d="M12 22.188l8.313-2.188L18.688 4.688H12v17.5z" fill="#EF652A" />
    <path d="M12 9.438h5.313L17 12.875H12V9.437zM12 16.25l-0.038.01-3.6-1.013-.225-2.613H6.075l.45 5.063L12 19.125V16.25z" fill="#EBEBEB" />
    <path d="M12 9.438V4.688h8.625l-.263 2.625H12v2.125zM12 12.875h5v3.375l-5 1.375V12.875z" fill="#FFFFFF" />
  </svg>
);

const CSSIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <path d="M1.5 21.75L3.375 3h17.25l1.875 18.75L12 24.5l-10.5-2.75z" fill="#1572B6" />
    <path d="M12 22.188l8.313-2.188L18.688 4.688H12v17.5z" fill="#33A9DC" />
    <path d="M12 9.438H6.563l-.225-2.625H12v2.625zm0 6.812l-3.6-1.013-.225-2.612H6.075l.45 5.062L12 19.125V16.25z" fill="#EBEBEB" />
    <path d="M12 4.688h8.625l-.263 2.625H12v-2.625zm0 8.187h5v3.375l-5 1.375V12.875z" fill="#FFFFFF" />
  </svg>
);

const RestIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const FigmaIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
    <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
    <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
    <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
    <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
  </svg>
);

const DocIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const AccessibilityIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="2" />
    <path d="M4 9h16" />
    <path d="M12 9v12" />
    <path d="M6.5 17.5l5.5-3.5 5.5 3.5" />
  </svg>
);

const ComponentIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const MicrosoftOfficeIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="9.5" height="9.5" rx="1.5" fill="#F25022" />
    <rect x="12.5" y="2" width="9.5" height="9.5" rx="1.5" fill="#7FBA00" />
    <rect x="2" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#00A4EF" />
    <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#FFB900" />
  </svg>
);

const categories = [
  {
    name: "Frontend Development",
    accent: "violet",
    skills: [
      { name: "React 18", icon: <ReactIcon /> },
      { name: "TypeScript", icon: <TSIcon /> },
      { name: "JavaScript", icon: <JSIcon /> },
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
      { name: "Next.js", icon: <NextjsIcon /> },
      { name: "Vite", icon: <ViteIcon /> },
      { name: "Context API", icon: <ReduxIcon /> },
      { name: "HTML5 / CSS3", icon: <HTMLIcon /> },
    ],
  },
  {
    name: "Backend & APIs",
    accent: "cyan",
    skills: [
      { name: "Node.js", icon: <NodeIcon /> },
      { name: "REST APIs", icon: <RestIcon /> },
      { name: "MongoDB", icon: <MongoIcon /> },
      { name: "Express", icon: <ExpressIcon /> },
    ],
  },
  {
    name: "Tools & Standards",
    accent: "emerald",
    skills: [
      { name: "Git & GitHub", icon: <GithubIcon /> },
      { name: "Figma", icon: <FigmaIcon /> },
      { name: "MS Office Suite", icon: <MicrosoftOfficeIcon /> },
      { name: "WCAG 2.1 A11y", icon: <AccessibilityIcon /> },
      { name: "Core Web Vitals", icon: <RestIcon /> },
    ],
  },
  {
    name: "Technical Writing & Systems",
    accent: "blue",
    skills: [
      { name: "Technical Writing", icon: <DocIcon /> },
      { name: "Doc Systems", icon: <DocIcon /> },
      { name: "Component Libraries", icon: <ComponentIcon /> },
      { name: "Responsive Design", icon: <ComponentIcon /> },
    ],
  },
];

const accentMap: Record<string, { border: string; bg: string; text: string; tag: string; glow: string }> = {
  violet: {
    border: "border-indigo-200 dark:border-indigo-500/40",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    text: "text-indigo-700 dark:text-indigo-300",
    tag: "tag-violet",
    glow: "hover:border-indigo-400 dark:hover:border-indigo-500/50",
  },
  cyan: {
    border: "border-cyan-200 dark:border-cyan-500/40",
    bg: "bg-cyan-50 dark:bg-cyan-500/10",
    text: "text-cyan-700 dark:text-cyan-300",
    tag: "tag-cyan",
    glow: "hover:border-cyan-400 dark:hover:border-cyan-500/50",
  },
  emerald: {
    border: "border-emerald-200 dark:border-emerald-500/40",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    text: "text-emerald-700 dark:text-emerald-300",
    tag: "tag-emerald",
    glow: "hover:border-emerald-400 dark:hover:border-emerald-500/50",
  },
  blue: {
    border: "border-blue-200 dark:border-blue-500/40",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-300",
    tag: "tag-blue",
    glow: "hover:border-blue-400 dark:hover:border-blue-500/50",
  },
};

const Skills = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 overflow-hidden relative">
      <div className="glow-orb glow-cyan w-[500px] h-[500px] -left-48 top-1/2 -translate-y-1/2 opacity-30" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <p className="section-eyebrow justify-center">
            Skills & Tech Stack
          </p>
          <h2 className="section-heading">
            Tools I use to build <span className="text-blue-600 dark:text-blue-400">accessible & scalable software</span>
          </h2>
          <p className="section-copy mx-auto max-w-xl text-base sm:text-lg">
            A curated set of technologies I rely on daily — from React component systems to technical documentation.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const accent = accentMap[cat.accent];
            return (
              <div
                key={cat.name}
                className="bento-card flex flex-col justify-between"
              >
                {/* Category header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base tracking-tight">{cat.name}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${accent.border} ${accent.bg} ${accent.text}`}>
                    {cat.skills.length} tools
                  </span>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-2.5">
                  {cat.skills.map((skill) => {
                    const isHov = hovered === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHovered(skill.name)}
                        onMouseLeave={() => setHovered(null)}
                        className={`flex flex-col items-center gap-2 rounded-2xl border p-3 text-center cursor-default transition-all duration-200 ${
                          isHov
                            ? `${accent.border} ${accent.bg} shadow-md scale-[1.03]`
                            : "border-slate-200 bg-slate-50 hover:border-slate-300 dark:border-slate-800/80 dark:bg-slate-950/60 dark:hover:border-slate-700"
                        }`}
                      >
                        <div className={`transition-transform duration-200 ${isHov ? "scale-110" : ""}`}>
                          {skill.icon}
                        </div>
                        <span className={`text-[10px] font-semibold tracking-wide leading-tight ${isHov ? accent.text : "text-slate-600 dark:text-slate-400"}`}>
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
