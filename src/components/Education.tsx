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
    period: "Graduated 2026",
    status: "Completed (2026)",
    description:
      "Completed comprehensive academic diploma program focused on core computer science foundations, software engineering principles, database design, computer networks, and modern web development.",
    coursework: ["Software Engineering", "Data Structures & Algorithms", "Database Management", "Computer Networks", "Web Architecture"],
  },
  {
    degree: "BSc in Information Technology (Top-Up)",
    institution: "Accra Technical University",
    period: "Starting 2027",
    status: "Upcoming (2027)",
    description:
      "Advancing to the Bachelor of Science top-up degree program with higher-level study in enterprise software engineering, distributed systems, cloud computing, and advanced software architecture.",
    coursework: ["Enterprise Software", "Distributed Systems", "Cloud Computing", "Advanced System Design", "Cybersecurity"],
  },
  {
    degree: "Technical Writing & Developer Experience",
    institution: "Industry Standards & Applied Practice",
    period: "2023 — Present",
    status: "Active Specialization",
    description:
      "Advanced mastery of technical documentation systems, API reference creation, component specifications, Markdown standards, and developer onboarding workflows.",
    coursework: ["API Reference Specs", "Component Documentation", "Developer Onboarding", "Markdown Standards", "WCAG A11y"],
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
          Education & <span className="grad-violet-cyan">technical mastery</span>
        </h2>
        <p className="section-copy mx-auto max-w-xl text-base sm:text-lg">
          Combining formal Computer Science studies with specialized technical writing & web development skills.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {EDUCATION_DATA.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/40 hover:bg-slate-900/90 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-400 transition-all shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-950/70 text-blue-300 border border-blue-800/50">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-xl text-white group-hover:text-blue-300 transition-colors">{item.degree}</h3>
                <p className="text-xs font-bold text-blue-400 mt-1">{item.institution}</p>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>

              {/* Coursework */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Focus Areas:</p>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <div key={course} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs font-medium text-slate-300">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
