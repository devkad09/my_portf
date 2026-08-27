import { useState } from "react";
import { FileText, Download, X, Award, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [activeTab, setActiveTab] = useState<"summary" | "experience" | "education">("summary");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 inset-y-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
      <div className="bg-white border border-slate-200 max-w-3xl w-full rounded-3xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl dark:bg-slate-900 dark:border-slate-700/80">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer dark:bg-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-2xl p-0.5 bg-blue-600 shadow-sm">
              <img
                src="/profile.jpg"
                alt="Kelvin Atsu Djayouri"
                className="w-12 h-12 rounded-[14px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">Kelvin Atsu Djayouri</h3>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Frontend Developer | Technical Writer | Information Technology</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Ghana · Remote Ready · deve.kad.tech@gmail.com</p>
            </div>
          </div>

          <a
            href="/KELVIN ATSU DJAYOURI.pdf"
            download
            className="btn-primary text-xs py-2.5 px-5 justify-center"
          >
            <Download className="w-4 h-4" /> Download Full CV (PDF)
          </a>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          {[
            { id: "summary", label: "Executive Summary", icon: FileText },
            { id: "experience", label: "Work Experience", icon: Briefcase },
            { id: "education", label: "Education & Skills", icon: GraduationCap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="space-y-4 min-h-[240px]">
          {activeTab === "summary" && (
            <div className="space-y-4 text-xs leading-relaxed">
              <p className="text-sm text-slate-700 dark:text-slate-200">
                Frontend Developer and Technical Writer with 3+ years of experience developing responsive, high-performance web applications and creating clear technical documentation. Experienced in React, TypeScript, JavaScript, Tailwind CSS, REST APIs, and modern frontend practices. Strong background in reusable component systems, accessible interfaces, and data-driven dashboards, with a focus on maintainable solutions and user experience.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 dark:bg-slate-950/60 dark:border-slate-800">
                  <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1.5 text-xs">
                    <Award className="w-4 h-4" /> Technical Skills & Stack
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    <strong>Frontend:</strong> React 18, TypeScript, JavaScript, Tailwind CSS, Context API, Recharts<br />
                    <strong>Backend & APIs:</strong> Node.js, REST APIs, MongoDB<br />
                    <strong>Tools & Standards:</strong> Git, Figma, Microsoft Office Suite, WCAG 2.1 Accessibility, Core Web Vitals
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 dark:bg-slate-950/60 dark:border-slate-800">
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-4 h-4" /> Key Achievements
                  </span>
                  <ul className="text-slate-600 dark:text-slate-300 text-xs space-y-1 list-disc list-inside">
                    <li>20+ projects shipped, including 3 production SaaS dashboards</li>
                    <li>3+ years of professional React and TypeScript experience</li>
                    <li>WCAG 2.1 AA-compliant components tested with axe DevTools</li>
                    <li>Achieved sub-second load times via code splitting & lazy loading</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 dark:bg-slate-950/60 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Technical Writer</h4>
                  <span className="text-blue-600 dark:text-blue-400 font-mono">2026 – Present</span>
                </div>
                <p className="text-blue-700 dark:text-blue-300 font-medium">Formgrid.dev · Remote</p>
                <ul className="space-y-1.5 text-slate-600 dark:text-slate-400 list-disc list-inside">
                  <li>Build and maintain modern component libraries and supporting documentation systems.</li>
                  <li>Develop clean, reusable components designed for consistent use across digital products.</li>
                  <li>Create clear, user-friendly technical documentation for frontend components and developer workflows.</li>
                  <li>Contribute to scalable design systems with a focus on accessibility, usability, and technical clarity.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 dark:bg-slate-950/60 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Frontend Developer</h4>
                  <span className="text-emerald-700 dark:text-emerald-400 font-mono">2023 – Present</span>
                </div>
                <p className="text-emerald-700 dark:text-emerald-300 font-medium">Freelance · Remote</p>
                <ul className="space-y-1.5 text-slate-600 dark:text-slate-400 list-disc list-inside">
                  <li>Collaborate with founders and brands to design and develop responsive, user-focused web applications.</li>
                  <li>Build modern interfaces that combine strong visual design with reliable performance and usability.</li>
                  <li>Manage projects throughout the development lifecycle, from concept and implementation to deployment.</li>
                  <li>Apply modern frontend development practices to deliver maintainable and scalable web solutions.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 dark:bg-slate-950/60 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Diploma in Information Technology</h4>
                  <span className="text-emerald-700 dark:text-emerald-400 font-mono font-semibold">2024 – 2026</span>
                </div>
                <p className="text-cyan-700 dark:text-cyan-400 font-medium">Accra Technical University</p>
                <p className="text-slate-600 dark:text-slate-400">Relevant Coursework: Data Structures • Networking • Web Technologies • Software Engineering • Database Systems.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 dark:bg-slate-950/60 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">BSc in Computer Science (Top-Up)</h4>
                  <span className="text-blue-600 dark:text-blue-400 font-mono font-semibold">Planned Start: 2027</span>
                </div>
                <p className="text-blue-700 dark:text-blue-300 font-medium">Ghana Communication Technology University (GCTU)</p>
                <p className="text-slate-600 dark:text-slate-400">Target program advancing study in algorithms, distributed systems, software engineering, and systems architecture.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 dark:bg-slate-950/60 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Professional Skills</h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability", "Customer Service", "Documentation", "Research"].map((skill) => (
                    <span key={skill} className="tag-gray">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
