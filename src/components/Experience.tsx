import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface WorkExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  summary: string;
  tech: string[];
  achievements: string[];
}

const EXPERIENCES: WorkExperience[] = [
  {
    period: "2026 — Present",
    role: "Technical Writer",
    company: "Formgrid",
    location: "Remote",
    type: "Full-Time",
    summary:
      "Authoring comprehensive technical documentation, developer guides, API specifications, and component library documentation for Formgrid. Partnering with engineering teams to simplify complex features into intuitive developer resources.",
    tech: ["Technical Writing", "Markdown", "API Specs", "React.js", "TypeScript", "Doc Systems", "Figma"],
    achievements: [
      "Authored & structured end-to-end technical documentation and API guides for Formgrid developer tools.",
      "Collaborated directly with engineering leads to document component APIs, properties, and usage patterns.",
      "Reduced developer onboarding time and support tickets by creating clear, interactive documentation portals.",
      "Maintained accurate API reference specs and technical release notes across major product versions.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Junior Web Developer & UI Associate",
    company: "Tech Solutions Studio",
    location: "Accra, Ghana — Hybrid",
    type: "Full-Time",
    summary:
      "Supported frontend application development for client web portals and administrative dashboards. Worked under senior engineering leadership using React, JavaScript, and CSS systems to fix bugs and build feature updates.",
    tech: ["JavaScript", "React", "HTML5", "CSS3", "Git & GitHub", "Figma"],
    achievements: [
      "Collaborated with senior engineers to build accessible admin tables and dynamic dashboard panels.",
      "Refined existing UI components for visual consistency, cross-browser compatibility, and mobile responsiveness.",
      "Assisted in resolving front-end bugs and speeding up feature deployment cycles.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 px-4 sm:px-6 relative border-y border-slate-800/60 bg-slate-950/40 backdrop-blur-md">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="mb-16 text-center space-y-4">
        <p className="section-eyebrow justify-center">
          Professional Path
        </p>
        <h2 className="section-heading">
          Career experience & <span className="grad-violet-cyan">technical impact</span>
        </h2>
        <p className="section-copy mx-auto max-w-xl text-base sm:text-lg">
          My experience in technical writing, developer documentation, and frontend engineering.
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-slate-700"
          >
            <div className="space-y-6">
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-950/70 text-blue-300 border border-blue-800/50">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/50">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-2xl text-white pt-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <strong className="text-blue-400">{exp.company}</strong>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-base text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Tech Pills */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Technologies & Skillsets:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tag-gray">{t}</span>
                  ))}
                </div>
              </div>

              {/* Checkmark Achievements Grid */}
              <div className="grid md:grid-cols-2 gap-3 pt-2">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-300 leading-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
