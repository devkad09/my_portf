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
    company: "Formgrid.dev",
    location: "Remote",
    type: "Full-Time",
    summary:
      "Building and maintaining modern component libraries, technical documentation systems, and developer workflows at Formgrid.dev. Developing clean, reusable components designed for consistent use across digital products and contributing to scalable design systems with a focus on accessibility and technical clarity.",
    tech: ["Technical Writing", "Documentation Systems", "Component Libraries", "React 18", "TypeScript", "Tailwind CSS", "REST APIs", "WCAG 2.1 Accessibility", "Responsive Design"],
    achievements: [
      "Build and maintain modern component libraries and supporting documentation systems.",
      "Develop clean, reusable components designed for consistent use across digital products.",
      "Create clear, user-friendly technical documentation for frontend components and developer workflows.",
      "Contribute to scalable design systems with a focus on accessibility, usability, and technical clarity.",
    ],
  },
  {
    period: "2023 — Present",
    role: "Frontend Developer",
    company: "Freelance",
    location: "Ghana · Remote",
    type: "Freelance",
    summary:
      "Collaborating with founders and brands to design and develop responsive, user-focused web applications. Managing projects throughout the complete development lifecycle, from concept and UI implementation to deployment with high performance and usability.",
    tech: ["React 18", "TypeScript", "JavaScript", "Tailwind CSS", "Context API", "Recharts", "Node.js", "REST APIs", "Git", "Figma", "Core Web Vitals"],
    achievements: [
      "Collaborate with founders and brands to design and develop responsive, user-focused web applications.",
      "Build modern interfaces that combine strong visual design with reliable performance and usability.",
      "Manage projects throughout the development lifecycle, from concept and implementation to deployment.",
      "Apply modern frontend development practices to deliver maintainable and scalable web solutions.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 px-4 sm:px-6 relative border-y border-slate-200 bg-slate-100/60 dark:border-slate-800/60 dark:bg-slate-950/40">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="mb-16 text-center space-y-4">
        <p className="section-eyebrow justify-center">
          Professional Path
        </p>
        <h2 className="section-heading">
          Career experience & <span className="text-blue-600 dark:text-blue-400">technical impact</span>
        </h2>
        <p className="section-copy mx-auto max-w-xl text-base sm:text-lg">
          My track record in technical writing, developer documentation systems, and frontend engineering.
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="bento-card p-8"
          >
            <div className="space-y-6">
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800/50">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/50">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-2xl text-slate-900 dark:text-white pt-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <strong className="text-blue-600 dark:text-blue-400">{exp.company}</strong>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Tech Pills */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Technologies & Skillsets:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tag-gray">{t}</span>
                  ))}
                </div>
              </div>

              {/* Checkmark Achievements Grid */}
              <div className="grid md:grid-cols-2 gap-3 pt-2">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 dark:bg-slate-950/50 dark:border-slate-800/80 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-medium leading-normal">{item}</span>
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
