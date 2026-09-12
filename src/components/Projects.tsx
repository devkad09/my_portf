import { useState } from "react";
import {
  Sparkles,
  ArrowUpRight,
  Github,
  ExternalLink,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { PROJECTS, CASE_STUDIES, Project, CaseStudy } from "@/data/portfolioData";
import { CONFIRMED_TECHNOLOGIES } from "@/data/technologies";
import CaseStudyModal from "./CaseStudyModal";

// Helper to map technology name string to confirmed SVG tech icon if present
const techNameToKey: Record<string, string> = {
  "React 18": "react",
  "React": "react",
  "TypeScript": "typescript",
  "Tailwind CSS": "tailwindcss",
  "Vite": "vite",
  "Supabase": "supabase",
  "Zod": "typescript", // associated type contract
};

export const Projects = () => {
  const [filter, setFilter] = useState<"all" | "frontend" | "fullstack" | "uiux">("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const handleOpenCaseStudy = (projectId: string) => {
    const study = CASE_STUDIES.find((c) => c.projectId === projectId);
    if (study) {
      setSelectedCaseStudy(study);
    }
  };

  return (
    <>
      <section
        id="projects"
        className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-white scroll-mt-16"
        aria-labelledby="projects-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-100">
            <div className="space-y-3 max-w-2xl">
              <p className="section-eyebrow">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Featured Projects</span>
              </p>
              <h2 id="projects-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl">
                Featured software &{" "}
                <span className="text-slate-500">
                  applications
                </span>
              </h2>
              <p className="text-base text-slate-600">
                Real web applications engineered with clean component architecture, strict type contracts, and modern performance standards.
              </p>
            </div>

            {/* Filter Tabs: All | Frontend | Full Stack | UI/UX */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 p-1 rounded-2xl bg-slate-100 border border-slate-200 self-start max-w-full overflow-x-auto">
              {[
                { id: "all", label: "All" },
                { id: "frontend", label: "Frontend" },
                { id: "fullstack", label: "Full Stack" },
                { id: "uiux", label: "UI/UX" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id as any)}
                  className={`px-3 sm:px-3.5 py-1.5 min-h-[36px] rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    filter === tab.id
                      ? "bg-white text-blue-700 shadow-xs border border-blue-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards */}
          <div className="space-y-8 sm:space-y-10">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-all p-5 sm:p-8 lg:p-10 shadow-xs hover:shadow-md group"
              >
                <div
                  className={`grid gap-6 sm:gap-8 lg:gap-12 items-center ${
                    idx % 2 === 1
                      ? "lg:grid-cols-[1.1fr_0.9fr]"
                      : "lg:grid-cols-[0.9fr_1.1fr]"
                  }`}
                >
                  {/* Project Screenshot */}
                  <div className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={`${project.title} Screenshot`}
                        className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/95 text-slate-800 border border-slate-200 shadow-xs">
                      {project.categoryLabel}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 sm:space-y-5">
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono text-blue-600 uppercase tracking-wider font-semibold">
                        {project.status}
                      </span>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-500">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {project.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Verified Project Technologies with SVG Logos */}
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                        Technologies Used:
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((t) => {
                          const techKey = techNameToKey[t];
                          const techObj = techKey ? CONFIRMED_TECHNOLOGIES[techKey] : null;

                          return (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-mono bg-slate-50 border border-slate-200 text-slate-700 hover:border-slate-300 transition-colors"
                            >
                              {techObj && (
                                <span
                                  className="w-3.5 h-3.5 flex items-center justify-center shrink-0"
                                  dangerouslySetInnerHTML={{ __html: techObj.svgIcon }}
                                />
                              )}
                              <span>{t}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action Buttons - Min 44px touch targets */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 font-semibold bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-xs min-h-[44px] h-11 px-4 sm:px-5 rounded-xl text-xs transition-colors cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs min-h-[44px] h-11 px-4 sm:px-5"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code Repository</span>
                      </a>

                      {CASE_STUDIES.some((c) => c.projectId === project.id) && (
                        <button
                          type="button"
                          onClick={() => handleOpenCaseStudy(project.id)}
                          className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 min-h-[44px] h-11 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors cursor-pointer border border-blue-200/80"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span>Case Study</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </>
  );
};

export default Projects;
