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
      "Completed comprehensive academic diploma in Information Technology covering software engineering, data structures, computer networking, database management, and modern web technologies.",
    coursework: ["Data Structures", "Networking", "Web Technologies", "Software Engineering", "Database Management"],
  },
  {
    degree: "BSc in Computer Science (Top-Up)",
    institution: "Ghana Communication Technology University (GCTU)",
    period: "Planned Start: 2027",
    status: "Target Program (2027)",
    description:
      "Targeting Bachelor of Science in Computer Science top-up degree at GCTU, advancing study in algorithms, distributed systems, software engineering, and systems architecture.",
    coursework: ["Advanced Algorithms", "Distributed Systems", "Software Architecture", "Operating Systems", "Cloud Computing"],
  },
  {
    degree: "Professional & Applied Competencies",
    institution: "Industry Standards & Applied Practice",
    period: "2023 — Present",
    status: "Active Specialization",
    description:
      "Core professional capabilities in technical communication, documentation systems, collaborative problem solving, component library development, and WCAG accessibility standards.",
    coursework: ["Documentation Systems", "Communication & Research", "Problem Solving", "WCAG 2.1 Accessibility", "Teamwork & Adaptability"],
  },
];

const Education = () => (
  <section id="education" className="py-24 px-4 sm:px-6 relative">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="mb-16 text-center space-y-4">
        <p className="section-eyebrow justify-center">
          Academic Background
        </p>
        <h2 className="section-heading">
          Education & <span className="text-blue-600 dark:text-blue-400">technical mastery</span>
        </h2>
        <p className="section-copy mx-auto max-w-xl text-base sm:text-lg">
          Combining formal Computer Science studies with specialized technical writing & web development skills.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {EDUCATION_DATA.map((item, index) => (
          <div
            key={index}
            className="bento-card p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-all shadow-sm dark:bg-blue-500/10 dark:border-blue-500/30 dark:text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800/50">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-300">{item.degree}</h3>
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-1">{item.institution}</p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>

              {/* Coursework */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Key Focus Areas:</p>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <div key={course} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 dark:bg-slate-950/60 dark:border-slate-800/80 dark:text-slate-300">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
