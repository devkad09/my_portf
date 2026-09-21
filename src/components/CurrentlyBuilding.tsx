import { CURRENTLY_BUILDING_DOMAINS } from "@/data/portfolioData";
import SectionLabel from "./SectionLabel";

export const CurrentlyBuilding = () => {
  return (
    <section
      className="py-24 sm:py-32 bg-slate-50/60 border-b border-slate-100"
      aria-labelledby="currently-building-heading"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <SectionLabel number="02" label="CURRENTLY BUILDING" />
          <h2
            id="currently-building-heading"
            className="section-heading text-3xl sm:text-5xl"
          >
            “I’m not done learning.”
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            I started with frontend development and I'm now going deeper into backend engineering, APIs, databases, authentication, and full-stack application architecture.
          </p>
        </div>

        {/* 6 Domains Grid: JAVASCRIPT, PYTHON, BACKEND, APIs, DATABASES, SAAS */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CURRENTLY_BUILDING_DOMAINS.map((domain) => {
            const getBadgeColor = (status: string) => {
              switch (status) {
                case "BUILDING":
                  return "bg-slate-900 text-white border-slate-900";
                case "LEARNING":
                  return "bg-blue-50 text-blue-700 border-blue-200";
                case "IN PROGRESS":
                  return "bg-amber-50 text-amber-800 border-amber-200";
                case "EXPLORING":
                default:
                  return "bg-emerald-50 text-emerald-700 border-emerald-200";
              }
            };

            return (
              <div
                key={domain.number}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-slate-400">
                      {domain.number}
                    </span>
                    <span
                      className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border ${getBadgeColor(
                        domain.status
                      )}`}
                    >
                      {domain.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-mono font-bold text-base text-slate-900">
                      {domain.name}
                    </h3>
                    <p className="font-mono text-xs text-blue-600 mt-0.5">
                      {domain.focus}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {domain.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span>Domain {domain.number}</span>
                  <span className="text-slate-600 font-medium">In Active Study</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
