import { CheckCircle2, CircleDot } from "lucide-react";
import { MY_JOURNEY_STAGES } from "@/data/portfolioData";
import SectionLabel from "./SectionLabel";

export const Journey = () => {
  return (
    <section
      id="journey"
      className="py-24 sm:py-32 bg-slate-50/70 border-b border-slate-100 scroll-mt-16"
      aria-labelledby="journey-heading"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <SectionLabel number="04" label="MY JOURNEY" />
          <h2 id="journey-heading" className="section-heading text-3xl sm:text-5xl">
            MY JOURNEY
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A transparent progression from my IT foundation into frontend development, real-world projects, and my current focus on backend and full-stack engineering.
          </p>
        </div>

        {/* Visual Timeline */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-7.5 top-6 bottom-6 w-[2px] bg-slate-200" />

          <div className="space-y-8 sm:space-y-10">
            {MY_JOURNEY_STAGES.map((stage) => {
              const isCurrent = stage.status === "Current Focus";
              const isTarget = stage.status === "Next Milestone";

              return (
                <div
                  key={stage.step}
                  className="relative grid gap-6 md:grid-cols-[60px_1fr] items-start transition-all"
                >
                  {/* Step Marker */}
                  <div className="hidden md:flex flex-col items-center">
                    <div
                      className={`w-15 h-15 rounded-2xl flex items-center justify-center font-mono text-sm font-bold border transition-colors shadow-2xs z-10 ${
                        isCurrent
                          ? "bg-slate-900 text-white border-slate-900 ring-4 ring-blue-100"
                          : isTarget
                          ? "bg-white text-slate-500 border-dashed border-slate-300"
                          : "bg-white text-slate-900 border-slate-200"
                      }`}
                    >
                      {stage.step}
                    </div>
                  </div>

                  {/* Stage Card */}
                  <div
                    className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                      isCurrent
                        ? "bg-white border-blue-200 shadow-sm ring-1 ring-blue-100"
                        : "bg-white border-slate-200/90 shadow-2xs"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="md:hidden font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                          {stage.step}
                        </span>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                          {stage.title}
                        </h3>
                      </div>

                      <span
                        className={`font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full self-start sm:self-auto border ${
                          isCurrent
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : isTarget
                            ? "bg-amber-50 text-amber-800 border-amber-200"
                            : "bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        {stage.status}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
                      {stage.summary}
                    </p>

                    <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                      {stage.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Honest Grounded Note */}
        <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white font-mono text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CircleDot className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Honest Note: I do not claim senior titles or artificial mastery. I focus on deliberate daily engineering and shipping real code.</span>
          </div>
          <span className="text-slate-400 font-semibold shrink-0">KAD.DEV</span>
        </div>
      </div>
    </section>
  );
};

export default Journey;
