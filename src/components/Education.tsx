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
    degree: "Diploma in Information Technology (Top-Up Degree)",
    institution: "Accra Technical University",
    period: "2022 — Present",
    status: "In Progress",
    description:
      "Comprehensive academic program focused on core computer science foundations, software engineering principles, database design, computer networks, and advanced web technologies.",
    coursework: ["Software Engineering", "Data Structures & Algorithms", "Database Management", "Computer Networks", "Web Architecture"],
  },
  {
    degree: "Technical Writing & Developer Experience Specialization",
    institution: "Self-Directed & Industry Documentation Training",
    period: "2023 — Present",
    status: "Completed",
    description:
      "Advanced mastery of technical documentation systems, API reference creation, component specifications, Markdown standards, and developer onboarding workflows.",
    coursework: ["API Reference Specs", "Component Documentation", "Developer Onboarding", "Markdown Standards", "WCAG A11y"],
  },
];

const Education = () => (
  <section id="education" className="py-24 px-4 sm:px-6 bg-white">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      {/* Header */}
      <div className="mb-16 text-center space-y-4">
        <p className="section-eyebrow justify-center">
          Academic Background
        </p>
        <h2 className="section-heading">
          Education & <span className="text-[#2563eb]">technical mastery</span>
        </h2>
        <p className="section-copy mx-auto max-w-xl text-base sm:text-lg">
          Combining formal Computer Science studies with specialized technical writing & web development skills.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {EDUCATION_DATA.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-md flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl hover:border-[#bfdbfe]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3 border-b border-[#e2e8f0] pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[#2563eb]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe]">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#0f172a]">{item.degree}</h3>
                <p className="text-xs font-bold text-[#2563eb] mt-1">{item.institution}</p>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed">
                {item.description}
              </p>

              {/* Coursework */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Key Focus Areas:</p>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <div key={course} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] text-xs font-medium text-[#334155]">
                      <BookOpen className="w-3.5 h-3.5 text-[#2563eb]" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e2e8f0] flex items-center gap-2 text-xs font-semibold text-[#166534]">
              <Award className="w-4 h-4 text-[#d97706] flex-shrink-0" />
              <span>{item.status} · Academic & Practical Distinction</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
