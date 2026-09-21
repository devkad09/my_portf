import { CONFIRMED_TECHNOLOGIES } from "@/data/technologies";
import TechnologyCard from "./TechnologyCard";
import SectionLabel from "./SectionLabel";

export const Skills = () => {
  const allTechs = Object.values(CONFIRMED_TECHNOLOGIES);

  const frontendTechs = allTechs.filter((t) => t.category === "frontend");
  const backendTechs = allTechs.filter((t) => t.category === "backend");
  const databaseTechs = allTechs.filter((t) => t.category === "database");
  const toolTechs = allTechs.filter((t) => t.category === "tools");

  return (
    <section
      id="stack"
      className="py-24 sm:py-32 bg-white border-b border-slate-100 scroll-mt-16"
      aria-labelledby="stack-heading"
    >
      <div id="skills" className="sr-only" />
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <SectionLabel number="05" label="STACK" />
          <h2 id="stack-heading" className="section-heading text-3xl sm:text-5xl">
            TECH STACK
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Technologies and tools confirmed in my daily engineering workflow and ongoing backend learning.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-14">
          {/* 1. FRONTEND */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2.5 border-b border-slate-200">
              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                01 / FRONTEND
              </h3>
              <span className="font-mono text-xs text-slate-500">
                Component architecture, client state & responsive layouts
              </span>
            </div>

            <div className="grid gap-3 grid-cols-1 xxs:grid-cols-2 lg:grid-cols-3">
              {frontendTechs.map((tech) => (
                <TechnologyCard key={tech.id} technology={tech} />
              ))}
            </div>
          </div>

          {/* 2. BACKEND */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2.5 border-b border-slate-200">
              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                02 / BACKEND
              </h3>
              <span className="font-mono text-xs text-slate-500">
                Server logic, routing, request lifecycles & APIs (Active Learning)
              </span>
            </div>

            <div className="grid gap-3 grid-cols-1 xxs:grid-cols-2 lg:grid-cols-2">
              {backendTechs.map((tech) => (
                <TechnologyCard key={tech.id} technology={tech} />
              ))}
            </div>
          </div>

          {/* 3. DATABASE */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2.5 border-b border-slate-200">
              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                03 / DATABASE
              </h3>
              <span className="font-mono text-xs text-slate-500">
                Relational schemas, queries & document storage
              </span>
            </div>

            <div className="grid gap-3 grid-cols-1 xxs:grid-cols-2 lg:grid-cols-2">
              {databaseTechs.map((tech) => (
                <TechnologyCard key={tech.id} technology={tech} />
              ))}
            </div>
          </div>

          {/* 4. TOOLS */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2.5 border-b border-slate-200">
              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                04 / TOOLS
              </h3>
              <span className="font-mono text-xs text-slate-500">
                Version control, development environment & cloud deployment
              </span>
            </div>

            <div className="grid gap-3 grid-cols-1 xxs:grid-cols-2 lg:grid-cols-4">
              {toolTechs.map((tech) => (
                <TechnologyCard key={tech.id} technology={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
