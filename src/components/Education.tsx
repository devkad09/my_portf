import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

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
      "Comprehensive academic diploma covering core software engineering, data structures, computer networking, database management, and modern web development.",
    coursework: ["Data Structures", "Networking", "Web Technologies", "Software Engineering", "Database Management"],
  },
  {
    degree: "BSc in Computer Science (Top-Up)",
    institution: "Ghana Communication Technology University (GCTU)",
    period: "Planned Start: 2027",
    status: "Target Program (2027)",
    description:
      "Bachelor of Science in Computer Science top-up degree at GCTU, advancing study in algorithms, distributed systems, software engineering, and systems architecture.",
    coursework: ["Advanced Algorithms", "Distributed Systems", "Software Architecture", "Operating Systems", "Cloud Computing"],
  },
  {
    degree: "Professional & Applied Competencies",
    institution: "Industry Standards & Applied Practice",
    period: "2023 — Present",
    status: "Active Specialization",
    description:
      "Core competencies in technical documentation, component libraries, accessible web interfaces (WCAG 2.1 AA), and modern developer workflows.",
    coursework: ["Documentation Systems", "Component Libraries", "WCAG 2.1 AA", "REST APIs", "Microsoft Office Suite"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 sm:py-32 bg-canvas" aria-labelledby="education-heading">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="section-eyebrow">Education</p>
          <h2 id="education-heading" className="section-heading">
            Academic background & learning
          </h2>
          <p className="section-copy">
            Combining formal Information Technology and Computer Science education with applied modern frontend and technical documentation practices.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EDUCATION_DATA.map((item) => (
            <article
              key={item.degree}
              className="rounded-[24px] border border-line bg-surface p-8 shadow-soft flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 border-b border-line pb-4">
                  <div className="w-11 h-11 rounded-[14px] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-ink-muted bg-canvas border border-line">
                    <Calendar className="w-3 h-3 text-accent" />
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-ink">
                    {item.degree}
                  </h3>
                  <p className="text-xs font-semibold text-accent mt-1">
                    {item.institution}
                  </p>
                </div>

                <p className="text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>

                {/* Coursework Pills */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ink-muted">
                    Key Focus Areas:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-canvas border border-line text-xs text-ink-muted font-medium"
                      >
                        <BookOpen className="w-3 h-3 text-accent" />
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center gap-2 text-xs font-semibold text-accent">
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
