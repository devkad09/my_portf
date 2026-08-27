import { useState } from "react";
import { FileText, Download, X, Award, Briefcase, GraduationCap, CheckCircle2, Sparkles, MapPin } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [activeTab, setActiveTab] = useState<"summary" | "experience" | "education">("summary");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 inset-y-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-surface glass-panel border-emerald-500/30 max-w-3xl w-full rounded-3xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-ink-muted hover:text-ink hover:border-emerald-500/40 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line/60 pb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-2xl p-0.5 bg-emerald-600 shadow-md">
              <img
                src="/profile.jpg"
                alt="Kelvin Atsu Djayouri"
                className="w-12 h-12 rounded-[14px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-ink">Kelvin Atsu Djayouri</h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                Frontend Developer & Technical Writer
              </p>
              <p className="text-[11px] text-ink-muted flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-emerald-500" />
                <span>Ghana · Remote Global · deve.kad.tech@gmail.com</span>
              </p>
            </div>
          </div>

          <a
            href="/KELVIN ATSU DJAYOURI.pdf"
            download
            className="btn-primary h-10 px-4 rounded-xl text-xs font-semibold self-start sm:self-auto"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>
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
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
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
                Frontend Developer and Technical Writer with 3+ years of experience developing responsive, high-performance web applications and creating clear technical documentation. Experienced in React 18, TypeScript, JavaScript, Tailwind CSS, REST APIs, and modern frontend practices. Strong background in reusable component systems, accessible interfaces (WCAG 2.1 AA), and developer portals, with a focus on maintainability and speed.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-surface-2/60 border border-line/60 space-y-1.5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5 text-xs">
                    <Award className="w-4 h-4" /> Technical Stack
                  </span>
                  <p className="text-ink-muted text-xs leading-relaxed">
                    <strong className="text-ink">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React 18, TypeScript, Tailwind CSS, Next.js, Vite<br />
                    <strong className="text-ink">Backend & APIs:</strong> Node.js, REST APIs, Supabase, MongoDB, Express<br />
                    <strong className="text-ink">Standards:</strong> Git, Figma, axe DevTools, WCAG 2.1 AA, Core Web Vitals
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-2/60 border border-line/60 space-y-1.5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-4 h-4" /> Key Milestones
                  </span>
                  <ul className="text-ink-muted text-xs space-y-1 list-disc list-inside">
                    <li>20+ projects shipped, including 3 production SaaS platforms</li>
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
                  <h4 className="font-bold text-ink text-sm">Technical Writer & Docs Architect</h4>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">2026 – Present</span>
                </div>
                <p className="text-ink font-medium">Formgrid.dev · Remote</p>
                <ul className="space-y-1.5 text-ink-muted list-disc list-inside">
                  <li>Authored the complete REST API documentation suite and headless HTML endpoints (/api/f/:id).</li>
                  <li>Built and maintain modern component libraries and supporting documentation systems.</li>
                  <li>Documented the AI Lead Pipeline and automated stage routing workflows (New → Contacted → Converted).</li>
                  <li>Streamlined developer onboarding to under two minutes for 400+ active users.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-surface-2/60 border border-line/60 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink text-sm">Frontend Developer</h4>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">2023 – Present</span>
                </div>
                <p className="text-ink font-medium">Freelance & Client Engineering · Remote</p>
                <ul className="space-y-1.5 text-ink-muted list-disc list-inside">
                  <li>Collaborated with founders and businesses to design and develop responsive React web apps.</li>
                  <li>Shipped 20+ responsive web projects including 3 production SaaS analytics dashboards.</li>
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
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">2024 – 2026</span>
                </div>
                <p className="text-ink font-medium">Accra Technical University</p>
                <p className="text-ink-muted">Coursework: Data Structures • Networking • Web Technologies • Software Engineering • Database Systems.</p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-2/60 border border-line/60 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ink text-sm">BSc in Computer Science (Top-Up)</h4>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Target: 2027</span>
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
