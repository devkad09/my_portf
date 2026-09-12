import { ArrowRight, CheckCircle2, Rocket, Terminal, Compass } from "lucide-react";
import { LEVELING_UP } from "@/data/portfolioData";

export const LevelingUp = () => {
  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden bg-slate-50 border-t border-b border-slate-200/80"
      aria-labelledby="leveling-up-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
            <Rocket className="w-3.5 h-3.5 text-blue-600" />
            <span>Continuous Growth & Journey</span>
          </div>
          <h2 id="leveling-up-heading" className="section-heading text-3xl sm:text-4xl">
            Currently Leveling Up 🚀
          </h2>
        </div>

        {/* The Exact Personal Quote */}
        <div className="max-w-3xl mx-auto p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
          <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans italic">
            &ldquo;{LEVELING_UP.quote}&rdquo;
          </blockquote>
          <p className="mt-4 text-xs font-mono text-slate-500 uppercase tracking-wider">
            — Kelvin Atsu Djayouri, Learning Philosophy
          </p>
        </div>

        {/* Visual Learning Path: Frontend → APIs → Backend → Databases → Authentication → Deployment */}
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-xs font-mono uppercase text-slate-500 font-semibold tracking-wider">
              The Full-Stack Growth Path
            </p>
          </div>

          <div className="grid gap-3 grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {LEVELING_UP.steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-2 group hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-medium ${
                        step.status === "Strong Core"
                          ? "bg-slate-900 text-white"
                          : step.status === "Production Ready"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>

                {idx < LEVELING_UP.steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-slate-300 pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelingUp;
