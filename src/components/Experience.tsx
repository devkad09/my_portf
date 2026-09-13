import {
  Sparkles,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export const Experience = () => {
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
              <span>Career Journey</span>
            </p>
            <h2 id="experience-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl">
              Work experience &{" "}
              <span className="text-slate-500">
                roles
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Professional history, engineering roles, and production delivery.
            </p>
          </div>
        </div>

        {/* Work Experience Cards */}
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
      </div>
    </section>
  );
};

export default Experience;
