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
  <section id="experience" className="py-24 px-4 sm:px-6 bg-[#f8fafc] border-y border-[#e2e8f0]">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      {/* Header */}
      <div className="mb-16 text-center space-y-4">
        <p className="section-eyebrow justify-center">
          Professional Path
        </p>
        <h2 className="section-heading">
          Career experience & <span className="text-[#2563eb]">technical impact</span>
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
            className="bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:border-[#bfdbfe]"
          >
            <div className="space-y-6">
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e2e8f0] pb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe]">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-xs font-semibold text-[#166534] bg-[#f0fdf4] px-2.5 py-0.5 rounded-full border border-[#bbf7d0]">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-2xl text-[#0f172a] pt-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-[#475569]">
                    <strong className="text-[#2563eb]">{exp.company}</strong>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#64748b]">
                      <MapPin className="w-3.5 h-3.5 text-[#2563eb]" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-base text-[#475569] leading-relaxed">
                {exp.summary}
              </p>

              {/* Tech Pills */}
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Technologies & Skillsets:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tag-gray">{t}</span>
                  ))}
                </div>
              </div>

              {/* Checkmark Achievements Grid */}
              <div className="grid md:grid-cols-2 gap-3 pt-2">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                    <CheckCircle2 className="w-4 h-4 text-[#166534] flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#334155] leading-normal">{item}</span>
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
