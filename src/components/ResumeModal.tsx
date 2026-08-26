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
    <div className="fixed inset-x-0 inset-y-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-700/80 max-w-3xl w-full rounded-3xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-2xl p-0.5 bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md shadow-blue-500/20">
              <img
                src="/profile.jpg"
                alt="Kelvin Atsu Djayouri"
                className="w-12 h-12 rounded-[14px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white">Kelvin Atsu Djayouri</h3>
              <p className="text-xs text-blue-400">Technical Writer at Formgrid · KadDev</p>
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
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          {[
            { id: "summary", label: "Executive Summary", icon: FileText },
            { id: "experience", label: "Work Experience", icon: Briefcase },
            { id: "education", label: "Education & Certs", icon: GraduationCap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
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
            <div className="space-y-4 text-xs text-slate-400 leading-relaxed">
              <p className="text-sm text-slate-200">
                Technical Writer at Formgrid specializing in developer documentation, API specifications, and component guides. Proven track record of transforming complex software architecture into clear, intuitive developer guides.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="text-blue-400 font-bold flex items-center gap-1.5 text-xs">
                    <Award className="w-4 h-4" /> Primary Competencies
                  </span>
                  <p className="text-slate-300 text-xs leading-relaxed">Technical Documentation, API Specifications, Markdown, Developer Experience, React, TypeScript</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="text-cyan-400 font-bold flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-4 h-4" /> Core Focus
                  </span>
                  <p className="text-slate-300 text-xs leading-relaxed">Formgrid Developer Tools, Component Library Specs, Developer Onboarding & Release Notes</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-sm">Technical Writer</h4>
                  <span className="text-blue-400 font-mono">2026 – Present</span>
                </div>
                <p className="text-blue-300 font-medium">Formgrid · Full-Time</p>
                <ul className="space-y-1 text-slate-400 list-disc list-inside">
                  <li>Authored technical documentation, developer guides, and API specifications for Formgrid tools.</li>
                  <li>Partnered with engineering teams to document component APIs, usage patterns, and system releases.</li>
                  <li>Improved developer onboarding efficiency and support clarity across modern developer workflows.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-sm">Diploma in Information Technology</h4>
                  <span className="text-emerald-400 font-mono font-semibold">Completed 2026</span>
                </div>
                <p className="text-cyan-400 font-medium">Accra Technical University</p>
                <p className="text-slate-400">Coursework: Software Engineering, Data Structures, Web Technologies, Database Systems & Computer Networking.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-sm">BSc in Information Technology (Top-Up)</h4>
                  <span className="text-blue-400 font-mono font-semibold">Starting 2027</span>
                </div>
                <p className="text-blue-300 font-medium">Accra Technical University</p>
                <p className="text-slate-400">Focus: Enterprise Software Engineering, Distributed Systems, Cloud Architecture & Advanced System Design.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
