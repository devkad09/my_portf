import { FC } from "react";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export const SectionLabel: FC<SectionLabelProps> = ({ number, label, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-slate-500 uppercase select-none ${className}`}
      aria-hidden="true"
    >
      <span className="text-slate-900">{number}</span>
      <span className="text-slate-300">/</span>
      <span>{label}</span>
    </div>
  );
};

export default SectionLabel;
