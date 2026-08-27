import { GraduationCap, BookOpen, Award, Calendar, Sparkles, CheckCircle2 } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  coursework: string[];
}

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Diploma in Information Technology",
    institution: "Accra Technical University",
    period: "2024 – 2026",
    status: "Completed (2024 – 2026)",
    description:
      "Rigorous academic curriculum covering software engineering foundations, relational database systems, networking architecture, data structures, and modern web application development.",
    coursework: ["Data Structures", "Networking", "Web Technologies", "Software Engineering", "Database Systems"],
  },
  {
    degree: "BSc in Computer Science (Top-Up)",
    institution: "Ghana Communication Technology University (GCTU)",
    period: "Target Start: 2027",
    status: "Target Program (2027)",
    description:
      "Advanced undergraduate program expanding in-depth competencies in distributed systems, advanced algorithms, systems architecture, cloud computing, and operating systems.",
    coursework: ["Advanced Algorithms", "Distributed Systems", "Cloud Systems", "Operating Systems", "Software Architecture"],
  },
  {
    degree: "Applied Engineering Competencies",
    institution: "Industry Standards & Production Systems",
    period: "2023 — Present",
    status: "Active Production Standards",
    description:
      "Applied mastery in technical documentation systems, reusable React component architecture, accessibility compliance (WCAG 2.1 AA), and Core Web Vitals optimization.",
    coursework: ["Documentation Systems", "Component Systems", "WCAG 2.1 AA", "REST APIs", "Core Web Vitals"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 sm:py-32 relative overflow-hidden" aria-labelledby="education-heading">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="section-eyebrow justify-center">
            <Sparkles className="w-4 h-4" />
            <span>Academic Background</span>
          </p>
          <h2 id="education-heading" className="section-heading">
            Education & <span className="text-emerald-600 dark:text-emerald-400">academic foundations</span>
          </h2>
          <p className="section-copy mx-auto">
            Pairing formal Information Technology and Computer Science education with hands-on production engineering.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EDUCATION_DATA.map((item) => (
            <article
              key={item.degree}
              className="rounded-3xl glass-card p-6 sm:p-8 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-line/60">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-ink-muted bg-surface-2 border border-line">
                    <Calendar className="w-3 h-3 text-emerald-500" />
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {item.degree}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                    {item.institution}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>

                {/* Coursework Tags */}
                <div className="space-y-2 pt-2">
                  <p className="text-[10px] font-mono uppercase font-bold text-ink-muted">
                    Key Focus Areas:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-2 border border-line text-xs font-mono text-ink-muted"
                      >
                        <BookOpen className="w-3 h-3 text-emerald-500" />
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-6 pt-4 border-t border-line/60 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Award className="w-4 h-4" />
                <span>{item.status}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
