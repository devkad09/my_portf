import { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  BookOpen,
  CircleDot,
} from "lucide-react";
import { PROJECTS, NEXT_BUILD } from "@/data/portfolioData";
import { TechLogo } from "./TechLogo";
import SectionLabel from "./SectionLabel";

export const Projects = () => {
  const [expandedNotes, setExpandedNotes] = useState<Record<string, boolean>>({
    nordhem: true, // Default open for the flagship showcase
  });

  const toggleNotes = (id: string) => {
    setExpandedNotes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="work"
      className="py-24 sm:py-32 bg-white border-b border-slate-100 scroll-mt-16"
      aria-labelledby="selected-work-heading"
    >
      <div id="projects" className="sr-only" />
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <SectionLabel number="01" label="SELECTED WORK" />
          <h2 id="selected-work-heading" className="section-heading text-3xl sm:text-5xl">
            Things I've built.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Real projects, real codebases, and actual development work. No fabricated demos.
          </p>
        </div>

        {/* Projects Stream */}
        <div className="space-y-20 sm:space-y-28">
          {PROJECTS.map((project) => {
            const isExpanded = !!expandedNotes[project.id];

            // ----------------------------------------------------
            // Project 01: Flagship Full-Width Showcase (Nordhem)
            // ----------------------------------------------------
            if (project.layoutType === "showcase") {
              return (
                <article
                  key={project.id}
                  className="space-y-8 pb-16 sm:pb-24 border-b border-slate-200/90 group"
                  aria-labelledby={`project-${project.id}-title`}
                >
                  {/* Top Metadata Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-slate-400">
                        {project.projectNumber}
                      </span>
                      <h3
                        id={`project-${project.id}-title`}
                        className="font-display font-black text-2xl sm:text-4xl text-slate-900 tracking-tight"
                      >
                        {project.title}
                      </h3>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 self-center">
                        FLAGSHIP
                      </span>
                    </div>
                    <span className="font-mono text-xs text-slate-500 tracking-wide">
                      {project.tagline}
                    </span>
                  </div>

                  {/* Large Preview */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                    <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute top-4 left-4 font-mono text-[11px] px-2.5 py-1 rounded bg-white/95 text-slate-900 border border-slate-200 shadow-2xs font-semibold">
                      {project.categoryLabel}
                    </div>
                  </div>

                  {/* Spec Grid */}
                  <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] pt-2">
                    <div className="space-y-6">
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary font-mono text-xs font-bold tracking-wider"
                        >
                          <span>LIVE PROJECT</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary font-mono text-xs font-bold tracking-wider"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>SOURCE CODE</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => toggleNotes(project.id)}
                          className="font-mono text-xs font-semibold px-4 min-h-[44px] rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span>{isExpanded ? "HIDE BUILD NOTES" : "BUILD NOTES"}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Metadata Specs Column */}
                    <div className="space-y-5 border-l border-slate-100 pl-0 md:pl-8 font-mono text-xs">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400">ROLE</span>
                        <p className="font-semibold text-slate-900">{project.role}</p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400">BUILT WITH</span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-[11px] font-medium"
                            >
                              <TechLogo name={t} className="w-3.5 h-3.5 shrink-0" ariaHidden={true} />
                              <span>{t}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400">KEY FEATURES</span>
                        <ul className="space-y-1 font-sans text-xs text-slate-600">
                          {project.keyFeatures.map((feat, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 4-Part Build Notes */}
                  {isExpanded && (
                    <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-5 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                        <span className="font-mono font-bold text-slate-900 uppercase tracking-wider">
                          BUILD NOTES &bull; {project.title}
                        </span>
                        <span className="font-mono text-[11px] text-slate-500">Engineering Review</span>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <span className="font-mono text-xs font-bold text-slate-900 block uppercase tracking-wider">
                            PROBLEM
                          </span>
                          <p className="text-slate-600 leading-relaxed font-sans text-xs sm:text-sm">
                            {project.buildNotes.problem}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <span className="font-mono text-xs font-bold text-slate-900 block uppercase tracking-wider">
                            APPROACH
                          </span>
                          <p className="text-slate-600 leading-relaxed font-sans text-xs sm:text-sm">
                            {project.buildNotes.approach}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <span className="font-mono text-xs font-bold text-slate-900 block uppercase tracking-wider">
                            CHALLENGE
                          </span>
                          <p className="text-slate-600 leading-relaxed font-sans text-xs sm:text-sm">
                            {project.buildNotes.challenge}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <span className="font-mono text-xs font-bold text-blue-700 block uppercase tracking-wider">
                            LEARNING
                          </span>
                          <p className="text-slate-700 leading-relaxed font-sans text-xs sm:text-sm">
                            {project.buildNotes.learning}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            }

            // ----------------------------------------------------
            // Project 02: Image Left / Content Right (FormFlow)
            // ----------------------------------------------------
            if (project.layoutType === "split-left") {
              return (
                <article
                  key={project.id}
                  className="space-y-8 pb-16 sm:pb-24 border-b border-slate-200/90 group"
                  aria-labelledby={`project-${project.id}-title`}
                >
                  <div className="grid gap-8 lg:grid-cols-2 items-center">
                    {/* Left Preview */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                      <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} Preview`}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute top-4 left-4 font-mono text-[11px] px-2.5 py-1 rounded bg-white/95 text-slate-900 border border-slate-200 shadow-2xs font-semibold">
                        {project.categoryLabel}
                      </div>
                    </div>

                    {/* Right Narrative */}
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <span className="font-mono text-2xl sm:text-3xl font-bold text-slate-400 block">
                          {project.projectNumber}
                        </span>
                        <h3
                          id={`project-${project.id}-title`}
                          className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight"
                        >
                          {project.title}
                        </h3>
                        <p className="font-mono text-xs text-slate-500">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technical Specs */}
                      <div className="space-y-3 font-mono text-xs pt-1">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">
                            ROLE
                          </span>
                          <span className="font-semibold text-slate-900">{project.role}</span>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                            BUILT WITH
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((t) => (
                              <span
                                key={t}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-[11px] font-medium"
                              >
                                <TechLogo name={t} className="w-3.5 h-3.5 shrink-0" ariaHidden={true} />
                                <span>{t}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                            KEY FEATURES
                          </span>
                          <ul className="space-y-1 font-sans text-xs text-slate-600">
                            {project.keyFeatures.map((feat, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary font-mono text-xs font-bold tracking-wider"
                        >
                          <span>LIVE PROJECT</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary font-mono text-xs font-bold tracking-wider"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>SOURCE CODE</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => toggleNotes(project.id)}
                          className="font-mono text-xs font-semibold px-3.5 min-h-[44px] rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span>{isExpanded ? "HIDE NOTES" : "BUILD NOTES"}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 4-Part Build Notes */}
                  {isExpanded && (
                    <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-5 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                        <span className="font-mono font-bold text-slate-900 uppercase tracking-wider">
                          BUILD NOTES &bull; {project.title}
                        </span>
                        <span className="font-mono text-[11px] text-slate-500">Engineering Review</span>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <span className="font-mono text-xs font-bold text-slate-900 block uppercase tracking-wider">
                            PROBLEM
                          </span>
                          <p className="text-slate-600 leading-relaxed font-sans text-xs sm:text-sm">
                            {project.buildNotes.problem}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <span className="font-mono text-xs font-bold text-slate-900 block uppercase tracking-wider">
                            APPROACH
                          </span>
                          <p className="text-slate-600 leading-relaxed font-sans text-xs sm:text-sm">
                            {project.buildNotes.approach}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <span className="font-mono text-xs font-bold text-slate-900 block uppercase tracking-wider">
                            CHALLENGE
                          </span>
                          <p className="text-slate-600 leading-relaxed font-sans text-xs sm:text-sm">
                            {project.buildNotes.challenge}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <span className="font-mono text-xs font-bold text-blue-700 block uppercase tracking-wider">
                            LEARNING
                          </span>
                          <p className="text-slate-700 leading-relaxed font-sans text-xs sm:text-sm">
                            {project.buildNotes.learning}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            }

            // ----------------------------------------------------
            // Project 03: Content Left / Image Right (Mcsteeze)
            // ----------------------------------------------------
            return (
              <article
                key={project.id}
                className="space-y-8 pb-16 sm:pb-24 border-b border-slate-200/90 group"
                aria-labelledby={`project-${project.id}-title`}
              >
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  {/* Left Content */}
                  <div className="space-y-5 order-2 lg:order-1">
                    <div className="space-y-1">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-slate-400 block">
                        {project.projectNumber}
                      </span>
                      <h3
                        id={`project-${project.id}-title`}
                        className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight"
                      >
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-slate-500">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technical Specs */}
                    <div className="space-y-3 font-mono text-xs pt-1">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          ROLE
                        </span>
                        <span className="font-semibold text-slate-900">{project.role}</span>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                          BUILT WITH
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-[11px] font-medium"
                            >
                              <TechLogo name={t} className="w-3.5 h-3.5 shrink-0" ariaHidden={true} />
                              <span>{t}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                          KEY FEATURES
                        </span>
                        <ul className="space-y-1 font-sans text-xs text-slate-600">
                          {project.keyFeatures.map((feat, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary font-mono text-xs font-bold tracking-wider"
                      >
                        <span>LIVE PROJECT</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary font-mono text-xs font-bold tracking-wider"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>SOURCE CODE</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => toggleNotes(project.id)}
                        className="font-mono text-xs font-semibold px-3.5 min-h-[44px] rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        <span>{isExpanded ? "HIDE NOTES" : "BUILD NOTES"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Right Preview */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 order-1 lg:order-2">
                    <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute top-4 left-4 font-mono text-[11px] px-2.5 py-1 rounded bg-white/95 text-slate-900 border border-slate-200 shadow-2xs font-semibold">
                      {project.categoryLabel}
                    </div>
                  </div>
                </div>

                {/* 4-Part Build Notes */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-5 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <span className="font-mono font-bold text-slate-900 uppercase tracking-wider">
                        BUILD NOTES &bull; {project.title}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500">Engineering Review</span>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <span className="font-mono text-xs font-bold text-slate-900 block uppercase tracking-wider">
                          PROBLEM
                        </span>
                        <p className="text-slate-600 leading-relaxed font-sans text-xs sm:text-sm">
                          {project.buildNotes.problem}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="font-mono text-xs font-bold text-slate-900 block uppercase tracking-wider">
                          APPROACH
                        </span>
                        <p className="text-slate-600 leading-relaxed font-sans text-xs sm:text-sm">
                          {project.buildNotes.approach}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="font-mono text-xs font-bold text-slate-900 block uppercase tracking-wider">
                          CHALLENGE
                        </span>
                        <p className="text-slate-600 leading-relaxed font-sans text-xs sm:text-sm">
                          {project.buildNotes.challenge}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="font-mono text-xs font-bold text-blue-700 block uppercase tracking-wider">
                          LEARNING
                        </span>
                        <p className="text-slate-700 leading-relaxed font-sans text-xs sm:text-sm">
                          {project.buildNotes.learning}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* ---------------------------------------------------- */}
        {/* NEXT BUILD: Transparent Roadmap Section (Requirement 3) */}
        {/* ---------------------------------------------------- */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/90 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                {NEXT_BUILD.badge}
              </span>
              <span className="font-mono text-xs text-slate-600 font-medium">
                {NEXT_BUILD.status}
              </span>
            </div>
            <span className="font-mono text-xs text-slate-400">Architecture & Learning Focus</span>
          </div>

          <div className="space-y-3 max-w-2xl">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
              {NEXT_BUILD.headline}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {NEXT_BUILD.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 pt-1 font-mono text-xs">
            {NEXT_BUILD.focusAreas.map((area, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
                <span className="font-bold text-slate-900 block">{area.name}</span>
                <span className="text-slate-500 font-sans text-xs">{area.desc}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center gap-2 font-mono text-xs text-slate-500">
            <CircleDot className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>{NEXT_BUILD.honestNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
