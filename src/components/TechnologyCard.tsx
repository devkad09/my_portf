import { FC } from "react";
import { Technology } from "@/data/technologies";

interface TechnologyCardProps {
  technology: Technology;
}

export const TechnologyCard: FC<TechnologyCardProps> = ({ technology }) => {
  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-600 hover:bg-blue-50/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-3 group cursor-default"
      role="article"
      aria-label={`${technology.name} capability card`}
    >
      <div className="flex items-start justify-between gap-2 flex-wrap xxs:flex-nowrap">
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-200 shrink-0">
          <div
            className="w-full h-full flex items-center justify-center [&_svg]:w-full [&_svg]:h-full"
            dangerouslySetInnerHTML={{ __html: technology.svgIcon }}
          />
        </div>

        {technology.badge && (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 group-hover:bg-blue-100/70 group-hover:text-blue-800 text-slate-600 font-medium transition-colors shrink-0">
            {technology.badge}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
          {technology.name}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed font-sans">
          {technology.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default TechnologyCard;
