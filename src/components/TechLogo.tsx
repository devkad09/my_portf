import React, { FC } from "react";
import { getTechnology } from "@/data/technologies";
import { Code2 } from "lucide-react";

export interface TechLogoProps extends React.SVGAttributes<SVGElement> {
  name: string;
  size?: number | string;
  colored?: boolean;
  className?: string;
  ariaHidden?: boolean;
  title?: string;
}

export const TechLogo: FC<TechLogoProps> = ({
  name,
  size,
  colored = true,
  className = "w-5 h-5",
  ariaHidden = true,
  title,
  style,
  ...props
}) => {
  const tech = getTechnology(name);

  // Fallback for unknown technologies (Section 9: simple fallback icon, visually consistent)
  if (!tech) {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={size ? { width: size, height: size, ...style } : style}
        aria-hidden={ariaHidden}
        title={title || name}
      >
        <Code2 className="w-full h-full text-slate-400" />
      </span>
    );
  }

  const fillColor = colored ? tech.color : "currentColor";
  const customStyle: React.CSSProperties = {
    ...style,
    ...(size ? { width: size, height: size } : {}),
  };

  return (
    <svg
      role={ariaHidden ? "presentation" : "img"}
      viewBox={tech.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      className={`shrink-0 ${className}`}
      style={customStyle}
      aria-hidden={ariaHidden ? "true" : undefined}
      aria-label={!ariaHidden ? (title || tech.title) : undefined}
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      {...props}
    >
      {title && !ariaHidden && <title>{title}</title>}
      <path
        d={tech.path}
        fillRule={tech.fillRule || "nonzero"}
        clipRule={tech.clipRule || "nonzero"}
      />
    </svg>
  );
};

export const TechnologyIcon = TechLogo;
export default TechLogo;
