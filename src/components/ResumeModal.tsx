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
    <div className="fixed inset-x-0 inset-y-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass card-border max-w-3xl w-full rounded-3xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-white font-black text-lg shadow-lg">
              KD
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-white">Kelvin Atsu Djayouri</h3>
              <p className="text-xs text-violet-300">Technical Writer at Formgrid · KadDev</p>
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
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
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
                    ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                    : "text-[#8892a4] hover:text-white hover:bg-white/05"
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
            <div className="space-y-4 text-xs text-[#8892a4] leading-relaxed">
              <p className="text-sm text-gray-200">
                Technical Writer at Formgrid specializing in developer documentation, API specifications, and component guides. Proven track record of transforming complex software architecture into clear, intuitive developer guides.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/05 border border-white/10 space-y-1">
                  <span className="text-violet-400 font-bold flex items-center gap-1.5 text-xs">
                    <Award className="w-4 h-4" /> Primary Competencies
                  </span>
                  <p className="text-gray-300 text-xs">Technical Documentation, API Specifications, Markdown, Developer Experience, React, TypeScript</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/05 border border-white/10 space-y-1">
                  <span className="text-cyan-400 font-bold flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-4 h-4" /> Core Focus
                  </span>
                  <p className="text-gray-300 text-xs">Formgrid Developer Tools, Component Library Specs, Developer Onboarding & Release Notes</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-white/05 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-sm">Technical Writer</h4>
                  <span className="text-violet-400 font-mono">2026 – Present</span>
                </div>
                <p className="text-violet-300 font-medium">Formgrid · Full-Time</p>
                <ul className="space-y-1 text-[#8892a4] list-disc list-inside">
                  <li>Authored technical documentation, developer guides, and API specifications for Formgrid tools.</li>
                  <li>Partnered with engineering teams to document component APIs, usage patterns, and system releases.</li>
                  <li>Improved developer onboarding efficiency and support clarity across modern developer workflows.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-white/05 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-sm">Diploma in Information Technology (Top-Up)</h4>
                  <span className="text-cyan-400 font-mono">2022 – Present</span>
                </div>
                <p className="text-cyan-300 font-medium">Accra Technical University</p>
                <p className="text-[#8892a4]">Coursework: Software Engineering, Data Structures, Web Technologies, Database Systems & Computer Networking.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
