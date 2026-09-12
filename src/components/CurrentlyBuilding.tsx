import { Sparkles, Hammer, ExternalLink, ArrowUpRight } from "lucide-react";
import { CURRENTLY_BUILDING } from "@/data/portfolioData";
import { CONFIRMED_TECHNOLOGIES } from "@/data/technologies";

const techNameToKey: Record<string, string> = {
  "React 18": "react",
  "TypeScript": "typescript",
  "Tailwind CSS": "tailwindcss",
  "Vite": "vite",
  "Zod": "typescript",
  "Supabase": "supabase",
};

export const CurrentlyBuilding = () => {
  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden bg-slate-50/70 border-t border-b border-slate-200/80"
      aria-labelledby="currently-building-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
              <Hammer className="w-3.5 h-3.5 text-blue-600" />
              <span>Active Sprints</span>
            </div>
            <h2 id="currently-building-heading" className="section-heading text-3xl sm:text-4xl">
              Currently Building
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-500">
            Transparent sprint tracking on active initiatives.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {CURRENTLY_BUILDING.map((item) => (
            <div
              key={item.name}
              className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-blue-200 hover:shadow-sm transition-all space-y-4 sm:space-y-5"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    {item.tagline}
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-200 shrink-0">
                  {item.status}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>

              {/* Progress Bar with Blue Accent */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-slate-600">
                  <span>Sprint Completion</span>
                  <span className="font-bold text-blue-600">{item.progressPercent}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2563eb] rounded-full transition-all duration-500"
                    style={{ width: `${item.progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Technologies with SVG Logos */}
              <div className="pt-2 border-t border-slate-100 flex flex-col xs:flex-row xs:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((t) => {
                    const techKey = techNameToKey[t];
                    const techObj = techKey ? CONFIRMED_TECHNOLOGIES[techKey] : null;

                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-50 border border-slate-200 text-slate-700"
                      >
                        {techObj && (
                          <span
                            className="w-3 h-3 flex items-center justify-center shrink-0"
                            dangerouslySetInnerHTML={{ __html: techObj.svgIcon }}
                          />
                        )}
                        <span>{t}</span>
                      </span>
                    );
                  })}
                </div>

                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 shrink-0 self-start xs:self-auto min-h-[36px]"
                  >
                    <span>Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
