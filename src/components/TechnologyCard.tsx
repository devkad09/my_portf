import { FC } from "react";
import { Technology } from "@/data/technologies";
import { TechLogo } from "./TechLogo";

interface TechnologyCardProps {
  technology: Technology;
}

export const TechnologyCard: FC<TechnologyCardProps> = ({ technology }) => {
  return (
    <div
      className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between space-y-2.5 group cursor-default"
      role="article"
      aria-label={`${technology.name} capability card`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-2 shrink-0">
          <TechLogo
            name={technology.id}
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:scale-105"
            ariaHidden={true}
          />
        </div>

        {technology.badge && (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100/90 text-slate-600 font-medium shrink-0">
            {technology.badge}
          </span>
        )}
      </div>

      <div className="space-y-0.5">
        <h4 className="font-mono font-bold text-xs sm:text-sm text-slate-900">
          {technology.name}
        </h4>
        <p className="text-xs text-slate-500 leading-relaxed font-sans">
          {technology.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default TechnologyCard;
