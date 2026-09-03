import { useState } from "react";
import {
  X,
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [activeTab, setActiveTab] = useState<"summary" | "experience" | "education">("summary");

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl glass-panel border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-surface-2 hover:bg-surface border border-line text-ink-muted hover:text-ink transition-all cursor-pointer"
          aria-label="Close CV Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-line/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <h3 id="resume-modal-title" className="font-display font-bold text-2xl text-ink">
                Kelvin Atsu Djayouri
              </h3>
            </div>
            <p className="text-xs font-mono text-ink-muted mt-0.5">
              Frontend Developer & Technical Writer @ Formgrid.dev
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => window.print()}
              className="btn-secondary h-10 px-3.5 rounded-xl text-xs font-semibold cursor-pointer"
              title="Print or Save as PDF"
            >
              <Download className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href="/resume.pdf"
              download="Kelvin_Atsu_Djayouri_CV.pdf"
              className="btn-primary h-10 px-4 rounded-xl text-xs font-semibold"
            >
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-line/60 pb-3">
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
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md"
                    : "text-ink-muted hover:text-ink hover:bg-surface-2"
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
                Frontend Developer and Technical Writer with 2+ years of experience developing responsive, high-performance web applications and creating clear technical documentation. Experienced in React 18, TypeScript, JavaScript, Tailwind CSS, REST APIs, and modern frontend practices. Strong background in reusable component systems, accessible interfaces (WCAG 2.1 AA), and developer portals, with a focus on maintainability and speed.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-surface-2/60 border border-line/60 space-y-1.5">
                  <span className="text-ink font-bold flex items-center gap-1.5 text-xs">
                    <Award className="w-4 h-4 text-slate-400" /> Technical Stack
                  </span>
                  <p className="text-ink-muted text-xs leading-relaxed">
                    <strong className="text-ink">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React 18, TypeScript, Tailwind CSS, Next.js, Vite<br />
                    <strong className="text-ink">Backend & APIs:</strong> Node.js, REST APIs, Supabase, MongoDB, Express<br />
                    <strong className="text-ink">Standards:</strong> Git, Figma, axe DevTools, WCAG 2.1 AA, Core Web Vitals
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-2/60 border border-line/60 space-y-1.5">
                  <span className="text-ink font-bold flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-slate-400" /> Key Milestones
                  </span>
                  <ul className="text-ink-muted text-xs space-y-1 list-disc list-inside">
                    <li>9+ projects shipped, including 3 production SaaS platforms</li>
                    <li>Technical Writer @ Formgrid.dev for REST API specifications</li>
                    <li>WCAG 2.1 AA-compliant components tested with axe DevTools</li>
                    <li>Achieved sub-second load times via code splitting & optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-4 text-xs">
              <div className="p-5 rounded-2xl bg-surface-2/60 border border-line/60 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink text-sm">Technical Writer & Documentation Engineer</h4>
                  <span className="text-ink font-mono font-semibold">2024 – Present</span>
                </div>
                <p className="text-ink font-medium">Formgrid.dev · Remote</p>
                <ul className="space-y-1.5 text-ink-muted list-disc list-inside">
                  <li>Authored REST API references, endpoint specifications, and code recipes for developer onboarding.</li>
                  <li>Created component documentation guides and lead intake pipeline workflows.</li>
                  <li>Collaborated with engineering to ensure zero ambiguity in developer adoption.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-surface-2/60 border border-line/60 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink text-sm">Frontend Developer</h4>
                  <span className="text-ink font-mono font-semibold">2023 – Present</span>
                </div>
                <p className="text-ink font-medium">Freelance & Client Engineering · Remote</p>
                <ul className="space-y-1.5 text-ink-muted list-disc list-inside">
                  <li>Collaborated with founders and businesses to design and develop responsive React web apps.</li>
                  <li>Shipped 9+ responsive web projects including 3 production SaaS analytics dashboards.</li>
                  <li>Achieved sub-second load times via code splitting and lazy loading assets.</li>
                  <li>Delivered 100% WCAG 2.1 AA accessible interfaces tested with axe DevTools.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-4 text-xs">
              <div className="p-5 rounded-2xl bg-surface-2/60 border border-line/60 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink text-sm">Diploma in Information Technology</h4>
                  <span className="text-ink font-mono font-semibold">2024 – 2026</span>
                </div>
                <p className="text-ink font-medium">Accra Technical University</p>
                <p className="text-ink-muted">Coursework: Data Structures • Networking • Web Technologies • Software Engineering • Database Systems.</p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-2/60 border border-line/60 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink text-sm">BSc in Computer Science (Top-Up)</h4>
                  <span className="text-ink font-mono font-semibold">Target: 2027</span>
                </div>
                <p className="text-ink font-medium">Ghana Communication Technology University (GCTU)</p>
                <p className="text-ink-muted">Target program advancing study in algorithms, distributed systems, software engineering, and systems architecture.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
