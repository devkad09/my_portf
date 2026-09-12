import { useEffect } from "react";
import { X, CheckCircle2, Code2, AlertCircle, Lightbulb } from "lucide-react";
import { CaseStudy } from "@/data/portfolioData";

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal = ({ caseStudy, onClose }: CaseStudyModalProps) => {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (!caseStudy) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [caseStudy]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-white border border-slate-200 shadow-2xl p-5 sm:p-8 lg:p-10 max-h-[88dvh] overflow-y-auto space-y-6 sm:space-y-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Min 44x44px touch target */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8 pb-4 border-b border-slate-100">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold uppercase">
            Detailed Case Study
          </span>
          <h3 id="case-study-title" className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            {caseStudy.title}
          </h3>
          <p className="text-sm text-slate-600 font-normal">
            {caseStudy.subtitle}
          </p>
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-50 border border-slate-200 text-slate-700 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Structured Sections */}
        <div className="space-y-6 text-sm text-slate-600 leading-relaxed font-sans">
          {/* 1. Problem & Approach */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-mono text-xs font-bold uppercase text-slate-900 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-slate-600" />
                <span>The Problem</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-mono text-xs font-bold uppercase text-slate-900 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-slate-600" />
                <span>The Approach</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {caseStudy.approach}
              </p>
            </div>
          </div>

          {/* 2. Challenges & Solution */}
          <div className="space-y-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <h4 className="font-mono text-xs font-bold uppercase text-slate-900">
              Challenges Encountered & Solutions Engineered
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <p>
                <strong className="text-slate-800">Challenge:</strong> {caseStudy.challenges}
              </p>
              <p>
                <strong className="text-slate-800">Solution:</strong> {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Optional Backend Note */}
          {caseStudy.backendNote && (
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
              <Code2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold font-mono">Backend Learning Context:</span>{" "}
                {caseStudy.backendNote}
              </div>
            </div>
          )}

          {/* 3. Result & What I Learned */}
          <div className="grid gap-6 sm:grid-cols-2 pt-2">
            <div className="space-y-1.5">
              <h4 className="font-mono text-xs font-bold uppercase text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>The Result</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {caseStudy.result}
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-mono text-xs font-bold uppercase text-slate-900 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-blue-600" />
                <span>What I Learned</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {caseStudy.whatILearned}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary text-xs h-10 px-5"
          >
            <span>Close Case Study</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
