import { Sparkles, CheckCircle2, Compass, PenTool, Code, CheckSquare, CloudUpload } from "lucide-react";
import { HOW_I_BUILD_STEPS } from "@/data/portfolioData";

export const HowIBuild = () => {
  const stepIcons = [Compass, PenTool, Code, CheckSquare, CloudUpload];

  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden bg-white"
      aria-labelledby="how-i-build-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="space-y-3 max-w-2xl">
          <p className="section-eyebrow">
            <Sparkles className="w-4 h-4" />
            <span>Development Workflow</span>
          </p>
          <h2 id="how-i-build-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl">
            How I build &{" "}
            <span className="text-slate-500">
              ship software
            </span>
          </h2>
          <p className="text-base text-slate-600">
            A methodical 5-phase engineering approach that ensures every interface is thoughtful, responsive, and production-ready.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {HOW_I_BUILD_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={step.step}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                      {step.step}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Quality verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;
