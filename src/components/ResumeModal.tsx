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
    <div className="fixed inset-x-0 inset-y-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-surface border border-line max-w-3xl w-full rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-canvas border border-line flex items-center justify-center text-ink-muted hover:text-ink hover:border-zinc-400 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-2xl p-0.5 bg-accent shadow-sm">
              <img
                src="/profile.jpg"
                alt="Kelvin Atsu Djayouri"
                className="w-12 h-12 rounded-[14px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl text-ink">Kelvin Atsu Djayouri</h3>
              <p className="text-xs text-accent font-medium">Frontend Developer | Technical Writer | Information Technology</p>
              <p className="text-[11px] text-ink-muted">Ghana · Remote Ready · deve.kad.tech@gmail.com</p>
            </div>
          </div>

          <a
            href="/KELVIN ATSU DJAYOURI.pdf"
            download
            className="inline-flex items-center justify-center gap-2 font-medium bg-accent text-white hover:bg-blue-700 h-11 px-5 rounded-[14px] text-xs transition-all"
          >
            <Download className="w-4 h-4" /> Download Full CV (PDF)
          </a>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-line pb-3">
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
                className={`flex items-center gap-2 px-4 py-2 rounded-[12px] text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-accent text-white shadow-sm"
                    : "text-ink-muted hover:text-ink hover:bg-canvas"
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
              <p className="text-sm text-ink-muted">
                Frontend Developer and Technical Writer with 3+ years of experience developing responsive, high-performance web applications and creating clear technical documentation. Experienced in React, TypeScript, JavaScript, Tailwind CSS, REST APIs, and modern frontend practices. Strong background in reusable component systems, accessible interfaces, and data-driven dashboards, with a focus on maintainable solutions and user experience.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-[16px] bg-canvas border border-line space-y-1.5">
                  <span className="text-accent font-bold flex items-center gap-1.5 text-xs">
                    <Award className="w-4 h-4" /> Technical Skills & Stack
                  </span>
                  <p className="text-ink-muted text-xs leading-relaxed">
                    <strong className="text-ink">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React 18, TypeScript, Tailwind CSS, Responsive Design, Context API<br />
                    <strong className="text-ink">Backend & APIs:</strong> Node.js, REST APIs, MongoDB, Express<br />
                    <strong className="text-ink">Tools & Standards:</strong> Git, Figma, Microsoft Office Suite, WCAG 2.1 Accessibility, Core Web Vitals
                  </p>
                </div>
                <div className="p-4 rounded-[16px] bg-canvas border border-line space-y-1.5">
                  <span className="text-accent font-bold flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-4 h-4" /> Key Achievements
                  </span>
                  <ul className="text-ink-muted text-xs space-y-1 list-disc list-inside">
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
              <div className="p-5 rounded-[20px] bg-canvas border border-line space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink text-sm">Technical Writer</h4>
                  <span className="text-accent font-mono">2026 – Present</span>
                </div>
                <p className="text-ink font-medium">Formgrid.dev · Remote</p>
                <ul className="space-y-1.5 text-ink-muted list-disc list-inside">
                  <li>Build and maintain modern component libraries and supporting documentation systems.</li>
                  <li>Develop clean, reusable components designed for consistent use across digital products.</li>
                  <li>Create clear, user-friendly technical documentation for frontend components and developer workflows.</li>
                  <li>Contribute to scalable design systems with a focus on accessibility, usability, and technical clarity.</li>
                </ul>
              </div>

              <div className="p-5 rounded-[20px] bg-canvas border border-line space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink text-sm">Frontend Developer</h4>
                  <span className="text-accent font-mono">2023 – Present</span>
                </div>
                <p className="text-ink font-medium">Freelance · Remote</p>
                <ul className="space-y-1.5 text-ink-muted list-disc list-inside">
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
              <div className="p-5 rounded-[20px] bg-canvas border border-line space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink text-sm">Diploma in Information Technology</h4>
                  <span className="text-accent font-mono font-semibold">2024 – 2026</span>
                </div>
                <p className="text-ink font-medium">Accra Technical University</p>
                <p className="text-ink-muted">Relevant Coursework: Data Structures • Networking • Web Technologies • Software Engineering • Database Systems.</p>
              </div>

              <div className="p-5 rounded-[20px] bg-canvas border border-line space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink text-sm">BSc in Computer Science (Top-Up)</h4>
                  <span className="text-accent font-mono font-semibold">Planned Start: 2027</span>
                </div>
                <p className="text-ink font-medium">Ghana Communication Technology University (GCTU)</p>
                <p className="text-ink-muted">Target program advancing study in algorithms, distributed systems, software engineering, and systems architecture.</p>
              </div>

              <div className="p-5 rounded-[20px] bg-canvas border border-line space-y-2">
                <h4 className="font-bold text-ink text-sm">Professional Skills</h4>
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
