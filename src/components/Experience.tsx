import { useState } from "react";
import {
  Sparkles,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { EXPERIENCES, EDUCATION_DATA } from "@/data/portfolioData";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-slate-50/60 border-t border-b border-slate-200/80 scroll-mt-16"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <p className="section-eyebrow">
              <Sparkles className="w-4 h-4" />
              <span>Career & Education</span>
            </p>
            <h2 id="experience-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl">
              Experience &{" "}
              <span className="text-slate-500">
                foundations
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Work history and educational background.
            </p>
          </div>

          {/* Tab Switcher - Responsive Full Width on Mobile with 44px touch target */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-xs w-full xs:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab("experience")}
              className={`flex-1 xs:flex-none flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "experience"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`flex-1 xs:flex-none flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "education"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience */}
        {activeTab === "experience" && (
          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.id}
                className="p-5 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all space-y-3.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mt-0.5">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-slate-800 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                        >
                          <span>{exp.company}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        </a>
                      ) : (
                        <span className="font-semibold text-slate-800">{exp.company}</span>
                      )}
                      <span>•</span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200 self-start sm:self-auto flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Achievements */}
                <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-50 border border-slate-200 text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === "education" && (
          <div className="grid gap-6 md:grid-cols-2">
            {EDUCATION_DATA.map((item) => (
              <article
                key={item.degree}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
                    {item.degree}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-slate-600">
                    {item.institution}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50 border border-slate-200 text-slate-600"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{item.status}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
