import { Sparkles, Code2, Server, Wrench } from "lucide-react";
import { CONFIRMED_TECHNOLOGIES } from "@/data/technologies";
import TechnologyCard from "./TechnologyCard";

export const Skills = () => {
  const allTechs = Object.values(CONFIRMED_TECHNOLOGIES);

  const frontendTechs = allTechs.filter((t) => t.category === "frontend");
  const backendTechs = allTechs.filter((t) => t.category === "backend");
  const toolTechs = allTechs.filter((t) => t.category === "tools");

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-white scroll-mt-16"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <p className="section-eyebrow">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Technology Stack</span>
          </p>
          <h2 id="skills-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl">
            Confirmed skills &{" "}
            <span className="text-slate-500">
              technologies
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Technologies and tools I actively engineer with.
          </p>
        </div>

        {/* 1. Frontend — Strong Focus */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Frontend — Strong Focus
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-200 self-start sm:self-auto">
              Core Technical Specialty
            </span>
          </div>

          <div className="grid gap-3.5 sm:gap-4 grid-cols-1 xxs:grid-cols-2 lg:grid-cols-3">
            {frontendTechs.map((tech) => (
              <TechnologyCard key={tech.id} technology={tech} />
            ))}
          </div>
        </div>

        {/* 2. Backend — Currently Learning */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  Backend — Currently Learning
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200 self-start sm:self-auto">
              Active Growth Domain
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Server-side technologies and databases I am actively studying and implementing.
          </p>

          <div className="grid gap-3.5 sm:gap-4 grid-cols-1 xxs:grid-cols-2 lg:grid-cols-4">
            {backendTechs.map((tech) => (
              <TechnologyCard key={tech.id} technology={tech} />
            ))}
          </div>
        </div>

        {/* 3. Tools & Workflow */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                <Wrench className="w-4 h-4" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Tools & Workflow
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200 self-start sm:self-auto">
              Engineering Environment
            </span>
          </div>

          <div className="grid gap-3.5 sm:gap-4 grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {toolTechs.map((tech) => (
              <TechnologyCard key={tech.id} technology={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
